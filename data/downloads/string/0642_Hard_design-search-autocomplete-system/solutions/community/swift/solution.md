# Swift trie solution, standard append, search, plus update for this question

**Author:** tzef
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/2806775/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/2806775/)

---

# Code
```
class Trie {
    typealias Word = (content: String, degree: Int)
    var tries = [Character: Trie]()
    var endWord: Word?
    
    func append(_ word: String, _ degree: Int, _ offset: Int = 0) {
        guard offset < word.count else {
            endWord = (word, degree)
            return
        }
        let char = word[offset]
        let trie = tries[char] ?? Trie()
        trie.append(word, degree, offset+1)
        tries[char] = trie
    }
    
    // I think keep different function from append() is better for understandable
    func update(_ word: String, _ offset: Int = 0) {
        guard offset < word.count else {
            if let endWord = endWord {
                self.endWord = (endWord.0, endWord.1 + 1)
            } else {
                endWord = (word, 1)
            }
            return
        }
        let char = word[offset]
        let trie = tries[char] ?? Trie()
        trie.update(word, offset+1)
        tries[char] = trie
    }
    
    func search(_ word: String, _ offset: Int = 0) -> [Word] {
        guard offset < word.count else {
            var result = [Word]()
            if let endWord = endWord {
                result.append(endWord)
            }
            tries.values.forEach {
                result += $0.search(word, offset)
            }
            result = result.sorted { 
                if $0.1 == $1.1 {
                    return $0.0 < $1.0
                } else {
                    return $0.1 > $1.1     
                }
            }
            if result.count > 3 {
                return Array(result[..<3])
            } else {
                return result    
            }
        }
        let char = word[offset]
        guard let trie = tries[char] else {
            return []
        }
        return trie.search(word, offset+1)
    }
}
class AutocompleteSystem {
    let trie = Trie()
    init(_ sentences: [String], _ times: [Int]) {
        guard sentences.count == times.count else {
            fatalError("invalid input")
        }
        for i in 0..<sentences.count {
            trie.append(sentences[i], times[i])
        }
    }
    
    var key = ""
    func input(_ c: Character) -> [String] {
        if c == "#" {
            trie.update(key)
            key = ""
            return []
        } else {
            key.append(c)
            return trie.search(key).map { $0.content }
        }
    }
}

extension StringProtocol {
    subscript(index: Int) -> Character {
        self[self.index(startIndex, offsetBy: index)]
    }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * let obj = AutocompleteSystem(sentences, times)
 * let ret_1: [String] = obj.input(c)
 */
```