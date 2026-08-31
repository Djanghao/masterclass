# Scala Functional Programming

**Author:** fairgrieve
**Votes:** 3
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/775404/](https://leetcode.com/problems/basic-calculator-ii/solutions/775404/)

---

```
object Solution {
  private val Additive = Array('+', '-')
  private val Multiplicative = Array('*', '/')

  def calculate(s: String): Int = {
    val evals = s.split(Additive).map { t =>
      val ints = t.split(Multiplicative).map(_.trim.toInt)
      t.filter(Multiplicative.contains).zip(ints.tail).foldLeft(ints.head) {
        case (left, ('*', right)) => left * right
        case (left, ('/', right)) => left / right
      }
    }
    s.filter(Additive.contains).zip(evals.tail).foldLeft(evals.head) {
      case (left, ('+', right)) => left + right
      case (left, ('-', right)) => left - right
    }
  }
}
```