# Easy Scala Solution using folfLeft And foldRight .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/candy/solutions/5232313/](https://leetcode.com/problems/candy/solutions/5232313/)

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
```
object Solution {
    def candy(ratings: Array[Int]): Int = {
        val left=ratings.tail.scanLeft((1,ratings.head)){case ((c,r1),r2)   =>   (if(r1>=r2)   1   else c+1,r2)}
        val right=ratings.init.scanRight((1,ratings.last)){case (r2,(c,r1))   =>   (if(r1>=r2)   1   else c+1,r2)}
        left.zip(right).map{ case   ((l,_),(r,_))   =>   Math.max(l,r)}.sum
    }
}
```