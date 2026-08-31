# SortBy , if else conditions

**Author:** yusu0090
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/4284757/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/4284757/)

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
```
object Solution {
    def maximumUnits(boxTypes: Array[Array[Int]], truckSize: Int): Int = {
        var sum , totalBoxes , remaining = 0
        for(i <- boxTypes.sortBy(e => ~e(1)).map(e => e.toList)){
            if(sum + i(0) < truckSize){
                sum += i(0)
                totalBoxes += i(0) * i(1)
            }else{
                remaining = truckSize - sum
                sum += remaining
                totalBoxes += (remaining) * i(1)
            }


        }
        return totalBoxes
    }
}
```