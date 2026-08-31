# 🌟 Master the Chair Problem with Easy Steps and Code 💯🔥

**Author:** withaarzoo
**Votes:** 36
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897506/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897506/)

---

![github_promotion_dark.png](./images/0.png)


## **\uD83C\uDF1F Access daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
When thinking about the problem, the key is that every friend arriving at the party will sit on the smallest unoccupied chair, and whenever a friend leaves, their chair becomes available again. The challenge is to simulate this process efficiently, keeping track of which chairs are occupied and which are free, especially when multiple friends arrive or leave at the same time. By sorting the events (arrivals and departures) and managing the availability of chairs using a data structure like a min-heap, we can ensure that we always find the smallest available chair.

---

# Approach
1. **Sorting Events**: We need to process friends based on their arrival times, so we sort the `times` array. We also want to efficiently track when friends leave and free their chairs.
2. **Min-Heap for Chairs**: The smallest available chair can be easily found using a min-heap. Whenever a friend arrives, we assign them the smallest available chair.
3. **Handling Departures**: When a friend leaves, we mark their chair as available again by pushing it back into the min-heap.
4. **Tracking the Target Friend**: Once the target friend sits on a chair, we immediately return that chair number.

---

# Complexity
- **Time Complexity**:  
  Sorting the `times` array takes \\(O(n \\log n)\\), where \\(n\\) is the number of friends. Each event (either arrival or departure) involves an operation on the min-heap, which takes \\(O(\\log n)\\). Thus, the overall time complexity is \\(O(n \\log n)\\).
  
- **Space Complexity**:  
  We use a min-heap to store available chairs, and a priority queue to track when friends leave, resulting in a space complexity of \\(O(n)\\).

---

