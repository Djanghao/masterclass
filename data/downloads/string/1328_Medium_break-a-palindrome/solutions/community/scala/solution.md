# Scala solution, beats 100%

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/2686737/](https://leetcode.com/problems/break-a-palindrome/solutions/2686737/)

---

```
object Solution {
  def breakPalindrome(palindrome: String): String = {

    if (palindrome.length == 1) {
      return ""
    }

    val arr = palindrome.toCharArray
    val mid = arr.length / 2

    for (i <- 0 until mid) {

      if (arr(i) != 'a') {

        arr(i) = 'a'

        val newString = new String(arr)

        if (newString.equals(palindrome)) {

          arr(arr.length - 1) = 'b'

          return new String(arr)
        }

        return new String(arr)
      }
    }

    val newString = new String(arr)

    if (newString.equals(palindrome)) {

      arr(arr.length - 1) = 'b'

      return new String(arr)
    }

    newString
  }
}
```