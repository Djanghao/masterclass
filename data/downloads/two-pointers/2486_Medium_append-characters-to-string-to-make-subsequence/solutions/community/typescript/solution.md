# Two-Pointer Technique || Beats 97% users with python3  & 89% with java || C++ || typescript

**Author:** SanketSawant18
**Votes:** 2
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249220/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249220/)

---

# Approach
Two-Pointer Technique

# Complexity
- Time complexity: O(n+m)

- Space complexity: O(1)

# Explanation
1. **Initialization:**

- int n = t.length();: Store the length of t in n.
- int tPointer = 0;: Initialize a pointer for t to keep track of how much of t we have matched so far.
2. **Iterate Through s:**

- for (int sPointer = 0; sPointer < s.length(); sPointer++): Loop through each character in s using sPointer as the index.
- Inside the loop:
    - if (tPointer < n && s.charAt(sPointer) == t.charAt(tPointer)): Check if the current character of s matches the current character of t pointed by tPointer.
    - If they match, tPointer++: Move the tPointer to the next character in t.
3. **Calculate Result:**

- After the loop, n - tPointer gives the number of characters in t that have not been matched in s.
- This is the number of characters we need to append to s to make t a subsequence.

---

```java []
class Solution {
    public int appendCharacters(String s, String t) {
        int n = t.length();
        int tPointer = 0;

        // Iterate through the characters of s using an index-based loop
        for (int sPointer = 0; sPointer < s.length(); sPointer++) {
            // Check if the characters match
            if (tPointer < n && s.charAt(sPointer) == t.charAt(tPointer)) {
                tPointer++;
            }
        }

        // Return the number of characters that need to be appended to s
        return n - tPointer;
    }
}

```
```python3 []
class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        n = len(t)
        s_iter = iter(s)
        for i,c in enumerate(t):
            if c not in s_iter:
                return n-i
        return 0
```
```C++ []
class Solution {
public:
    int appendCharacters(string s, string t) {
        int n = t.length();
        int tPointer = 0;

        // Iterate through the characters of s using an index-based loop
        for (int sPointer = 0; sPointer < s.length(); sPointer++) {
            // Check if the characters match
            if (tPointer < n && s[sPointer] == t[tPointer]) {
                tPointer++;
            }
        }

        // Return the number of characters that need to be appended to s
        return n - tPointer;
    }
};

```
```Typescript []
function appendCharacters(s: string, t: string): number {
    const n = t.length;
    let tPointer = 0;

    // Iterate through the characters of s using an index-based loop
    for (let sPointer = 0; sPointer < s.length; sPointer++) {
        // Check if the characters match
        if (tPointer < n && s[sPointer] === t[tPointer]) {
            tPointer++;
        }
    }

    // Return the number of characters that need to be appended to s
    return n - tPointer;
}

```
