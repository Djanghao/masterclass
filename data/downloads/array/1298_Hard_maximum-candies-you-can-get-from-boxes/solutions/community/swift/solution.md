# Accepted Swift

**Author:** ktoznet
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/5246004/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/5246004/)

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
class Solution {
    func maxCandies(_ status: [Int], _ candies: [Int], _ keys: [[Int]], _ containedBoxes: [[Int]], _ initialBoxes: [Int]) -> Int {
        var accessibleBoxes = Set(initialBoxes)
        var queue = initialBoxes
        var collectedKeys = Set<Int>()
        var totalCandies = 0
        var inaccessibleBoxes = Set<Int>()
        
        while !queue.isEmpty {
            let currentBox = queue.removeFirst()
            
            if status[currentBox] == 1 || collectedKeys.contains(currentBox) {
                // Collect candies
                totalCandies += candies[currentBox]
                
                // Collect keys
                for key in keys[currentBox] {
                    if !collectedKeys.contains(key) {
                        collectedKeys.insert(key)
                        if inaccessibleBoxes.contains(key) {
                            queue.append(key)
                            inaccessibleBoxes.remove(key)
                        }
                    }
                }
                
                // Add contained boxes to queue or inaccessible set if closed
                for containedBox in containedBoxes[currentBox] {
                    if status[containedBox] == 1 || collectedKeys.contains(containedBox) {
                        queue.append(containedBox)
                    } else {
                        inaccessibleBoxes.insert(containedBox)
                    }
                }
            } else {
                // Add the box to inaccessible set if we can't open it yet
                inaccessibleBoxes.insert(currentBox)
            }
        }
        
        // Reprocess inaccessible boxes
        for box in inaccessibleBoxes {
            if collectedKeys.contains(box) {
                queue.append(box)
            }
        }
        
        while !queue.isEmpty {
            let currentBox = queue.removeFirst()
            
            if status[currentBox] == 1 || collectedKeys.contains(currentBox) {
                // Collect candies
                totalCandies += candies[currentBox]
                
                // Collect keys
                for key in keys[currentBox] {
                    if !collectedKeys.contains(key) {
                        collectedKeys.insert(key)
                        if inaccessibleBoxes.contains(key) {
                            queue.append(key)
                            inaccessibleBoxes.remove(key)
                        }
                    }
                }
                
                // Add contained boxes to queue or inaccessible set if closed
                for containedBox in containedBoxes[currentBox] {
                    if status[containedBox] == 1 || collectedKeys.contains(containedBox) {
                        queue.append(containedBox)
                    } else {
                        inaccessibleBoxes.insert(containedBox)
                    }
                }
            }
        }
        
        return totalCandies
    }
}
```