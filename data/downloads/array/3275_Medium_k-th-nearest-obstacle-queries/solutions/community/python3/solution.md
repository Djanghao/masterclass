# Heap

**Author:** fahad_Mubeen
**Votes:** 7
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5718090/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5718090/)

---

Try [Leetcode 215](https://leetcode.com/problems/kth-largest-element-in-an-array/description/) before solving this.
# Intutuion
- The idea here is to use a max-heap of size $$k$$.
- Now a max-heap of size $$k$$ will store $$k$$ elements in such a way that greatest of those k elements will be at top.
- In this way we keep track of `kth-largest element` in the max-heap and kth largest element is at top of the max-heap.
- Add `-1` until size of heap isn't equal to $$k$$ otherwise top element of max-heap.

# Complexity
- Time complexity: $$O(n * logk)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> resultsArray(vector<vector<int>>& q, int k) {
        int n = q.size();
        priority_queue<int> pq;
        vector<int> res(n);
        for(int i = 0; i < n; i++){
            pq.push(abs(q[i][0]) + abs(q[i][1]));
            if(pq.size() > k) pq.pop();
            res[i] = (pq.size() == k) ? pq.top() : -1;
        }
        return res;
    }
};
```
```Java []
class Solution {
    public int[] resultsArray(int[][] queries, int k) {
        int n = queries.length;
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        int[] res = new int[n];
        
        for (int i = 0; i < n; i++) {
            int sum = Math.abs(queries[i][0]) + Math.abs(queries[i][1]);
            pq.add(sum);
            if (pq.size() > k) {
                pq.poll();
            }
            res[i] = (pq.size() == k) ? pq.peek() : -1;
        }
        
        return res;
    }
}

```
```Python3 []
class Solution:
    def resultsArray(self, queries: List[List[int]], k: int) -> List[int]:
        n = len(queries)
        pq = []
        res = []
        for i in range(n):
            sum_val = abs(queries[i][0]) + abs(queries[i][1])
            heapq.heappush(pq, -sum_val)
            if len(pq) > k:
                heapq.heappop(pq)
            res.append(-pq[0] if len(pq) == k else -1)
        return res
        
```
