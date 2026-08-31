# Easy & Clear Solution (Java, c++, Python3)

**Author:** moazmar
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6000225/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6000225/)

---

## Problem Explanation

In this problem, we have a dungeon structured as an `n x m` grid, where each room is represented by its coordinates. We are given a `moveTime` 2D array that indicates the minimum time required before we can enter each room. Starting from the room at coordinates `(0, 0)` at time `t = 0`, we can move to adjacent rooms (up, down, left, or right) in one second. The goal is to find the minimum time required to reach the bottom-right room `(n - 1, m - 1)`.

To solve this problem, we can utilize a priority queue (min-heap) to explore rooms in order of the earliest time we can reach them. We will keep track of the minimum time needed to reach each room using a `time` matrix initialized to infinity, except for the starting room which is set to zero. The algorithm works as follows:

1. Initialize a priority queue and insert the starting room with time `0`.
2. While there are rooms in the queue, pop the room with the smallest time.
3. If this room is the target room `(n - 1, m - 1)`, return the time.
4. For each adjacent room, calculate the time needed to enter it and update the priority queue if we find a faster route.

Here\u2019s the implementation of the solution in both C++ and Java.

## C++ Implementation

```cpp

class Solution {
public:
    int minTimeToReach(std::vector<std::vector<int>>& moveTime) {
        int rows = moveTime.size();
        int cols = moveTime[0].size();
        std::priority_queue<std::tuple<int, int, int>, std::vector<std::tuple<int, int, int>>, std::greater<std::tuple<int, int, int>>> minHeap;
        std::vector<std::vector<int>> time(rows, std::vector<int>(cols, INT_MAX));
        
        minHeap.emplace(0, 0, 0); // time, x, y
        time[0][0] = 0;

        std::vector<std::pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        while (!minHeap.empty()) {
            auto [currentTime, x, y] = minHeap.top();
            minHeap.pop();

            if (x == rows - 1 && y == cols - 1) {
                return currentTime;
            }

            for (const auto& [dx, dy] : directions) {
                int newX = x + dx, newY = y + dy;

                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                    int waitTime = std::max(moveTime[newX][newY] - currentTime, 0);
                    int newTime = currentTime + 1 + waitTime;

                    if (newTime < time[newX][newY]) {
                        time[newX][newY] = newTime;
                        minHeap.emplace(newTime, newX, newY);
                    }
                }
            }
        }

        return -1; // unreachable
    }
};
```

## Java 

```java

class Solution {
    public int minTimeToReach(int[][] moveTime) {
        int rows = moveTime.length;
        int cols = moveTime[0].length;
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        int[][] time = new int[rows][cols];
        
        for (int[] row : time) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }

        minHeap.offer(new int[]{0, 0, 0}); // time, x, y
        time[0][0] = 0;

        int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        while (!minHeap.isEmpty()) {
            int[] current = minHeap.poll();
            int currentTime = current[0], x = current[1], y = current[2];

            if (x == rows - 1 && y == cols - 1) {
                return currentTime;
            }

            for (int[] dir : directions) {
                int newX = x + dir[0], newY = y + dir[1];

                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                    int waitTime = Math.max(moveTime[newX][newY] - currentTime, 0);
                    int newTime = currentTime + 1 + waitTime;

                    if (newTime < time[newX][newY]) {
                        time[newX][newY] = newTime;
                        minHeap.offer(new int[]{newTime, newX, newY});
                    }
                }
            }
        }

        return -1; // unreachable
    }
}
```

# Python 3

```python
import heapq
from typing import List

class Solution:
    def minTimeToReach(self, moveTime: List[List[int]]) -> int:
        numRows = len(moveTime)
        numCols = len(moveTime[0])
        
        # Priority queue to store (current_time, x, y)
        minHeap = [(0, 0, 0)]  # Start at (0, 0) with time 0
        arrivalTime = [[float('inf')] * numCols for _ in range(numRows)]
        arrivalTime[0][0] = 0
        
        # Directions for adjacent rooms (down, up, right, left)
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        while minHeap:
            currentTime, x, y = heapq.heappop(minHeap)

            # If we reached the target room (numRows - 1, numCols - 1)
            if (x, y) == (numRows - 1, numCols - 1):
                return currentTime

            # Explore adjacent rooms
            for dx, dy in directions:
                newX, newY = x + dx, y + dy

                if 0 <= newX < numRows and 0 <= newY < numCols:
                    waitTime = max(moveTime[newX][newY] - currentTime, 0)
                    newArrivalTime = currentTime + 1 + waitTime

                    # Only push to the queue if we found a better arrival time
                    if newArrivalTime < arrivalTime[newX][newY]:
                        arrivalTime[newX][newY] = newArrivalTime
                        heapq.heappush(minHeap, (newArrivalTime, newX, newY))

        return -1  # Return -1 if the target room is unreachable
```
