# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/3464077/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/3464077/)

---



# Code
```
class Solution {
    func nextGreatestLetter(_ letters: [Character], _ target: Character) -> Character {
        letters.first{$0 > target} ?? letters.first!
    }
}
```