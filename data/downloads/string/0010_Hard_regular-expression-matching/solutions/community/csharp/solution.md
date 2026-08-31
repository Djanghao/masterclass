# ✅ Easy | 💯 Beats | ⭐Java | C++ | Python | Kotlin | C# | ✨ Dynamic Programming

**Author:** mukund_rakholiya
**Votes:** 8
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/5592991/](https://leetcode.com/problems/regular-expression-matching/solutions/5592991/)

---

![Screenshot 2024-08-05 235043.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**The problem requires implementing regular expression matching with support for . and *:**

    `.` matches any single character.
    `*` matches zero or more of the preceding element.
**Dynamic Programming (DP) is a suitable approach for this problem as it allows us to build a solution incrementally while considering various possible matches.**
# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize DP Table:

    Create a DP table mat with dimensions (len(s) + 1) x (len(p) + 1) initialized to False.
    mat[i][j] will be True if the first i characters in s can match the first j characters in p.

2. Base Case:

    mat[0][0] is True because an empty string matches an empty pattern.

3. Pattern Initialization:

    Handle cases where the pattern p contains * that can match zero preceding elements.
    Update mat[0][i] to True if the pattern up to i can match an empty string.

4. Fill DP Table:

    Iterate through each character in s and p.
    For each pair (i, j), update the DP table based on the characters in s and p:
    If p[j-1] is . or matches s[i-1], mat[i][j] is set to mat[i-1][j-1].
    If p[j-1] is *, it can match zero or more of the preceding element:
    Check if * matches zero elements: mat[i][j] = mat[i][j-2].
    Check if * matches one or more elements: mat[i][j] is updated to mat[i][j] or mat[i-1][j] if the preceding element matches s[i-1].

5. Return Result:

    The result is mat[len(s)][len(p)], indicating whether the entire string s matches the pattern p.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is $$O(n\xD7m)$$ where n is the length of the string s and m is the length of the pattern p. This is because we fill in an (n+1) x (m+1) DP table.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is $$O(n\xD7m)$$ for the DP table used to store match results.
# Code
```Java []
class Solution {
    public boolean isMatch(String s, String p) {
        boolean[][] mat = new boolean[s.length() + 1][p.length() + 1];

        mat[0][0] = true;

        for (int i = 1; i < mat[0].length; i++) {
            if (p.charAt(i - 1) == '*') mat[0][i] = mat[0][i - 2];
        }

        for (int i = 1; i < mat.length; i++) {
            for (int j = 1; j < mat[0].length; j++) {
                if (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1)) {
                    mat[i][j] = mat[i - 1][j - 1];
                } else if (p.charAt(j - 1) == '*') {
                    mat[i][j] = mat[i][j - 2];
                    if (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {
                        mat[i][j] = mat[i][j] | mat[i - 1][j];
                    }
                } else {
                    mat[i][j] = false;
                }
            }
        }

        return mat[s.length()][p.length()];
    }
}
```
```Python []
class Solution:
    def isMatch(self, s, p):
        mat = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        mat[0][0] = True

        for i in range(1, len(p) + 1):
            if p[i - 1] == '*':
                mat[0][i] = mat[0][i - 2]

        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                    mat[i][j] = mat[i - 1][j - 1]
                elif p[j - 1] == '*':
                    mat[i][j] = mat[i][j - 2]
                    if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                        mat[i][j] = mat[i][j] or mat[i - 1][j]
                else:
                    mat[i][j] = False

        return mat[len(s)][len(p)]
```
```C++ []
class Solution {
public:
    bool isMatch(string s, string p) {
        int lenS = s.length();
        int lenP = p.length();
        vector<vector<bool>> mat(lenS + 1, vector<bool>(lenP + 1, false));

        mat[0][0] = true;

        for (int i = 1; i <= lenP; i++) {
            if (p[i - 1] == '*') {
                mat[0][i] = mat[0][i - 2];
            }
        }

        for (int i = 1; i <= lenS; i++) {
            for (int j = 1; j <= lenP; j++) {
                if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {
                    mat[i][j] = mat[i - 1][j - 1];
                } else if (p[j - 1] == '*') {
                    mat[i][j] = mat[i][j - 2];
                    if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                        mat[i][j] = mat[i][j] || mat[i - 1][j];
                    }
                } else {
                    mat[i][j] = false;
                }
            }
        }

        return mat[lenS][lenP];
    }
};
```
```Kotlin []
class Solution {
    fun isMatch(s: String, p: String): Boolean {
        val mat = Array(s.length + 1) { BooleanArray(p.length + 1) }
        mat[0][0] = true

        for (i in 1 until mat[0].size) {
            if (p[i - 1] == '*') {
                mat[0][i] = mat[0][i - 2]
            }
        }

        for (i in 1 until mat.size) {
            for (j in 1 until mat[0].size) {
                if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {
                    mat[i][j] = mat[i - 1][j - 1]
                } else if (p[j - 1] == '*') {
                    mat[i][j] = mat[i][j - 2]
                    if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                        mat[i][j] = mat[i][j] || mat[i - 1][j]
                    }
                } else {
                    mat[i][j] = false
                }
            }
        }

        return mat[s.length][p.length]
    }
}
```
```C# []
public class Solution {
    public bool IsMatch(string s, string p) {
        bool[,] mat = new bool[s.Length + 1, p.Length + 1];

        mat[0, 0] = true;

        for (int i = 1; i < mat.GetLength(1); i++) {
            if (p[i - 1] == '*') {
                mat[0, i] = mat[0, i - 2];
            }
        }

        for (int i = 1; i < mat.GetLength(0); i++) {
            for (int j = 1; j < mat.GetLength(1); j++) {
                if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {
                    mat[i, j] = mat[i - 1, j - 1];
                } else if (p[j - 1] == '*') {
                    mat[i, j] = mat[i, j - 2];
                    if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                        mat[i, j] = mat[i, j] || mat[i - 1, j];
                    }
                } else {
                    mat[i, j] = false;
                }
            }
        }

        return mat[s.Length, p.Length];
    }
}
```
![upvote.png](./images/1.png)
