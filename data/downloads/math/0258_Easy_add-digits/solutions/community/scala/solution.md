# Scala compact O(1) solutions

**Author:** tumakha
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-digits/solutions/756687/](https://leetcode.com/problems/add-digits/solutions/756687/)

---

```scala
  def addDigits(num: Int): Int = (num - 1) % 9 + 1
 ```
```scala
  def addDigits(num: Int): Int = num - (num - 1) / 9 * 9
```