# Kotlin Solution

**Author:** 00vk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/4326196/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/4326196/)

---

# Approach
The idea is to calculate how many steps do we need to take to get our first element that is equal to `1`. If we already have numbers then we simply return the number of the elements that are not equal to one.

After that since we don't have any `1` in our initial array we need to figure out how many replacements do we need to make to get our first `1` in the array. If GCD of two elements equal 1 then we need to make one replacement to get the first `1`, if GCD of three, e.g. `2, 6, 9`, then there are two steps to get a `1`, etc. So I it is always the (subsequence size - 1), and (nums.size - 1) on top of that to convert all the others. 

So I iterated through the subsequnces sizes trying to find the smallest group with the `GCD = 1` to get the first element = `1` in the array.

# Code
```
class Solution {
    fun minOperations(nums: IntArray): Int {
        if (nums.contains(1)) return nums.count { it != 1 }
        for (subArraySize in 2..nums.size) {
            for (index in 0..nums.size - subArraySize) {
                val subArray = nums.sliceArray(index..<index + subArraySize)
                if (gcd(subArray) == 1) {
                    return nums.size - 1 + subArraySize - 1
                }
            }
        }
        return -1
    }

    private fun gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)

    private fun gcd(numbers: IntArray): Int {
        var result = numbers[0]
        for (i in 1..<numbers.size) {
            result = gcd(result, numbers[i])
        }
        return result
    }
}
```