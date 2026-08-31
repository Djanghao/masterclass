# C# Solution for Minimum Number of Changes to Make Binary String Beautiful Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6009060/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6009060/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to make the binary string \u201Cbeautiful,\u201D meaning it should be divided into substrings with each containing either only \u20180\u2019s or only \u20181\u2019s and having even lengths. The easiest way to achieve this is to ensure each consecutive pair of characters is the same. Therefore, we can iterate through the string, looking at each pair and counting how many changes are needed to make each pair identical.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Iterate in Steps of Two:
	\u2022	Since the string has an even length, we can safely take two characters at a time.
	\u2022	We check every consecutive pair (indices i and i + 1).
2.	Count Mismatches in Pairs:
	\u2022	For each pair, check if the two characters are the same.
	\u2022	If they are different, increment the changes counter by 1. This accounts for one required change to make the pair identical.
3.	Return Total Changes:
	\u2022	After the loop, changes will hold the minimum number of modifications needed to make the string \u201Cbeautiful.\u201D

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time Complexity:  O(n) 
\u2022	We loop through the string once, incrementing by two each time, making it linear in terms of the length of s.
\u2022	Thus, the time complexity is  O(n) , where  n  is the length of s.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space Complexity:  O(1) 
\u2022	We use only a single integer variable, changes, to track the count.
\u2022	Therefore, the space complexity is constant,  O(1) .

# Code
```csharp []
public class Solution {
    public int MinChanges(string s) {
        int minChangesRequired = 0;
        for (int i = 0; i < s.Length; i += 2) {
            
            if (s[i] != s[i + 1]) {
                minChangesRequired++;
            }
        }

        return minChangesRequired;
    }
}
```