# Kotlin, Approach with flatten array

**Author:** evgeniy091993
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/5681930/](https://leetcode.com/problems/maximum-population-year/solutions/5681930/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun maximumPopulation(logs: Array<IntArray>): Int {
        if(logs.size == 1) return logs[0][0]
        val list = mutableListOf<Int>()

        for(l in logs) {
            list.add(l[0])
            list.add(-(l[1])) // todo sort equal nums
        }

        list.sortWith { o1, o2 -> if (abs(o1) == abs(o2)) o1 - o2 else abs(o1) - abs(o2) }


        // [       ][       ][    ]
        //   [ ][          ]
        var maxPopulation = 0

        var rangeStart = 0

        var population = 0

        for (i in 0 until list.size) {
          if(list[i] > 0) {
            population++
            if(population > maxPopulation) {
                maxPopulation = population
                rangeStart = list[i]
            }
          } else {
            population--
          }
        }

        return rangeStart
    }
}
```