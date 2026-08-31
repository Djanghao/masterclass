# ✅ O(n) O(1) | Fastest Solution

**Author:** eleev
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5557054/](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5557054/)

---

![Screenshot.png](./images/0.png)


# Intuition & Pseudocode
```
- No need to use complex comparisons or full-fledged stack
- Stack can be emulated by a single Int:
    - Increment counter (bs) when you encoutner b char
    - If the current char is a and the number of encounterd bs != 0:
        - We found a removal 
        - Pop b from the pointer stack
    - Repeat until the end
```
# Solution
```swift
struct Solution {
    @_optimize(speed)
    func minimumDeletions(_ s: String) -> Int {
        let s = s.utf8CString.dropLast()
        var (removals, bs) = (0, 0)
        
        for c in s {
            if c == 98 {
                bs += 1
            } else if bs != 0 {
                removals += 1
                bs -= 1
            }
        }
        return removals
    }
}
```