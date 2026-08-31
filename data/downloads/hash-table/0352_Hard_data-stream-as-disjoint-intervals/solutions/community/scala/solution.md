# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3111197/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3111197/)

---

# Code
```
import scala.collection.mutable.TreeMap

class SummaryRanges() {

    val stream = TreeMap[Int, Int]()

    def addNum(value: Int): Unit = {
        
        if(!stream.contains(value)) {

            var left = value
            var right = value

            stream.maxBefore(value) match {
                case Some((start, end)) if end >= value => return
                case Some((start, end)) if end.equals(value - 1) => left = start
                case _ => ()
            }

            stream.minAfter(value + 1) match {
                case Some((start, end)) if start.equals(value + 1) =>
                    stream.remove(value + 1)
                    right = end
                case _ => ()
            }

            stream += (left -> right)
            
        }
    }

    def getIntervals(): Array[Array[Int]] = stream.map{ case (start, end) => Array(start, end)}.toArray

}

```

```
class SummaryRanges() {

    import scala.collection.mutable.TreeSet

    val stream = TreeSet[Int]()

    def addNum(value: Int) = stream.add(value)

    def getIntervals(): Array[Array[Int]] = {

        def getIntervals_(remaining: List[Int], left: Int, right: Int, result: Array[Array[Int]]): Array[Array[Int]] = {
            remaining match {
                case value :: tail if left < 0 => getIntervals_(tail, value, value, result)
                case value :: tail if value == right + 1 => getIntervals_(tail, left, value, result)
                case value :: tail => getIntervals_(tail, value, value, result :+ Array(left, right))
                case Nil if left < 0 && right < 0 => result
                case Nil => result :+ Array(left, right)
            }
        }

        getIntervals_(stream.toList, -1, -1, Array.empty[Array[Int]])
    }

}

```