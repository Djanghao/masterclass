# Simple Solution || Scala

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/5233849/](https://leetcode.com/problems/house-robber-ii/solutions/5233849/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Bottom-up Approach

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
object Solution {
    def rob(nums: Array[Int]): Int = {
        if (nums.isEmpty) return 0
        if (nums.length == 1) return nums(0)

        def solve(n: Array[Int]): Int = {
            if (n.isEmpty) return 0
            if(n.length == 1) return n(0)
            
            var a = n(0)
            var b = Math.max(n(0), n(1))

            if(n.length == 2) return b

            var ans = 0
            for(i <- 2 until n.length) {
                ans = Math.max(b, n(i) + a)
                a = b
                b = ans
            }

            ans
        }

        var ans1 = Math.max(solve(nums.drop(1)), solve(nums.dropRight(1)))
        ans1.toInt
    }
}
```