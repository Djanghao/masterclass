# [Kotlin] Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/1470337/](https://leetcode.com/problems/expression-add-operators/solutions/1470337/)

---

```
class Solution {
    enum class Operator {
        NONE, ADD, SUB, MUL
    }
    data class Result(
        val resValue: Long, 
        val resString: String, 
        val lastBlockMultiplier: Long,
        val lastNumber: Long) {
        
        private val lastBlockRes: Long = lastBlockMultiplier * lastNumber
        
        fun add(op: Operator, num: Long): Result? {
            return when (op) {
                Operator.ADD -> Result(resValue + num, "$resString+$num", 1, num)
                Operator.SUB -> Result(resValue - num, "$resString-$num", -1, num)
                Operator.MUL -> Result(resValue - lastBlockRes + lastBlockRes * num,
                                       "$resString*$num", lastBlockRes, num)
                Operator.NONE -> if (lastNumber == 0L) { null } else {
                    Result(resValue - lastBlockRes + lastBlockMultiplier * (lastNumber * 10 + num),
                           "$resString$num", lastBlockMultiplier, lastNumber * 10 + num)
                }
            }
        }
    }
    fun addOperators(num: String, target: Int): List<String> {
        val res = mutableListOf<String>()
        
        fun addOperatorBefore(index: Int, prevResult: Result) {
            if (index == num.length) {
                if (prevResult.resValue == target.toLong()) {
                    res.add(prevResult.resString)
                }
                return
            }
            val digitNum = (num[index] - '0').toLong()
            val results = Operator.values().fold(mutableListOf<Result>()) { acc, op ->
                acc.apply { prevResult.add(op, digitNum)?.let { add(it) } }
            }
            results.forEach {
                addOperatorBefore(index + 1, it)
            }
        }
        
        val digitNum = (num[0] - '0').toLong()
        addOperatorBefore(1, Result(digitNum, "${num[0]}", 1L, digitNum))
        
        return res
    }
}
```