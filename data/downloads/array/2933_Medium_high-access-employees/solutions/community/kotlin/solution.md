# :: Kotlin :: Map & Sort

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-access-employees/solutions/4323056/](https://leetcode.com/problems/high-access-employees/solutions/4323056/)

---


```
class Solution {
    fun findHighAccessEmployees(access_times: List<List<String>>): List<String> {
        val accessMap = HashMap<String, MutableList<Pair<Int, Int>>>()

        for (accessTime in access_times) {
            val name = accessTime[0]
            val time = accessTime[1]
            val hour = accessTime[1].slice(0..1).toInt()
            val min = accessTime[1].slice(2..3).toInt()

            accessMap.computeIfAbsent(name){ mutableListOf<Pair<Int, Int>>() }.add(Pair(hour, min))
        }

        val result = mutableListOf<String>()

        for ( (name, timeList) in accessMap) {
            val list = timeList.sortedWith(compareBy({ it.first }, { it.second }))

            for (i in 0 until list.size - 2) {
                val curr = list[i]
                val next = list[i + 2]

                if (next.first - curr.first > 1) continue
                if (next.first - curr.first == 1 && next.second < curr.second) {
                    result.add(name)
                    break;
                } else if (next.first - curr.first == 0) {
                    result.add(name)
                    break;
                }
            }
        }

        return result
    }
}
```