# Kotlin best Soltuion | like

**Author:** progp
**Votes:** 4
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/4385352/](https://leetcode.com/problems/ambiguous-coordinates/solutions/4385352/)

---


# Code
```
class Solution {
    private fun leadingZeros(v: String): Int {
        var leadingZeros = 0
        while(leadingZeros < v.length && v[leadingZeros] == '0') leadingZeros++
        return leadingZeros
    }
    private fun tailingZeros(v: String): Int {
        var tailingZeros = 0
        while(tailingZeros < v.length && v[v.lastIndex - tailingZeros] == '0') tailingZeros++
        return tailingZeros
    }
    private fun allValuesOf(n: String): List<String> {
        val values = mutableListOf<String>()
        for(decimalPointIndex in 1 .. n.length) {
            val first = n.substring(0, decimalPointIndex)
            val fl0 = leadingZeros(first)
            if(fl0 >= 2 || fl0 != 0 && first.length != 1) continue
            values += if(decimalPointIndex != n.length) {
                val second = n.substring(decimalPointIndex)
                if(tailingZeros(second) != 0) continue
                "$first.$second"
            } else first
        }
        return values
    }
    fun ambiguousCoordinates(s: String): List<String> {
        val result = mutableListOf<String>()
        for(breakpoint in 2 .. s.lastIndex - 1) {
            val firstValues = allValuesOf(s.substring(1, breakpoint))
            val secondValues = allValuesOf(s.substring(breakpoint, s.lastIndex))

            for(first in firstValues)
                for(second in secondValues)
                    result += "($first, $second)"
        }
        return result
    }
}
```