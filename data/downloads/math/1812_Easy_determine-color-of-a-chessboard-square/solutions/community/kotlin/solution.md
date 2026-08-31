# Kotlin one line solution

**Author:** Roman_Samoilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/2376283/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/2376283/)

---

```
class Solution {
    fun squareIsWhite(coordinates: String) = (coordinates[0].toInt() + coordinates[1].toInt()) % 2 != 0
}
```