module.exports = {
  getOptimalSchedule: (shows) => {
    // Validation start
    if (!shows) {
      throw new TypeError('Invalid Input!');
    }
    if (!(shows instanceof Array)) {
      throw new TypeError('Input is not an Array!');
    }
    if (!shows.length) {
      return [];
    }
    // Assuming structure of the input Performance object isvalid.
    // validation end

    // Get list of all Start and Finish times sorted ascending
    const allTimes = shows.reduce((arr, show) => [...arr, show.start, show.finish], []).sort();

    // Store list of shows at a specific time
    // - if show start: priority
    // - if show end: -priority
    const map = {};
    allTimes.forEach((item) => {
      map[item] = [];
    });
    shows.forEach((show) => {
      map[show.start].push({ ...show });
      map[show.finish].push({ ...show, priority: 0 - show.priority });
    });

    const allShowsByTime = [];
    const timeKeys = Object.keys(map);

    let currentShows = [...map[timeKeys[0]]];
    let runningShow, runningShowStartTime;

    timeKeys.forEach((timeKey) => {
      const showsAtCurrentTime = map[timeKey].sort((a, b) => a.priority - b.priority);

      if (!runningShow) {
        // there's no show currently
        runningShow = showsAtCurrentTime[showsAtCurrentTime.length - 1];
        runningShowStartTime = timeKey;
      } else {
        // there's a show going on
        allShowsByTime.push({ ...runningShow, start: runningShowStartTime, finish: timeKey });

        showsAtCurrentTime.forEach((show) => {
          if (show.priority > 0) {
            // show is starting at current time
            currentShows.push(show);
            if (show.priority > runningShow.priority) {
              // to be pushed into result in next time
              runningShow = { ...show };
            }
            runningShowStartTime = timeKey;
          } else {
            // show is finished at current time, to be removed of out currentShows list
            currentShows = currentShows.filter((s) => s.priority != -show.priority || s.band != show.band);

            if (currentShows.length === 0) {
              // all shows are finished
              runningShow = null;
              runningShowStartTime = null;
            } else {
              // the running show is the highest priority one in the remaining list
              runningShow = currentShows[0];
              for (let i = 1; i < currentShows.length; i++) {
                if (currentShows[i].priority > runningShow.priority) {
                  runningShow = currentShows[i];
                }
              }
              runningShowStartTime = timeKey;
            }
          }
        });
      }
    });

    // to metge continuous time gaps for the same show into 1 object.
    const result = allShowsByTime.reduce((arr, show) => {
      if (arr.length > 0) {
        const top = arr.pop();
        if (top.band === show.band && top.finish === show.start) {
          return [...arr, { band: top.band, start: top.start, finish: show.finish }];
        } else {
          delete show.priority;
          return [...arr, top, show];
        }
      } else {
        delete show.priority;
        return [show];
      }
    }, []);

    return result;
  },
};
