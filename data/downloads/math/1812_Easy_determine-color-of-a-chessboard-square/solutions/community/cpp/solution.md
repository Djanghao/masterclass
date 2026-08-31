# C++ solution ||100% faster

**Author:** anubhavbaner7
**Votes:** 6
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1158145/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1158145/)

---

```
  bool squareIsWhite(string coordinates) {
       int x=(int)(coordinates[0]-'a');
        int y=(int)(coordinates[1]-'0');
        if((x%2==0&&y%2==0)||(x%2!=0&&y%2!=0))
            return true;
        else
            return false;
    }
```