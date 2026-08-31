# Scala Solution | Beats 100 % | Fully FP | Binary Search

**Author:** saurabhkishoretiwari90
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-best-non-overlapping-events/solutions/5128704/](https://leetcode.com/problems/two-best-non-overlapping-events/solutions/5128704/)

---

# Intuition
In these kind of problem, you should try sorting the array based on start time or end time.

Since in our case, we need to select only two jobs at max, we will sort the array based on start time. And then calculate the Suffix max value for each entry(i.e, the max value that can be attained if I start the job at that time)
Once done, we will traverse the original array, for each end time, I'll find out the next immediate start time and add the values to get the max value. 
<!-- Describe your first thoughts on how to solve this problem. -->



# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def maxTwoEvents(events: Array[Array[Int]]): Int = {
    val endTime = events.map(x => (x(1), x(2)))
    val startTime = events.map(x => (x(0), x(2))).sorted
    
    val sufMax = startTime.scanRight((0, 0))((x, acc) => (x._1, math.max(x._2, acc._2)))

    @scala.annotation.tailrec
    def binarySearch(endTime: Int, l: Int = 0, r: Int = sufMax.length - 2, ans: Int = 0): Int = {
      if(l > r) ans
      else{
        val mid = l + r >> 1
        if(sufMax(mid)._1 > endTime) binarySearch(endTime, l, mid - 1, sufMax(mid)._2)
        else binarySearch(endTime, mid + 1, r, ans)
      }
    }
    
    endTime.foldLeft(0) { (acc, x) =>
      val binRes = binarySearch(x._1)
      math.max(acc, binRes + x._2)
    }
  }
}
```