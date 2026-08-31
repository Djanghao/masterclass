# Kotlin solution

**Author:** hussein0115300
**Votes:** 0
**Link:** [https://leetcode.com/problems/base-7/solutions/6138839/](https://leetcode.com/problems/base-7/solutions/6138839/)

---

```
fun convertToBase7(num: Int): String {
        var result = ""
        if(num == 0) return "0"
        val isNegative = num < 0
        var numItem =  num.absoluteValue
        while(numItem != 0){
             val remainder = numItem % 7
            result = "$remainder$result"
            numItem /= 7
        }
        if(isNegative) 
        {
            return "-$result"
        }
        else
        {
            return result
        }
    }
```