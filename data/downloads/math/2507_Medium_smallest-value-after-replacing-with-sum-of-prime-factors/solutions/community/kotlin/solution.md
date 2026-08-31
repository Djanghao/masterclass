# Beats 100 percent people in Kotlin

**Author:** ZeeshanCh08
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/4329645/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/4329645/)

---


class Solution {
    val stack = Stack<Int>()
    fun smallestValue(n: Int): Int {
        var result:Int = n
        while(!isPrime(result)){
            primeFactors(result)
            if(!stack.isEmpty()){
                result = 0
            }
            while (!stack.isEmpty()) {
               result+=stack.pop()
            }
            if(result==n) return result 
        }
        return result 
    }

    fun primeFactors(number: Int) {
        var n = number
        var factor = 2
        while (factor <= n) {
            if (n % factor == 0) {
                stack.push(factor)
                n /= factor
            } else {
                if (factor > 2) {
                factor += 2
                } else {
                factor++
                }
            }
        }
    }

    fun isPrime(number: Int): Boolean {
        if (number <= 1) {
            return false
        }
        for (i in 2..Math.sqrt(number.toDouble()).toInt()) {
            if (number % i == 0) {
                return false
            }
        }
        return true
    }

}
```