# Backend Programming Challenge Solution

This is my solution to produce the optimal schedule for Sally to attend the overlapped performances.

## Setup and Run

- The progamme was built on NodeJS, please make sure you have NodeJS installed on your machine or download it [here](https://nodejs.org/en/download/).
- Execute `build.sh` file to install dependencies and run unit test.
- Execute `run.sh` file, providing path the an input JSON file as parameter to produce the optimized schedule JSON file in the same folder.

### Multiple Verify

- In root folder, run `cd backend`.
- run `bash <path to verify-music.sh> run.sh`
  Eg:
  ![diagram](https://github.com/thaisonnguyenbt/tech-test/blob/master/backend/Verify.png?raw=true)

## Solution steps

- Put all the times (both start and fininsh) appeared in the input into a list and sort it ascending.
- Use a running show list to keep track of the show is running at current time and it's priority
- Loop for each time in the list, if it's a start time for a performance, push the priority value to the running show list, if it's finish time then push (-priority) value.
- For each time in the list, pick the highest priority performance in the running show list and put into result

### Example

Given the input:

```json
[
  {
    "band": "Soundgarden",
    "start": "1993-05-25T02:00:00Z",
    "finish": "1993-05-25T02:50:00Z",
    "priority": 5
  },
  {
    "band": "Pearl Jam",
    "start": "1993-05-25T02:15:00Z",
    "finish": "1993-05-25T02:35:00Z",
    "priority": 9
  }
]
```

The flow will be:

![diagram](https://github.com/thaisonnguyenbt/tech-test/blob/master/backend/Skedulo-BE.png?raw=true)

## End note

1. I didn't handle the different timezones case. Eg: `1993-05-25T02:00:00+10:00` and `1993-05-25T01:00:00+11:00` represent the same time but it will be sorted differently as a String. The times in the input must be consistent in the timezone.
2. I chose NodeJS because it's lightweight and easy to setup and run. I'm more familiar with it too.
3. The problem is quite hard, but to create the README file took me more time.
