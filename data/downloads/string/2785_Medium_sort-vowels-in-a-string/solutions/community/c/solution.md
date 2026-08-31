# C++ || frequency count and bucket sort || TC O(n), SC O(1) || fast

**Author:** heder
**Votes:** 5
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/3803057/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/3803057/)

---

# Approach 1: frequency count and bucket sort ([12ms](https://leetcode.com/submissions/detail/1098221332/))
Not quite sure if we should call this bucket sort, but this is just looking at the relevant frequency buckets in order. It's kinda awesome what code the compiler generates for the ```isVowel``` function: https://godbolt.org/z/6YsPq1ebc

```cpp
    static bool isVowel(char ch) {
        return
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ||
            ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }

    static string sortVowels(string s) {
        array<int, 128> cnt = {};
        for (char ch : s) ++cnt[ch];

        int w = 0;
        for (char ch : "AEIOUaeiou")
            while (cnt[ch]--) {
                while (!isVowel(s[w])) ++w;
                s[w++] = ch;
            }
        
        return s;
    }
```

**Complexity Analysis**
Let $$n$$ be the length of the input string then the

* Time complexity is $$O(n)$$ as we only need to scan the input twice and the

* Space comlexity is $$O(1)$$ as we only keep a fixed size frequency count array and some loop variables.

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
