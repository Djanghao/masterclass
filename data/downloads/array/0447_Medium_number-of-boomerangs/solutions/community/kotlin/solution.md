# HashMap<Long, MutableList<Pair<Int, Int>>>

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/5311626/](https://leetcode.com/problems/number-of-boomerangs/solutions/5311626/)

---

# Approach
HashMap<Long, MutableList<Pair<Int, Int>>>
# Complexity
![image.png](./images/0.png)
# Code
```
class Solution {
    fun numberOfBoomerangs(points: Array<IntArray>): Int {
        val len = points.size
        val map_L = HashMap<Long, MutableList<Pair<Int, Int>>> ()
        var rez = 0
        for (i in 0 until len-1) {
            for (j in i+1 until len) {
                val dist2 = 0L + 
                            (points[j][0]-points[i][0])*(points[j][0]-points[i][0])+
                            (points[j][1]-points[i][1])*(points[j][1]-points[i][1])
                map_L.computeIfAbsent(dist2) { mutableListOf() }.add(Pair(i,j))
            }
        }
        // println("map_L=${map_L.toList()}")
        for((key, value) in map_L){
            if (value.size>=2) {
                for (i in 0 until value.size-1) {
                    for (j in i+1 until value.size) {
                        if (value[i].first==value[j].first ||
                            value[i].second==value[j].second ||
                            value[i].first==value[j].second ||
                            value[i].second==value[j].first) rez +=2

                    }
                }
            }
        }
        return rez
    }
}
```