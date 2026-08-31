# EASY 0ms solution C++

**Author:** adwaith360x
**Votes:** 50
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/3750157/](https://leetcode.com/problems/reverse-string-ii/solutions/3750157/)

---



# Code
```
class Solution {
public:
    string reverseStr(string s, int k) {
        int n = s.size();
        for (int i = 0; i < n; i += 2 * k) {
            if (i + k <= n) {
                reverse(s.begin() + i, s.begin() + i + k);
            } else {
                reverse(s.begin() + i, s.end());
            }
        }
        return s;
    }
};

```
> ***PLEASE UPVOTE IF YOU FOUND THIS HELPFUL.***
![image.png](./images/0.png)


