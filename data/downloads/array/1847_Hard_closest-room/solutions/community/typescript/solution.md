# Typescript with Clean Code! using Sort and Binary Search

**Author:** matheus-foscarinid
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-room/solutions/4554870/](https://leetcode.com/problems/closest-room/solutions/4554870/)

---

# Approach
 - Sort the rooms to be able to binary seach
 - Binary search to get the first room with size equals or greated then the min size
 - Then search for the one with the min abs, if none answer is -1
 - Repeat for every query

# Complexity
- Time complexity:  $$O(m * (log n + n))$$, where m is the number of queries, and n is the number of rooms.

- Space complexity: $$O(1)$$ ignoring the space required to answer

# Code
```
function closestRoom(rooms: number[][], queries: number[][]): number[] {
  const results: number[] = [];

  rooms.sort((r1, r2) => r1[1] - r2[1]);

  for (let i = 0; i < queries.length; i++) {
    const [preferred, minSize] = queries[i];
    let response = -1;

    // Find the first room with size >= minSize
    let start = binarySearch(rooms, minSize);

    if (start !== -1) {
      // If there is a room with size >= minSize find the closest room to preferred
      let index = findClosestRoom(rooms, start, preferred);
      response = rooms[index][0];
    }

    results.push(response)
  }

  return results;
};

function binarySearch(rooms: number[][], size: number): number {
  let low = 0;
  let high = rooms.length - 1;
  let answer = -1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (rooms[mid][1] < size) {
      low = mid + 1;
    } else {
      answer = mid;
      high = mid - 1;
    }
  }

  return answer;
}

function findClosestRoom(rooms: number[][], start: number, preferred: number): number {
  let answer = start;
  let minAbs = Math.abs(rooms[start][0] - preferred);

  for (let i = start; i < rooms.length; i++) {
    const abs = Math.abs(rooms[i][0] - preferred);

    if (abs < minAbs || (abs === minAbs && rooms[i][0] < rooms[answer][0])) {
      minAbs = abs;
      answer = i;
    }
  }

  return answer;
}
```