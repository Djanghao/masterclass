# Scala - Simple Higher Order Functions

**Author:** CorgiKnows
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/5438491/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/5438491/)

---



# Code
```
object Solution {
    def findMaxConsecutiveOnes(nums: Array[Int]): Int = {
        // find the longest consecutive ones, allowing 1 0

        nums.foldLeft(List[Int](), 0) { (args, num) =>
            val (track, max) = args
            num match {
                case 1 => (track :+ 1, max.max(track.length + 1))
                case 0 => {
                    track.indexOf(0) match {
                        case -1 => (track :+ 0, max.max(track.length + 1))
                        case i  => (track.drop(i+1) :+ 0, max)
                    }
                }
            }
        }._2

    }
}
```