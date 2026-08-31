# IntArray(10) + MutableList<Char>

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/5259193/](https://leetcode.com/problems/largest-palindromic-number/solutions/5259193/)

---

# Approach
IntArray(10) + MutableList<Char>
# Complexity
![image.png](./images/0.png)
# Code
```
class Solution {
    fun largestPalindromic(num: String): String {
        val arr = IntArray(10)
        var rez : MutableList<Char> = mutableListOf()
        var dop = -1
        for (ch in num) {
            arr[ch-'0'] ++
        }
        var pos = 0
        for (i in 9 downTo 1) {
            val cou = arr[i] / 2
            rez.addAll(pos,MutableList(cou*2) { '0'+i})
            if (dop == -1 && cou*2 != arr[i] ) dop = i
            pos +=cou
        }
        if (rez.size!=0) {
            val cou = arr[0] / 2
            rez.addAll(pos,MutableList(cou*2) {'0'})
            if (dop == -1 && cou*2 != arr[0] ) dop = 0
            pos +=cou
        }
        if ((rez.size!=0 || dop!=-1) && rez.size<num.length) rez.add(pos,'0'+dop)
        // println("rez=$rez")
        if (rez.size==0) return "0"
        return rez.joinToString("")
    }
}
```