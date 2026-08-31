# Kotlin beats 100% - Plain school math implementation

**Author:** lewisHamilton
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/3306802/](https://leetcode.com/problems/solve-the-equation/solutions/3306802/)

---


# Complexity
- Time complexity:
O(n)

# Code
```
class Solution {

    private fun parseX(equation: String): Long {
        var x = 0L
        for((i, c) in equation.withIndex()) {
            if(c == 'x') {
                var sign = 1
                var prevIndex = i-1
                while(prevIndex>=0) {
                    if(equation[prevIndex] == '+' || equation[prevIndex] == '-') {
                        if(equation[prevIndex] == '-') {
                            sign = -1
                        } else {
                            sign = 1
                        }
                        prevIndex++
                        break
                    }
                    prevIndex--
                }
                if(prevIndex < 0) {
                    prevIndex = 0
                }
                val substring = if(prevIndex <= i) equation.substring(prevIndex, i) else ""
                val mag = if(substring.isEmpty()) 1 else substring.toLong()
                // println("prevIndex = $prevIndex i = $i $sign $substring MAG X SIGN = ${mag * sign}")
                x += (mag * sign).toLong()
            }
        }
        println(">>> parseX($equation) = $x")
        return x
    }

    private fun parseConst(equation: String): Long {
        var cons = 0L
        var sign = 1
        var mag = 0L
        for(c in equation) {
            // println("Parsing $c cons = $cons sign = $sign mag = $mag")
            if(c == 'x' || c == '+' || c == '-') {
                if(c == 'x') {
                    mag = 0
                }
                if(mag > 0) {
                    cons += (mag * sign)
                }
                mag = 0
                sign = if(c == '+' || c == 'x') 1 else -1
            } else {
                mag = mag * 10 + (c-'0')
            }
        }
        if(mag > 0) {
            cons += (mag * sign)
        }
        println(">>> parseConst($equation) = $cons")
        return cons
    }

    fun solveEquation(equation: String): String {
        val eqnSplit = equation.split("=")
        var xlhs = parseX(eqnSplit[0])
        var clhs = parseConst(eqnSplit[0])
        var xrhs = parseX(eqnSplit[1])
        var crhs = parseConst(eqnSplit[1])
        if(xlhs == xrhs && clhs == crhs) {
            return "Infinite solutions"
        }
        var xisleft = true
        println("Before X Move X(lhs, rhs) C(lhs, rhs)= X($xlhs, $xrhs) C($clhs, $crhs)")
        if(xlhs > xrhs) {
            xlhs -= xrhs
            xrhs = 0
            crhs -= clhs
            clhs = 0
        } else {
            xrhs -= xlhs
            xlhs = 0
            clhs -= crhs
            crhs = 0
            xisleft = false
        }
        println("Before X Move X(lhs, rhs) C(lhs, rhs) = X($xlhs, $xrhs) C($clhs, $crhs)")
        if(xisleft) {
            if(xlhs == 0L){
                return "No solution"
            }
            return "x=${crhs/xlhs}"
        }else {
            if(xrhs == 0L){
                return "No solution"
            }
            return "x=${clhs/xrhs}"
        }
    }
}
```