# Scala | Functional Programming | Pattern Matching | Tail Recursion

**Author:** vtiwari227
**Votes:** 2
**Link:** [https://leetcode.com/problems/sqrtx/solutions/1939271/](https://leetcode.com/problems/sqrtx/solutions/1939271/)

---

Code:
```
    def mySqrt(x: Int): Int = {
      def helper(leftPointer: Int, rightPointer: Int): Int = {
          val mid = leftPointer + (rightPointer - leftPointer)/2
          val guessedNumber = mid.toLong * mid
          mid match {
            case _ if leftPointer > rightPointer => rightPointer
            case mid if guessedNumber == x => mid
            case mid if  guessedNumber > x => helper(leftPointer, mid - 1)
            case _ => helper(mid + 1, rightPointer)
          }
        }
      if( x < 2) x else helper(2, x / 2)
    }
```

Code WalkThrough:
1. if input number is less than 2 then it's sqrt(x) will be the same number
2. for a number greater than 2, we use binary search with left Pointer = 2 and rightPointer = num /2 ( as it can be the max for a sqrt(x))
3. We use Binary search template 1 ( look more into explore card), to check if (mid * mid) == target then return mid else eliminate upper or lower search space until leftPointer and rightPointer don't cross each.