# Scala

**Author:** kamikumakun
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3074639/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3074639/)

---

# Intuition
Follows the official solution, which makes use of remainder to track how many subarrays there were previously when the remainder is a certain number

# Complexity
- Time complexity: O(K + N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(K)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def subarraysDivByK(nums: Array[Int], k: Int): Int = {

        val n = nums.length
        val groupMods = Array.fill(k)(0)
        groupMods(0) = 1

        def subarraysDivByK_(remaining: List[Int], prefixMod: Int, result: Int): Int = {
            remaining match {
                case Nil => result
                case number :: tail =>
                    val newPrefixMod = (prefixMod + number % k + k) % k
                    val subarraysDivisibleByK = groupMods(newPrefixMod)
                    groupMods(newPrefixMod) += 1
                    subarraysDivByK_(tail, newPrefixMod, result + subarraysDivisibleByK)
            }
        }

        subarraysDivByK_(nums.toList, 0, 0)
    }
}
```