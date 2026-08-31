# Swift O(n) solution using HashMap

**Author:** AndreevIVdev
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/2529015/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/2529015/)

---

```
class Solution {
    func checkDistances(_ s: String, _ distance: [Int]) -> Bool {
        var lettersMap: [Character: Int] = [:]
        for (i, c) in s.enumerated() {
            if let letter = lettersMap[c] {
                lettersMap[c] = i - letter - 1
            } else {
                lettersMap[c] = i
            }
        }
        
        for letter in lettersMap {
            if letter.value != distance[Int(letter.key.asciiValue! - Character("a").asciiValue!)] {
                return false
            }
        }
        
        return true
    }
}
```