# Kotlin 1-liner

**Author:** dzmtr
**Votes:** 1
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/1724906/](https://leetcode.com/problems/self-dividing-numbers/solutions/1724906/)

---

```
fun selfDividingNumbers(left: Int, right: Int) = (left..right).filter { num -> "$num".all { (it != '0') && (num % (it - '0') == 0) } }
```