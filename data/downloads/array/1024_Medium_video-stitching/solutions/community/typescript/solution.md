# Always visualize timeline for interval problems

**Author:** myxious
**Votes:** 0
**Link:** [https://leetcode.com/problems/video-stitching/solutions/5964463/](https://leetcode.com/problems/video-stitching/solutions/5964463/)

---

# Intuition
The best way to start solving a time interval problem is to visualize the timeline.
Example:
```
clips = [[0,5], [0,3], [4,10], [4,15], [12,15], [14,18], [15,25], [25,27]]
time = 20

0 _______ 5
0 ___ 3
        4 __________10
        4 ____________________15
                        12____15
                            14______18
                              15__________________25
                                                  25__27
________________________________________________________

Answer:

0 _______ 5
        4 ____________________15
                              15__________________25
```

# Approach
1. Sort ascending by clip start time.
2. The initial start time from which we are going to search is 0 (`searchFrom`).
3. Run a loop.
4. Current clip starts later that our `searchFrom` time? Bye-bye, there is no solution.
5. Use the second loop to find the latest end time (`bestEnd`) among clips which starts earlier or exactly from `searchFrom`. <sub>(Wait! How clip can start earlier than "searchFrom"? In the next step we will replace "searchFrom" so it may overlap the clips start time)</sub>
6. When the second loop is complete, replace the `searchFrom` with the `bestEnd` we have found.
7. Good! We have found the best clip among possibles (its end time is equal `bestEnd`). Increase the `answer`.
8. We are going to search the next `bestEnd`. Repeat from step `4`.

# Complexity
- Time complexity: $$O(n*log(n))$$

- Space complexity: $$O(1)$$

# Code
```typescript
/**
 * clips = [[0,5], [0,3], [4,10], [4,15], [12,15], [14,18], [15,25], [25,27]], time = 20
 * 
 * 0 _______ 5                                                   index = 0, searchFrom = 0,  bestEnd = 5
 * 0 ___ 3                                                       index = 1, searchFrom = 0,  bestEnd = 5
 *         4 __________10                                        index = 2, searchFrom = 5,  bestEnd = 10
 *         4 ____________________15                              index = 3, searchFrom = 5,  bestEnd = 15
 *                         12____15                              index = 4, searchFrom = 15, bestEnd = 15
 *                             14______18                        index = 5, searchFrom = 15, bestEnd = 18
 *                               15__________________25          index = 6, searchFrom = 15, bestEnd = 25
 *                                                   25__27                 searchFrom = 25
 *
 * ________________________________________________________
 * 
 * Answer:
 * 
 * 0 _______ 5
 *         4 ____________________15
 *                               15__________________25
 *
 * SF        BE                                                  SF = startFrom, BE = bestEnd
 *           SF                  BE
 *                               SF                  BE
 *                                                   SF
 */
function videoStitching(clips: [start: number, end: number][], time: number): number {
  clips.sort((a, b) => a[0] - b[0]);

  let answer = 0;
  let searchFrom = 0;
  let index = 0;

  while (index < clips.length) {
    if (searchFrom >= time) return answer; // we have found our goal, no need to go further
    if (searchFrom < clips[index][0]) return -1; // there is a gap

    let bestEnd = clips[index][1];

    while (index < clips.length && searchFrom >= clips[index][0]) {
      bestEnd = Math.max(bestEnd, clips[index++][1]);
    }

    searchFrom = bestEnd;
    answer++;
  }

  if (searchFrom < time) return -1; // no last part

  return answer;
};
```