# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3106802/](https://leetcode.com/problems/concatenated-words/solutions/3106802/)

---

# Complexity
- Time complexity: O(n * m^3), n \u2014 number of words, m \u2014 length of the longest word

- Space complexity: O(n * m)

# Code
```
class Solution {
    func findAllConcatenatedWordsInADict(_ words: [String]) -> [String] {
        var isWordInDictionary: [String: Bool] = [:]
        for word in words {
            isWordInDictionary[word] = true
        }

        var answer: [String] = []
        for word in words {
            let chars = Array(word)
            var dp = Array(repeating: false, count: chars.count + 1)
            dp[0] = true
            
            for i in 1...chars.count {
                for j in 0..<i {
                    guard dp[j] else { continue }
                    
                    // For the last pass dont use dp[0] as we dont want to check the whole word to himself
                    if i == chars.count && j == 0 { continue }

                    let wordToSearch = String(chars[j..<i])
                    if isWordInDictionary[wordToSearch, default: false] {
                        dp[i] = true
                        break
                    }
                }
            }

            if dp.last! {
                answer.append(word)
            }
        }

        return answer
    }
}
```