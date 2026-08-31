# Modification stack +  without a stack

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846558/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846558/)

---

# Approach
Modification stack
# Complexity
![image.png](./images/0.png)
# Code
```kotlin 
class Solution {
    fun kthCharacter(k: Long, operations: IntArray): Char {
        var ind = 47
        val stack = Stack<Int>()
        var zn : Long = 1L shl ind
        var K = k-1
        var rez = 'a'
        while (ind>=0) {
            if ((zn and K) == zn) stack.push(ind)
            ind--
            zn = zn shr 1
        }
        // println("stack=$stack")
        while (stack.isNotEmpty()) {
            val T = stack.pop()
            if (operations[T]==1) {
                if (rez=='z') rez ='a' else rez+=1
            }
        }
        return rez
    }
}
```
And even so:
![image.png](./images/1.png)
```
class Solution {
    fun kthCharacter(k: Long, operations: IntArray): Char {
        var zn = 0L
        var ind = 47
        var cou = 0
        while (ind-->=0) {
            zn = 1L shl ind
            if (((zn and (k-1)) == zn) && (operations[ind]==1)) cou++
        }
        return 'a'+(cou % 26)
    }
}
```