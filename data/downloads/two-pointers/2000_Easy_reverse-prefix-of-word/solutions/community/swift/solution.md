# Simple Solution [Faster than 82% Runtime]✅

**Author:** ProbablyLost
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5101446/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5101446/)

---

# Approach
- Exit function block early, if `word` does not contain given `ch`
- Get the `index` for ch in the word string
- Split word into two subsequences, `reversedFirstPart` and `secondPart`
- Concatenate and **return** the subsequences

# Code
```
class Solution {
    func reversePrefix(_ word: String, _ ch: Character) -> String {
        // Early exit if no common char
        guard word.contains(ch) else { return word }
        
        let index = word.firstIndex(of: ch)!
        let reversedFirstPart = String(word[...index].reversed())
        let secondPart = word[index...].dropFirst()
        
        return reversedFirstPart + secondPart
    }
}
```