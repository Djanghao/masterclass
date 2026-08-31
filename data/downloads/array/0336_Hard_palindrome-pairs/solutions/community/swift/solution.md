# Swift - Accepted - based on Easy to understand java solution - using dictionary

**Author:** liviur
**Votes:** 2
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/353586/](https://leetcode.com/problems/palindrome-pairs/solutions/353586/)

---

Based on reading, understanding and implementing https://leetcode.com/problems/palindrome-pairs/discuss/79210/The-Easy-to-unserstand-JAVA-Solution

Please refer to that solution for an EXCELLENT explenation on why this works and what are the cases.

(Mind you - I'm aware that this can be simplified slightly and save some work - but complexity wise it's acceptable as its not o(n^2)

```
class Solution {
    func palindromePairs(_ words: [String]) -> [[Int]] {
        if words.count <= 1 {
            return []
        }
        
        var retVal: Set<[Int]> = []
        var helperDict: [String: Int] = [:]
        
        for index in 0..<words.count {
            helperDict[words[index]] = index
        }
        
        // In case empty string exist
        if helperDict[""] != nil,
            let emptyIndex = helperDict[""] {
            for index in 0..<words.count {
                if emptyIndex != index,
                    isPalindrom(words[index]) {
                    retVal.insert([emptyIndex, index])
                    retVal.insert([index, emptyIndex])
                }
            }
        }
        
        // In case of reverse strings
        for index in 0..<words.count {
            if helperDict[String(words[index].reversed())] != nil,
                let reversedIndex = helperDict[String(words[index].reversed())],
            reversedIndex != index {
                retVal.insert([index, reversedIndex])
                retVal.insert([reversedIndex, index])
            }
                
        }
        
        // Partial string reversed
        for index in 0..<words.count {
            let currentWord = words[index]
            if currentWord != "" {
                for i in 1..<currentWord.count {
                    if isPalindrom(String(currentWord.prefix(i))),
                        let helperIndex = helperDict[String(String(currentWord.suffix(currentWord.count - i)).reversed())] {
                        retVal.insert([helperIndex, index])
                    }
                    
                    if isPalindrom(String(currentWord.suffix(i))),
                        let helperIndex = helperDict[String(String(currentWord.prefix(currentWord.count - i)).reversed())] {
                        retVal.insert([index, helperIndex])
                    }
                }
            }
        }
        
        return Array(retVal)
    }
        
        func isPalindrom(_ word: String) -> Bool {
        let firstHalf = String(word.prefix(word.count / 2))
        let secondHalf = String(word.suffix(word.count / 2))
        
        if firstHalf == String(secondHalf.reversed()) {
            return true
        } else {
            return false
        }
    }
}
```