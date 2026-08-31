# JS, Python, Java, C++ | Easy Solution w/ Explanation

**Author:** sgallivan
**Votes:** 123
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/1099494/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/1099494/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The trick to this problem is realizing that since we're dealing with **subsequences** and only **2** possible characters, *the answer cannot possible be larger than* ***2***. In fact, the answer will always be **2** unless **S** is already a **palindrome**, in which case the answer is **1**, or **S** is an empty string, in which case the answer is **0**.

It's important to understand the distinction between a **substring** and a **subsequence**. A substring is a contiguous block of characters between one index and and another in the input string. A subsequence, which we're dealing with here, is any sequence of characters from the string, as long as they're in their original order. But you can pick and choose which characters you want in a subsequence, even if there are gaps between.

So in this situation I could, for example, create a subsequence of every single **'a'** in the string. A string of all **'a'** s would naturally be **palindromic**, so it could be removed from the original string. Since there are only **'a'** s and **'b'** s, that would leave only **'b'** s remaining in the original string, which could be then removed in a second operation.
```js
     S = "b b a a b a a a"                 // Input string
              ^ ^   ^ ^ ^                  // Characters for the first subsequence
   sub = "    a a   a a a" = "a a a a a"   // Palindromic, so it can be removed
     S = "b b     b      " = "b b b"       // Remaining string is now palindromic and can be removed
```

---

#### ***Implementation:***

Python can more easily just compare the string with its reverse self via index access shorthand.

---

#### ***Javascript Code:***
```javascript
var removePalindromeSub = function(S) {
    if (!S) return 0
    for (let i = 0, j = S.length - 1; i < j; i++, j--)
        if (S.charAt(i) !== S.charAt(j)) return 2
    return 1
};
```

---

#### ***Python Code:***
```python
class Solution:
    def removePalindromeSub(self, S: str) -> int:
        if not S: return 0
        return 1 if S == S[::-1] else 2
```

---

#### ***Java Code:***
```java
class Solution {
    public int removePalindromeSub(String S) {
        if (S.length() == 0) return 0;
        for (int i = 0, j = S.length() - 1; i < j; i++, j--)
            if (S.charAt(i) != S.charAt(j)) return 2;
        return 1;
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    int removePalindromeSub(string S) {
        if (S == "") return 0;
        for (int i = 0, j = S.size() - 1; i < j; i++, j--)
            if (S[i] != S[j]) return 2;
        return 1;
    }
};
```