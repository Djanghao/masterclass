# Two pointer approach

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/3957751/](https://leetcode.com/problems/watering-plants-ii/solutions/3957751/)

---



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    func minimumRefill(_ plants: [Int], _ capacityA: Int, _ capacityB: Int) -> Int {
        var ans = 0
        var i = 0
        var aliceWater = capacityA
        var bobWater = capacityB
        var j = plants.count-1
        
        while i < j {
            if plants[i] > aliceWater {
                ans += 1
                aliceWater = capacityA
            }
            
            if plants[j] > bobWater {
                ans += 1
                bobWater = capacityB
            }
            aliceWater -= plants[i]
            bobWater -= plants[j]
            i += 1
            j -= 1
        }
        if plants[j] > bobWater &&  plants[i] > aliceWater && i == j {
            ans += 1
            bobWater = capacityB
        }
        return ans
    }
}
```