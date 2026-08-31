# [Swift][Simple] Using set to find modular

**Author:** GV1506
**Votes:** 1
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/4394444/](https://leetcode.com/problems/double-modular-exponentiation/solutions/4394444/)

---

```
class Solution {
    func getGoodIndices(_ variables: [[Int]], _ target: Int) -> [Int] {
        
        func modular(_ a: Int, _ b: Int, _ c: Int) -> Int {
            var set = Set<Int>()
            var b = b
            var c = c
            var r = a % c
            while !set.contains(r), b > 1 {
                b -= 1
                r = (r * a) % c
            }
            return r
        }
        
        func helper(_ arr: [Int]) -> Int {
            var a = arr[0] % 10
            var b = arr[1]
            var c = arr[2]
            let m = arr[3] 
            return modular(modular(a, b, 10), c, m)
        }
        
        var res = [Int]()
        for (i, arr) in variables.enumerated() {
            if helper(arr) == target {
                res.append(i)
            }
        }
        return res
    }
}
```