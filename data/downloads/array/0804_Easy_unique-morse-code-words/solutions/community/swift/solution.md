# Swift 5  (12ms)

**Author:** FlightyNEO
**Votes:** 4
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/351647/](https://leetcode.com/problems/unique-morse-code-words/solutions/351647/)

---

```
class Solution {
    func uniqueMorseRepresentations(_ words: [String]) -> Int {
        let morse: [Character : String] = ["a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--.."]

        return words.reduce(into: Set<String>()) {
            let transform = $1.reduce(into: "") { $0 += morse[$1] ?? "" }
            $0.insert(transform)
        }.count
    }
}
```