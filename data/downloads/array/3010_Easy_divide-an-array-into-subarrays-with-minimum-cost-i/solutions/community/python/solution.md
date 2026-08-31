# ✅THE BEST EXPLANATION||Beats 100% Users

**Author:** harshal2024
**Votes:** 6
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4598544/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4598544/)

---

---
# PLEASE UPVOTE IF YOU LIKE IT \u2705
---
![Screenshot (3221).png](./images/0.png)


---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to divide the given array into three disjoint contiguous subarrays in such a way that the sum of the costs of these subarrays is minimized. The cost of an array is defined as the value of its first element.

---
# Approach
<!-- Describe your approach to solving the problem. -->
Initialize the variable ans to 0 to keep track of the minimum sum of costs.

Set ans to the value of the first element of the array, as the cost of the first subarray is the value of its first element.

Find the minimum value (mini1) in the array and its corresponding index (j). This will be the minimum value of the second subarray.

Iterate through the array again and find the minimum value (mini2) excluding the element at index j. This will be the minimum value of the third subarray.

Add mini1 and mini2 to the ans to get the minimum possible sum of costs for the three subarrays.

Return the final value of ans as the result.

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---


![download.jpeg](./images/1.jpeg)

---

# Code
C++
```
class Solution {
public:
    // The function returns an integer, representing the minimum possible sum of costs.
    int minimumCost(vector<int>& nums) {
        // Initialize variables to keep track of the answer, the size of the array, and set the initial answer to the first element of the array.
        int ans = 0, n = nums.size();
        ans += nums[0];

        // Initialize variables to find the minimum values for the second and third subarrays.
        int mini1 = INT_MAX, mini2 = INT_MAX, j = 1;

        // Iterate through the array to find the minimum value (mini1) and its index (j) for the second subarray.
        for (int i = 1; i < n; i++) {
            if (nums[i] < mini1) {
                mini1 = nums[i];
                j = i;
            }
        }

        // Iterate through the array again to find the minimum value (mini2) for the third subarray, excluding the element at index j.
        for (int i = 1; i < n; i++) {
            if (nums[i] < mini2 && i != j) {
                mini2 = nums[i];
            }
        } 

        // Add the minimum values of the second and third subarrays to the answer.
        ans += mini1;
        ans += mini2;

        // Return the final minimum sum of costs.
        return ans;
    }
};
```

---
Python3
```
class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        # Initialize variables to keep track of the answer, the size of the array, and set the initial answer to the first element of the array.
        ans = 0
        n = len(nums)
        ans += nums[0]

        # Initialize variables to find the minimum values for the second and third subarrays.
        mini1 = float('inf')
        mini2 = float('inf')
        j = 1

        # Iterate through the array to find the minimum value (mini1) and its index (j) for the second subarray.
        for i in range(1, n):
            if nums[i] < mini1:
                mini1 = nums[i]
                j = i

        # Iterate through the array again to find the minimum value (mini2) for the third subarray, excluding the element at index j.
        for i in range(1, n):
            if nums[i] < mini2 and i != j:
                mini2 = nums[i]

        # Add the minimum values of the second and third subarrays to the answer.
        ans += mini1
        ans += mini2

        # Return the final minimum sum of costs.
        return ans
```

---
Java
```
public class Solution {
    public int minimumCost(int[] nums) {
        // Initialize variables to keep track of the answer, the size of the array, and set the initial answer to the first element of the array.
        int ans = 0;
        int n = nums.length;
        ans += nums[0];

        // Initialize variables to find the minimum values for the second and third subarrays.
        int mini1 = Integer.MAX_VALUE;
        int mini2 = Integer.MAX_VALUE;
        int j = 1;

        // Iterate through the array to find the minimum value (mini1) and its index (j) for the second subarray.
        for (int i = 1; i < n; i++) {
            if (nums[i] < mini1) {
                mini1 = nums[i];
                j = i;
            }
        }

        // Iterate through the array again to find the minimum value (mini2) for the third subarray, excluding the element at index j.
        for (int i = 1; i < n; i++) {
            if (nums[i] < mini2 && i != j) {
                mini2 = nums[i];
            }
        }

        // Add the minimum values of the second and third subarrays to the answer.
        ans += mini1;
        ans += mini2;

        // Return the final minimum sum of costs.
        return ans;
    }
}
```
