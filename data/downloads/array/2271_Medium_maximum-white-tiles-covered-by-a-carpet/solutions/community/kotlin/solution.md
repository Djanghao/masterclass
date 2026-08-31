# Kotlin | sort + sliding window | NlogN

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/2038531/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/2038531/)

---

Hint: tiles are not overlapping
```
class Solution {
    fun maximumWhiteTiles(tiles: Array<IntArray>, carpetLen: Int): Int {
        Arrays.sort(tiles, compareBy<IntArray>{it[0]})
        var countTilesMax = 0
        var j = 0
        var overlap = 0
        tiles.forEachIndexed{i,(from,to)->
            val carpetEnd = from+carpetLen-1
            var tail = 0
            while(j<tiles.size){
               val (from1, to1) = tiles[j]
               if(from1>carpetEnd) break
               if(to1>carpetEnd){
                   tail = minOf(carpetEnd, to1) - from1+1
                   break  
               } 
               overlap+=to1 - from1+1
               j++
            }
            countTilesMax = maxOf(countTilesMax, overlap+tail)
            if(j==tiles.size) return countTilesMax
            overlap -= minOf(to-from+1, carpetLen)
        }
        return countTilesMax
    }
}
```