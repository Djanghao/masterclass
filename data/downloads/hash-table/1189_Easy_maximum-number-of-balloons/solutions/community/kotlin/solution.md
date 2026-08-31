# kotlin simple solution

**Author:** hhhhghhghu
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/4009508/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/4009508/)

---

# Complexity
- Time complexity O(n):

- Space complexity O(n):

# Code
```
class Solution {
    fun maxNumberOfBalloons(text: String): Int {
        val counter = text.groupingBy{it}.eachCount()
        val letters = setOf('b', 'a', 'l', 'o', 'n')
        letters.forEach {
            if (!counter.containsKey(it)){
                return 0
            }
        }
        var minn = counter['a']!!
        counter.forEach { (k, v) ->
            if (letters.contains(k)){
                if (k == 'l' || k == 'o'){
                    minn = minOf(minn, v / 2)
                } else {
                    minn = minOf(minn, v)
                }
            }
        }
        return minn
    }
}
```