# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3393246/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3393246/)

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
    def makeSubKSumEqual(arr: Array[Int], k: Int): Long = {
        @annotation.tailrec
        def gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)
        def help(arr: Array[Int], start: Int, gap: Int):Long = {
            val n = arr.length
            val m = n / gap
            val as = (start until n by gap).foldLeft(List[Int]())((acc, i)=>{arr(i) +: acc}).sorted.toArray
            (0 until m).foldLeft(0L)((acc, i) => {acc + Math.abs(as(i) - as(m / 2))})
        }

        val g = gcd(arr.length, k)
        (0 until g).foldLeft(0L)((acc, i) =>{ acc + help(arr, i, g) })
    }
}
```