# MutableList for num1 and two “1” counters

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/5837632/](https://leetcode.com/problems/minimize-xor/solutions/5837632/)

---

# Approach
MutableList for num1 and two \u201C1\u201D counters
I decompose both numbers by powers of two, while counting the number of \u201C1's\u201D in each and write the decomposition of num1 to MutableList .
Next, there are 3 options:
1) The number of \u201C1's\u201D in num1 >= than in num2. In this case we need to leave in the num1 decomposition only the highest \u201C1\u201D in the number equal to their number in num2.
2) The number of \u201C1\u201D in num2 >= than in num1, but less than the length of the num1 expansion array. In this case we need to leave all \u201C1\u2018s\u201D in the num1 expansion and add more missing \u201C1\u2019s\u201D to the lower digits instead of \u201C0's\u201D.
3) It turned out to be the simplest when the number of \u201C1's\u201D in num2 > than in num1, and even more than the length of the num1 expansion array. In this case you just need to compose a number from the required number of \u201C1\u201D.
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun minimizeXor(num1: Int, num2: Int): Int {
        var NUM1 : MutableList<Int> = mutableListOf()
        var cou1 = 0
        var cou2 = 0
        var n1 = num1
        var n2 = num2
        var rez = 0
        while (n1>0) {
            val zn = n1 and 1
            cou1 += zn
            NUM1.add(zn)
            n1 = n1 shr 1
        }
        while (n2>0) {
            cou2 += (n2 and 1)
            n2 = n2 shr 1
        }
        if (cou2<=cou1) {
            for (i in NUM1.size-1 downTo 0) {
                var zn = 0
                if (NUM1[i]==1 && cou2>0) {
                    zn = 1
                    cou2--
                }
                rez = (rez shl 1)+zn
            }
        }
        else if (cou2<=NUM1.size){
            for (i in 0 until NUM1.size) {
                if (NUM1[i]==0 && cou2>cou1) {
                    NUM1[i]=1
                    cou2--
                }
                if (cou2==cou1) break
            }
            for (i in NUM1.size-1 downTo 0) {
                rez = (rez shl 1)+NUM1[i]
            }

        }
        else return (1 shl (cou2))-1
        return rez
    }
}
```