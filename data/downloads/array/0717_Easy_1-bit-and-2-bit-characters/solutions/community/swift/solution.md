# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/3089389/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/3089389/)

---

```
class Solution {
    func isOneBitCharacter(_ bits: [Int]) -> Bool {

        var i = 0
        
        while i < bits.count - 1 {
            if bits[i] == 1 { i += 2 }
            else { i += 1 }
        }
        
        return i == bits.count - 1
    }
}
```