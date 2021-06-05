# Backend Programming Challenge Solution

This is my solution to produce the optimal schedule for Sally to attend the overlapped performances.

## Setup and Run

- The progamme was built on NodeJS, please make sure you have NodeJS installed on your machine or download it [here](https://nodejs.org/en/download/).
- Execute `build.sh` file to install dependencies and run unit test.
- Execute `run.sh` file, providing path the an input JSON file as parameter to produce the optimized schedule JSON file in the same folder.

## Solution steps

- Put all the times (both start and fininsh) appeared in the input into a list and sort it ascending.
- Use a running show list to keep track of the show is running at current time and it's priority
- Loop for each time in the list, if it's a start time for a performance, push the priority value to the running show list, if it's finish time then push (-priority) value.
- For each time in the list, pick the highest priority performance in the running show list and put into result

![diagram](https://github.com/thaisonnguyenbt/tech-test/blob/master/backend/Skedulo-BE.png?raw=true)
