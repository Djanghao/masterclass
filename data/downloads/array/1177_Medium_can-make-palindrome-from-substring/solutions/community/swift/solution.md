# wicked fast solution in under 10 lines

**Author:** irk
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/5132374/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/5132374/)

---


# Code
```
func canMakePaliQueries(_ s: String, _ queries: [[Int]]) -> [Bool] {
    var odds = Array(repeating: UInt32(), count: s.count+1)
    for (i, c) in s.enumerated() {
        let shift = Int(c.asciiValue! - Character("a").asciiValue!)
        let bitmask = UInt32(1) << shift
        odds[i+1] = odds[i] ^ bitmask
    }
    return queries.map { (odds[$0[0]] ^ odds[$0[1]+1]).nonzeroBitCount/2 <= $0[2] }
}
```