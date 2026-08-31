# Simple

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5941219/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5941219/)

---

# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun stringSequence(target: String): List<String> {
        val rez : MutableList<String> = mutableListOf()
        val tek : MutableList<Char> = mutableListOf()
        for (i in 0 until target.length) {
            tek.add('a')
            rez.add(tek.joinToString(""))
            for (ch in 'b'..target[i]) {
                tek[tek.size-1]=ch
                rez.add(tek.joinToString(""))
            }
        }
        return rez
    }
}
```