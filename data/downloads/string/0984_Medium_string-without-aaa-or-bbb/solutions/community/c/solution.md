# C++ 6 line Easy  Code || 100%

**Author:** code_1501
**Votes:** 14
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/1805723/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/1805723/)

---

****Please upvote me :)****

```
    string strWithout3a3b(int A, int B) {
        string res;
        while (A && B) {
            if (A > B) {
                res += "aab";
                A--;
            } else if (B > A) {
                res += "bba";
                B--;
            } else {
                res += "ab";
            }
            A--;
            B--;
        }
        while (A--) res += "a";
        while (B--) res += "b";
        return res;
    }
```