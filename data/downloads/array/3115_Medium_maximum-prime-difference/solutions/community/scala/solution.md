# Scala Solution, easy to Understand :)

**Author:** kushagra_01
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/5026041/](https://leetcode.com/problems/maximum-prime-difference/solutions/5026041/)

---

# Complexity
- Time complexity:
 **O(n * sqrt(n))**

- Space complexity:
**O(1)**

# Code
```
object Solution {
    def maximumPrimeDifference(nums: Array[Int]): Int = {
        def isPrime(integer: Int): Boolean = {
            if(integer < 2) false
            else !(2 to Math.sqrt(integer).toInt).exists(it => integer % it == 0)
        }

        val primeIndices = nums.indices.filter(i => isPrime(nums(i)))

        if(primeIndices.isEmpty) 0
        else primeIndices.max - primeIndices.min


        // OR

        // val mini = nums.indexWhere(isPrime)
        // val maxi = nums.lastIndexWhere(isPrime)
        // maxi - mini
    }
}
```