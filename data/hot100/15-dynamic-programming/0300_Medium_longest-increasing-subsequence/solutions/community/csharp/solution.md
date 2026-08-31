# C# Solution for Longest Increasing Subsequence Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/4516519/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/4516519/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem aims to find the length of the longest strictly increasing subsequence in the given array.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Patience Sorting Algorithm:
	\u2022	The solution utilizes a variation of the Patience Sorting algorithm to find the length of the longest increasing subsequence.
	\u2022	It maintains an array tails that simulates the piles in the patience sorting approach.
2.	Main Loop:
	\u2022	Iterates through each number in the input array nums.
	\u2022	Performs a binary search within the tails array to find the position where the current number can be placed or updated to maintain the increasing order.
3.	Updating tails Array:
	\u2022	Updates the tails array based on the binary search result, placing or updating the current number accordingly.
	\u2022	Tracks the length of the longest increasing subsequence by modifying len when needed.
4.	Return Result:
	\u2022	Finally, returns the calculated len, which represents the length of the longest strictly increasing subsequence found.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	The binary search operation within the tails array for each element in nums takes O(n log(n)) time complexity.
\u2022	Therefore, the overall time complexity of the solution is O(n log(n)).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) due to the usage of the tails array, which stores the elements of the longest increasing subsequence.

# Code
```
public class Solution {
    public int LengthOfLIS(int[] nums) {
        int len = 0;
        int[] tails = new int[nums.Length];

        foreach (int num in nums) {
            int left = 0, right = len;
            
            while (left < right) {
                int mid = left + (right - left) / 2;
                if (tails[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            
            tails[left] = num;
            if (left == len) {
                len++;
            }
        }
        
        return len;
    }
}
```