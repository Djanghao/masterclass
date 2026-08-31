# Scala | Clean Recursive

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/988807/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/988807/)

---

Hope, it is already self explanatory !!!
```
def diffWaysToCompute(input: String): List[Int] = {
	val ans = ListBuffer[Int]()

	def isOperator(ch: Char): Boolean = ch == '+' || ch == '-' || ch == '*'
	def evaluate(leftOp: Int, operator: Char, rightOp: Int): Int = operator match {
		case '+' => leftOp + rightOp
		case '-' => leftOp - rightOp
		case '*' => leftOp * rightOp
	}

	for((ch, i) <- input.zipWithIndex) {
		if(isOperator(ch)) {
			val left = diffWaysToCompute(input.substring(0, i))
			val right = diffWaysToCompute(input.substring(i+1))

			for(leftOp <- left)
				for(rightOp <- right)
					ans.addOne(evaluate(leftOp, ch, rightOp))
		}
	}
	if(ans.size == 0) ans.addOne(input.toInt)
	ans.toList
}
```