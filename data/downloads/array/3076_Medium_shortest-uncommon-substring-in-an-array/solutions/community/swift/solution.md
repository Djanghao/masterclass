# 💡Swift - Brute Force / Prefix Sum / Trie

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4851508/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4851508/)

---

I'm not entirely confident about this solution; there could be a better alternative.

# Solution (Prefix Sum)
```swift
class Solution {
    func shortestSubstrings(_ arr: [String]) -> [String] {
        let arr = arr.map { Array($0) }
        let n = arr.count
        
        func allSubstrings(_ string: [Character]) -> Set<String> {
            var result: Set<String> = []
            for length in 1...string.count {
                for i in 0...(string.count - length) {
                    result.insert(String(string[i..<(i + length)]))
                }
            }
            return result
        }
        
        var prefix: [Set<String>] = Array(repeating: [], count: n)
        var suffix: [Set<String>] = Array(repeating: [], count: n)
        for i in 1..<n {
            prefix[i] = prefix[i - 1].union(allSubstrings(arr[i - 1]))
            suffix[n - i - 1] = suffix[n - i].union(allSubstrings(arr[n - i]))
        }
        
        var answer: [String] = Array(repeating: "", count: n)
        for i in 0..<n {
            let string = arr[i]
            for length in 1...string.count {
                for start in 0...(string.count - length) {
                    let substring = String(string[start..<(start + length)])
                    if !prefix[i].contains(substring) && !suffix[i].contains(substring) {
                        if answer[i].count == 0 || answer[i] > substring {
                            answer[i] = substring
                        }
                    }
                }
                if answer[i].length != 0 {
                    break
                }
            }
        }
        
        return answer
    }
}
```

# Solution (Trie)
```swift
class Solution {
    func shortestSubstrings(_ arr: [String]) -> [String] {
        var trie = Trie()
        func updateTrie(_ string: String, _ delta: Int) {
            for start in string.indices {
                var node = trie
                for character in string[start...] {
                    if let child = node.children[character] {
                        node = child
                    } else {
                        let child = Trie()
                        node.children[character] = child
                        node = child
                    }
                    node.wordCount += delta
                }
            }
        }

        for string in arr {
            updateTrie(string, 1)
        }

        var answer: [String] = Array(repeating: "", count: arr.count)
        for (i, string) in arr.enumerated() {
            // Remove own words first.
            updateTrie(string, -1)

            // Find the answer.
            for start in string.indices {
                var node = trie
                var substring = ""
                for character in string[start...] {
                    substring.append(character)
                    if answer[i].count > 0 && answer[i].count < substring.count { break }
                    node = node.children[character]!
                    if node.wordCount == 0 {
                        if answer[i].count == 0 || answer[i].count > substring.count || answer[i] > substring {
                            answer[i] = substring
                        }
                        break
                    }
                }
            }

            // Restore the trie state.
            updateTrie(string, 1)
        }

        return answer
    }
}

class Trie {
    var wordCount = 0
    var children: [Character: Trie] = [:]
}
```
# Complexity
- Time: $$O(n \\cdot m^3)$$ we iterate over all possible substrings and copy them into a set. Here $n$ represents the length of the array, and $m$ represents the maximum length of each word.
- Space: $$O(n \\cdot m^3)$$