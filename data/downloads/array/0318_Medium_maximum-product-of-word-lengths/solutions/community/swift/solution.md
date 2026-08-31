# Swift - fast solution, clean code with explanation

**Author:** druidream
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/1233867/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/1233867/)

---

**About checking if two words share common letters:**
General idea is converting each word to a 26-digit binary integer, each bit represents if a letter exists in the word. 
That is:
letter "a" can be represented as 1 << 0
letter "b" can be represented as 1 << 1
...
letter "z" can be represented as 1 << 25

In this way, word "abcw" can be represented as:
00100000000000000000000111 (binary integer)

If two words have the same letters, they have the same bit-representation, so they are considered identical when checking letters. 

Then, we can use bitwise AND (&) to check if two words share common letters, the result should be 0 if they don't.

**About max length:**
What we need to do is to save the max word length for each bit-representation.

```
class Solution {
    func maxProduct(_ words: [String]) -> Int {
        var dict = [Int: Int]() // bits: maxLength
        for word in words {
            var bits = 0
            for scalar in word.unicodeScalars {
                let offset = scalar.value - 97 // ascii value of letter "a"
                bits |= 1 << offset
            }
            if dict[bits] == nil {
                dict[bits] = word.count
            } else {
                dict[bits] = max(dict[bits]!, word.count)
            }
        }
        var ans = 0
        let keys: [Int] = dict.keys.map { $0 }
        for i in 0..<keys.count - 1 {
            for j in i + 1..<keys.count {
                if keys[i] & keys[j] == 0 {
                    ans = max(ans, dict[keys[i]]! * dict[keys[j]]!)
                }
            }
        }
        return ans
    }
}
```