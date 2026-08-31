# Simple Scala, uses Map of Set instead of missing MultiDict

**Author:** sblackmon
**Votes:** 0
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/5820811/](https://leetcode.com/problems/rings-and-rods/solutions/5820811/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```scala []
import scala.collection.mutable

object Solution {
    // split string into tuples (color:Char,rod:Int)
    // map tuples into MultiDict[Rod,Color]
    // filter only to rods with all colors
    // count
    type Color = Char
    type Rod = Int
    case class RC(rod : Rod, color : Color)
    def process(rings: String) : Seq[RC] = {
        val charPairs = rings.grouped(2).toSeq.map(g => g.toCharArray)
        charPairs.map(cp => RC(cp(1).toInt, cp(0)))
    }
    def countPoints(rings: String): Int = {
        val ringSeq = process(rings)
        val multiMap = mutable.HashMap[Rod, Set[Color]]()
        ringSeq.foreach {
            (rc: RC) => {
                val colors = multiMap.getOrElse(rc.rod, Set[Color]())
                val newColors = colors + rc.color
                multiMap.put(rc.rod, newColors)
            }
        }
        val allColors = multiMap.filter((_,colors) => colors.size == 3).keySet
        allColors.size
    }
}
```