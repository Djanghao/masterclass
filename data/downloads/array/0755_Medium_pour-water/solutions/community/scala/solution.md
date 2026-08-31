# Scala functional simple solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water/solutions/2902338/](https://leetcode.com/problems/pour-water/solutions/2902338/)

---

# Intuition
We can implement an algorithm to follow the logic from the task

# Approach
For each drop we check if there are any gaps on the left and on the right. If we see a gap on the left, put a drop there. If we see a gap on the right, put a drop there. Otherwise, put at K

# Complexity
- Time complexity:
O(N*V), repeating scans from left to right V times

- Space complexity:
O(V), for recursion, no extra DS

# Code
```
object Solution {
    def pourWater(heights: Array[Int], volume: Int, k: Int): Array[Int] = {
        (0 until volume).foreach {
            _ => pourOneVolume(heights, k)
        }
        heights
    }
    def pourOneVolume(heights: Array[Int], k: Int): Unit = {
        (leftGap(heights,k),rightGap(heights,k)) match {
            case (Some(l),_) => 
                // pour left
                pourOneVolume(heights, l)
            case (_, Some(r)) => 
                // pour right
                pourOneVolume(heights, r)
            case _ => 
                // pour at k
                heights(k) += 1
        }
    }
    def leftGap(heights: Array[Int], k: Int): Option[Int] = {
        (k - 1 to 0 by -1).foreach {
            case pos if heights(pos) < heights(k) => return Some(pos)
            case pos if heights(pos) > heights(k) => return None
            case _ =>
        }
        None
    }
    def rightGap(heights: Array[Int], k: Int): Option[Int] = {
        (k + 1 until heights.length).foreach {
            case pos if heights(pos) < heights(k) => return Some(pos)
            case pos if heights(pos) > heights(k) => return None
            case _ =>
        }
        None
    }
}
```