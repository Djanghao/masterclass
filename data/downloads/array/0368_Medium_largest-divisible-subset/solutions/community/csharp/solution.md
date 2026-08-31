# Code fully explained Java || Python3 || C++ || C# 🔥😊

**Author:** sagarsindhu36
**Votes:** 10
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/4700386/](https://leetcode.com/problems/largest-divisible-subset/solutions/4700386/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find the largest divisible subset of a given array of integers. A divisible subset is a set of integers where every pair **(nums[i], nums[j])** satisfies **nums[i] % nums[j] == 0** or **nums[j] % nums[i] == 0**. The problem involves dynamic programming to find the length of the largest divisible subset and then reconstructing the subset based on the stored information.

# Approach
---
<!-- Describe your approach to solving the problem. -->
## ***please view comments in code for better understanding***

---

## Sorting:

- The first step is to sort the input array nums. Sorting helps in ensuring that if nums[i] is divisible by nums[j], then nums[j] comes before nums[i].
## Dynamic Programming:

- Initialize two arrays, a to store the length of the divisible subset ending at index i, and prev to store the previous index in the subset.
- Iterate through the sorted array and, for each element, iterate through its previous elements to find the longest divisible subset.
- Update a[i] and prev[i] based on the conditions specified in the code.
## Reconstruction:

- After computing the lengths and previous indices, reconstruct the largest divisible subset by starting from the index with the maximum length (max and index variables).
- Add each element to the result list and move to the previous index until reaching the start of the subset.

# Complexity
- Time complexity:  ***O(n^2)***
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: ***O(n)***
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution { 
    // Function to find the largest divisible subset
    public List<Integer> largestDivisibleSubset(int[] nums) {
        // Arrays to store the length of the subset and the previous index
        int[] a = new int[nums.length];
        int[] prev = new int[nums.length];
        
        // Sorting the input array
        Arrays.sort(nums);
        
        // Variables to track the maximum length and its corresponding index
        int max = 0;
        int index = -1;
        
        // Loop through the sorted array
        for (int i = 0; i < nums.length; i++) {
            // Initialize the subset length and previous index
            a[i] = 1;
            prev[i] = -1;
            
            // Iterate through the previous elements to find the longest divisible subset
            for (int j = i - 1; j >= 0; j--) {
                if (nums[i] % nums[j] == 0 && a[j] + 1 > a[i]) {
                    // Update the subset length and previous index
                    a[i] = a[j] + 1;
                    prev[i] = j;
                }
            }
            
            // Update the maximum length and its corresponding index
            if (a[i] > max) {
                max = a[i];
                index = i;
            }
        }
        
        // Reconstruct the largest divisible subset using the previous indices
        List<Integer> res = new ArrayList<Integer>();
        while (index != -1) {
            res.add(nums[index]);
            index = prev[index];
        }
        
        // Return the result
        return res;
    }
}

```
```python3 []
from typing import List

class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        # Sort the input array
        nums.sort()
        n = len(nums)
        # Arrays to store the length of the divisible subset and previous indices
        a = [1] * n
        prev = [-1] * n
        max_len, max_index = 0, -1

        # Dynamic programming to find the length of the largest divisible subset
        for i in range(n):
            for j in range(i - 1, -1, -1):
                if nums[i] % nums[j] == 0 and a[j] + 1 > a[i]:
                    # Update the subset length and previous index
                    a[i] = a[j] + 1
                    prev[i] = j

            # Update the maximum length and its corresponding index
            if a[i] > max_len:
                max_len = a[i]
                max_index = i

        # Reconstruct the largest divisible subset
        result = []
        while max_index != -1:
            result.append(nums[max_index])
            max_index = prev[max_index]

        # Return the result
        return result
```
```c++ []
class Solution {
public:
    std::vector<int> largestDivisibleSubset(std::vector<int>& nums) {
        // Sort the input array
        std::sort(nums.begin(), nums.end());
        int n = nums.size();
        // Arrays to store the length of the divisible subset and previous indices
        std::vector<int> a(n, 1), prev(n, -1);
        int max_len = 0, max_index = -1;

        // Dynamic programming to find the length of the largest divisible subset
        for (int i = 0; i < n; i++) {
            for (int j = i - 1; j >= 0; j--) {
                if (nums[i] % nums[j] == 0 && a[j] + 1 > a[i]) {
                    // Update the subset length and previous index
                    a[i] = a[j] + 1;
                    prev[i] = j;
                }
            }

            // Update the maximum length and its corresponding index
            if (a[i] > max_len) {
                max_len = a[i];
                max_index = i;
            }
        }

        // Reconstruct the largest divisible subset
        std::vector<int> result;
        while (max_index != -1) {
            result.push_back(nums[max_index]);
            max_index = prev[max_index];
        }

        // Reverse the result to get the correct order
        std::reverse(result.begin(), result.end());
        return result;
    }
};
```
```c# []
public class Solution {
    public List<int> LargestDivisibleSubset(int[] nums) {
        // Sort the input array
        Array.Sort(nums);
        int n = nums.Length;
        // Arrays to store the length of the divisible subset and previous indices
        int[] a = new int[n];
        int[] prev = new int[n];
        int max_len = 0, max_index = -1;

        // Dynamic programming to find the length of the largest divisible subset
        for (int i = 0; i < n; i++) {
            a[i] = 1;
            prev[i] = -1;

            for (int j = i - 1; j >= 0; j--) {
                if (nums[i] % nums[j] == 0 && a[j] + 1 > a[i]) {
                    // Update the subset length and previous index
                    a[i] = a[j] + 1;
                    prev[i] = j;
                }
            }

            // Update the maximum length and its corresponding index
            if (a[i] > max_len) {
                max_len = a[i];
                max_index = i;
            }
        }

        // Reconstruct the largest divisible subset
        List<int> result = new List<int>();
        while (max_index != -1) {
            result.Add(nums[max_index]);
            max_index = prev[max_index];
        }

        // Reverse the result to get the correct order
        result.Reverse();
        return result;
    }
}
```

![See-what-sticks.jpg](./images/0.jpeg)

