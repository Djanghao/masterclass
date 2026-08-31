# Mark & Iterate

**Author:** fahad_Mubeen
**Votes:** 18
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5280116/](https://leetcode.com/problems/clear-digits/solutions/5280116/)

---

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    string clearDigits(string s) {
        int i = 0;
        int n = s.length();
        while (i < n) {
            // Check if the current character is a digit
            if (s[i] <= '9' && s[i] >= '0') {
                s[i] = '!'; // Mark the digit for deletion
                // Find the closest non-digit character to the left
                for (int j = i - 1; j >= 0; j--) {
                    if ((s[j] > '9' || s[j] < '0') && s[j] != '!') {
                        s[j] = '!'; // Mark the non-digit character for deletion
                        break;
                    }
                }
            }
            i++;
        }
        // Build the resulting string without the marked characters
        string res = "";
        for (int k = 0; k < n; k++) {
            if (s[k] != '!') res += s[k];
        }
        return res;
    }
};

```
```Java []
class Solution {
    public String clearDigits(String s) {
        int n = s.length();
        StringBuilder sb = new StringBuilder(s);

        int i = 0;
        while (i < n) {
            // Check if the current character is a digit
            if (sb.charAt(i) >= '0' && sb.charAt(i) <= '9') {
                sb.setCharAt(i, '!'); // Mark the digit for deletion
                // Find the closest non-digit character to the left
                for (int j = i - 1; j >= 0; j--) {
                    if ((sb.charAt(j) < '0' || sb.charAt(j) > '9') && sb.charAt(j) != '!') {
                        sb.setCharAt(j, '!'); // Mark the non-digit character for deletion
                        break;
                    }
                }
            }
            i++;
        }
        // Build the resulting string without the marked characters
        StringBuilder res = new StringBuilder();
        for (int k = 0; k < n; k++) {
            if (sb.charAt(k) != '!') res.append(sb.charAt(k));
        }
        return res.toString();
    }
}

```
```Python3 []
class Solution:
    def clearDigits(self, s: str) -> str:
        n = len(s)
        s = list(s)  # Convert string to list for mutability
        
        i = 0
        while i < n:
            # Check if the current character is a digit
            if '0' <= s[i] <= '9':
                s[i] = '!'  # Mark the digit for deletion
                # Find the closest non-digit character to the left
                for j in range(i - 1, -1, -1):
                    if not ('0' <= s[j] <= '9') and s[j] != '!':
                        s[j] = '!'  # Mark the non-digit character for deletion
                        break
            i += 1
        
        # Build the resulting string without the marked characters
        res = ''.join([ch for ch in s if ch != '!'])
        return res

```
