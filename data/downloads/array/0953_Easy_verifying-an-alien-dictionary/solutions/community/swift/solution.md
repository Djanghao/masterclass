# Swift - 24ms (%68) - 21.2mb (%50) - Comments and Easy to understand

**Author:** sege
**Votes:** 5
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/654235/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/654235/)

---

```
class Solution {
    func isAlienSorted(_ words: [String], _ order: String) -> Bool {
        var alphabet: [Character: Int] = [Character: Int]()
        
        // Creating a map like [[a: 1], [b: 2]] ect
        for (char,index) in order.enumerated() {
            alphabet[index] = char
        }
        
        for i in 0..<(words.count-1) {
            // Compare two words at one time, if it is valid continue, if not return false    
            if !isInOrder(words[i], words[i+1], alphabet) {
                return false
            }
        }
        
        return true
    }
    
    func isInOrder(_ word1: String, _ word2: String, _ alphabet: [Character: Int]) -> Bool {
        // Get minimum length of word
        let minLength: Int = min(word1.count, word2.count)

        for i in 0..<minLength {
            let char1 = Array(word1)[i]
            let char2 = Array(word2)[i]
            
            // if two characters are same, doesnt need to look dictionary for values.
            guard char1 != char2 else { continue }

            // Get value of character and compare them
            let value1 = alphabet[char1] ?? -1
            let value2 = alphabet[char2] ?? -1
            
            return value2 > value1
        }
        
        // If two words are like "App" - "Apple", their order should be word1, word2.
        return word1.count < word2.count
    }
}
```