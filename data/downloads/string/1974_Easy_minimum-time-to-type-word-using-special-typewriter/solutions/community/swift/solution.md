# Easy Swift Solution with ASCII, Greedy

**Author:** Suns4ine
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/2741979/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/2741979/)

---

```
class Solution {
    func minTimeToType(_ word: String) -> Int {
        guard !word.isEmpty else { return 0 }
        var result = 0
        var position = 97
        
        for char in word {
            let numb = Int(char.asciiValue ?? 97)
            if abs(position - numb) > 13 {
                var max = numb > position ? numb : position
                var min = numb > position ? position : numb
                
                result += 26 - max + min
            } else {
                result += abs(position - numb)
            }
            position = numb
            result += 1
        }
        
        return result
    }
}
```