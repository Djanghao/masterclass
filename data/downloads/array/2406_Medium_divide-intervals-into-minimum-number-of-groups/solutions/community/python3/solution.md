# Min Heap

**Author:** votrubac
**Votes:** 323
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/2560020/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/2560020/)

---

We use a min heap to track the rightmost number of each group.

First, we sort the intervals. Then, for each interval, we check if the top of the heap is less than **left**.

If it is, we can add that interval to an existing group: pop from the heap, and push **right**, updating the rightmost number of that group.

If not, we need a new group: push **right** into the heap.

In the end, the size of the heap is the number of groups we need.

**Python 3**
```python
class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        pq = []
        for left, right in sorted(intervals):
            if pq and pq[0] < left:
                heappop(pq)
            heappush(pq, right)
        return len(pq)
```

**C++**
```cpp
int minGroups(vector<vector<int>>& ints) {
    sort(begin(ints), end(ints));
    priority_queue<int, vector<int>, greater<int>> pq;
    for (const auto &i : ints) {
        if (!pq.empty() && pq.top() < i[0])
            pq.pop();
        pq.push(i[1]);
    }
    return pq.size();
}
```