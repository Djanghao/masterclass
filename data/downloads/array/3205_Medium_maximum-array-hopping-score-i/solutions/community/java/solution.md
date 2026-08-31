# O(n) / O(1), Find the max on its right

**Author:** zsq007
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5410486/](https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5410486/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The best next hop is the max number in the remaining suffix.

Proof sketch: Given three indices `0 <= i < j < k < n`, we have two options:
1. Hop from `i` to `k`, get `(k-i)*nums[k] == (j-i)*nums[k] + (k-j)*nums[k]` points.
2. Hop from `i` to `j` then from `j` to `k`, get `(j-i)*nums[j] + (k-j)*nums[k]` points.

`nums[k] > nums[j]` <=> `score1 > score2`. By induction, we always choose the maximum element on the right to hop from the current `i`.

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate through the array in reverse and take the max number found so far into the score.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        res, mx = 0, 0
        for i in range(len(nums)-1, 0, -1):
            mx = max(mx, nums[i])
            res += mx
        return res
```
```C++ []
class Solution {
public:
    int maxScore(vector<int>& nums) {
        int res = 0, mx = 0;
        for (int i = nums.size()-1; i > 0; i--) {
            mx = max(mx, nums[i]);
            res += mx;
        }
        return res;
    }
};
```
```Java []
class Solution {
    public int maxScore(int[] nums) {
        int res = 0, mx = 0;
        for (int i = nums.length-1; i > 0; i--) {
            mx = Math.max(mx, nums[i]);
            res += mx;
        }
        return res;
    }
}
```
Python One-liner
```python
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        return sum(accumulate(nums[:0:-1], max))
```