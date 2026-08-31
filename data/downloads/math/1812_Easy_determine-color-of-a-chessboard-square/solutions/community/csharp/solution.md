# 🐌 C# - modulo

**Author:** user7166Uf
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/2142644/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/2142644/)

---

```
public class Solution
{
    public bool SquareIsWhite(string coordinates)
    {
        int x = coordinates[0] - 'a';
        int y = coordinates[1] - '1';
        int modulo = (x + y) % 2;
        return modulo is 1;
    }
}
```

tl;dr 
```
public class Solution
{
    public bool SquareIsWhite(string coordinates) 
        => (coordinates[0] - 'a' + coordinates[1] - '1') % 2 is 1;
}
```
