# C# Solution for Find Unique Binary String Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4292885/](https://leetcode.com/problems/find-unique-binary-string/solutions/4292885/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach leverages the uniqueness of strings in the input array to generate a binary string that differs from each string at a specific position. It uses a rule based on the diagonal elements of the input strings to construct a different binary string.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Create a HashSet to store all strings from the input array.
2.	Iterate through the given array nums and construct the resulting binary string by selecting, for each position i in the output string, the opposite bit value of the diagonal element of the input string at nums[i][i].
3.	Return the constructed string.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Constructing the resulting string takes O(n) time, where n is the length of the input array.
\u2022	Iterating through the array and constructing the resulting string involves O(n) operations.
\u2022	Therefore, the time complexity of this approach is O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity is primarily due to the HashSet that stores all strings from the input array, which takes O(n) space to store n unique strings.
\u2022	The result array used to construct the output string also occupies O(n) space.
\u2022	Thus, the overall space complexity is O(n) + O(n) = O(n).

# Code
```
public class Solution {
    public string FindDifferentBinaryString(string[] nums) {
        HashSet<string> set = new HashSet<string>(nums);
        int n = nums.Length;
        char[] result = new char[n];
        
        for (int i = 0; i < n; i++) {
            result[i] = nums[i][i] == '0' ? '1' : '0';
        }
        
        return new string(result);
    }
}
```