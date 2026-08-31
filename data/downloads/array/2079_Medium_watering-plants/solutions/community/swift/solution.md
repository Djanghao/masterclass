# easy hai

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/watering-plants/solutions/3957800/](https://leetcode.com/problems/watering-plants/solutions/3957800/)

---


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    func wateringPlants(_ plants: [Int], _ capacity: Int) -> Int {
        var ans = 0

        var waterInBucket = capacity 
        for i in 0..<plants.count {
            if waterInBucket >= plants[i] {
                ans += 1
            }  else {
                ans += 2*(i+1)-1
                waterInBucket = capacity
            }
            waterInBucket -= plants[i]
        }
        return ans
    }
}
```