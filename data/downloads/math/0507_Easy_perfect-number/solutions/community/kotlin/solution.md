# Kotlin solution

**Author:** hussein0115300
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-number/solutions/6143506/](https://leetcode.com/problems/perfect-number/solutions/6143506/)

---

```
fun checkPerfectNumber(num: Int): Boolean {
        var sum = 0
        for(i in 1 until num){
            if(num % i == 0){
               sum += i 
            }
        }
        return num == sum
    }
```