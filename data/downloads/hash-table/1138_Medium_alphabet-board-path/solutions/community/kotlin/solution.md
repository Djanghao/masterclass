# kotlin O(N) beats 100%

**Author:** user3734yx
**Votes:** 0
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/2592723/](https://leetcode.com/problems/alphabet-board-path/solutions/2592723/)

---

```
class Solution {
    fun alphabetBoardPath(target: String): String {
        
        var currPosition = 0
        val sb = StringBuilder()
        for(c in target) {
            val targetPosition = c - 'a'
            if (targetPosition == currPosition) {
                sb.append('!')
                continue
            }
            val cRow = currPosition/5
            val cCol = currPosition%5
            val tRow = targetPosition/5
            val tCol = targetPosition%5
            
            repeat(cCol-tCol) {sb.append('L')}
            repeat(cRow-tRow) {sb.append('U')}
            repeat(tCol-cCol) {sb.append('R')}
            repeat(tRow-cRow) {sb.append('D')}
            
            currPosition = targetPosition
            sb.append('!')
        }
        return sb.toString()
    }
}
```