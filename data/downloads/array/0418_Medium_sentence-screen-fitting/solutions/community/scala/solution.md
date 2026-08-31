# scala functional

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/2666790/](https://leetcode.com/problems/sentence-screen-fitting/solutions/2666790/)

---

```
  import scala.annotation.tailrec

  object Solution {
    def wordsTyping(sentence: Array[String], rows: Int, cols: Int): Int = {
      fill(
        words = sentence.toList,
        rows = rows,
        cols = cols,
        remainingWords = sentence.toList)
    }

    @tailrec
    def fill(words: List[String], rows: Int, cols: Int, remainingWords: List[String], lastPos: Int = 0, lastRow: Int = 0, times: Int = 0): Int = {
      remainingWords match {
        // overflow and we have more rows
        case word :: remainingWords if lastPos + word.length > cols && lastRow < rows - 1 =>
          fill(
            words = words,
            remainingWords = word :: remainingWords,
            rows = rows,
            cols = cols,
            lastPos = 0,
            lastRow = lastRow + 1,
            times = times)
        // overflow and we don't have more rows
        case word :: _ if lastPos + word.length > cols && lastRow == rows - 1 =>
          times
        // can be filled in the existing row
        case word :: remainingWords =>
          fill(
            words = words,
            remainingWords = remainingWords,
            rows = rows,
            cols = cols,
            lastPos = lastPos + word.length + 1,
            lastRow = lastRow,
            times = times)
        // no more words and no more steps
        case Nil if lastPos > cols - 1 && lastRow == rows - 1 =>
          times + 1
        // try to insert sentense one more time
        case _ =>
          fill(
            words = words,
            remainingWords = words,
            rows = rows,
            cols = cols,
            lastPos = lastPos,
            lastRow = lastRow,
            times = times + 1)
      }
    }
  }
  ```