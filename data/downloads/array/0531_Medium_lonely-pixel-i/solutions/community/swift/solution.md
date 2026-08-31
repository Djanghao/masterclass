# Hash Map Solution beats 100% Time and Space

**Author:** M_DeLaCruz92
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/5202469/](https://leetcode.com/problems/lonely-pixel-i/solutions/5202469/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I don't think there is a way to solved this without a collection due to pictures being immutable in Swift and also advise against editing the original array. Dictionary was my first thought process because of O(1) lookup.

# Approach
<!-- Describe your approach to solving the problem. -->
As I was approaching this problem, I found having the row as the key and a tuple of Set<Col> and boolean flag could determine if we have come across a row or col before.

# Complexity
- Time complexity: O((m*n) + b) where b is the amount of lonely black pixels 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(b) where b is the amount of lonely black pixels
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findLonelyPixel(_ picture: [[Character]]) -> Int {
        var pixelMap = [Int : (cols: Set<Int>, isLonely: Bool)]()
        var lonelyPixels = 0

        for (row, pixels) in picture.enumerated() { 
            for (col, c) in pixels.enumerated() where c == "B" { 
                if pixelMap[row] != nil { 
                    pixelMap[row]?.cols.insert(col)
                    pixelMap[row]?.isLonely = false 
                    continue
                }
                if let pixel = pixelMap.first(where: { $0.value.cols.contains(col) }) { 
                    pixelMap[row, default: ([], false)].cols.insert(col)
                    pixelMap[pixel.key]?.isLonely = false
                    continue 
                }
                pixelMap[row, default: ([], true)].cols.insert(col)
            }
        }

        for (_, value) in pixelMap where value.isLonely { 
            lonelyPixels += 1
        }
        
        return lonelyPixels
    }
}
```