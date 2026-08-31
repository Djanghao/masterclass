# Functional | O(n) | Beats: 88/100

**Author:** Turu
**Votes:** 4
**Link:** [https://leetcode.com/problems/majority-element/solutions/3070335/](https://leetcode.com/problems/majority-element/solutions/3070335/)

---

# Approach
https://www.cs.utexas.edu/~moore/best-ideas/mjrty/

# Code
```
object Solution {
    def majorityElement(nums: Array[Int]): Int = {
        nums.foldLeft((nums(0), 0))((acc, x) => acc match {
            case (_, 0) => (x, 1)
            case (y, c) => if(x == y) (y, c + 1) else (y, c - 1)
        })._1
    }
}
```