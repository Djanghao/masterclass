# Find a Peak  Element ||

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-peak-element-ii/solutions/6125580/](https://leetcode.com/problems/find-a-peak-element-ii/solutions/6125580/)

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
```scala []
object Solution {
    def findPeakGrid(mat: Array[Array[Int]]): Array[Int] = {
        val n = mat.size
        val m = mat(0).size

        def findMax(mid: Int): Int = {
            var idx = 0
            for(i <- 1 until n){
                if(mat(i)(mid) > mat(idx)(mid))
                    idx = i
            }
            idx
        }

        var lo = 0
        var hi = m - 1
        var row = 0

        while(lo <= hi) {
            val mid = lo + (hi - lo) / 2
            row = findMax(mid)

            if(mid > 0 && mat(row)(mid - 1) > mat(row)(mid)) {
                hi = mid - 1
            }
            else if(mid < m - 1 && mat(row)(mid + 1) > mat(row)(mid)) {
                lo = mid + 1
            }
            else {
                return Array(row, mid)
            }
        }

        Array(row, lo) 
    }
}
```