# TreeMap

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/5885387/](https://leetcode.com/problems/count-good-meals/solutions/5885387/)

---

# Approach
TreeMap
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun countPairs(deliciousness: IntArray): Int {
        val tree = TreeMap<Int, Long>()
        var rez = 0L
        val modL = 1_000_000_007L
        var arr = IntArray(21) {1 shl it}
        for (D in deliciousness) {
            tree[D] = tree.getOrDefault(D, 0) + 1            
        }
        val cou_0 = tree.getOrDefault(0, 0)
        tree.remove(0)
        // println("tree=$tree")
        var min_pos = 0
        for ((key,value) in tree) {
            if ((key and -key)==key) { // is a check that there is no more than (no or 1) 1 unit in the binary representation
                rez =  (rez + value * (value-1)/2) % modL
                rez =  (rez + value * cou_0) % modL
            }
            else {
                while (arr[min_pos] < key) {
                    min_pos++
                }
                val delta = arr[min_pos] - key
                val cou_Delta = tree.getOrDefault(delta, 0)
                if (cou_Delta!=0L) {
                    rez =  (rez + value * cou_Delta) % modL
                }
            }
        }
        return rez.toInt()
    }
}
```