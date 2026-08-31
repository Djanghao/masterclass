# Swift

**Author:** ncke
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/4825860/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/4825860/)

---

# Code
```
class Solution {

    func kthLargestValue(_ matrix: [[Int]], _ k: Int) -> Int {
        let m = matrix[0].count
        let n = matrix.count 
        var above = [Int](repeating: 0, count: m)
        var computed = [Int]()
        
        for j in 0..<n {
            var xoring = 0

            for i in 0..<m {
                xoring = matrix[j][i] ^ xoring
                above[i] = above[i] ^ xoring
                computed.append(above[i])
            }
        }
        
        return computed.sorted().reversed()[k-1]
    }

}
```