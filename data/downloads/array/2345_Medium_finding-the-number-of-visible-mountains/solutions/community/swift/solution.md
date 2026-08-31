# Swift, clear solution, use sort and break to reduce unnecessary works.

**Author:** jerome1210
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3686475/](https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3686475/)

---

# Intuition
1. Sort the peaks to reduce unnecessary works
2. Record every index x's (height, count) in the heightMap
3. If count == 1 means it is the only one peak
4. If count > 1 means multiple mountain cover this point
5. Check each peak's count in the heightMap and sum the count == 1.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 $$O(nlogn + n^2)$$ -> sort + iterator
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 $$O(2*n)$$  -> tuple array

# Code
```
class Solution {
    func visibleMountains(_ peaks: [[Int]]) -> Int {
        var peaks = peaks.sorted { $0[1] > $1[1] }
        var heightMap = Array(repeating: (0, 0), count: 100001) // (height , count)
        
        for peak in peaks {
            helper(peak, &heightMap)
        }

        var answer = 0

        for peak in peaks {
            if heightMap[peak[0]].1 == 1 && peak[1] == heightMap[peak[0]].0 {
                answer += 1
            }
        }
        return answer
    }

    func helper(_ peak: [Int], _ map: inout [(Int, Int)]) {
        let count = map.count 

        // right side
        for i in 0..<peak[1] {
            let x = i + peak[0]
            guard x < count else { break }
            let y = peak[1] - i
            guard y >= map[x].0 else { break }
            if y == map[x].0 { 
                if map[x].1 == 1 {
                    map[x].1 += 1  
                } else { 
                    break
                }
            } else {
                map[x] = (y, 1)
            }
        }
        // left side
        for i in 1..<peak[1] {
            let x = peak[0] - i
            guard x >= 0 else { break }
            let y = peak[1] - i
            guard y >= map[x].0 else { break }
            if y == map[x].0 {
                if map[x].1 <= 1 {
                    map[x].1 += 1  
                } else {
                    break
                }
            } else {
                map[x] = (y, 1)
            } 
        }
    }
}
```