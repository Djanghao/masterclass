# Runtime 123 ms Beats 15.38% of users with C# Memory 119.48 MB

**Author:** Gabi11
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/4772313/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/4772313/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
   public int CountSubstrings(string s, string t) {
        int result = 0;
        int m = s.Length;
        int n = t.Length;

        for (int len = 1; len <= m; len++) {
            for (int i = 0; i + len - 1 < m; i++) {
                string substringS = s.Substring(i, len);

                for (int j = 0; j + len - 1 < n; j++) {
                    string substringT = t.Substring(j, len);

                    if (CountDifferences(substringS, substringT) == 1) {
                        result++;
                    }
                }
            }
        }

        return result;
    }

    private int CountDifferences(string s1, string s2) {
        int differences = 0;

        for (int i = 0; i < s1.Length; i++) {
            if (s1[i] != s2[i]) {
                differences++;
            }
        }

        return differences;
    }
}
```