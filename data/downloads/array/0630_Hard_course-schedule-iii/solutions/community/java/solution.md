# JS, Python, Java, C++ | Simple Priority Queue / Heap Solution w/ Explanation

**Author:** sgallivan
**Votes:** 109
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/1187504/](https://leetcode.com/problems/course-schedule-iii/solutions/1187504/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

If we think of this problem in a larger sense, we can envision a slightly more simplistic situation without the issues of the last day cutoff for each course. In that scenario, we could quite easily add up all the course durations, then selectively remove the courses with the longest remaining duration until we've found the ideal number of courses that will fit into our desired timeframe.

The trouble here, of course, is that we _do_ have cutoffs for each course, which means we can no longer fill the entire time before removing courses. Instead, we'll have to selectively backtrack and remove courses as we iterate through the input array (**C**).

As is often the case in a scheduling-type problem, this leads to a particular issue: we'll want to sort the data in two distinctly different ways. Since we'll be progressing through **C** as if we're progressing through time, we'll want to sort **C** based on the courses' cutoffs (**end**), but when we backtrack to potentially remove a course, we'll want to sort the courses we've accepted by their duration (**dur**).

The need for a data structure that will maintain its sort through insertions and max value removals means that we're looking for a **max priority queue** or **max-heap**.

Once we've sorted **C** and set up our max priority queue or heap (**pq**/**heap**), it's simply a matter of iterating through **C**, adding the courses to **pq**/**heap**, and then removing the max duration course as necessary to stay underneath the current **end** value with our accumulated duration (**total**).

In order to minimize unnecessary insertions/removals, we can perform a few basic conditional checks to tell if they're necessary. If the current course will already fit, we can just add it, or if the current course is a better fit than our longest course, then we can swap them.

Then, once we reach the end of **C**, **pq**/**heap** should contain all the non-discarded courses, so we can **return** its size as our answer.

  - _**Time Complexity: O(N * log N)** where **N** is the length of **C**, due to both the sort and the priority queue / heap implementation_
  - _**Space Complexity: O(N)** due to the priority queue / heap data_

---

#### ***Implementation:***

In this instance, the **MaxPriorityQueue()** npm for Javascript was actually competitively performant compared to a **custom max-heap** structure.

To avoid having to use a **custom comparator** for Python, which defaults to a **min heap**, we can just switch the sign before insertion and after extraction to mimic a **max heap**.

---

#### ***Javascript Code:***

The best result for the code below is **156ms / 47.9MB** (beats 96% / 19%).
```javascript
var scheduleCourse = function(C) {
    C.sort((a,b) => a[1] - b[1])
    let total = 0, pq = new MaxPriorityQueue({priority: x => x})
    for (let [dur, end] of C)
        if (dur + total <= end)
            total += dur, pq.enqueue(dur)
        else if (pq.front() && pq.front().element > dur)
            total += dur - pq.dequeue().element, pq.enqueue(dur)
    return pq.size()
};
```

---

#### ***Python Code:***

The best result for the code below is **640ms / 19.1MB** (beats 100% / 100%).
```python
class Solution:
    def scheduleCourse(self, C: List[List[int]]) -> int:
        heap, total = [], 0
        for dur, end in sorted(C, key=lambda el: el[1]):
            if dur + total <= end:
                total += dur
                heappush(heap, -dur)
            elif heap and -heap[0] > dur:
                total += dur + heappop(heap)
                heappush(heap, -dur)
        return len(heap)
```

---

#### ***Java Code:***

The best result for the code below is **27ms / 47.4MB** (beats 100% / 55%).
```java
class Solution {
    public int scheduleCourse(int[][] C) {
        Arrays.sort(C, (a,b) -> a[1] - b[1]);
        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b - a);
        int total = 0;
        for (int[] course : C) {
            int dur = course[0], end = course[1];
            if (dur + total <= end) {
                total += dur;
                pq.add(dur);
            } else if (pq.size() > 0 && pq.peek() > dur) {
                total += dur - pq.poll();
                pq.add(dur);
            }
        }
        return pq.size();
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **176ms / 56.2MB** (beats 97% / 85%).
```c++
class Solution {
public:
    int scheduleCourse(vector<vector<int>>& C) {
        sort(C.begin(), C.end(), [](auto &a, auto &b) {return a[1] < b[1];});
        priority_queue<int> pq;
        int total = 0;
        for (auto &course : C) {
            int dur = course[0], end = course[1];
            if (dur + total <= end) 
                total += dur, pq.push(dur);
            else if (pq.size() && pq.top() > dur)
                total += dur - pq.top(), pq.pop(), pq.push(dur);
        }
        return pq.size();
    }
};
```