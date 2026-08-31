# Sqrt kotlin

**Author:** 2pac_shakur
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/959514/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/959514/)

---

```
class Solution {
    fun kthFactor(n: Int, k: Int): Int {
        val sqrt = Math.sqrt(n * 1.0).toInt()
        val allFactors: MutableList<Int> = ArrayList()
        for (i in 1..sqrt) {
            if (n % i == 0) {
                if (n / i == i) {
                    allFactors.add(n / i)
                } else {
                    allFactors.add(n / i)
                    allFactors.add(i)
                }
            }
        }
        if (allFactors.size < k) return -1
        allFactors.sort()        
        return allFactors[k - 1]
    }
}

/** 
n = 100
sqrt = 10
allFactors = {100, 1, 50, 2, 4, 25, 10}
iterate from 1..10
1 -> 100/1 = 100
2 -> 100/2 = 50
4 -> 100/4 = 25
10 -> 100/10 = 10 (special case where we don't want to add 10 twice)

**/
```