# Kotlin Concise

**Author:** parassidhu
**Votes:** 1
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/876857/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/876857/)

---

```
fun alertNames(keyName: Array<String>, keyTime: Array<String>): List<String> {
        val res = mutableListOf<String>()
        val map = hashMapOf<String, MutableList<Int>>()
        
        for (i in keyName.indices) {
            val list = map[keyName[i]] ?: mutableListOf()
            val time = keyTime[i].split(":") // Get hours and minutes separately
            list.add(time[0].toInt() * 60 + time[1].toInt()) // 10:00 = 600
            map[keyName[i]] = list
        }
        
        for (i in map.keys) { // i -> Name of employee
            val list = map[i]!! // Timestamps of employee
            
            if (list.size < 3)
                continue
            
            list.sort()
            
            for (j in 2 until list.size) {
                if (list[j] - list[j-2] <= 60) { // one-hour period condition
                    res.add(i)
                    break
                }
            }
        }
        
        res.sort() // Sort alphabetically
        
        return res
    }
```