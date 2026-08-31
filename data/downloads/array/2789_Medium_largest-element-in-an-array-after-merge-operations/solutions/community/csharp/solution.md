# 🔥 [VIDEO] Beats 92% - Easy - Largest Element in an Array after Merge Operations

**Author:** vanAmsen
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3811739/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3811739/)

---

# Intuition
Initially, we might think to go from the beginning of the array and start merging, but the problem has a unique twist where we need to choose the optimal merging operation. That brings us to the realization that we need to think about this problem in reverse, i.e., from the end of the array to the beginning.

https://youtu.be/k1xuMdN5i2c

# Approach
We start from the end of the array, treating each element as a potential sum. For each element, if it's larger than the current sum, it becomes the new sum. If it's smaller or equal, it's added to the sum. This way, we ensure that we always merge the largest possible numbers. We also keep track of the maximum sum we've encountered so far, which is the largest element we can obtain in the array.

# Complexity
- Time complexity: \\(O(N)\\)
The time complexity is \\(O(N)\\) because we're iterating over the array exactly once, where \\(N\\) is the length of the array.

- Space complexity: \\(O(1)\\)
The space complexity is \\(O(1)\\) because we're using a constant amount of space to store the current sum and the maximum sum.

# Code
``` Python []
class Solution:
    def maxArrayValue(self, nums: List[int]) -> int:
        ans = sum_ = nums[-1]
        for num in reversed(nums[:-1]):
            sum_ = num if num > sum_ else sum_ + num
            if sum_ > ans:
                ans = sum_
        return ans
```
``` C# []
public class Solution {
    public long MaxArrayValue(int[] nums) {
        long ans = nums[nums.Length - 1];
        long sum_ = ans;
        for(int i = nums.Length - 2; i >= 0; --i) {
            sum_ = nums[i] > sum_ ? nums[i] : sum_ + nums[i];
            ans = Math.Max(ans, sum_);
        }
        return ans;        
    }
}
```
``` Java []
class Solution {
    public long maxArrayValue(int[] nums) {
        long ans = nums[nums.length - 1];
        long sum_ = ans;
        for(int i = nums.length - 2; i >= 0; --i) {
            sum_ = nums[i] > sum_ ? nums[i] : sum_ + nums[i];
            ans = Math.max(ans, sum_);
        }
        return ans;
    }
}
```
``` JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(nums) {
    let ans = nums[nums.length - 1];
        let sum_ = ans;
        for(let i = nums.length - 2; i >= 0; --i) {
            sum_ = nums[i] > sum_ ? nums[i] : sum_ + nums[i];
            ans = Math.max(ans, sum_);
        }
        return ans;
};
```
``` C++ []
class Solution {
public:
    long long maxArrayValue(vector<int>& nums) {
        long long ans = nums.back();
        long long sum_ = ans;
        for(int i = nums.size() - 2; i >= 0; --i) {
            sum_ = nums[i] > sum_ ? nums[i] : sum_ + nums[i];
            ans = max(ans, sum_);
        }
        return ans;
    }
};
```
This Python code is both efficient and elegant, demonstrating the power of thinking in reverse when solving certain types of problems.