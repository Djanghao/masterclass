# Swift solution (simulation)

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/1234102/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/1234102/)

---

Since n is small, we can simply simulate the process of constructing string S as described. For optimization purposes, we don't need to build the all strings S1...Sn. We need the first string Sx whose length is greater than or equal to k
```
class Solution {
    func findKthBit(_ n: Int, _ k: Int) -> Character {
        var s = [0]
        while s.count < k {
            s = s + [1] + s.reversed().map({ $0 == 0 ? 1 : 0 })
        }
        return s[k - 1] == 0 ? "0" : "1"
    }
}
```