# Elegant Kotlin Union Find

**Author:** lbrown26
**Votes:** 1
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2636155/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2636155/)

---

~~~
class Solution {
    var neq = mutableListOf<String>()
    val map = IntArray(26){it}
    val countMap = IntArray(26){0}
    fun equationsPossible(equations: Array<String>): Boolean {
        for(eq in equations){
            val fir = eq[0] -'a'
            val sec = eq[3] -'a'
            val equal = eq[1]
            if(equal == '!') neq.add(eq)
            else union(fir,sec)
        }
        for(eq in neq){
            val fir = eq[0] -'a'
            val sec = eq[3] -'a'
            if(find(fir)==find(sec))return false
        }
        return true
    }
    
    private fun find(x: Int): Int{
        return if(map[x]!=x) find(map[x]) else x
    }
    
    private fun union(x: Int, y: Int){
        val nX = find(x)
        val nY = find(y)
        if(nX!= nY){
            if(countMap[nX]<countMap[nY]){
                countMap[nY]+=countMap[nX]+1
                map[nX] = nY
            } else{
                countMap[nX]+=countMap[nY]+1
                map[nY] = nX
            } 
            
        }
    }
}