# Simple Solution ✅

**Author:** ProbablyLost
**Votes:** 2
**Link:** [https://leetcode.com/problems/image-smoother/solutions/4424228/](https://leetcode.com/problems/image-smoother/solutions/4424228/)

---

# Code
```
class Solution {
    func imageSmoother(_ img: [[Int]]) -> [[Int]] {
        let rows = img.count
        let cols = img[0].count
        
        var result = Array(repeating: Array(repeating: 0, count: cols), count: rows)
        
        let dirs = [-1, 0, 1]
        
        for r in 0..<rows {
            for c in 0..<cols {
                result[r][c] = calculateAverage(img, rows, cols, r, c, dirs)
            }
        }
        
        return result
    }
    
    func calculateAverage(_ img: [[Int]], _ rows: Int, _ cols: Int, _ r: Int, _ c: Int, _ dirs: [Int]) -> Int {
        var total = 0
        var count = 0
        
        for i in dirs {
            for j in dirs {
                let newRow = r + i
                let newCol = c + j
                
                if newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols {
                    total += img[newRow][newCol]
                    count += 1
                }
            }
        }
        
        return total / count
    }
}

```