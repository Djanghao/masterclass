# Priority Queue

**Author:** votrubac
**Votes:** 26
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/3017118/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/3017118/)

---

We pull from the priority queue `k` times, so the time complexity is O(n + k log n).

Note that the population of a prioirty queue takes linear time O(n) if we do it at initialization. 

**C++**
```cpp
long long maxKelements(vector<int>& nums, int k) {
    long long res = 0;
    priority_queue<int> pq(begin(nums), end(nums));
    while (k-- && !pq.empty()) {
        int n = pq.top(); pq.pop();
        res += n;
        if ((n + 2) / 3)
            pq.push((n + 2) / 3);
    }
    return res;
}
```