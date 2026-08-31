# 💯Faster✅💯Less Mem✅🧠Detailed Approach🎯Two Pointer🔥🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 35
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249115/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249115/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
You are given two strings, `s` and `t`, consisting of only lowercase English letters. Your goal is to determine the minimum number of characters that need to be appended to the end of `s` so that `t` becomes a subsequence of `s`.

A subsequence is a sequence that can be derived from another sequence by deleting some or no characters without changing the order of the remaining characters.


## \uD83D\uDCE5Input
- Two strings `s` and `t`.

## \uD83D\uDCE4Output
- An integer representing the minimum number of characters that need to be appended to the end of `s` so that `t` becomes a subsequence of `s`.

# \u2705Approach:

1. **Two Pointers**: Imagine you have two pointers, one for each string. One pointer starts at the beginning of `s` (let's call it `i`), and the other at the beginning of `t` (let's call it `j`).

2. **Matching Characters**: 
   - You move through both strings, one character at a time.
   - If the characters pointed to by `i` and `j` match (i.e., `s[i] == t[j]`), it means you've found this character of `t` in `s`, so you move both pointers forward (`i` and `j`).
   - If they don't match, you only move the pointer for `s` forward (`i`), because you need to keep looking for the current character of `t` in the remaining part of `s`.

3. **End of the Loop**:
   - If you finish scanning `s` and there are still some characters left in `t` (i.e., `j` is not at the end of `t`), it means those characters were not found in `s`.
   - The number of characters remaining in `t` that were not matched is `len(t) - j`.

# Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:

For `s = "abcde"` and `t = "aeb"`:

1. `i = 0, j = 0`: `s[i] = 'a'`, `t[j] = 'a'` -> match, move both pointers (`i = 1, j = 1`)
2. `i = 1, j = 1`: `s[i] = 'b'`, `t[j] = 'e'` -> no match, move `i` (`i = 2`)
3. `i = 2, j = 1`: `s[i] = 'c'`, `t[j] = 'e'` -> no match, move `i` (`i = 3`)
4. `i = 3, j = 1`: `s[i] = 'd'`, `t[j] = 'e'` -> no match, move `i` (`i = 4`)
5. `i = 4, j = 1`: `s[i] = 'e'`, `t[j] = 'e'` -> match, move both pointers (`i = 5, j = 2`)

At this point, `i` has reached the end of `s`, but `j` has not reached the end of `t`. The remaining character in `t` is "b", so we need to append this character to `s`. Therefore, the output is `1`.

# Code:
```Python []
class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        i, j = 0, 0  # Start both pointers at the beginning of s and t
        
        while i < len(s) and j < len(t):  # Continue until one of the strings is fully scanned
            if s[i] == t[j]:  # If characters match
                j += 1  # Move the pointer in t forward
            i += 1  # Always move the pointer in s forward
        
        return len(t) - j  # The number of characters in t not matched in s
               
```
```Java []
public class Solution {
    public int appendCharacters(String s, String t) {
        int i = 0, j = 0;  // Start both pointers at the beginning of s and t
        
        while (i < s.length() && j < t.length()) {  // Continue until one of the strings is fully scanned
            if (s.charAt(i) == t.charAt(j)) {  // If characters match
                j++;  // Move the pointer in t forward
            }
            i++;  // Always move the pointer in s forward
        }
        
        return t.length() - j;  // The number of characters in t not matched in s
    }
}

```
```C++ []
class Solution {
public:
    int appendCharacters(string s, string t) {
        int i = 0, j = 0;  // Start both pointers at the beginning of s and t
        
        while (i < s.length() && j < t.length()) {  // Continue until one of the strings is fully scanned
            if (s[i] == t[j]) {  // If characters match
                j++;  // Move the pointer in t forward
            }
            i++;  // Always move the pointer in s forward
        }
        
        return t.length() - j;  // The number of characters in t not matched in s
    }
};

```

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA