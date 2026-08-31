# Simple kotlin solution with description

**Author:** OmarNajjar
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/4948088/](https://leetcode.com/problems/double-modular-exponentiation/solutions/4948088/)

---

# Intuition
We need to implement the equation with custom power implemintation 

# Approach
Rotate throw the array to check if the equation is correct, For the power we need a custom implementation to apply the mod each time we multiply the number.
At the end add the index to the res list if it match

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) if all subarrays are a match

# Code
```
class Solution {
    fun getGoodIndices(variables: Array<IntArray>, target: Int): List<Int> {
        val res = mutableListOf<Int>()

        for(i in 0 until variables.size) {
            if(isGoodIndice(variables[i], target)) {
                res.add(i)
            }
        }

        return res
    }

    private fun isGoodIndice(arr: IntArray, target: Int): Boolean {
        val f = power(arr[0], arr[1], 10)
        val s = power(f.toInt(), arr[2], arr[3])
        return target == s
    }

    private fun power(f: Int, s: Int, m: Int): Int {
        var res: Int = 1

        for(i in 0 until s) {
            res *= f
            res %= m
        }

        return res
    }
}
```