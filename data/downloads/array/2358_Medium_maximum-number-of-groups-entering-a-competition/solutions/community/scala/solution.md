# scala 3 in 1

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/3193652/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/3193652/)

---

# Code
```
object Solution {
  def maximumGroups(grades: Array[Int]): Int = {
    def greedy(seq: Seq[Int] = grades.sorted.toList, size: Int = 1, acc: Int = 0): Int = {
      lazy val (t,d) = seq.splitAt(size)
      if(seq.size < size) acc
      else greedy(d, size+1, acc+1)
    }
    def binarySearch(lo: Int = 1, hi: Int = grades.size): Int = {
      def sas(x: Long): Long = ((x+1L)*x)/2L
      lazy val mid = (lo+hi)/2
      if(lo+1>=hi) lo
      else if (sas(mid.toLong) > grades.size.toLong) binarySearch(lo,mid)
      else binarySearch(mid,hi)
    }
    def formula():Int = (math.sqrt(2 * grades.size + 0.25) - 0.5).toInt
    require (Set(greedy(), binarySearch(), formula()).size == 1)
    formula()
  }
}
```