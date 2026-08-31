# Verbose easy to follow solution in 13 ms (beats 80%)

**Author:** imthath
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/5627602/](https://leetcode.com/problems/find-and-replace-in-string/solutions/5627602/)

---

# Intuition
Brute force in reverse order of indices

# Approach
Refer comments in code

# Complexity
- Time complexity:
    - 0(k) + O (k log k) + O(k * 3 * sources[i].length)
    - for given constraints, 100 + 100 (log 100) + (100 \xD7 3 \xD7 50) = 15,300. not that big
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
    - O(s.count) for storing input + O(k) for the replacements array
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findReplaceString(_ s: String, _ indices: [Int], _ sources: [String], _ targets: [String]) -> String {
        var input = Array(s)
        var result = input
        var inputLength = s.count
        
        // mapping index with both source and target using a new struct
        var replacements = (0..<indices.count).map { index in 
            Replacement(index: indices[index], source: Array(sources[index]), target: Array(targets[index]))
        }
        
        // so that we can check and remove in reverse order of indices
        replacements.sort { $0.index >= $1.index }
        
        for replacement in replacements {
            var inputIndices = [Int]()
            
            // find matches with source char by char
            for index in 0..<replacement.source.count {
                var inputIndex = index + replacement.index
                guard inputIndex < inputLength, replacement.source[index] == input[inputIndex] else { break }
                inputIndices.append(inputIndex)
            }
            
            guard inputIndices.count == replacement.source.count else { continue }
            // remove matching indices in reverse order
            inputIndices.reversed().forEach { result.remove(at: $0) }
            // replace at start with target
            result.insert(contentsOf: replacement.target, at: inputIndices.first!) // this should never fail based on given constraint
        }
        
        return String(result)
    }
}

struct Replacement {
    let index: Int
    let source: [Character]
    let target: [Character]
}
```