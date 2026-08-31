# Simple approach

**Author:** buiphonghau2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/5378531/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/5378531/)

---

Find the longest substring begin with each letter in alphabet.


# Code
```
public class Solution {
    int maxLengthBeginWith(char c, string s) {
        int result = 0;
        for (int i = 0; i < s.Length; i++) {
            if (s[i] == c) {
                int j = i + 1;
                while (j < s.Length && (s[j] - s[j - 1] == 1 || (s[j] == 'a' && s[j - 1] == 'z'))) {
                    j++;
                }
                result = Math.Max(result, j - i);
                i = j - 1;
            }
        }
        return result;
    }
    public int FindSubstringInWraproundString(string s) {
        int[] m = new int[26];
        for (int i = 0; i < 26; i++) {
            m[i] = maxLengthBeginWith((char)('a' + i), s);
        }

        int result = 0;
        for (int i = 0; i < 26; i++) {
            result += m[i];
        }

        return result;
    }
}
```