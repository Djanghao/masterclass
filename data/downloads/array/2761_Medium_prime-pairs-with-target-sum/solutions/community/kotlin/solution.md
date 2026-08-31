# Kotlin solution, easy

**Author:** Kuba111
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3842055/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3842055/)

---



# Code
```
class Solution {
    fun findPrimePairs(n: Int): List<List<Int>> {
        if (n <= 1) {
            return emptyList()
        }
        var res = ArrayList<List<Int>>();
        for (i in 2 until n / 2 + 1) {
            if (isPrime(n - i) && isPrime(i)) {
                var arr = listOf(i, n - i);
                Collections.sort(arr);
                if (!res.contains(arr)) res.add(arr)
            }
        }
        return res
    }

    private fun isPrime(number: Int): Boolean {
        var indx = 2;
        while (indx <= Math.sqrt(number.toDouble())) {
            if (number % indx == 0) {
                return false
            }
            indx++
        }
        return true
    }
}

```