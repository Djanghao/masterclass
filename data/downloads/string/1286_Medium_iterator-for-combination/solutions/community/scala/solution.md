# Scala standard lib, 3 lines

**Author:** soft_mittens
**Votes:** 0
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/1889606/](https://leetcode.com/problems/iterator-for-combination/solutions/1889606/)

---

```
class CombinationIterator(_characters: String, _combinationLength: Int) {
  val view = _characters.combinations(_combinationLength)
  def next(): String = view.next()
  def hasNext(): Boolean = view.hasNext
}
```