# Kotlin | Just check all directions from the King

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/5421220/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/5421220/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The king is attacked from the first queen in a given direction.

# Approach
<!-- Describe your approach to solving the problem. -->
Mark all queens on the board. Then at the position of the king go in every direction until you either go outside of the board or find a queen. If a queen is found add it to the output list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
    val directions:Array<IntArray> = arrayOf(
        intArrayOf(-1,0),
        intArrayOf(-1,1),
        intArrayOf(0,1),
        intArrayOf(1,1),
        intArrayOf(1,0),
        intArrayOf(1,-1),
        intArrayOf(0,-1),
        intArrayOf(-1,-1),
    )

    fun isOnBoard(row: Int, col: Int): Boolean {
        return min(row, col) >= 0 && max(row, col) < 8
    }

    fun addToList(king:IntArray, hasQueen: Array<IntArray>, sol:ArrayList<List<Int>>): Boolean {
        for(direction in directions){
            var row:Int = king[0] + direction[0]
            var col:Int = king[1] + direction[1]

            while(isOnBoard(row, col)){
                if(hasQueen[row][col] == 1){
                    sol.add(listOf(row, col))
                    
                    break
                }

                row += direction[0]
                col += direction[1]
            }
        }

        return false

    }

    fun queensAttacktheKing(queens: Array<IntArray>, king: IntArray): List<List<Int>> {
        val sol:ArrayList<List<Int>> = ArrayList()

        val hasQueen:Array<IntArray> = Array(8){IntArray(8){0}}
        queens.forEach{ it -> hasQueen[it[0]][it[1]] = 1}

        addToList(king, hasQueen, sol)

        return sol
    }
}
```