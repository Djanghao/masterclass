# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1133074/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1133074/)

---

1. Using Dictionary
```
class Solution {
    func numDifferentIntegers(_ word: String) -> Int {
        var substrings = word.split(whereSeparator: { !$0.isNumber }), dict = [String: Bool]()
        for i in 0..<substrings.count {
            while substrings[i].count > 1 && substrings[i].first! == "0" {
                substrings[i].removeFirst()
            }
            dict[String(substrings[i])] = true
        }
        return dict.keys.count
    }
}
```
2. Using Set (As suggested by @bathanti)
```
class Solution {
    func numDifferentIntegers(_ word: String) -> Int {
        var set = Set<String>()
        for substring in word.split(whereSeparator: { !$0.isNumber }) {
            if let firstIndexOfNonzero = substring.firstIndex(where: { $0 != "0" }) {
                set.insert(String(substring[firstIndexOfNonzero...]))
            } else { // substring contains only zeros
                set.insert("0")
            }
        }
        return set.count
    }
}
```