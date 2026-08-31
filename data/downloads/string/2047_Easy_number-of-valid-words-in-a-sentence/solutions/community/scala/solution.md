# scala one line solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/2079627/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/2079627/)

---

```

  def countValidWords(sentence: String): Int = {
    sentence.split(" ").filter(n => n.matches("^([a-z]+(-?[a-z]+)?)?(!|\\\\.|,)?$") && n.matches("[^0-9]+")).length
  }
```