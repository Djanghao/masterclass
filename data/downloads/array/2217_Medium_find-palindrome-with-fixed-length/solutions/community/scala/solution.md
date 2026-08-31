# [Scala] 4 liner using toString / toLong

**Author:** Abastro
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1888538/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1888538/)

---

Excluding silly `object Solution {}` and method definition part.
Read other links if you want explanation on why this addition works.
In this solution, `toString` and `toLong` is used for for brevity. (If you think about it, palindrome is about strings, not numbers)
For a string `s` denoting upper half of the palindrome, both `s.dropRight (1) ++ s.reverse` and `s ++ s.reverse` makes original palindrome. Choose appropriately depending on `intLength`.

```scala
object Solution {
  def kthPalindrome (queries: Array[Int], intLength: Int): Array[Long] = {
    val begin = Iterator.fill ((intLength - 1) / 2) (10L).product
    queries map (n => if (n > begin * 9) -1 else (begin + n - 1).toString match {
      case str => (str.dropRight (intLength & 1) ++ str.reverse).toLong
    })
  }
}
```