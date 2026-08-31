# 🚀️🔥️ Kotlin beats 100% no strings or sorting - O(log10(n)) time O(1) space solution

**Author:** Klemo1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3257450/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3257450/)

---

# Approach
Approach without strings and sorts is to extract digits and add them to array of size 10. 
Then we can do the same time of operations to construct the two numbers from even/odd indices and sum them up.

# Complexity
- Time complexity:
$$O(1+ floor(log_{10}(num)))$$ - in other words number of digits

- Space complexity:
$$O(1)$$ - constant space is allocated

# Code
```
class Solution {
    fun splitNum(num: Int): Int {
        val nums = IntArray(10)
        var mutNum = num
        while (mutNum > 0) {
            val n = mutNum % 10
            mutNum /= 10
            nums[n]++
        }

        var added = 0

        var num1 = 0
        var num2 = 0

        for (i in 1..9) {
            while (nums[i] > 0) {
                if (added % 2 == 0) {
                    num1 = if (num1 == 0) i else num1*10+i
                } else {
                    num2 = if (num2 == 0) i else num2*10+i
                }
                added++
                nums[i]--
            }
        }

        return num1+num2
    }
}
```