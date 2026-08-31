# Kotlin solution

**Author:** Ramil_Yusipov
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/1979703/](https://leetcode.com/problems/design-underground-system/solutions/1979703/)

---

```
    class UndergroundSystem() {
        val checkInMap = HashMap<Int, Pair<String, Int>>()  // HashMap<id, Pair<stationName, t>>
        val averageTimeMap = HashMap<String, Pair<Double, Int>>() // HashMap <"WaterLoo:Cambridge", Pair<averageTime,count>>
        fun checkIn(id: Int, stationName: String, t: Int) {
            checkInMap[id] = Pair(stationName, t)
        }

        fun checkOut(id: Int, stationName: String, t: Int) {
            val checkIn = checkInMap[id]
            val road = "${checkIn!!.first}:$stationName"
            if (averageTimeMap.contains(road)) {
                val count = averageTimeMap[road]!!.second + 1
                val avarageTime = (averageTimeMap[road]!!.first + (t-checkIn.second))
                averageTimeMap[road] = Pair(avarageTime, count)
            } else {
                averageTimeMap[road] = Pair(t.toDouble()-checkIn.second.toDouble(), 1)
            }
        }

        fun getAverageTime(startStation: String, endStation: String): Double {
            val get = averageTimeMap["$startStation:$endStation"]
            return get!!.first/get.second
        }
    }
```