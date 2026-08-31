# Python3 || 7 lines, prefix sum  || T/S: 53% / 84%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6079809/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6079809/)

---


```python3 []
class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:

        n, mn = len(nums), inf
        acc = list(accumulate(nums, initial = 0))
        
        for left in range(n):
            for rght in range(left+1, n+1):
                
                sm, length = acc[rght] - acc[left], rght - left
                if l <= length <= r and 0 < sm < mn: mn = sm 
        
        return -1 if mn == inf else mn
```
```cpp []
class Solution {
public:
    int minimumSumSubarray(vector<int>& nums, int l, int r) {
        int n = nums.size();
        int mn = numeric_limits<int>::max();

        vector<int> acc(n + 1, 0);
        partial_sum(nums.begin(), nums.end(), acc.begin() + 1);

        for (int left = 0; left < n; ++left) {
            for (int right = left + 1; right <= n; ++right) {
                int sum = acc[right] - acc[left];
                int length = right - left;
                if (l <= length && length <= r && sum > 0 && sum < mn) {
                    mn = sum;}
            }
        }
        return (mn == numeric_limits<int>::max()) ? -1 : mn;}
};
```
```java []
class Solution {
    public int minimumSumSubarray(List<Integer> nums, int l, int r) {
        int n = nums.size();
        int mn = Integer.MAX_VALUE;

        int[] acc = new int[n + 1];
        for (int i = 0; i < n; ++i) {
            acc[i + 1] = acc[i] + nums.get(i);}

        for (int left = 0; left < n; ++left) {
            for (int right = left + 1; right <= n; ++right) {
                int sum = acc[right] - acc[left];
                int length = right - left;
                if (l <= length && length <= r && sum > 0 && sum < mn) {
                    mn = sum;}
            }
        }
        return (mn == Integer.MAX_VALUE) ? -1 : mn;}
}
```
[https://leetcode.com/problems/minimum-positive-sum-subarray/submissions/1462778470/](https://leetcode.com/problems/minimum-positive-sum-subarray/submissions/1462778470/)

I could be wrong, but I think that time complexity is *O*(*N* ^2) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.