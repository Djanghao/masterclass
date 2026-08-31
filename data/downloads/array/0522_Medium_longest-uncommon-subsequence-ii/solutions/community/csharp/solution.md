# C# Brute Force technique with Optimization

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/5184379/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/5184379/)

---

# Approach
<!-- Describe your approach to solving the problem. -->IsSubsequence Function: This function checks if s1 is a subsequence of s2. It iterates through both strings and ensures all characters of s1 appear in s2 in order.
Sorting: The array is sorted in descending order by string length, ensuring we consider longer strings first.
Checking Each String: For each string, we check if it is a subsequence of any other string in the array. If a string is not a subsequence of any other string, it is uncommon, and we return its length.
Return Result: If no uncommon subsequence is found, return -1.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n log n + n^2 * L^2). Given the constraints, n can be upu to 50 and L can be up to 10, making this approach feasable.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n * L) due to the input array of strings taking O(n * L) space, and the sorting operation taking O(n) additional space depending on the sorting algorithm used. (For example, if Timsort is used, it takes O(n) space.)
___

# Code
```
public class Solution {
    public int FindLUSlength(string[] strs) {
        // Helper function to check if s1 is a subsequence of s2
        bool IsSubsequence(string s1, string s2) {
            int i = 0, j = 0;
            while (i < s1.Length && j < s2.Length) {
                if (s1[i] == s2[j]) i++;
                j++;
            }
            return i == s1.Length;
        }

        // Sort strings by length in descending order
        Array.Sort(strs, (a, b) => b.Length - a.Length);

        // Check each string
        for (int i = 0; i < strs.Length; i++) {
            bool isUncommon = true;
            for (int j = 0; j < strs.Length; j++) {
                if (i != j && IsSubsequence(strs[i], strs[j])) {
                    isUncommon = false;
                    break;
                }
            }
            if (isUncommon) {
                return strs[i].Length;
            }
        }

        return -1;
    }
}

```