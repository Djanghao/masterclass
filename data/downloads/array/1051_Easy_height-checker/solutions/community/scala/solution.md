# Easy Scala Solution With Three Approaches = Brute Force + One-Liner + Recursion (Fp) .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/height-checker/solutions/5291881/](https://leetcode.com/problems/height-checker/solutions/5291881/)

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
    def heightChecker(heights: Array[Int]): Int = {
        //APPROACH1 = OPTIMISED TIME COMPLEXITY WITH 100% OPTIMIZATION IN SCALA
        // val expected= heights.sorted
        // var cnt=0
        // for   (i<- heights.indices)
        // {
        //     if   (heights(i)   !=   expected(i))  cnt=cnt+1
        // }
        // return cnt

        //APPROACH2= ONE LINER CODE IN SCALA 
        // (heights.sorted zip heights).count(_   !=   _)


        //APPROACH3= RECURSION 
        val expected= heights.sorted
        def   hlpr(i:Int=0,cnt:Int=0):Int=
        {
            if   (i   >=   heights.length)   return cnt
            else
            {
                if   (expected(i)   !=   heights(i))   hlpr(i+1, cnt+1)
                else   hlpr(i+1, cnt)
            }
        }
        hlpr()
    }
}
```