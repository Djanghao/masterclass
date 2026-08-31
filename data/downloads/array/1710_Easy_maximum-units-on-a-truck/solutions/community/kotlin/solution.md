# Max Units on Truck | EZ solution

**Author:** qing306038
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/2841257/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/2841257/)

---

**plz Upvote if it was helpful \uD83D\uDC4D**

# Intuition
The most optimal way to get the most units onto the truck is at every step, if you can, put on a box with the most units. (a box with 3 units should be loaded onto the truck before a box with only 1 unit).

# Approach
Sort the box types in non-increasing order by how many units they contain. For each box, load on as many boxes as possible onto the truck, and if the truck is full, the answer is how many units you currently have.

# Complexity
- Time complexity:
`O(N log N)` for the sort + `O(N)` for looping through all the box types.

- Space complexity:
`O(N)` for the sorted box types, `O(1)` for the other variables (how many boxes the truck can still hold, the units used so far).

# Code
```
class Solution {
    fun maximumUnits(boxTypes: Array<IntArray>, truckSize: Int): Int {
        val sort = boxTypes.sortedBy { -it[1] }
        var left = truckSize
        var units = 0
        for (i in sort) {
            var amountLeft = i[0]
            while (left > 0 && amountLeft > 0) {
                left--
                units += i[1]
                amountLeft--
            }
            if (left == 0) return units
        }
        return units
    }
}
```