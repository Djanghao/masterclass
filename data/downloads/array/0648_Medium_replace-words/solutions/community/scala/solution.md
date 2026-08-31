# Scala neat and simple solution

**Author:** dariushyou
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-words/solutions/5666839/](https://leetcode.com/problems/replace-words/solutions/5666839/)

---

```scala []
object Solution {
  def replaceWords(dictionary: List[String], sentence: String): String = {
      val sortedDictionary = dictionary.sortBy(_.size)
      val words = sentence.split(" ")
      words.map { word =>
        sortedDictionary.find(root => word.startsWith(root)).getOrElse(word)
      }.mkString(" ")
  }
}
```