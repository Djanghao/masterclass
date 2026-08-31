# [Java] Sort + PriorityQueue Solution

**Author:** MadDetective
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1419827/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1419827/)

---

```
// Sort + PriorityQueue Solution
// 1. Sort events by start day
// 2. Store end days of in progress events in min heap
// 3. Join the earliest ending in progress evetns from the earliest start event to the latest start evetn.
//    1) Get current date
//    2) Add just started events at current day in the min heap
//    3) Join the earliest ending event
//    4) Remove already ended events
// 4. Do the loop until we explore all the events and the min heap is empty.
// Time complexity: O(NlogN)
// Space complexity: O(N)
class Solution {
    public int maxEvents(int[][] events) {
        if (events == null || events.length == 0) return 0;
        final int N = events.length;
        // Sort events by start day.
        Arrays.sort(events, (e1, e2) -> Integer.compare(e1[0], e2[0]));
        // Store end days of in progress events in min heap.
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        // Join the earliest ending in progress evetns from the earliest start event to the latest start event.
        int i = 0, day = 0, res = 0;
        while (i < N || !pq.isEmpty()) {
            // Get current date.
            if (pq.isEmpty()) {
                day = events[i][0];
            }
            // Add just started events at current day in the min heap.
            while (i < N && day == events[i][0]) {
                pq.add(events[i][1]);
                i++;
            }
            // Join the earliest ending event.
            pq.poll();
            res++;
            day++;
            // Remove already ended events.
            while (!pq.isEmpty() && day > pq.peek()) {
                pq.poll();
            }
        }
        return res;
    }
}
```