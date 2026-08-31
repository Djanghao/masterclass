# Fast & Simple Solution using Backtracking [Swift] Beats 100% 3ms

**Author:** Anastasia1944
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5201714/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5201714/)

---

# Intuition
For each word we find out all possible sets with other words using backtracking. 

# Code
```
class Solution {
    private var answer = 0
    
    private func canAdd(_ word: String, _ counts: [Character: Int], _ scores: [Character: Int]) -> ([Character: Int], Int)? {
        var countsTemp = counts
        var curScore = 0
        
        for w in word {
            guard let count = countsTemp[w], count > 0 else { return nil }
            countsTemp[w]! -= 1
            curScore += scores[w]!
        }
        
        return (countsTemp, curScore)
    }
    
    private func backtrack(_ words: [String], _ scores: [Character: Int], _ counts: [Character: Int], _ start: Int, _ curScore: Int) {
        answer = max(answer, curScore)
        
        for i in start ..< words.count {
            if let (newCounts, wordScore) = canAdd(words[i], counts, scores) {
                backtrack(words, scores, newCounts, i + 1, curScore + wordScore)
            }
        }
    }
    
    func maxScoreWords(_ words: [String], _ letters: [Character], _ score: [Int]) -> Int {
        let scores = Dictionary(uniqueKeysWithValues: zip("abcdefghijklmnopqrstuvwxyz", score))
        let counts = Dictionary(letters.map { ($0, 1) }, uniquingKeysWith: +)
        
        backtrack(words, scores, counts, 0, 0)
        return answer
    }
}
```