# Scala 2 liner - beats 100%

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/5228503/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/5228503/)

---

# Code
```
object Solution {
    def findBuildings(heights: Array[Int]): Array[Int] = {
        val max = heights.scanRight(0)(_ max _)            
        heights.indices.filter(i => heights(i) > max(i+1)).toArray
    }
}
```