# Scala FP: 5 lines

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5678331/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5678331/)

---

# Code
```scala []
object Solution {
  def fractionAddition(expression: String): String = {
    val fractions = expression.split('/').flatMap(dns => Array(dns.takeWhile(_.isDigit), dns.dropWhile(_.isDigit))).flatMap(_.toIntOption).grouped(2).toList
    val commonDenominator = fractions.map(_.last).product
    val numeratorsSum = fractions.map(nd => nd.head * commonDenominator / nd.last).sum
    val gcd = BigInt(numeratorsSum).gcd(commonDenominator)
    
    s"${numeratorsSum / gcd}/${commonDenominator / gcd}" 
  }
}
```