# MutableList

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/5299114/](https://leetcode.com/problems/next-greater-element-iii/solutions/5299114/)

---

# Approach
I first parse the number into a list of digits. In the same loop, if I encounter a position of possible replacement (the lowest digit is greater than the highest), I re-sort the accumulated list and put the digit with the next highest value at the end.
Also in this loop I mark if the replacement is impossible (i.e. the situation (lower digit is greater than higher digit) is not encountered).
Further in the loop I collect the corrected list back into a number and then check for Int.MAX_VALUE.
# Complexity
![image.png](./images/0.png)
# Code
```kt
class Solution {
    fun nextGreaterElement(n: Int): Int {
        var N = n
        val list : MutableList<Int> = mutableListOf()
        var yes = false
        var prev = 0
        while (N>0) {
            val C = N % 10
            list.add(C)
            if (yes == false && C<prev) {
                yes = true
                list.sortDescending ()
                val ind = list.indexOf(C)
                prev=list[ind-1]
                list.remove(prev)
                list.add(prev)
            } else prev = C
            N /= 10
        }
        if (yes == false) return -1
        var rez_L = 0L
        for (i in list.size-1 downTo 0) {
            rez_L = rez_L*10+list[i]
        }
        
        return if(rez_L>Int.MAX_VALUE.toLong()) -1 else rez_L.toInt()
    }
}
```