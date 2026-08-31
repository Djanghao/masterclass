# Easy Java solution | Beginner friendly |Beats 100% | 0ms

**Author:** antovincent
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/3480903/](https://leetcode.com/problems/longest-happy-prefix/solutions/3480903/)

---

# Intuition
To solve this problem, we can use the Rabin-Karp algorithm. This algorithm uses hash values to compare strings in constant time, allowing us to compare substrings of the given string with the same length as the pattern in constant time. We can then slide a window of length m (length of the pattern) over the string and check if the hash value of the window matches the hash value of the pattern. If they match, we can compare the substring with the pattern to check for a match.

# Approach
First, we need to compute the hash value of the pattern and the first window of length m in the string. Then, we can slide the window over the string, computing the hash value of each new window using the previous hash value and the characters at the start and end of the window. If the hash values match, we compare the substring with the pattern to check for a match. If we find a match, we can return the substring.

To compute the hash value, we can use a rolling hash function that takes the previous hash value, the first character in the window, and the last character in the window as input. The hash function should have the property that it can be computed in constant time, and it should have a low probability of collisions (two different strings having the same hash value).

# Complexity
- **Time complexity : O(nm)**
The Rabin-Karp algorithm has a time complexity of O(n + m) in the average case, where n is the length of the string and m is the length of the pattern. The worst-case time complexity is O(nm), which occurs when there are many hash collisions. However, this is rare in practice, and the average-case time complexity is much faster than naive string matching algorithms that have a time complexity of O(nm).

- **Space complexity : O(1)**
The space complexity of the algorithm is O(1), as we only need to store the hash value of the pattern and the current window.

# Code
```
class Solution {
    public String longestPrefix(String s) {
        int n = s.length();
        int[] lps = new int[s.length()];
        int i = 1, len = 0;
        while (i < n) {
            if (s.charAt(i) == s.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len > 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return s.substring(0, lps[s.length() - 1]);
    }
}
```

---


