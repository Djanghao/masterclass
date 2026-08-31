# Kotlin | brute force

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5903856/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5903856/)

---

Join me on Telegram https://t.me/leetcode_daily_unstoppable


this was a contest (3/4 solved) https://leetcode.com/discuss/general-discussion/5903702/biweekly-contest-141

https://youtu.be/jvslhhhK9uI?si=-qELX2bZ8fwl0wq0


```kotlin []

    fun minBitwiseArray(nums: List<Int>) = nums.map { n ->
        var x = 0
        while (x <= n) {
            if ((x or (x + 1)) == n) break
            x++
        }
        if ((x or (x + 1)) == n) x else -1
    }

```