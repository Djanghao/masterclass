# Swift solution using dictionary

**Author:** olegmetallic
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/3856415/](https://leetcode.com/problems/repeated-dna-sequences/solutions/3856415/)

---

# Approach
Map dna-string into dna-characters array.
Grab all 10-letter sequences from the dna-characters array and set them as keys of the dict, value will be amount of times this sequence appears in the dna sequence.
Last step is filter all dict keys where value is bigger than 1.

# Complexity
- Time complexity:
O(n) - loop through dna-string.

- Space complexity:
O(n) - put 10-letter sequences into dict.

# Code
```
class Solution {
    func findRepeatedDnaSequences(_ s: String) -> [String] {
        let sequenceLength = 10
        
        guard s.count >= sequenceLength else {
            return []
        }
        
        var dna = s.map { $0 }
        var dict = [ArraySlice<Character>: Int]()
        
        for offset in 0...dna.count-sequenceLength {
            let sequence = dna[offset..<offset + sequenceLength]
            dict[sequence, default: 0] += 1
        }

        return dict.keys
            .filter { dict[$0, default: 0] > 1 }
            .map { String($0) }
    }
}
```