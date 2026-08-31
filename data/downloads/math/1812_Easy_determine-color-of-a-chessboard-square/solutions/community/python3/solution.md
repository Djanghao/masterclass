# [Python/Python3 | Simple and Easy code | self-explanatory

**Author:** Sukhdev_143
**Votes:** 14
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1140948/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1140948/)

---

Note:- _If you have any doubt, Free to ask me, Please **Upvote** if you like it._
```
class Solution:
    def squareIsWhite(self, c: str) -> bool:
        if c[0] in 'aceg':
            return int(c[1])%2==0
        elif c[0] in 'bdfh':
            return int(c[1])%2==1
        return False
```