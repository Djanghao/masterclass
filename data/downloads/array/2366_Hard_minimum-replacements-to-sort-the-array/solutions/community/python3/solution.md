# ✅Easy to understand🔥||✅Full Explanation🔥Done in few steps🔥||O(n) Solution

**Author:** singhhh_sidhantttt
**Votes:** 365
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3978548/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3978548/)

---

# Problem Understanding:
The problem requires us to determine the **minimum number of operations** needed to make an array **sorted** in non-decreasing order. Each operation involves **replacing** an element with **two elements** that sum to it.

# Logic Used in the problem
The logic revolves around the idea of iteratively choosing the **optimal replacement strategy** for each element to ensure non-decreasing order while **minimizing the number of operations**. The division operation is used to determine how many times an element needs to be divided to fit within the constraints of non-decreasing order. This approach **cleverly balances the need for replacement operations** with the goal of keeping the array sorted with minimal changes.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Traverse** the array in reverse order.
2. For each element, check if it is **greater** than the **previously** encountered element (last).
3. If the current element is greater, **calculate the number of times** it needs to be divided to become less than or equal to the last element.
4. **Update** the last element to the value that the **current element** needs to be divided by.
5.**Add** the calculated number of operations (divisions - 1) to the **total count** of operations.
6. **Repeat** these steps for all elements in the array.
<!-- Describe your approach to solving the problem. -->

# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    long long minimumReplacement(vector<int>& nums) {
        int n = nums.size();
        int last = nums[n-1];  // Initialize 'last' with the last element
        long long ans = 0;     // Initialize the total operations count

        // Traverse the array in reverse order
        for (int i = n - 2; i >= 0; --i) {
            if (nums[i] > last) {  // If the current element needs replacement
                int t = nums[i] / last;  // Calculate how many times the element needs to be divided
                if (nums[i] % last) t++; // If there's a remainder, increment 't'
                last = nums[i] / t;  // Update 'last' for the next comparison
                ans += t - 1; // Add (t - 1) to 'ans' for the number of operations
            } else {
                last = nums[i]; // Update 'last' without replacement
            }
        }
        return ans; // Return the total number of operations
    }

};
```
```python3 []
class Solution:
    def minimumReplacement(self, nums: List[int]) -> int:
        n = len(nums)
        last = nums[n - 1]  # Initialize 'last' with the last element
        ans = 0  # Initialize the total operations count

        # Traverse the array in reverse order
        for i in range(n - 2, -1, -1):
            if nums[i] > last:  # If the current element needs replacement
                t = nums[i] // last  # Calculate how many times the element needs to be divided
                if nums[i] % last:
                    t += 1  # If there's a remainder, increment 't'
                last = nums[i] // t  # Update 'last' for the next comparison
                ans += t - 1  # Add (t - 1) to 'ans' for the number of operations
            else:
                last = nums[i]  # Update 'last' without replacement
        return ans  # Return the total number of operations

```
```Java []
class Solution {
    public long minimumReplacement(int[] nums) {
        int n = nums.length;
        int last = nums[n - 1];  // Initialize 'last' with the last element
        long ans = 0;  // Initialize the total operations count

        // Traverse the array in reverse order
        for (int i = n - 2; i >= 0; --i) {
            if (nums[i] > last) {  // If the current element needs replacement
                int t = nums[i] / last;  // Calculate how many times the element needs to be divided
                if (nums[i] % last != 0) {
                    t++;  // If there's a remainder, increment 't'
                }
                last = nums[i] / t;  // Update 'last' for the next comparison
                ans += t - 1;  // Add (t - 1) to 'ans' for the number of operations
            } else {
                last = nums[i];  // Update 'last' without replacement
            }
        }
        return ans;  // Return the total number of operations
    }
}

```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    const n = nums.length;
    let last = nums[n - 1];  // Initialize 'last' with the last element
    let ans = 0;  // Initialize the total operations count

    // Traverse the array in reverse order
    for (let i = n - 2; i >= 0; --i) {
        if (nums[i] > last) {  // If the current element needs replacement
            let t = Math.floor(nums[i] / last);  // Calculate how many times the element needs to be divided
            if (nums[i] % last !== 0) {
                t++;  // If there's a remainder, increment 't'
            }
            last = Math.floor(nums[i] / t);  // Update 'last' for the next comparison
            ans += t - 1;  // Add (t - 1) to 'ans' for the number of operations
        } else {
            last = nums[i];  // Update 'last' without replacement
        }
    }
    return ans;  // Return the total number of operations
};


```
# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A
![UPVOTE.png](./images/0.png)
