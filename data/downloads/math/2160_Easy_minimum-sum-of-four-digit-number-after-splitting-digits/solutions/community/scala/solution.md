# scala easy solution - 83% faster than

**Author:** tanel3203
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/2501685/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/2501685/)

---


```
    def minimumSum(num: Int): Int = {
        val a = num.toString.split("").sorted        
        (a(0) + a(2)).toInt + (a(1) + a(3)).toInt
    }
	```