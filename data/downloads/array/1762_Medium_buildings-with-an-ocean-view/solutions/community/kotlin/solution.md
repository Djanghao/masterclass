# Simple Kotlin solution beats 92% of all submission!

**Author:** harsc8
**Votes:** 0
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/4813614/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/4813614/)

---

# Intuition
Intuition is to use a list to keep track of all indices with an oceanview by checking all the buildings at the right. For the rightmost building, since there is no other building to its right then we simply add its index. 

# Approach
Iterate the list from right to left and using a variable `maxCurrentBuildingHeight` to hold the largest building at the right, check if the current building is greater than this variable. If so, add its index to our list and re-assign the value of `maxCurrentBuildingHeight` to the current building's height. Once we have all the buildings' indices we simply sort and convert to IntArray().


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun findBuildings(heights: IntArray): IntArray {
        val buildingsWithOceanView = mutableListOf<Int>()
        var maxCurrentBuildingHeight = 0

        for(i in (0..heights.size-1).reversed()) {
            if(heights[i] > maxCurrentBuildingHeight) {
                maxCurrentBuildingHeight = heights[i]
                buildingsWithOceanView.add(i)
            }
        }

        return buildingsWithOceanView.sorted().toIntArray()
    }
}
```