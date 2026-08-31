# Java 20 lines very easy solution 7ms with explanation

**Author:** piano1996
**Votes:** 398
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/87738/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/87738/)

---

```
public class Solution {
    public int longestSubstring(String s, int k) {
        if (s == null || s.length() == 0) return 0;
        char[] chars = new char[26];
        // record the frequency of each character
        for (int i = 0; i < s.length(); i += 1) chars[s.charAt(i) - 'a'] += 1;
        boolean flag = true;
        for (int i = 0; i < chars.length; i += 1) {
            if (chars[i] < k && chars[i] > 0) flag = false;
        }
        // return the length of string if this string is a valid string
        if (flag == true) return s.length();
        int result = 0;
        int start = 0, cur = 0;
        // otherwise we use all the infrequent elements as splits
        while (cur < s.length()) {
            if (chars[s.charAt(cur) - 'a'] < k) {
                result = Math.max(result, longestSubstring(s.substring(start, cur), k));
                start = cur + 1;
            }
            cur++;
        }
        result = Math.max(result, longestSubstring(s.substring(start), k));
        return result;
    }
}
```
In each step, just find the infrequent elements (show less than k times) as splits since any of these infrequent elements couldn't be any part of the substring we want.