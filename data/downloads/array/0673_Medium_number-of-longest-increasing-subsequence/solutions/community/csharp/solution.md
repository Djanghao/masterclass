# C# Solution for Number of Longest Increasing Subsequence Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3794909/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3794909/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to find the number of longest increasing subsequences. We can use dynamic programming to solve this problem efficiently. The idea is to maintain two arrays to track the length of the longest increasing subsequence ending at each index and the count of such subsequences. By updating these arrays while iterating through the array, we can find the answer.

# Approach
<!-- Describe your approach to solving the problem. -->
- Initialize two arrays lengths and counts of the same length as the input array nums. These arrays will be used to track the length of the longest increasing subsequence ending at each index and the count of such subsequences.
- Initialize each element in both arrays to 1, as each element itself is an increasing subsequence of length 1.
- Iterate through the array nums starting from the second element (index 1).
- For each element nums[i], compare it with all the previous elements in the array (indices 0 to i-1).
- If nums[i] is greater than the previous element nums[j], it can be part of a longer increasing subsequence. We update lengths[i] and counts[i] accordingly:
1. If lengths[j] + 1 > lengths[i], it means we found a longer increasing subsequence ending at nums[i]. So, update lengths[i] = lengths[j] + 1 and set counts[i] = counts[j].
1. If lengths[j] + 1 == lengths[i], it means we found another increasing subsequence of the same length as the current longest ending at nums[i]. So, increment counts[i] by counts[j].
- Keep track of the maximum length found so far (maxLength).
- After iterating through the array, we will have the length of the longest increasing subsequence (maxLength). Now, iterate through the lengths array again to count the number of subsequences with length equal to maxLength. Sum up the counts for such subsequences to get the final result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this approach is O(n^2), where n is the length of the input array nums. This is because we use two nested loops to compare each element with all previous elements.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) as we use two arrays of size n (lengths and counts) to keep track of the length of subsequences and their counts.

# Code
```
public class Solution {
    public int FindNumberOfLIS(int[] nums) {
        int n = nums.Length;
        if (n == 0) return 0;
        
        int[] lengths = new int[n]; // To store the length of the longest increasing subsequence ending at each index
        int[] counts = new int[n];  // To store the count of such subsequences
        
        // Initialize lengths and counts arrays with default values
        for (int i = 0; i < n; i++) {
            lengths[i] = 1; // Each element is an increasing subsequence of length 1
            counts[i] = 1;  // Each element itself is a subsequence
        }
        
        int maxLength = 1;
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    if (lengths[j] + 1 > lengths[i]) {
                        lengths[i] = lengths[j] + 1;
                        counts[i] = counts[j];
                    } else if (lengths[j] + 1 == lengths[i]) {
                        counts[i] += counts[j];
                    }
                }
            }
            maxLength = Math.Max(maxLength, lengths[i]);
        }
        
        int result = 0;
        for (int i = 0; i < n; i++) {
            if (lengths[i] == maxLength) {
                result += counts[i];
            }
        }
        
        return result;
    }
}
```