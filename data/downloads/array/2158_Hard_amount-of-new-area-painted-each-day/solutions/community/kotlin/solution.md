# Kotlin | 2 Methods Explained

**Author:** Mahoraga_JJK
**Votes:** 0
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/4376779/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/4376779/)

---

# Approach 1 Beats 50%
Approach 1 mainted a boolean to know which place has been painted 
# Code
```
class Solution {
    fun amountPainted(paint: Array<IntArray>): IntArray {
        val painted = Array(50_001) {false}
        val workedlog = IntArray(paint.size) {0}
        paint.forEachIndexed { index, log ->
            var i = log[0]
            var count = 0
            while (i<log[1]) {
                if (painted[i]==false) {
                    painted[i]=true
                    count++
                }
                i++
            }
            workedlog[index]=count
        }
        return workedlog
    }
}
```
# Approach 2 Beats 100% 
Approach 2 mainted an int array to store till which area it has been painted from that spot
# Code
```
class Solution {
    fun amountPainted(paint: Array<IntArray>): IntArray {
        val paintedTill = Array(50_001) {-1}
        val workedlog = IntArray(paint.size) {0}
        paint.forEachIndexed { index, log ->
            var curr = log[0]
            var till = log[1]
            var count = 0
            while (curr<till) {
                if (paintedTill[curr]==-1) {
                    paintedTill[curr]=till
                    count++
                    curr++
                }
                else {
                    val prev= curr
                    curr = paintedTill[curr]
                    paintedTill[prev] = max(paintedTill[prev], till)
                }
                
            }
            workedlog[index]=count
        }
        return workedlog
    }
}
```