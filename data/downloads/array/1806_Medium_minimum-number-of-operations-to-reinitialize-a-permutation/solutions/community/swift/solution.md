# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/3273840/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/3273840/)

---

```
class Solution {
    func reinitializePermutation(_ n: Int) -> Int {
        
        let ori = Array(0..<n)
        var old: [Int]!
        var new = ori
        var res = 0

        while res == 0 || new != ori {

            old = new
            res += 1
            
            for i in new.indices {
                if i % 2 == 0 { new[i] = old[i / 2] }
                else { new[i] = old[n / 2 + (i - 1) / 2] }
            }
        }

        return res
    }
}
```