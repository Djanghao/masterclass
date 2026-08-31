# Swift - Simple solution

**Author:** evkobak
**Votes:** 2
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2326676/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2326676/)

---

```
class Solution {
    func repeatedCharacter(_ s: String) -> Character {
        
        var set: Set<Character> = []

        for char in s {
            if set.contains(char) {
                return char
            } else {
                set.insert(char)
            }
        }

        return "a"
    }
}
```