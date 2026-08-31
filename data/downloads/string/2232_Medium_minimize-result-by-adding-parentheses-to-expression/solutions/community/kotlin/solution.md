# Kotlin easy to understand

**Author:** tommytimmy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/3478375/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/3478375/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
o(n)

- Space complexity:
o(1)

# Code
```
class Solution {
    fun minimizeResult(expression: String): String {
        
        val split = expression.split("+")
        val left = split[0]
        val right = split[1]

        var num = Integer.MAX_VALUE
        var result = "($left + $right)"

        for (i in 0 until left.length) {
            val leftMul = if (left.substring(0,i).isEmpty()) 1 else left.substring(0,i).toInt()
            val leftNum = left.substring(i).toInt()

            for (j in 1..right.length) {
                val rightNum = right.substring(0,j).toInt() 
                val rightMul = if (right.substring(j).isEmpty()) 1 else right.substring(j).toInt()               
                //println("$leftMul($leftNum+$rightNum)$rightMul")
                val sum = leftMul * (leftNum + rightNum) * rightMul

                if (sum < num) {
                    result = "${left.substring(0,i)}($leftNum+$rightNum)${right.substring(j)}"
                    num = sum
                }
            }
        }

        return result
    }

}
```