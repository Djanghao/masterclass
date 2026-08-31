# Scala solution - by a garbage can

**Author:** garbagecan
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-labels/solutions/757911/](https://leetcode.com/problems/partition-labels/solutions/757911/)

---

Some day I will be better at leetcode. Until then, I write solutions that I can understand. Maybe you can understand them too

```
import scala.collection.immutable.ListMap

/*
https://leetcode.com/problems/partition-labels/

Collect each letter into a ListMap (ordered by insertion)
of chars and Range(low: Int, high: Int)
by iterating over the whole string once and recording the
high and low ranges

Then, iterate over the map. Each letter will have a range
low and high. We start building up a List of Ranges, ordered from
low to high. Each new letter we take off the map and check if its range
overlaps with an existing max range.
  If it doesn't overlap, we create a new max range.
  If it does overlap, we check boundaries if that new letter increases
  the boundary of the existing max range, we increase it.

At the end we add 1 to the high ranges (indexes vs lengths) and reverse, 
since our ranges are ordered from last to first and we want to order them 
from first to last to make leetcode happy
 */


object Solution {

  case class CharValue(value: Char, index: Int)
  case class CharRange(low: Int, high: Int)

  // One pass through the chars to get the range of each
  @scala.annotation.tailrec
  def makeCharListMap(S: Array[CharValue],
                      map: ListMap[Char, CharRange]): ListMap[Char, CharRange] = {
    S.length match {
      case 0 =>
        map
      case _ =>
        val head = S.head
        val nextMap = if(map.contains(head.value)) {
          map ++ Map(head.value -> CharRange(map(head.value).low, head.index))
        } else {
          map ++ Map(head.value -> CharRange(head.index, head.index))
        }

        if(S.length == 1) {
          makeCharListMap(Array.empty, nextMap)
        } else {
          makeCharListMap(S.tail, nextMap)
        }
    }
  }

  // Our greedy algorithm. Fold left over each range, collecting the ranges,
  // increasing the head range if there is overlap, or subsuming the ranges within
  // the head
  def partitionLabels(S: String): List[Int] = {
    val listMap = makeCharListMap(S.toCharValueArray, ListMap.empty)
    listMap.foldLeft(List.empty[CharRange]) {
      (acc, next) =>
        val nextchar = next._2
        if(acc.isEmpty) {
          List(CharRange(nextchar.low, nextchar.high))
        } else {
          val head = acc.head

          if(nextchar.high > head.high && nextchar.low < head.high) {
            List(CharRange(head.low, nextchar.high)) ++ acc.tail
          } else if(nextchar.low < head.low && nextchar.high > head.high) {
            List(CharRange(nextchar.low, nextchar.high)) ++ acc.tail
          } else if(head.low < nextchar.low && head.high > nextchar.low) {
            List(CharRange(head.low, head.high)) ++ acc.tail
          } else {
            //if(nextchar.high > head.high && nextchar.low > head.low)
            List(nextchar) ++ acc
          }
        }
    }.map(each => each.high + 1 - each.low).reverse
  }

  // Implicit classes are useful
  implicit class MakeCharValueArray(s: String) {
    def toCharValueArray: Array[CharValue] = {
      s.toCharArray.zipWithIndex.map(e => CharValue(e._1, e._2))
    }
  }

  def main(args: Array[String]): Unit = {
    println(makeCharListMap("ababcbacadefegdehijhklij".toCharValueArray, ListMap.empty))
    println(partitionLabels("ababcbacadefegdehijhklij"))

  }
}
```