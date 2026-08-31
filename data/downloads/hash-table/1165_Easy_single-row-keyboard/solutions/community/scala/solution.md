# Simple solution

**Author:** FelAl
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/3357148/](https://leetcode.com/problems/single-row-keyboard/solutions/3357148/)

---

```
object Solution {
  def calculateTime(keyboard: String, word: String): Int = {
    var sum = 0
    var prev = ""
    for(letter <- word) {
      val ind = keyboard.indexOf(letter.toString)
      if(prev == "") {
        prev = letter.toString
        sum = sum + ind
      }
      if(prev != "") {
        val indPrev = keyboard.indexOf(prev)
        val diff = math.abs(ind - indPrev)
        prev = letter.toString
        sum = sum + diff
      }
    }
    sum
  }
}
```