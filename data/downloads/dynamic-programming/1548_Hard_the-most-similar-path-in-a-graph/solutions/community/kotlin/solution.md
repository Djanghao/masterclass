# (Simple approach) GRPAH DFS + MEMO

**Author:** ivv135uk
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/3430095/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/3430095/)

---

```
class Solution {
        
    data class Result(val list : List<Int>, val cost : Int)
    
    val cityMap = mutableMapOf<Int, String>()
    lateinit var targetPath: Array<String>
    val graph = mutableMapOf<Int, MutableList<Int>>()
    val DEF_RES = Result(emptyList(), Int.MAX_VALUE)
    
    //The Most Similar Path in a Graph
    //https://leetcode.com/problems/the-most-similar-path-in-a-graph/
    //time: targetPath.length * number of vertices
    //space: targetPath.length * number of vertices
    fun mostSimilar(n: Int, roads: Array<IntArray>, names: Array<String>, targetPath: Array<String>): List<Int> {

        this.targetPath = targetPath
        for(city in 0 until n){
            cityMap[city] = names[city]
        }
        
        for((from, to) in roads){
            graph.computeIfAbsent(from){ mutableListOf<Int>() }.add(to)    
            graph.computeIfAbsent(to){ mutableListOf<Int>() }.add(from)    
        }        
        
        val memo = Array(n){
            Array<Result>(targetPath.size){
             DEF_RES
            }
        }
     
        var minCost = Int.MAX_VALUE
        var resPath = emptyList<Int>()
        for(city in 0 until n){
            val(path, cost) = explore(memo, city, targetPath.size - 1)
            if(cost < minCost){
                minCost = cost
                resPath = path
            }
        }

        return resPath
    }
    
    fun explore(memo :Array<Array<Result>>, curCity : Int, pos : Int) : Result {
        
        val curCityName = cityMap[curCity]
        
        
        if(pos == 0){
            val cost = if(curCityName != targetPath[pos]) 1 else 0
            return Result(listOf(curCity), cost)
        }

        if(memo[curCity][pos] != DEF_RES){
            return memo[curCity][pos]
        }
        
        val nextCities = graph.getOrElse(curCity){ emptyList<Int>() }
        
        var curCost = Int.MAX_VALUE
        var curPath = listOf<Int>()
        
        for(nextCity in nextCities){
            val (path, cost) = explore(memo, nextCity, pos - 1)
            if(cost < curCost ){
                curCost = cost
                curPath = path
            }
        }
        
    
        if(curCityName != targetPath[pos]){
            curCost++
        }
        
        curPath = curPath + listOf(curCity)
        
        val result = Result(curPath, curCost)
        memo[curCity][pos] = result
        return result
    }
}
```