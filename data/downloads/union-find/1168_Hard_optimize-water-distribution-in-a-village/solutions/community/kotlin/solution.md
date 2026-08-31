# Kotlin Minimum Spanning Tree with Kruskal Algorithm

**Author:** black_mamba34
**Votes:** 2
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1022011/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1022011/)

---

```kotlin

import kotlin.math.min
class Solution {
    fun minCostToSupplyWater(n: Int, wells: IntArray, pipes: Array<IntArray>): Int {
        val mergedPipes = PriorityQueue<IntArray>(Comparator{o1,o2-> o1[2] -o2[2]})
    
        for(index in wells.indices){
		     // Sometimes building pipeline is more expensive than building new water resource
			 // so we should pay attention to this topic. So when we find the minimum spanning tree,
			 // we have a dummy root node which is 0 and we can transforms wells to pipeline which is from 0 to x.
            mergedPipes.add(intArrayOf(0,index+1,wells[index]))
        }
        
        for(pipe in pipes){
             mergedPipes.add(intArrayOf(pipe[0],pipe[1],pipe[2]))
        } 
       
        val dsu = DSU(n+1)
        var total = 0
        while(mergedPipes.isNotEmpty()){
            val pipe = mergedPipes.poll()
            if(dsu.union(pipe[0],pipe[1])){

                 total += pipe[2]
            }
        }
        println(dsu.findParent(2))
        return total
    }
}

class DSU(private val itemCount:Int){
    
    val items = IntArray(itemCount){-1}
    
    fun findParent(index:Int):Int{
        if(items[index] == -1) return index
        
        items[index] = findParent(items[index])
    
        return items[index]
    }
    
    
    fun union(first:Int,second:Int):Boolean{

        val parSecond = findParent(second)
        
        val parFirst = findParent(first)

        if(parFirst == parSecond)  return false
        items[second] = parFirst
        items[parSecond] =parFirst
        return true
    }
}
```