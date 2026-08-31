# Generate all 2^n

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/1120628/](https://leetcode.com/problems/reordered-power-of-2/solutions/1120628/)

---

```
    fun reorderedPowerOf2(N: Int): Boolean {
        val num = N.toStr()
        for (i in 0 until 30) {
            val pow = (1 shl i).toStr() // (1 shl i) generates 2^i
            if (pow == num)
                return true
        }
        return false
    }
    
    fun Int.toStr(): String { // helper extension to convert number into sorted string
        return String(this.toString().toCharArray().apply { sort() })
    }
```