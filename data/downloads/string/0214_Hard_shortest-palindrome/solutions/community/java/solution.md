# My 7-lines recursive Java solution

**Author:** xcv58
**Votes:** 261
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/60098/](https://leetcode.com/problems/shortest-palindrome/solutions/60098/)

---

The idea is to use two anchors `j` and `i` to compare the String from beginning and end.
If `j` can reach the end, the String itself is Palindrome. Otherwise, we divide the String by `j`, and get `mid = s.substring(0, j)` and `suffix`.

We reverse `suffix` as beginning of result and recursively call `shortestPalindrome` to get result of `mid` then appedn `suffix` to get result.

        int j = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == s.charAt(j)) { j += 1; }
        }
        if (j == s.length()) { return s; }
        String suffix = s.substring(j);
        return new StringBuffer(suffix).reverse().toString() + shortestPalindrome(s.substring(0, j)) + suffix;