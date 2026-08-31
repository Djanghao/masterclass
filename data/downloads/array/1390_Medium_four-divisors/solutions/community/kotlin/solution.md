# My solution on Kotlin

**Author:** Phantom2097
**Votes:** 1
**Link:** [https://leetcode.com/problems/four-divisors/solutions/5558101/](https://leetcode.com/problems/four-divisors/solutions/5558101/)

---




![\u0421\u043D\u0438\u043C\u043E\u043A \u044D\u043A\u0440\u0430\u043D\u0430 2024-07-30 132548.png](./images/0.png)
# Complexity
- Time complexity:$$O(n + sqrt(m))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Code
```
class Solution {
    fun sumFourDivisors(nums: IntArray): Int {
        var res = 0
        for (n in nums) {
            var divider = 2
            var sum = 0
            var count = 0

            var last: Int = Math.sqrt(n.toDouble()).toInt()

            while (divider <= last) {
                if (n % divider == 0) {
                    sum += divider
                    count++

                    if (divider != n / divider) {
                        sum += n / divider
                        count++
                    }
                }
                if (count > 2) break
                divider++
            }
            if (count == 2) {
                res += sum + 1 + n
            }
        }
        return res
    }
}
```
# Code using array
```
class Solution {
    fun sumFourDivisors(nums: IntArray): Int {
        var res = 0
        for (n in nums) {
            var temp = 2
            val list = ArrayList<Int>()
            var last: Int = Math.sqrt(n.toDouble()).toInt()
            while (temp <= last) {
                if (n % temp == 0) {
                    list.add(temp)
                    if (temp != n / temp) {
                        list.add(n / temp)
                    }
                }
                if (list.size > 2) break
                temp++
            }
            if (list.size == 2) {
                res += list.sum() + 1 + n
            }
        }
        return res
    }
}
```