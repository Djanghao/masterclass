# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/5085926/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/5085926/)

---

# Game Plan

Formulate the transformed string `t` by greedily transforming each `i`<sup>th</sup> character of the input string `s` to the character `'a'` while we `have` what we `need` for each transformation, ie. `need` is the minimum of the asbolute ascii ordinal value difference between `s[i] \uD83D\uDC49 'a'` calculated **with** and **without** wrap-around.

When we can no longer update an `i`<sup>th</sup> character of the input string `s`, then we completely exhaust what we `have` and thus reduce `s[i]` as much as possible, ie. `t[i] = s[i] - have` and we set `have = 0`.

# Code

*Kotlin*
```
class Solution {
    fun getSmallestString(s: String, have_: Int): String {
        var have = have_
        var t = s.toCharArray()
        for (i in 0 until s.length) {
            var a = 'z'.toInt() - s[i].toInt() + 1  // with wrap-aroud
            var b = s[i].toInt() - 'a'.toInt()      // without wrap-around
            var need = Math.min(a, b)
            if (need <= have) {
                t[i] = 'a'; have -= need
            } else {
                t[i] = (s[i].toInt() - have).toChar(); have = 0
            }
        }
        return t.joinToString("")
    }
}
```

*Javascript*
```
let getSmallestString = (s, have, t = s.split(''), ord = c => c.charCodeAt(0)) => {
    for (let i = 0; i < s.length; ++i) {
        let a = ord('z') - ord(s[i]) + 1,  // with wrap-around
            b = ord(s[i]) - ord('a');      // without wrap-around
        let need = Math.min(a, b);
        if (need <= have)
            t[i] = 'a', have -= need;
        else
            t[i] = String.fromCharCode(ord(s[i]) - have), have = 0;
    }
    return t.join('');
};
```

*Python3*
```
class Solution:
    def getSmallestString(self, s: str, have: int) -> str:
        t = list(s)
        for i in range(len(s)):
            a = ord('z') - ord(s[i]) + 1   # with wrap-around
            b = ord(s[i]) - ord('a')       # without wrap-around
            need = min(a, b)
            if need <= have:
                t[i] = 'a'; have -= need
            elif have:
                t[i] = chr(ord(t[i]) - have); have = 0
        return ''.join(t)
```

*Rust*
```
use std::cmp::min;
impl Solution {
    pub fn get_smallest_string(s: String, mut have: i32) -> String {
        let mut t = s.chars().collect::<Vec<char>>();
        for (i, c) in s.chars().enumerate() {
            let a = 'z' as i32 - c as i32 + 1;  // with wrap-around
            let b = c as i32 - 'a' as i32;      // without wrap-around
            let need = min(a, b);
            if need <= have {
                t[i] = 'a'; have -= need;
            } else {
                t[i] = (c as i32 - have) as u8 as char; have = 0;
            }
        }
        t.into_iter().collect::<String>()
    }
}
```

*C++*
```
class Solution {
public:
    string getSmallestString(string s, int have) {
        auto t{ s };
        for (auto i{ 0 }; i < s.size(); ++i) {
            auto a = 'z' - s[i] + 1,  // with wrap-around
                 b = s[i] - 'a';      // without wrap-around
            auto need = min(a, b);
            if (need <= have)
                t[i] = 'a', have -= need;
            else
                t[i] -= have, have = 0;
        }
        return t;
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF
```
# 6:56pm - 

# distance is the absolute ascii ordinal value difference between i-th characters of s and t
# then greedily consume the closest we can get to 'a' as possible, taking the optimal "path"
# ie. forwards or backwards through the alphabet a..z
# question: what does "wrap around" cost?
# 

# class Solution:
#     def getSmallestString(self, s: str, have: int) -> str:
#         t = list(s)
#         for i in range(len(s)):
#             while have and t[i] != 'a':
#                 have -= 1; t[i] = chr(ord(t[i]) - 1)
#         return ''.join(t)

# oops, remember wrap-around -- TODO: make a function

# 7:07pm - ok so wrap-around actually only makes sense if we can reach 'a'
# otherwise it is counterproductive to increase

# we let's consider the cases:


# a - cost of not wrap around is ord diff to 'a'
# b - cost of wrap around is the ord diff to 'z' + 1

# class Solution:
#     def getSmallestString(self, s: str, have: int) -> str:
#         t = list(s)
#         for i in range(len(s)):
#             a = abs(ord(s[i]) - ord(t[i]))  # \uD83D\uDC7B oops! \uD83D\uDCA9
#             b = ord('z') - ord(s[i]) + 1
#             lo = min(a, b)
#             print(f'i: {i}  lo: {lo}  a: {a}  b: {b}')
#             if have >= lo:
#                 print(f'before  i: {i}  have: {have}  lo: {lo}')
#                 have -= lo; t[i] = 'a'
#                 print(f'after  i: {i}  have: {have}  lo: {lo}')
#             elif have:
#                 print(f'ng! before  i: {i}  have: {have}')
#                 t[i] = chr(ord(t[i]) - have); have = 0
#                 print(f'ng! after  i: {i}  have: {have}')
#             print()
#         return ''.join(t)

# oops, I was chasing down a small typo, a is actually the diff to 'a' LOL

# class Solution:
#     def getSmallestString(self, s: str, have: int) -> str:
#         t = list(s)
#         for i in range(len(s)):
#             a = abs(ord('a') - ord(s[i]))
#             b = ord('z') - ord(s[i]) + 1
#             lo = min(a, b)
#             if lo <= have:
#                 t[i] = 'a'; have -= lo
#             elif have:
#                 t[i] = chr(ord(t[i]) - have); have = 0
#         return ''.join(t)

# class Solution:
#     def getSmallestString(self, s: str, have: int) -> str:
#         t = list(s)
#         for i in range(len(s)):
#             a = abs(ord('a') - ord(s[i]))
#             b = ord('z') - ord(s[i]) + 1
#             need = min(a, b)
#             if need <= have:
#                 t[i] = 'a'; have -= need
#             elif have:
#                 t[i] = chr(ord(t[i]) - have); have = 0
#         return ''.join(t)

# class Solution:
#     def getSmallestString(self, s: str, have: int) -> str:
#         t = list(s)
#         for i in range(len(s)):
#             a = ord('z') - ord(s[i]) + 1   # with wrap-around
#             b = abs(ord('a') - ord(s[i]))  # without wrap-around
#             need = min(a, b)
#             if need <= have:
#                 t[i] = 'a'; have -= need
#             elif have:
#                 t[i] = chr(ord(t[i]) - have); have = 0
#         return ''.join(t)

class Solution:
    def getSmallestString(self, s: str, have: int) -> str:
        t = list(s)
        for i in range(len(s)):
            a = ord('z') - ord(s[i]) + 1   # with wrap-around
            b = ord(s[i]) - ord('a')       # without wrap-around
            need = min(a, b)
            if need <= have:
                t[i] = 'a'; have -= need
            elif have:
                t[i] = chr(ord(t[i]) - have); have = 0
        return ''.join(t)
```