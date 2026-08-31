# Bad scala solution - needs cleaning

**Author:** cwgroppe
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3664264/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3664264/)

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
    def distinctPrimeFactors(nums: Array[Int]): Int = {
      import scala.collection.mutable.ListBuffer
            def populateLB(n: Long): ListBuffer[Long] = {
      val buff = ListBuffer.empty[Long]
      n % 2 == 0 match {
        case true => {
          buff += 2
          for(i <- 3L to n if i % 2 != 0) buff += i
        }
        case    _ => for(i <- 3L to n if i % 2 != 0) buff += i
      }
      buff
    }


    def removeDivisible(n: Long, lon: ListBuffer[Long]): ListBuffer[Long] = {
      val nlon = ListBuffer.empty[Long]
      for{
        i <- lon
        if(i % n != 0)
      } nlon += i
      nlon
    }


    // above works as long as you dont hit max int size on list
    //below acutall works
    def isOddPrime(x: Long, maxSqrt: Long): Boolean = {
      for(i <- 3L to maxSqrt by 2){
        if(x % i == 0) return false
      }
      true
    }

    def maxPrimeFactor(n: Long): Long = {
      var max = 0L
      val maxSqrt = scala.math.sqrt(n).toLong
      for(i <- 3L to maxSqrt by 2){
        if(n % i == 0){
          if(isOddPrime(i,scala.math.sqrt(i).toLong)){
            max = i
          }
        }
      }
      max
    }

        def sieve(n: Long): ListBuffer[Long] = {
      if(n < 2L){
        ListBuffer()
      }else if(n == 2L){
        ListBuffer(2L)
      }else if(n % 2 != 0 && isOddPrime(n,scala.math.sqrt(n).toLong)){
        ListBuffer(n)
      }else{
        var buff = scala.collection.mutable.ListBuffer.empty[Long]
        var pop = populateLB(n)

        if(pop(0) == 2L){
          buff += 2L
          pop  -= 2L
        }

        def go(n: Long, x: Long, lon: ListBuffer[Long]): ListBuffer[Long] = lon.size == 0 match {
          case true => lon
          case    _ => {
            val nlon = removeDivisible(n,lon)
            if(nlon.size == 0){
              nlon
            }else{
              if(x % n == 0) buff += n
              go(nlon(0), x, nlon)
            }
          }
        }
        go(pop(0), n, pop)
        buff
      }
    }

    nums.toList.distinct.map(x => sieve(x)).flatten.distinct.size

    }
}
```