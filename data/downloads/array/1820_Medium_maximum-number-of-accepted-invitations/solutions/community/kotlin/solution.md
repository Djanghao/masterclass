# Kotlin - Maximum Bipartite matching

**Author:** alialialiiiiii
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/2361339/](https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/2361339/)

---

reference : https://leetcode.com/problems/maximum-number-of-accepted-invitations/discuss/1177540/JAVA-or-Maximum-Bipartite-Matching

```
class Solution {
    fun maximumInvitations(grid: Array<IntArray>): Int {
        val numOfBoys = grid.size
        val numOfGirls = grid[0].size
        
        val matchedGirls = IntArray(numOfGirls){-1}
        var matches = 0
        for( boyIndex in 0 ..grid.lastIndex){ 
            val chosenGirls = HashSet<Int>()
            if(dfs( boyIndex, grid, matchedGirls, chosenGirls))
                matches ++
        }
        return matches
        
        
    }
    
    private fun dfs( boyIndex : Int, grid: Array<IntArray>, matchedGirls : IntArray, chosenGirls : HashSet<Int>) : Boolean{
        grid[boyIndex].forEachIndexed{girlIndex, girl ->
            
            if(girl == 1 && !chosenGirls.contains(girlIndex)){
                chosenGirls.add(girlIndex)
                
                val girlPartnerIndex = matchedGirls[girlIndex]
                if( girlPartnerIndex == -1 || dfs( girlPartnerIndex, grid, matchedGirls, chosenGirls)){
                    matchedGirls[girlIndex] = boyIndex
                    return true
                }
                
            }
            
        }
        return false
    }
}
```