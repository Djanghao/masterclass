# Easy Scala Brute Force And Solution Using The Combinations Of Three Numers And Then Checking The Con

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/5217750/](https://leetcode.com/problems/count-good-triplets/solutions/5217750/)

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
    def countGoodTriplets(arr: Array[Int], a: Int, b: Int, c: Int): Int = {
        //APPROACH 1   -   BRUTE FORCE TIME COMPLEXITY O ( N^3 )
        // var k=arr.length
        // var j=k-1
        // var i=j-1
        // var ans=0
        // for   (i1 <- 0 until i)
        // {
        //     val numsi=arr(i1)
        //     for   (j1 <- i1+1 until j)
        //     {
        //         val numsj=arr(j1)
        //         if   (Math.abs(numsi-numsj)  <=   a)
        //         {
        //             for   (k1<- j1+1 until k)
        //             {
        //                 val numsk=arr(k1)
        //                 if   (Math.abs(numsj-numsk)   <=   b   &&       Math.abs(numsi-numsk)   <=   c)
        //                 {
        //                     ans= ans+1
        //                 }
        //             }
        //         }
        //     }
        // }
        // ans


        //APPROACH 2 - FINDIND ALL THE COMBINATIONS OF SIZE 3 AND THEN CHECK THE CONDITIONS 
       arr.indices.combinations(3).count {
        case Seq(i, j, k) =>
            Math.abs(arr(i) - arr(j)) <= a && 
            Math.abs(arr(j) - arr(k)) <= b && 
            Math.abs(arr(i) - arr(k)) <= c
        }
    }
}
```