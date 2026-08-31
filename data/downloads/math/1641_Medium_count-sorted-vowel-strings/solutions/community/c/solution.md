# Intuitive C++ Solution (With explaination)

**Author:** Yashjain
**Votes:** 73
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/918613/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/918613/)

---

The solution uses DP but in a way that I found much more intuitive. We start the solution from the right i.e. generate suffixes and keep prepending it to either a, e, i, o, or u.
a = number of strings that start with a
e = number of strings that start with e
i = number of strings that start with i
o = number of strings that start with o
u = number of strings that start with u

So, we can simply keep appending the string that starts with:
1. a to only string that has a at the beginning.
2. e to string that either has a or e at the beginning.
3. i to string that has a, e or i at the beginning.
.... And so on

```
int countVowelStrings(int n) {
        int a = 1, e = 1, i = 1, o = 1, u = 1;
        for(int j=2;j<=n;j++){
            a = a + e + i + o + u;
            e = e + i + o + u;
            i = i + o + u;
            o = o + u;
            u = u;
        }
        return a + e + i + o + u;
    }
```
If you got this, try https://codeforces.com/problemset/problem/166/E, it uses a similar approach.