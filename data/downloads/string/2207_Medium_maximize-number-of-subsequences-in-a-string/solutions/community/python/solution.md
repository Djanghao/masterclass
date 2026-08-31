# [Java/C++/Python] Straight Forward Solution

**Author:** lee215
**Votes:** 191
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/1863900/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/1863900/)

---

# **Intuition**
If we add `pattern[0]`, the best option is to add at the begin.
If we add `pattern[1]`, the best option is to add at the end.
<br>

# **Explanation**
Firstly we'll try to find the number of subquence `pattern` in the current string `text`
Iterate every character `c` from input string `text`,
`cnt1` means the count of character `pattern[0]`,
`cnt2` means the count of character `pattern[1]`.

If `c == pattern[1]`, 
it can build up string pattern with every `pattern[0]` before it,
so we update `res += cnt1` as well as `cnt2++`

If `c == pattern[0]`, 
we simply increment `cnt1++`.

Then we consider of adding one more character:

If we add `pattern[0]`,
the best option is to add at the begin,
`res += cnt2`

If we add `pattern[1]`,
the best option is to add at the end,
`res += cnt1`
<br>

# **Tip**
Use two `if` in my solution,
to handle the corner case where `pattern[0] == pattern[1]`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long maximumSubsequenceCount(String s, String pattern) {
        long res = 0, cnt1 = 0, cnt2 = 0;
        for (int i = 0; i < s.length(); ++i) {   
            if (s.charAt(i) == pattern.charAt(1)) {   
                res += cnt1; 
                cnt2++;
            }
            if (s.charAt(i) == pattern.charAt(0)) {   
                cnt1++;
            }
        }
        return res + Math.max(cnt1, cnt2);
    }
```
**C++**
```cpp
    long long maximumSubsequenceCount(string text, string pattern) {
        long long res = 0, cnt1 = 0, cnt2 = 0;
        for (char& c: text) {   
            if (c == pattern[1])
                res += cnt1, cnt2++;
            if (c == pattern[0])
                cnt1++;
        }
        return res + max(cnt1, cnt2);
    }
```
**Python**
```py
    def maximumSubsequenceCount(self, text, pattern):
        res = cnt1 = cnt2 = 0
        for c in text:
            if c == pattern[1]:
                res += cnt1
                cnt2 += 1
            if c == pattern[0]:
                cnt1 += 1
        return res + max(cnt1, cnt2)
```
<br>

**Follow-up**
You can add either character anywhere in text exactly **`K`** times. 
Return the result.
