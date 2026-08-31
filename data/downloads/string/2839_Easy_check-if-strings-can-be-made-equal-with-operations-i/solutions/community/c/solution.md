# ✅ Easy & clean Solution in C++ 🔥

**Author:** EmnAs_PW
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3994592/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3994592/)

---

Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

```
class Solution {
public:
    bool canBeEqual(string s1, string s2) {
        if(s1[0]!=s2[0]){
            swap(s1[0],s1[2]);
        }
        if(s1[1]!=s2[1]){
            swap(s1[1],s1[3]);
        }
        return s1==s2;
    }
};
```

![image](./images/0.png)

