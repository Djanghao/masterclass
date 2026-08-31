# ✅THE BEST EXPLANATION||Beats 100% Users

**Author:** harshal2024
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4709010/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4709010/)

---

---
# PLEASE UPVOTE IF YOU LIKE IT \u2705
---
![Screenshot (3250).png](./images/0.png)

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The goal of the code is to count the number of subarrays in the given array nums that match a given pattern. The pattern is represented by an array of integers, where each element can be -1, 0, or 1. The pattern is matched by comparing consecutive elements in subarrays according to the rules defined for each pattern value.

---
# Approach
<!-- Describe your approach to solving the problem. -->

The code uses two nested loops to iterate through all possible subarrays of nums.
For each subarray, it checks if the size of the subarray is equal to m + 1, where m is the size of the pattern.
If the size is correct, it iterates through the elements of the pattern and compares them with the corresponding elements in the subarray.
The comparisons are based on the values in the pattern:
If the pattern value is 1, it checks if the next element in the subarray is greater than the current element.
If the pattern value is 0, it checks if the next element in the subarray is equal to the current element.
If the pattern value is -1, it checks if the next element in the subarray is less than the current element.
If all comparisons hold true for the entire pattern, the subarray is considered a match, and the count is incremented.
The final count is returned as the result.

---

# Complexity
- Time complexity: O(M*(N^2)) 
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
    int countMatchingSubarrays(vector<int>& nums, vector<int>& pattern) {
        int n = nums.size(); // Size of the input array nums
        int m = pattern.size(); // Size of the pattern array
        int count = 0; // Initialize the count of matching subarrays

        // Iterate through all possible starting indices of the subarray
        for (int i = 0; i < n; i++) {
            // Iterate through all possible ending indices of the subarray
            for (int j = i; j < n; j++) {
                // Check if the size of the current subarray is equal to m + 1
                if (j - i + 1 == m + 1) {
                    int l = i; // Initialize a variable for tracking the current index in the subarray
                    int flag = 0; // Initialize a flag to track if the subarray matches the pattern

                    // Iterate through the pattern and compare it with the subarray elements
                    for (int k = 0; k < m; k++, l++) {
                        // Check for the matching conditions based on the pattern values
                        if (pattern[k] == 1 && nums[l + 1] > nums[l]) {
                            // If pattern[k] is 1, check for strictly increasing condition
                            continue;
                        } else if (pattern[k] == 0 && nums[l + 1] == nums[l]) {
                            // If pattern[k] is 0, check for equal condition
                            continue;
                        } else if (pattern[k] == -1 && nums[l + 1] < nums[l]) {
                            // If pattern[k] is -1, check for strictly decreasing condition
                            continue;
                        } else {
                            // If any condition fails, set the flag and break out of the loop
                            flag = 1;
                            break;
                        }
                    }

                    // If the flag is still 0, the subarray matches the pattern, so increment the count
                    if (flag == 0) {
                        count++;
                    }
                }
            }
        }

        // Return the final count of matching subarrays
        return count;
    }
};


```

---
Python3
```
class Solution:
    def countMatchingSubarrays(self, nums: List[int], pattern: List[int]) -> int:
        n = len(nums)  # Size of the input array nums
        m = len(pattern)  # Size of the pattern array
        count = 0  # Initialize the count of matching subarrays

        # Iterate through all possible starting indices of the subarray
        for i in range(n):
            # Iterate through all possible ending indices of the subarray
            for j in range(i, n):
                # Check if the size of the current subarray is equal to m + 1
                if j - i + 1 == m + 1:
                    l = i  # Initialize a variable for tracking the current index in the subarray
                    flag = 0  # Initialize a flag to track if the subarray matches the pattern

                    # Iterate through the pattern and compare it with the subarray elements
                    for k in range(m):
                        # Check for the matching conditions based on the pattern values
                        if pattern[k] == 1 and nums[l + 1] > nums[l]:
                            # If pattern[k] is 1, check for strictly increasing condition
                            l += 1
                        elif pattern[k] == 0 and nums[l + 1] == nums[l]:
                            # If pattern[k] is 0, check for equal condition
                            l += 1
                        elif pattern[k] == -1 and nums[l + 1] < nums[l]:
                            # If pattern[k] is -1, check for strictly decreasing condition
                            l += 1
                        else:
                            # If any condition fails, set the flag and break out of the loop
                            flag = 1
                            break

                    # If the flag is still 0, the subarray matches the pattern, so increment the count
                    if flag == 0:
                        count += 1

        # Return the final count of matching subarrays
        return count


```

---
Java
```
class Solution {
    public int countMatchingSubarrays(int[] nums, int[] pattern) {
        int n = nums.length;  // Size of the input array nums
        int m = pattern.length;  // Size of the pattern array
        int count = 0;  // Initialize the count of matching subarrays

        // Iterate through all possible starting indices of the subarray
        for (int i = 0; i < n; i++) {
            // Iterate through all possible ending indices of the subarray
            for (int j = i; j < n; j++) {
                // Check if the size of the current subarray is equal to m + 1
                if (j - i + 1 == m + 1) {
                    int l = i;  // Initialize a variable for tracking the current index in the subarray
                    int flag = 0;  // Initialize a flag to track if the subarray matches the pattern

                    // Iterate through the pattern and compare it with the subarray elements
                    for (int k = 0; k < m; k++, l++) {
                        // Check for the matching conditions based on the pattern values
                        if (pattern[k] == 1 && nums[l + 1] > nums[l]) {
                            // If pattern[k] is 1, check for strictly increasing condition
                            continue;
                        } else if (pattern[k] == 0 && nums[l + 1] == nums[l]) {
                            // If pattern[k] is 0, check for equal condition
                            continue;
                        } else if (pattern[k] == -1 && nums[l + 1] < nums[l]) {
                            // If pattern[k] is -1, check for strictly decreasing condition
                            continue;
                        } else {
                            // If any condition fails, set the flag and break out of the loop
                            flag = 1;
                            break;
                        }
                    }

                    // If the flag is still 0, the subarray matches the pattern, so increment the count
                    if (flag == 0) {
                        count++;
                    }
                }
            }
        }

        // Return the final count of matching subarrays
        return count;
    }
}

```
