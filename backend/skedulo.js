// GIVEN
// const shows = [
//   {
//     band: 'Pearl Jam',
//     start: '1993-05-25T02:15:00Z',
//     finish: '1993-05-25T02:35:00Z',
//     priority: 9,
//   },
//   {
//     band: 'Soundgarden',
//     start: '1993-05-25T02:00:00Z',
//     finish: '1993-05-25T02:50:00Z',
//     priority: 5,
//   },
// ];

// 1 2 3 4 5 6
// 5        -5
//     9  -9
//   2  -2

// [5]     1-2 5
// [2,5]   2-3 5
// [2,5,9] 3-4 9
// [5,9]   4-5 9
// [5]     5-6 5

// const shows = [
//   {
//     band: 'Pearl Jam',
//     start: '1993-05-25T01:00:00Z',
//     finish: '1993-05-25T06:00:00Z',
//     priority: 5,
//   },
//   {
//     band: 'Soundgarden',
//     start: '1993-05-25T03:00:00Z',
//     finish: '1993-05-25T05:00:00Z',
//     priority: 9,
//   },
//   {
//     band: 'Elastic',
//     start: '1993-05-25T02:00:00Z',
//     finish: '1993-05-25T04:00:00Z',
//     priority: 2,
//   },
// ];

// 1 2 3 4 5 6
// 5        -5
//     9-9
//   8    -8

// [5]     1-2 5
// [5,8]   2-3 8
// [5,8,9] 3-4 9
// [5,8]   4-5 8
// [5]     5-6 5
// const shows = [
//   {
//     band: 'Pearl Jam',
//     start: '1993-05-25T01:00:00Z',
//     finish: '1993-05-25T06:00:00Z',
//     priority: 5,
//   },
//   {
//     band: 'Soundgarden',
//     start: '1993-05-25T03:00:00Z',
//     finish: '1993-05-25T04:00:00Z',
//     priority: 9,
//   },
//   {
//     band: 'Elastic',
//     start: '1993-05-25T02:00:00Z',
//     finish: '1993-05-25T05:00:00Z',
//     priority: 8,
//   },
// ];

// 1 2 3 4 5 6
// 5        -5
//     9  -9
//   8  -8

// [5]     1-2 5
// [5,8]   2-3 8
// [5,8,9] 3-4 9
// [5,9]   4-5 9
// [5]     5-6 5
// const shows = [
//   {
//     band: 'Pearl Jam',
//     start: '1993-05-25T01:00:00Z',
//     finish: '1993-05-25T06:00:00Z',
//     priority: 5,
//   },
//   {
//     band: 'Pearl Jam 2',
//     start: '1993-05-25T01:00:00Z',
//     finish: '1993-05-25T04:00:00Z',
//     priority: 2,
//   },
//   {
//     band: 'Soundgarden',
//     start: '1993-05-25T03:00:00Z',
//     finish: '1993-05-25T05:00:00Z',
//     priority: 9,
//   },
//   {
//     band: 'Elastic',
//     start: '1993-05-25T02:00:00Z',
//     finish: '1993-05-25T04:00:00Z',
//     priority: 8,
//   },
// ];

// 1 2 3 4 5 6
// 5    -5
//   9-9
//         8-8

// [5]     1-2 5
// [5,9]   2-3 9
// [5]     3-4 5
// []      4-5 0
// [8]     5-6 8
// const shows = [
//   {
//     band: 'Pearl Jam',
//     start: '1993-05-25T01:00:00Z',
//     finish: '1993-05-25T04:00:00Z',
//     priority: 5,
//   },
//   {
//     band: 'Soundgarden',
//     start: '1993-05-25T02:00:00Z',
//     finish: '1993-05-25T03:00:00Z',
//     priority: 9,
//   },
//   {
//     band: 'Elastic',
//     start: '1993-05-25T05:00:00Z',
//     finish: '1993-05-25T06:00:00Z',
//     priority: 8,
//   },
// ];

// 1 2 3 4 5 6
// 5      -5
//   9  -9
//   5    -5
//     8    -8

// [5]       1-2 5
// [5,9,5]   2-3 9
// [5,9,5,8] 3-4 9
// [5,5,8]   4-5 8
// [8]       5-6 8

// const shows = [
//   {
//     band: 'Pearl Jam',
//     start: '1993-05-25T01:00:00Z',
//     finish: '1993-05-25T05:00:00Z',
//     priority: 5,
//   },
//   {
//     band: 'Soundgarden',
//     start: '1993-05-25T02:00:00Z',
//     finish: '1993-05-25T04:00:00Z',
//     priority: 9,
//   },
//   {
//     band: 'Elastic',
//     start: '1993-05-25T03:00:00Z',
//     finish: '1993-05-25T06:00:00Z',
//     priority: 8,
//   },
//   {
//     band: 'sdfsdf',
//     start: '1993-05-25T02:00:00Z',
//     finish: '1993-05-25T05:00:00Z',
//     priority: 5,
//   },
// ];

const shows = [
  {
    band: '2. Pearl Jam',
    start: '2018-05-25T00:05:00Z',
    finish: '2018-05-25T00:25:00Z',
    priority: 10,
  },
  {
    band: '5. Nirvana finishes one minute after Soundgarden',
    start: '2018-05-25T00:10:00Z',
    finish: '2018-05-25T00:46:00Z',
    priority: 1,
  },
  {
    band: '1. 3. Red Hot Chili Peppers',
    start: '2018-05-25T00:00:00Z',
    finish: '2018-05-25T00:35:00Z',
    priority: 9,
  },
  {
    band: '6. Rage Against The Machine',
    start: '2018-05-25T01:10:00Z',
    finish: '2018-05-25T01:30:00Z',
    priority: 4,
  },
  {
    band: '4. Soundgarden',
    start: '2018-05-25T00:00:00Z',
    finish: '2018-05-25T00:45:00Z',
    priority: 5,
  },
];

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

console.log(result);
