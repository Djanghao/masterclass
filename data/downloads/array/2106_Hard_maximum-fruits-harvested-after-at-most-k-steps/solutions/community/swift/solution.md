# Sliding Window | O(n)

**Author:** sifat_oshan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1627076/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/1627076/)

---

```
class Solution {
    func maxTotalFruits(_ fruits: [[Int]], _ startPos: Int, _ k: Int) -> Int {
        var axis = Array<Int>(repeating: 0, count: fruits.last![0]+1)
        var res = 0
        for fruit in fruits {
            axis[fruit[0]] = fruit[1]
        }
        for i in 1..<axis.count {
            axis[i]+=axis[i-1]
        }
        for b1 in axis.indices {
            let diff = abs(startPos - b1)
            if diff > k {
                continue
            }
            
            let left = k - (2*diff)
            var b2 = startPos
            if left > 0 {
                if b1 > startPos {
                    b2 = startPos - left
                } else {
                    b2 = startPos + left
                }
            }
            let x = min(b1, b2)
            let y = min(axis.count-1, max(b1, b2))
            res = max(res, x <= 0 ? axis[y] : axis[y] - axis[x-1])
        }
        return res
    }
}

```