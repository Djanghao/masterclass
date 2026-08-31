# Easy Swift Solution with Time Complexity O(W^N) and Space Complexity O(W^N  × N)

**Author:** debashishdash03
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-squares/solutions/5806304/](https://leetcode.com/problems/word-squares/solutions/5806304/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(W^N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(W^N  \xD7 N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    var N = 0 // Length of each word
    var words: [String] = [] // List of words
    var prefixHashTable: [String: [String]] = [:] // Prefix hashtable to store words by prefix
    
    func wordSquares(_ words: [String]) -> [[String]] {
        // Initialize class properties
        self.words = words
        self.N = words[0].count
        
        var results: [[String]] = [] // Results list to store valid word squares
        buildPrefixHashTable(words) // Build the prefix hash table
        
        // For each word, initiate backtracking to find valid word squares
        for word in words {
            var wordSquares: [String] = [word]
            backtracking(1, &wordSquares, &results) // Start backtracking with the first word
        }
        return results
    }
    
    /// Backtracks to find all valid word squares.
    /// - Parameters:
    ///   - step: Current step in the word square building process.
    ///   - wordSquares: List of words forming the current word square.
    ///   - results: List of all found word squares.
    private func backtracking(_ step: Int, _ wordSquares: inout [String], _ results: inout [[String]]) {
        if step == N {
            results.append(wordSquares) // Add the current word square to results when complete
            return
        }
        
        // Build the prefix based on the current step
        var prefix = ""
        for word in wordSquares {
            let index = word.index(word.startIndex, offsetBy: step)
            prefix.append(word[index])
        }
        
        // Find candidate words with the matching prefix
        for candidate in getWordsWithPrefix(prefix) {
            wordSquares.append(candidate) // Add candidate word
            backtracking(step + 1, &wordSquares, &results) // Recurse to the next step
            wordSquares.removeLast() // Backtrack, remove the candidate
        }
    }
    
    /// Builds the prefix hash table for quick lookup of words by their prefixes.
    /// - Parameter words: List of words to process.
    private func buildPrefixHashTable(_ words: [String]) {
        for word in words {
            for i in 1..<N {
                let prefix = String(word.prefix(i)) // Generate prefix
                if prefixHashTable[prefix] == nil {
                    prefixHashTable[prefix] = [word]
                } else {
                    prefixHashTable[prefix]?.append(word)
                }
            }
        }
    }
    
    /// Returns a list of words that start with the given prefix.
    /// - Parameter prefix: The prefix to search for.
    /// - Returns: List of words that start with the prefix.
    private func getWordsWithPrefix(_ prefix: String) -> [String] {
        return prefixHashTable[prefix] ?? [] // Return an empty array if no words match the prefix
    }
}
```