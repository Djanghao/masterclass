# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4383725/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4383725/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func removeAlmostEqualCharacters(_ word: String) -> Int {
        var ind = word.startIndex
        var result = 0
        var prev: Character?
        while ind < word.endIndex {
            if let prevCh = prev, abs(Int(prevCh.asciiValue!) - Int(word[ind].asciiValue!)) <= 1 {
                result += 1
                prev = nil
            } else {
                prev = word[ind]
            }
            ind = word.index(after: ind)
        }
        return result
    }
}

```