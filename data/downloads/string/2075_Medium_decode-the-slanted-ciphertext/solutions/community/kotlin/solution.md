# Simple HashMap

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/4318037/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/4318037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun decodeCiphertext(encodedText: String, rows: Int): String {
        if (rows==1) return encodedText
        val map = HashMap<Int, MutableList<Char>>()
        val rez = mutableListOf<Char>()
        val cols = encodedText.length / rows
        for (i in 0 until rows) {
            for (j in 0 until cols) {
                if (j - i>=0)
                map.computeIfAbsent(j - i) 
                { mutableListOf() }.add(encodedText[i*cols+j])
            }
        }
        for((key, value) in map){
            rez.addAll(value)
        }
        // println("map=$map")
        return rez.joinToString("").trimEnd()
       
    }
}
```