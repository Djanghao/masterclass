# Swift | Two approaches: Simple and Fast

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1569362/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1569362/)

---

1) Simple (12 ms)
```
class Solution {
    func countVowelSubstrings(_ word: String) -> Int {
        guard word.count > 4 else { return 0 }
        let word = Array(word), vowels = Set<Character>("aeiou")
        var result = 0
        for i in word.indices where vowels.contains(word[i]) {
            var remainingVowels = vowels
            for ch in word[i ..< word.count] {
              guard vowels.contains(ch) else { break }
              remainingVowels.remove(ch)
              if remainingVowels.isEmpty {
                result += 1
              }
            }
        }
        return result
    }
}
```

2) Fast (4 ms)
```
class Solution {
    func countVowelSubstrings(_ word: String) -> Int {
        guard word.count > 4 else { return 0 }
        let word = Array(word)
        let vowelsInit = Dictionary(uniqueKeysWithValues: "aeiou".map{($0, 0)})
        var result = 0, windowStart = 0, windowEnd = 0, vowelCounts = vowelsInit, vowelsPresent = 0
        for (i, ch) in word.enumerated() {
            if let count = vowelCounts[ch] {
              if count == 0 {
                if vowelsPresent == 0 {
                  windowStart = i
                  windowEnd = i
                }
                vowelsPresent += 1
              }
              vowelCounts[ch]! = count + 1
              if vowelsPresent == 5 {
                for ch in word[windowEnd ..< word.count] {
                    windowEnd += 1
                    if let count = vowelCounts[ch] {
                      vowelCounts[ch]! = count - 1
                      guard count > 1 else { vowelsPresent -= 1; break }
                    }
                }
              }
              result += windowEnd - windowStart
          } else if vowelsPresent > 0 {
            vowelCounts = vowelsInit
            vowelsPresent = 0
          }
        }
        return result
    }
}
```