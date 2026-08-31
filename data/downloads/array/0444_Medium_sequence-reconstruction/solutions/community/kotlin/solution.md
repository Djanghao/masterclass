# Kotlin - BFS - Topological

**Author:** alialialiiiiii
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequence-reconstruction/solutions/2377979/](https://leetcode.com/problems/sequence-reconstruction/solutions/2377979/)

---

```
class Solution {
    fun sequenceReconstruction(nums: IntArray, sequences: List<List<Int>>): Boolean {
        val inDegree = IntArray(nums.size + 1)
        val q = ArrayDeque<Int>()
        val nei = Array< ArrayList<Int>>(nums.size + 1){ arrayListOf()}

        
        sequences.forEach{ seq ->
            for( i in 1..seq.lastIndex){
                nei[seq[i - 1]].add(seq[i])
               
                inDegree[seq[i]]++
            }
        }
        
        for ( i in 1 ..inDegree.lastIndex){
            if(inDegree[i] == 0) q.add(i)
        }
    

        while(! q.isEmpty()){
             if(q.size > 1)return false
            val cur = q.remove()

            nei[cur].forEach{ 
                if(--inDegree[it] == 0) q.add(it)
            }
        }  
     return true
    }
}
```