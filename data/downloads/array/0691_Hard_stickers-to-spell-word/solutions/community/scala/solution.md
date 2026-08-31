# using memoisation

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/6078463/](https://leetcode.com/problems/stickers-to-spell-word/solutions/6078463/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.collection.mutable
object Solution {
  def minStickers(stickers: Array[String], target: String): Int = {
    val targetMap = target.groupBy(identity).map(x => (x._1, x._2.length))
    val updatedStickers = stickers.map { x =>
      x.groupBy(identity).map(y => (y._1, y._2.length))
    }.filterNot(sticker => targetMap.keySet.intersect(sticker.keySet).isEmpty)
    val result = updatedStickers.flatMap(_.keySet).toSet
    if (targetMap.keySet.exists(x => !result.contains(x))) -1
    else {
      findMin(updatedStickers, targetMap, mutable.Map.empty)
    }
  }

  private def findMin(stickers: Array[Map[Char, Int]], target: Map[Char, Int], memo: mutable.Map[String, Int]): Int = {
    if (target.isEmpty) 0
    else if (memo.contains(target.toString())) memo(target.toString())
    else {
      memo(target.toString()) = stickers.map { sticker =>
        if (target.keySet.exists(key => sticker.keySet.contains(key))) {
          val updatedTarget = useSticker(sticker, target)
          1 + findMin(stickers, updatedTarget, memo)
        } else Integer.MAX_VALUE
      }.min
      memo(target.toString())
    }
  }

  private def useSticker(sticker: Map[Char, Int], target: Map[Char, Int]) = {
    target.map { case (key, value) =>
      val stickerValue = sticker.getOrElse(key, 0)
      (key, Math.max(value - stickerValue, 0))
    }.filterNot(_._2 == 0)
  }
}
```