const { expect, it } = require('@jest/globals');
const { getOptimalSchedule } = require('../Schedule');

describe('Optimal Scheduler', () => {
  /**
   * Test input validation
   */
  it('Should thow TypeError for invalid input', function () {
    expect(() => getOptimalSchedule()).toThrow(TypeError);
    expect(() => getOptimalSchedule()).toThrow('Invalid Input!');

    expect(() => getOptimalSchedule(null)).toThrow(TypeError);
    expect(() => getOptimalSchedule(null)).toThrow('Invalid Input!');

    expect(() => getOptimalSchedule(undefined)).toThrow(TypeError);
    expect(() => getOptimalSchedule(undefined)).toThrow('Invalid Input!');

    expect(() => getOptimalSchedule({})).toThrow(TypeError);
    expect(() => getOptimalSchedule({})).toThrow('Input is not an Array!');

    expect(() => getOptimalSchedule('xxx')).toThrow(TypeError);
    expect(() => getOptimalSchedule('xxx')).toThrow('Input is not an Array!');
  });

  /**
   * Minimal case 1
   */
  it('Should return empty array if the input is empty', () => {
    expect(getOptimalSchedule([])).toEqual([]);
  });

  /**
   * Minimal case 2
   */
  it('Should return 1 show if the input only has 1', () => {
    const result = getOptimalSchedule([
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T02:50:00Z',
        priority: 5,
      },
    ]);
    expect(result).toEqual([
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T02:50:00Z',
      },
    ]);
  });

  /**
   * 2 shows case 1
   */
  it('Should handle 2 non-overlapsed shows', () => {
    const result = getOptimalSchedule([
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T02:50:00Z',
        priority: 5,
      },
      {
        band: 'Pearl Jam',
        start: '1993-05-25T03:15:00Z',
        finish: '1993-05-25T03:35:00Z',
        priority: 9,
      },
    ]);
    expect(result).toEqual([
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T02:50:00Z',
      },
      {
        band: 'Pearl Jam',
        start: '1993-05-25T03:15:00Z',
        finish: '1993-05-25T03:35:00Z',
      },
    ]);
  });

  /**
   * 2 shows case 2
   */
  it('Should handle 2 overlapsed shows', () => {
    const result = getOptimalSchedule([
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T02:50:00Z',
        priority: 5,
      },
      {
        band: 'Pearl Jam',
        start: '1993-05-25T02:15:00Z',
        finish: '1993-05-25T02:35:00Z',
        priority: 9,
      },
    ]);
    expect(result).toEqual([
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T02:15:00Z',
      },
      {
        band: 'Pearl Jam',
        start: '1993-05-25T02:15:00Z',
        finish: '1993-05-25T02:35:00Z',
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:35:00Z',
        finish: '1993-05-25T02:50:00Z',
      },
    ]);
  });

  // 1 2 3 4 5 6
  // 5        -5
  //     9  -9
  //   2  -2

  // [5]     1-2    5
  // [2,5]   2-3    5
  // [2,5,9] 3-4    9
  // [5,9]   4-5    9
  // [5]     5-6    5
  it('Should handle 3 overlapsed shows case 1', () => {
    const result = getOptimalSchedule([
      {
        band: 'Pearl Jam',
        start: '1993-05-25T01:00:00Z',
        finish: '1993-05-25T06:00:00Z',
        priority: 5,
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T03:00:00Z',
        finish: '1993-05-25T05:00:00Z',
        priority: 9,
      },
      {
        band: 'Elastic',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T04:00:00Z',
        priority: 2,
      },
    ]);
    expect(result).toEqual([
      {
        band: 'Pearl Jam',
        start: '1993-05-25T01:00:00Z',
        finish: '1993-05-25T03:00:00Z',
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T03:00:00Z',
        finish: '1993-05-25T05:00:00Z',
      },
      {
        band: 'Pearl Jam',
        start: '1993-05-25T05:00:00Z',
        finish: '1993-05-25T06:00:00Z',
      },
    ]);
  });

  // 1 2 3 4 5 6
  // 5        -5
  //     9-9
  //   8    -8

  // [5]     1-2    5
  // [5,8]   2-3    8
  // [5,8,9] 3-4    9
  // [5,8]   4-5    8
  // [5]     5-6    5
  it('Should handle 3 overlapsed shows case 2', () => {
    const result = getOptimalSchedule([
      {
        band: 'Pearl Jam',
        start: '1993-05-25T00:00:01Z',
        finish: '1993-05-25T00:00:06Z',
        priority: 5,
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T00:00:03Z',
        finish: '1993-05-25T00:00:04Z',
        priority: 9,
      },
      {
        band: 'Elastic',
        start: '1993-05-25T00:00:02Z',
        finish: '1993-05-25T00:00:05Z',
        priority: 8,
      },
    ]);
    expect(result).toEqual([
      {
        band: 'Pearl Jam',
        start: '1993-05-25T00:00:01Z',
        finish: '1993-05-25T00:00:02Z',
      },
      {
        band: 'Elastic',
        start: '1993-05-25T00:00:02Z',
        finish: '1993-05-25T00:00:03Z',
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T00:00:03Z',
        finish: '1993-05-25T00:00:04Z',
      },
      {
        band: 'Elastic',
        start: '1993-05-25T00:00:04Z',
        finish: '1993-05-25T00:00:05Z',
      },
      {
        band: 'Pearl Jam',
        start: '1993-05-25T00:00:05Z',
        finish: '1993-05-25T00:00:06Z',
      },
    ]);
  });

  // 1 2 3 4 5 6
  // 5    -5
  //   9-9
  //         8-8

  // [5]     1-2    5
  // [5,9]   2-3    9
  // [5]     3-4    5
  // []      4-5    0
  // [8]     5-6    8
  it('Should handle 3 overlapsed and non-overlapsed shows', () => {
    const result = getOptimalSchedule([
      {
        band: 'Pearl Jam',
        start: '1993-05-25T01:00:00Z',
        finish: '1993-05-25T04:00:00Z',
        priority: 5,
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T03:00:00Z',
        priority: 9,
      },
      {
        band: 'Elastic',
        start: '1993-05-25T05:00:00Z',
        finish: '1993-05-25T06:00:00Z',
        priority: 8,
      },
    ]);
    expect(result).toEqual([
      {
        band: 'Pearl Jam',
        start: '1993-05-25T01:00:00Z',
        finish: '1993-05-25T02:00:00Z',
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T03:00:00Z',
      },
      {
        band: 'Pearl Jam',
        start: '1993-05-25T03:00:00Z',
        finish: '1993-05-25T04:00:00Z',
      },
      {
        band: 'Elastic',
        start: '1993-05-25T05:00:00Z',
        finish: '1993-05-25T06:00:00Z',
      },
    ]);
  });

  // 1 2 3 4 5 6
  // 5      -5
  //   9  -9
  //   5    -5
  //     8    -8

  // [5]       1-2    5
  // [5,9,5]   2-3    9
  // [5,9,5,8] 3-4    9
  // [5,5,8]   4-5    8
  // [8]       5-6    8
  it('Should handle 4 overlapsed shows', () => {
    const result = getOptimalSchedule([
      {
        band: 'Pearl Jam',
        start: '1993-05-25T01:00:00Z',
        finish: '1993-05-25T05:00:00Z',
        priority: 5,
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T04:00:00Z',
        priority: 9,
      },
      {
        band: 'Elastic',
        start: '1993-05-25T03:00:00Z',
        finish: '1993-05-25T06:00:00Z',
        priority: 8,
      },
      {
        band: 'sdfsdf',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T05:00:00Z',
        priority: 5,
      },
    ]);
    expect(result).toEqual([
      {
        band: 'Pearl Jam',
        start: '1993-05-25T01:00:00Z',
        finish: '1993-05-25T02:00:00Z',
      },
      {
        band: 'Soundgarden',
        start: '1993-05-25T02:00:00Z',
        finish: '1993-05-25T04:00:00Z',
      },
      {
        band: 'Elastic',
        start: '1993-05-25T04:00:00Z',
        finish: '1993-05-25T06:00:00Z',
      },
    ]);
  });
});
