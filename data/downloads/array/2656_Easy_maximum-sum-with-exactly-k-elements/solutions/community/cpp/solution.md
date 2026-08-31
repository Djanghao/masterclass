# [c++ & Python] easy solution

**Author:** Augus7
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3467153/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3467153/)

---


<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n + k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++
```
class Solution {
public:
    int maximizeSum(vector<int>& nums, int k) {
        int m = nums[0];
        for(auto i : nums) {
            if(i > m) m = i;
        }
        int ans = 0;
        for(int i = 0; i < k; i++) {
            ans += m;
            m++;
        }
        return ans;
    }
};
```

# Python / Python3
```
class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        m = nums[0]
        for i in nums:
            if i > m:
                m = i
        ans = 0
        for i in range(0, k):
            ans += m
            m += 1
        return ans
```