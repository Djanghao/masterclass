# Leftmost, rightmost, and in-between

**Author:** votrubac
**Votes:** 243
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/1330165/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/1330165/)

---

I initially over-thought this problem, but it's quite straightforward. We track the first and last occurence of each character.

Then, for each character, we count unique characters between its first and last occurence. That is the number of palindromes with that character in the first and last positions.

Example: `abcbba`, we have two unique chars between first and last `a` (`c` and `b`), and two - between first and last `b` (`b` and `c`). No characters in between `c` so it forms no palindromes.

**C++**
```cpp
int countPalindromicSubsequence(string s) {
    int first[26] = {[0 ... 25] = INT_MAX}, last[26] = {}, res = 0;
    for (int i = 0; i < s.size(); ++i) {
        first[s[i] - 'a'] = min(first[s[i] - 'a'], i);
        last[s[i] - 'a'] = i;
    }
    for (int i = 0; i < 26; ++i)
        if (first[i] < last[i])
            res += unordered_set<char>(begin(s) + first[i] + 1, begin(s) + last[i]).size();
    return res;
}
```
**Java**
```java
public int countPalindromicSubsequence(String s) {
    int first[] = new int[26], last[] = new int[26], res = 0;
    Arrays.fill(first, Integer.MAX_VALUE);
    for (int i = 0; i < s.length(); ++i) {
        first[s.charAt(i) - 'a'] = Math.min(first[s.charAt(i) - 'a'], i);
        last[s.charAt(i) - 'a'] = i;
    }
    for (int i = 0; i < 26; ++i)
        if (first[i] < last[i])
            res += s.substring(first[i] + 1, last[i]).chars().distinct().count();
    return res;
}
```
**Complexity Analysis**
- Time: O(n). We go though the string fixed number of times.
- Memory: O(1)