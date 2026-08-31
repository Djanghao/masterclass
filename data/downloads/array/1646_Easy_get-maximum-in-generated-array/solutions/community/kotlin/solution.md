# [Kotlin] Check Even-Odd

**Author:** parassidhu
**Votes:** 3
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/927586/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/927586/)

---

```
 fun getMaximumGenerated(n: Int): Int {
        if (n == 0) return 0
        val res = IntArray(n + 1)
        var max = 1
        res[0] = 0 // Rule 1
        res[1] = 1 // Rule 2
       
        for (i in 2 until res.size) {
            if (i % 2 == 0)
                res[i] = res[i/2] // Rule 3
            else 
                res[i] = res[i/2] + res[i/2 + 1] // Rule 4
            
            max = maxOf(max, res[i])
        }
        
        return max
    }
```