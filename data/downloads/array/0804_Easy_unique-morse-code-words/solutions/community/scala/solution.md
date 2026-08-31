# FP Scala solution

**Author:** bobojon2ov
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/1966436/](https://leetcode.com/problems/unique-morse-code-words/solutions/1966436/)

---

```
object Solution {
    def uniqueMorseRepresentations(words: Array[String]): Int = {
    val mapMorse = (0 until 26).zip(Array(".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---",
      ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..")).toMap
    val arr = "abcdefghijklmnopqrstuvwxyz".zipWithIndex.toMap
    val result = words.foldLeft(List.empty[String]) { (list, e) =>
      val x = e.foldLeft("") { (str, ch) =>
        str + mapMorse.get(arr.getOrElse(ch, -1)).mkString
      }
      list :+ x
    }
    result.toSet.size
  }
}
```