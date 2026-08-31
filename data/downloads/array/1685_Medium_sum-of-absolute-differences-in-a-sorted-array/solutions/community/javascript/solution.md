# ✅ Beats 100% - Explained with [ Video ] - Two Pointers - Visualized Too

**Author:** lancertech6
**Votes:** 81
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4326597/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4326597/)

---

![Screenshot 2023-11-25 073517.png](./images/0.png)


<!-- # YouTube Video Explanation:

[https://youtu.be/QncjaI-st-w](https://youtu.be/QncjaI-st-w)

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 500 Subscribers*
*Current Subscribers: 405*

--- -->
# Example Explanation
Step-by-Step Explanation:

 1. **Calculate Total Sum:**
    - Calculate the total sum of the array.

 2. **Initialize Pointers:**
    - Initialize two pointers, `left` and `right`, at the start and end of the array.

 3. **Iterate Through the Array:**
    - For each element `nums[i]`:
       a. Calculate the absolute difference sum using `left` and `right`.
       b. Update `left` by adding the current element.
       c. Update `right` by subtracting the current element.
       d. Store the result in the output array `r[i]`.

Illustration:

| Iteration | Element (nums[i]) | Absolute Difference Sum Formula         | Result (r[i]) |
|-----------|---------------------|------------------------------------------|---------------|
| 1         | nums[0] = 2         | 2 * 0 - 0 + (sum - 2) - 2 * (5 - 1)      | Result[0]     |
| 2         | nums[1] = 3         | 3 * 1 - 2 + (sum - 3) - 3 * (5 - 2)      | Result[1]     |
| 3         | nums[2] = 5         | 5 * 2 - (2 + 3) + sum - 5 - 5 * (5 - 3) | Result[2]     |

... and so on.

Final Output: The array `r` containing the result for each element.

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The objective is to calculate the sum of absolute differences between each element and all other elements in the array. The key observation here is that we can efficiently compute the result for each element by considering the differences between consecutive elements.

# Approach
<!-- Describe your approach to solving the problem. -->
1. First, calculate the total sum of the array. This sum will be used to compute the right part of the absolute differences.
2. Initialize two pointers, `left` and `right`, pointing to the start and end of the array.
3. Iterate through the array, and for each element `nums[i]`, calculate the absolute difference sum by considering the left and right parts.
   - `left` represents the sum of elements to the left of `nums[i]`.
   - `right` represents the sum of elements to the right of `nums[i]`.
   - The absolute difference sum for `nums[i]` is calculated as `n * i - left + right - n * (nums.length - i - 1)`.
4. Update the `left` pointer by adding the current element to it.
5. Update the `right` pointer by subtracting the current element from it.
6. Store the result in the output array `r`.

# Complexity
- Time Complexity: O(N) - We iterate through the array once.
- Space Complexity: O(N) - The output array `r` is used to store the results.

# Code
## Java
```
class Solution {
    public int[] getSumAbsoluteDifferences(int[] nums) {
        int sum = 0;
        for (int n : nums) {
            sum += n;
        }
        int left = 0;
        int right = sum;

        int[] r = new int[nums.length];

        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            right -= n;

            r[i] = n * i - left + right - n * (nums.length - i - 1);

            left += n;
        }

        return r;
    }
}
```
## C++
```
class Solution {
public:
    vector<int> getSumAbsoluteDifferences(vector<int>& nums) {
        int sum = 0;
        for (int n : nums) {
            sum += n;
        }
        int left = 0;
        int right = sum;

        std::vector<int> result(nums.size(), 0);

        for (int i = 0; i < nums.size(); i++) {
            int n = nums[i];
            right -= n;

            result[i] = n * i - left + right - n * (nums.size() - i - 1);

            left += n;
        }

        return result;
    }
};
```
## Python
```
class Solution(object):
    def getSumAbsoluteDifferences(self, nums):
        total_sum = sum(nums)
        left, right = 0, total_sum
        result = []

        for i, n in enumerate(nums):
            right -= n
            result.append(n * i - left + right - n * (len(nums) - i - 1))
            left += n

        return result
               
```
## JavaScript
```
var getSumAbsoluteDifferences = function(nums) {
    let totalSum = nums.reduce((sum, n) => sum + n, 0);
    let left = 0, right = totalSum;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        result.push(nums[i] * i - left + right - nums[i] * (nums.length - i - 1));
        left += nums[i];
    }

    return result;
};
```
![upvote1.jpeg](./images/1.jpeg)
