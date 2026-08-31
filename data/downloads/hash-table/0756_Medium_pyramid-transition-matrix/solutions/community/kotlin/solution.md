# Kotlin Solution

**Author:** user1594Q
**Votes:** 0
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/1074507/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/1074507/)

---

you can use StringBuilder to fruther optimize the solution
```
    fun pyramidTransition(bottom: String, allowed: List<String>): Boolean {
        if (bottom.isEmpty()) return false
        val aMap = mutableMapOf<String, MutableList<Char>>()
        for (triple in allowed){
            aMap.getOrPut(triple.slice(0..1),{mutableListOf()}).add(triple[2])
        }
        
        val checkedRows = mutableSetOf<String>()
        fun buildRow(bottom : String, i : Int, row : String) : Boolean {
            if (i == 0 && bottom in checkedRows) return false //skip this as it was checked
            if ( bottom.length == 1) return true
            if ( i >= bottom.lastIndex){
                checkedRows.add(bottom)
                return buildRow(row, 0, "")  
            } 
            val base = bottom.slice(i..i+1)
            if (base !in aMap) return false
            for (c in aMap[base]!!){
                if (buildRow(bottom, i+1, row + c)) return true
            }
            return false
        }
        
        return buildRow(bottom, 0, "")
    }
	```