# Rust 100% - math explanation

**Author:** thibault-cne
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4326537/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4326537/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
I'll use the notation `ans` for the array returned by the function of len `n = nums.len()`.

We notice that the absolute difference of two numbers `a` and `b` is equal to `max(a, b) - min(a, b)`. By notifing that and the fact that the `nums` array is sorted we can come up with an expression to calculate `ans[i]` :
$$ans[i] = (\\sum_{0}^{i-1} nums\\left [ i \\right ] - nums\\left [ j \\right ]) + (\\sum_{i+1}^{n-1} nums\\left [ j \\right ] - nums\\left [ i \\right ])$$

By rearanging terms we can get to the following equality :
$$ans\\left [ i \\right ] = nums\\left [ i \\right ] \	imes  - (\\sum_{0}^{i-1}nums\\left [ j \\right ]) + (\\sum_{i+1}^{n-1} nums\\left [ j \\right ]) - nums\\left [ i \\right ] \	imes (n - i - 1)$$

Now the next step is to try to find a recursion between $$ans[i]$$ and $$ans[i-1]$$. To do so we can simply calculate $$ans[i] - ans[i-1]$$. Using the previous expression we found we can obtain the following result :
$$ans\\left [ i \\right ] = ans\\left [ i - 1 \\right ] + (nums\\left [ i \\right ] - nums\\left [ i - 1 \\right ]) \	imes (2\	imes i - n)$$

This is exactly what we were looking for. Now we can simply initialize an array with the first value and iterate throught `nums` and calculate each `ans[i]` with the recursive relation.

# Algorithm
1. Create an array `ans` of size `n = nums.len()`
2. Initialize `ans[0] = nums.iter().sum() - nums[0] * nums.len() as i32`
3. Iterate from `1..nums.len()`
    - Update `ans[i]` to `ans[i - 1] + (nums[i] - nums[i - 1]) * (2*i - n)`
4. Return `ans` 

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn get_sum_absolute_differences(nums: Vec<i32>) -> Vec<i32> {
        let mut ans = vec![0; nums.len()];
        ans[0] = nums.iter().sum::<i32>() - nums[0] * nums.len() as i32;

        for i in 1..nums.len() {
            ans[i] = ans[i - 1] + (nums[i] - nums[i - 1]) * (2 * i as i32 - nums.len() as i32);
        }

        ans
    }
}
```