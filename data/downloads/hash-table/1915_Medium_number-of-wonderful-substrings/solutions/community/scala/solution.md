# scala foldLeft

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5091536/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5091536/)

---

```
object Solution {
  def wonderfulSubstrings(word: String): Long =
    word.toSeq.map(c => 1 << (c - 'a')).foldLeft((0,Map(0->1).withDefaultValue(0),0L)){
      case ((mask, aMap, acc), h) =>
        lazy val newMask = mask ^ h
        lazy val newMap = aMap + (newMask -> (aMap(newMask) + 1))
        lazy val newAcc = acc + aMap(newMask) + ((0 until 10).map(1 << _).map(bit => newMap(newMask ^ bit) ) ).sum
        (newMask, newMap, newAcc)
    }._3
}
```