# Code
```C++ []
#include <vector>
#include <queue>
#include <algorithm>

class Solution {
public:
    int smallestChair(std::vector<std::vector<int>>& times, int targetFriend) {
        int n = times.size();
        
        // Create a list of arrivals with friend index for tracking
        std::vector<std::pair<int, int>> arrivals;
        for (int i = 0; i < n; ++i) {
            arrivals.push_back({times[i][0], i});
        }
        
        // Sort friends based on their arrival time
        std::sort(arrivals.begin(), arrivals.end());
        
        // Min-Heap to track available chairs
        std::priority_queue<int, std::vector<int>, std::greater<int>> availableChairs;
        for (int i = 0; i < n; ++i) {
            availableChairs.push(i); // All chairs start as available
        }

        // Priority queue to track when chairs are freed
        std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> leavingQueue;
        
        // Iterate through each friend based on arrival
        for (auto& arrival : arrivals) {
            int arrivalTime = arrival.first;
            int friendIndex = arrival.second;
            
            // Free chairs that are vacated before the current arrival time
            while (!leavingQueue.empty() && leavingQueue.top().first <= arrivalTime) {
                availableChairs.push(leavingQueue.top().second);
                leavingQueue.pop();
            }
            
            // Assign the smallest available chair
            int chair = availableChairs.top();
            availableChairs.pop();
            
            // If this is the target friend, return their chair number
            if (friendIndex == targetFriend) {
                return chair;
            }
            
            // Mark the chair as being used until the friend's leave time
            leavingQueue.push({times[friendIndex][1], chair});
        }
        
        return -1; // Should never reach here
    }
};

```
```Java []
import java.util.*;

class Solution {
    public int smallestChair(int[][] times, int targetFriend) {
        int n = times.length;
        
        // List of arrivals with friend index
        List<int[]> arrivals = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            arrivals.add(new int[]{times[i][0], i});
        }
        
        // Sort friends by arrival time
        arrivals.sort((a, b) -> Integer.compare(a[0], b[0]));
        
        // Min-Heap to track available chairs
        PriorityQueue<Integer> availableChairs = new PriorityQueue<>();
        for (int i = 0; i < n; i++) {
            availableChairs.add(i);
        }

        // Priority queue to track when chairs are freed
        PriorityQueue<int[]> leavingQueue = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
        
        // Iterate through each friend based on arrival
        for (int[] arrival : arrivals) {
            int arrivalTime = arrival[0];
            int friendIndex = arrival[1];
            
            // Free chairs that are vacated before the current arrival time
            while (!leavingQueue.isEmpty() && leavingQueue.peek()[0] <= arrivalTime) {
                availableChairs.add(leavingQueue.poll()[1]);
            }
            
            // Assign the smallest available chair
            int chair = availableChairs.poll();
            
            // If this is the target friend, return their chair number
            if (friendIndex == targetFriend) {
                return chair;
            }
            
            // Mark the chair as being used until the friend's leave time
            leavingQueue.add(new int[]{times[friendIndex][1], chair});
        }
        
        return -1; // Should never reach here
    }
}

```
```JavaScript []
var smallestChair = function(times, targetFriend) {
    let n = times.length;
    
    // Create a list of arrivals with friend index
    let arrivals = [];
    for (let i = 0; i < n; i++) {
        arrivals.push([times[i][0], i]);
    }
    
    // Sort friends by arrival time
    arrivals.sort((a, b) => a[0] - b[0]);
    
    // Min-Heap to track available chairs
    let availableChairs = new MinPriorityQueue({priority: x => x});
    for (let i = 0; i < n; i++) {
        availableChairs.enqueue(i);
    }

    // Priority queue to track when chairs are freed
    let leavingQueue = new MinPriorityQueue({priority: x => x[0]});
    
    // Iterate through each friend based on arrival
    for (let [arrivalTime, friendIndex] of arrivals) {
        // Free chairs that are vacated before the current arrival time
        while (!leavingQueue.isEmpty() && leavingQueue.front().element[0] <= arrivalTime) {
            availableChairs.enqueue(leavingQueue.dequeue().element[1]);
        }
        
        // Assign the smallest available chair
        let chair = availableChairs.dequeue().element;
        
        // If this is the target friend, return their chair number
        if (friendIndex === targetFriend) {
            return chair;
        }
        
        // Mark the chair as being used until the friend's leave time
        leavingQueue.enqueue([times[friendIndex][1], chair]);
    }
    
    return -1;
};

```
```Python []
import heapq

class Solution:
    def smallestChair(self, times: List[List[int]], targetFriend: int) -> int:
        n = len(times)
        
        # Create a list of arrivals with friend index
        arrivals = [(times[i][0], i) for i in range(n)]
        
        # Sort friends by arrival time
        arrivals.sort()
        
        # Min-Heap to track available chairs
        availableChairs = list(range(n))
        heapq.heapify(availableChairs)

        # Priority queue to track when chairs are freed
        leavingQueue = []
        
        # Iterate through each friend based on arrival
        for arrivalTime, friendIndex in arrivals:
            # Free chairs that are vacated before the current arrival time
            while leavingQueue and leavingQueue[0][0] <= arrivalTime:
                heapq.heappush(availableChairs, heapq.heappop(leavingQueue)[1])
            
            # Assign the smallest available chair
            chair = heapq.heappop(availableChairs)
            
            # If this is the target friend, return their chair number
            if friendIndex == targetFriend:
                return chair
            
            # Mark the chair as being used until the friend's leave time
            heapq.heappush(leavingQueue, (times[friendIndex][1], chair))
        
        return -1  # Should never reach here

```
```Go []
package main

import (
    "container/heap"
    "sort"
)

// IntHeap for storing available chairs as a min-heap
type IntHeap []int

func (h IntHeap) Len() int            { return len(h) }
func (h IntHeap) Less(i, j int) bool  { return h[i] < h[j] } // Min-heap based on chair numbers
func (h IntHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}

// EventHeap for storing leaving events based on time
type EventHeap [][2]int

func (h EventHeap) Len() int           { return len(h) }
func (h EventHeap) Less(i, j int) bool { return h[i][0] < h[j][0] } // Min-heap based on leaving times
func (h EventHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *EventHeap) Push(x interface{}) {
    *h = append(*h, x.([2]int))
}

func (h *EventHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}

func smallestChair(times [][]int, targetFriend int) int {
    n := len(times)

    // Create a list of arrivals with friend index
    arrivals := make([][2]int, n)
    for i := 0; i < n; i++ {
        arrivals[i] = [2]int{times[i][0], i}
    }

    // Sort friends by arrival time
    sort.Slice(arrivals, func(i, j int) bool {
        return arrivals[i][0] < arrivals[j][0]
    })

    // Min-Heap to track available chairs
    availableChairs := &IntHeap{}
    heap.Init(availableChairs)
    for i := 0; i < n; i++ {
        heap.Push(availableChairs, i)
    }

    // Priority queue to track when chairs are freed (leavingQueue)
    leavingQueue := &EventHeap{}
    heap.Init(leavingQueue)

    // Iterate through each friend based on arrival
    for _, arrival := range arrivals {
        arrivalTime, friendIndex := arrival[0], arrival[1]

        // Free chairs that are vacated before the current arrival time
        for leavingQueue.Len() > 0 && (*leavingQueue)[0][0] <= arrivalTime {
            heap.Push(availableChairs, heap.Pop(leavingQueue).([2]int)[1])
        }

        // Assign the smallest available chair
        chair := heap.Pop(availableChairs).(int)

        // If this is the target friend, return their chair number
        if friendIndex == targetFriend {
            return chair
        }

        // Mark the chair as being used until the friend's leave time
        heap.Push(leavingQueue, [2]int{times[friendIndex][1], chair})
    }

    return -1 // Should never reach here
}

```

---

# Step-by-Step Detailed Explanation
1. **Sorting Arrivals**: First, we sort the friends by their arrival time. This ensures that we process each arrival event in the correct order.
2. **Using Min-Heap for Chairs**: We maintain a min-heap of available chairs, where we always pick the smallest chair for the next friend to arrive.
3. **Tracking Departures**: We also use a priority queue to track when friends leave, and once they do, their chair becomes available again and is added back to the min-heap.
4. **Finding the Target Friend's Chair**: As we process each arrival, if the arriving friend is the target friend, we return the chair assigned to them.

---

![upvote_cat.png](./images/2.png)

