# Scala - simple code

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/5321376/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/5321376/)

---


```
object Solution {
    val m = 1000000007L
    def monkeyMove(n: Int): Int = {
        val num = (pow(2,n) % m)
        ((num - 2 + m) % m).toInt 
    }

    def pow(base: Long, exp: Long): Long = {
        if(exp == 0) return 1
        val temp = pow(base, exp/2)

        if(exp % 2 == 0)
            temp * temp % m
        else
            temp * temp % m * base % m
    }
}
```