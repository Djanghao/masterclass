# Kotlin - For fun, did it in the most Kotliny way I could think of...

**Author:** easchner
**Votes:** 15
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/1349363/](https://leetcode.com/problems/fizz-buzz/solutions/1349363/)

---

```
class Solution {
    fun fizzBuzz(n: Int) = (1..n).map {when {
        it % 15 == 0 -> "FizzBuzz"
        it % 5 == 0 -> "Buzz"
        it % 3 == 0 -> "Fizz"
        else -> it.toString()
    }}
}
```

Probably would stick to more readable code during an actual interview... but good way to demonstrate Kotlin specific knowledge, I guess. :D