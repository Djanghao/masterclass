# Swift dfs and bfs solution

**Author:** davidma_96
**Votes:** 1
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/3893427/](https://leetcode.com/problems/synonymous-sentences/solutions/3893427/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code BFS
```
class Solution {
    func generateSentences(_ synonyms: [[String]], _ text: String) -> [String] {

        var synonymDictionary = [String: [String]]()
        
        var answer = Set<[String]>()
        
        for synonym in synonyms {
            synonymDictionary[synonym[0], default: [String]()].append(synonym[1])
            synonymDictionary[synonym[1], default: [String]()].append(synonym[0])
        }
        
        let textArray = text.split(separator: " ").map { String($0) }
        var queue = [textArray]
        
        while !queue.isEmpty {
            var words = queue.removeLast()
            answer.insert(words)
            for index in 0..<words.count {
                guard let currentSynonyms = synonymDictionary[words[index]] else { continue }
                for synonym in currentSynonyms {
                    words[index] = synonym
                    if !answer.contains(words) {
                        queue.append(words)
                        }
                }
            }
        }

        return answer.map { $0.joined(separator: " ") }.sorted(by: <)

    }
}
```
# Code DFS
   func generateSentences(_ synonyms: [[String]], _ text: String) -> [String] {
        
        var synonymDictionary = [String: [String]]()
        
        var answer = Set<String>()
        
        for synonym in synonyms {
            synonymDictionary[synonym[0], default: [String]()].append(synonym[1])
            synonymDictionary[synonym[1], default: [String]()].append(synonym[0])
        }
        
        var visited = Set<[String]>()

        func helperFunction( _ sentence: [String]) {   
            answer.insert( sentence.joined(separator: " ") )
            visited.insert(sentence)
            for (index, word) in sentence.enumerated() {
                guard let currentSynonyms = synonymDictionary[word] else { continue }
                for synonym in currentSynonyms {
                    var newSentence = sentence
                    newSentence[index] = synonym
                    guard !visited.contains(newSentence) else { continue }
                    helperFunction(newSentence)
                }
            }
        }
        let newText = text.split(separator: " ").map { String($0) }
        helperFunction(newText)
        return Array(answer).sorted(by: <)
    }
```

```