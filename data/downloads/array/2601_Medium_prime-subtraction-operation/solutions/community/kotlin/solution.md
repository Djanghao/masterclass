# Kotlin | time: O(n log n) & space: O(1) | Lookup-table

**Author:** mdekaste
**Votes:** 3
**Link:** [https://leetcode.com/problems/prime-subtraction-operation/solutions/6033160/](https://leetcode.com/problems/prime-subtraction-operation/solutions/6033160/)

---

# Intuition
Size of integers is known beforehand, so we can premake a list of primes.
Instead of checking if a list is sorted after every call, we should check if we can find the lowest value possible after every call and keep checking if its bigger than the previous.

# Approach
- Use BigIntegers build-in prime finding algorithm, it might have some logical overhead over sieving manually, but keeps the code small and clean.
- Aggregate these primes into a sorted set with O(log n) lookup for biggest possible prime
- Keep finding the lowest possible number bigger than the previous by subtracting the biggest prime possible.

# Complexity
- Time complexity: O(n log n)
  - For every number, do a lookup for the nearest number

- Space complexity: O(1)
  - Technically the density of primes as a percentage of all numbers is 0

# Code
```kotlin []
private val PRIMES = generateSequence(BigInteger.ZERO, BigInteger::nextProbablePrime)
    .map(BigInteger::toInt)
    .takeWhile { it <= 1000 }
    .toCollection(TreeSet())

class Solution {
    fun primeSubOperation(nums: IntArray): Boolean {
        var previous = 0
        for(num in nums){
            previous = num - (PRIMES.lower(num - previous) ?: return false)
        }
        return true
    }
}
```