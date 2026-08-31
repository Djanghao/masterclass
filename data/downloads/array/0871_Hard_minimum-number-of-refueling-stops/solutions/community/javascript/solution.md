# JS, Python, Java, C++ | Easy Max PQ / Heap Solution w/ Explanation

**Author:** sgallivan
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/1268139/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/1268139/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Since this problem is asking for the least amount of refuelings, we should attempt a **greedy** approach to the solution. To accomplish that, we should start with **0** refuelings and keep attempting one additional refueling until we find a working solution.

In a naive approach, we would attempt every single combination of **1** refueling station, then every single combination of **2** refueling stations, etc., but that would take way too long.

Instead, let's consider the natural progression of iterating through the list of stations (**S**). At each station (**S[i]**) we should first check to see if we have enough fuel to get there.

_(**Note**: Since the station distances are measured in distance from the start, not distance from the last station, it's easier to keep track of the total fuel obtained (**F**), rather than the unspent fuel, because we can directly compare that to the distance traveled (**dist**).)_

If we didn't have enough fuel to get to the current station, then we should have refueled somewhere. Only a station seen before **S[i]** is available for this retroactive refueling, however, so we need to choose a prior station at which to have refueled. Given our choice, we should naturally pick the station with the largest reserve of fuel.

Rather than attempting to sort a portion of **S** each time, we should instead use a **max priority queue** (or **max heap**) (**pq**/**heap**) to store the previously visited stations' fuel reserves so that we can always choose the ideal station at any point along our iteration.

When we find ourselves unable to reach the next station, we should continue to pull fuel reserves from **pq** until we have enough. If we run out of reserves while **F < dist**, then we can never reach the target (**T**), and should **return -1**.

We should also keep track of the total number of times (**ans**) we've removed fuel from the reserves in **pq**, and iterate one extra time to reach **T** from the last station. Upon successfully reaching **T**, we can **return ans**.

 - _**Time Complexity: O(N log N)** where **N** is the length of **S**, for up to **N** insertions and **N** removals from **pq**/**heap**_
 - _**Space Complexity: O(N)** for **pq**/**heap**_

---

#### ***Implementation:***

Javascript's **MaxPriorityQueue()** npm is easier to use than, but not as efficient as, a custom **max heap** implementation. Both are included below for comparison.

Python defaults to a **min heap**, so we can reverse the signs upon insertion and extraction to achieve an effective **max heap** implementation. 

---

#### ***Javascript Code:***

***w/ MaxPriorityQueue():***
The best result for the code below is **104ms / 43.9MB** (beats 68% / 27%).
```javascript
var minRefuelStops = function(T, F, S) {
    let n = S.length, pq = new MaxPriorityQueue(), ans = 0
    for (let i = 0; i <= n; i++) {
        let dist = i === n ? T : S[i][0]
        while (F < dist) {
            if (!pq.size()) return -1
            F += pq.dequeue().element, ans++
        }
        if (i < n) pq.enqueue(S[i][1])
    }
    return ans
};
```

***w/ custom Max Heap:***
The best result for the code below is **80ms / 41.0MB** (beats 100% / 82%).
```javascript
var minRefuelStops = function(T, F, S) {
    let n = S.length, ans = 0
    
    // custom Max Heap implementation
    let heap = [,]
    const hpush = val => {
        let i = heap.length, par = i >> 1, temp
        heap.push(val)
        while (heap[par] < heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const hpop = () => {
        if (heap.length === 1) return null
        let top = heap[1], left, right, temp,
            i = 1, child = heap[3] > heap[2] ? 3 : 2
        if (heap.length > 2) heap[1] = heap.pop()
        else heap.pop()
        while (heap[i] < heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] > heap[left] ? right : left
        }
        return top
    }
    
    for (let i = 0; i <= n; i++) {
        let dist = i === n ? T : S[i][0]
        while (F < dist) {
            if (heap.length === 1) return -1
            F += hpop(), ans++
        }
        if (i < n) hpush(S[i][1])
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **104ms / 14.4MB** (beats 100% / 96%).
```python
class Solution:
    def minRefuelStops(self, T: int, F: int, S: List[List[int]]) -> int:
        n, heap, ans = len(S), [], 0
        for i in range(n+1):
            dist = T if i == n else S[i][0]
            while F < dist:
                if len(heap) == 0: return -1
                F -= heappop(heap)
                ans += 1
            if i < n: heappush(heap, -S[i][1])
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **2ms / 38.8MB** (beats 100% / 89%).
```java
class Solution {
    public int minRefuelStops(int T, int F, int[][] S) {
        int n = S.length, ans = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b - a);
        for (int i = 0; i <= n; i++) {
            int dist = i == n ? T : S[i][0];
            while (F < dist) {
                if (pq.size() == 0) return -1;
                F += pq.poll();
                ans++;
            }
            if (i < n) pq.add(S[i][1]);
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **20ms / 16.1MB** (beats 96% / 91%).
```c++
class Solution {
public:
    int minRefuelStops(int T, int F, vector<vector<int>>& S) {
        int n = S.size(), ans = 0;
        priority_queue<int> pq;
        for (int i = 0; i <= n; i++) {
            int dist = i == n ? T : S[i][0];
            while (F < dist) {
                if (!pq.size()) return -1;
                F += pq.top(), ans++;
                pq.pop();
            }
            if (i < n) pq.push(S[i][1]);
        }
        return ans;
    }
};
```