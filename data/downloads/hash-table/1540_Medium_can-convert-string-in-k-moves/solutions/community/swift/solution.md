# [Swift] Concise solution

**Author:** GV1506
**Votes:** 1
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/4407859/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/4407859/)

---

Maintain an array that can track the move
```
class Solution {
    func canConvertString(_ s: String, _ t: String, _ k: Int) -> Bool {
        let m = s.count
        let n = t.count
        guard m == n else { return false }
        let arr1 = Array(s)
        let arr2 = Array(t)
        var set = Array(repeating: 0, count: 26)
        var arr = [Int]()
        for i in 0..<m {
            var id = (Int(arr2[i].asciiValue!) - Int(arr1[i].asciiValue!) + 26) % 26
            if id == 0 { continue }
            if set[id] == 0 {
                set[id] = id
            } else {
                set[id] += 26
            }
            if set[id] > k { return false }
        }
        return true
    }
}
```