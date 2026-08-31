# Greedy Sacrifice

**Author:** votrubac
**Votes:** 175
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/4811460/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/4811460/)

---


In a tree, we can freely change any even number of nodes.

> I got this intuitioin by drawing a few trees and trying to change some nodes without changing the others.
    
So, we count nodes that we want to change (where n ^ k > n).
    
If the count is even, we just return the best `sum`.
    
If the count is odd, we need to `sacrifice` one node:
- Do not change a node we want to change, or
- Change a node that we do not want to change.
    
We track the smallest sacrifice `min(abs(n - (n ^ k))`, and subtract it from the best `sum`.

**Python 3**
```python
class Solution:
    def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:
        best_sum = sum(max(n, k ^ n) for n in nums)
        cnt = sum((n ^ k) > n for n in nums)  
        return best_sum - (min(abs(n - (n ^ k)) for n in nums) if cnt % 2 else 0)
```
**C++** 
```cpp
long long maximumValueSum(vector<int>& nums, int k, vector<vector<int>>& edges) {
    long long sum = 0, cnt = 0, sacrifice = INT_MAX;
    for (long long n : nums) {
        sum += max(n ^ k, n);
        cnt += (n ^ k) > n;
        sacrifice = min(sacrifice, abs(n - (n ^ k)));
    }
    return sum - (cnt % 2 ? sacrifice : 0);
}
```


