# Array<Pair<Int,PriorityQueue<Int>>>

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5376857/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5376857/)

---

# Complexity
![image.png](./images/0.png)
# Code
```
class Solution {
    fun maxStarSum(vals: IntArray, edges: Array<IntArray>, k: Int): Int {
        val len = vals.size
        val map : Array<Pair<Int,PriorityQueue<Int>>> = Array(len,{Pair(0,PriorityQueue<Int>())}) // (sum,min)
        var rez = vals.indices.map { i: Int -> vals[i] }.max()
        if (edges.size==0 || k==0) return rez
        for (E in edges) {
            val a= E[0]
            val b= E[1]
            // println("-a=$a,map[a]=${map[a]},b=$b,map[b]=${map[b]}")
            if (vals[b]>0)
            if (map[a].second.size<k) {
                val sum = map[a].first + vals[b]
                val que = map[a].second
                que.add(vals[b])
                map[a] = Pair(sum,que)
                rez = maxOf(rez,sum+vals[a])
            }
            else {
                var sum = map[a].first
                val que = map[a].second
                var min = que.poll()
                sum-=min
                min = maxOf(min,vals[b])
                sum+=min
                que.add(min)
                map[a] = Pair(sum,que)
                rez = maxOf(rez,sum+vals[a])
            }
            if (vals[a]>0)
            if (map[b].second.size<k) {
                val sum = map[b].first + vals[a]
                val que = map[b].second
                que.add(vals[a])
                map[b] = Pair(sum,que)
                rez = maxOf(rez,sum+vals[b])
            }
            else {
                var sum = map[b].first
                val que = map[b].second
                var min = que.poll()
                sum-=min
                min = maxOf(min,vals[a])
                sum+=min
                que.add(min)
                map[b] = Pair(sum,que)
                rez = maxOf(rez,sum+vals[b])
            }
            // println("+a=$a,map[a]=${map[a]},b=$b,map[b]=${map[b]}")
        }
        return rez
    }
}
```