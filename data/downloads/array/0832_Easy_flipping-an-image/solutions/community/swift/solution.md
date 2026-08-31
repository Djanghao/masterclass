# Swift - Reverse - Inverse - Matrix

**Author:** user2043X
**Votes:** 1
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/1713993/](https://leetcode.com/problems/flipping-an-image/solutions/1713993/)

---

```
    func flipAndInvertImage(_ image: [[Int]]) -> [[Int]] {
        /*
        1 1 0 => 0 1 1 => 1 0 0
        1 0 1 => 1 0 1 => 0 1 0
        0 0 0 => 0 0 0 => 1 1 1
        
        1 0 0
        0 1 0
        1 1 1
        */
        
        var image = image
        for (index, rowImg) in image.enumerated() {
            var rowImg = rowImg
            reverse(&rowImg)
            inverse(&rowImg)
            image[index] = rowImg
        }
        
        return image
    }
    
    func reverse(_ row: inout [Int]) {
        var left = 0, right = row.count - 1
        while left < right { 
            row.swapAt(left, right)
            left += 1
            right -= 1
        } 
        
        print(row)
    }
    
    func inverse(_ row: inout [Int]) {
        for i in 0 ..< row.count {
            row[i] = (row[i] == 1) ? 0 : 1
        }
    }
```