# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6021085/](https://leetcode.com/problems/check-balanced-string/solutions/6021085/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func isBalanced(_ num: String) -> Bool {
        var result = 0
        for (index, ch) in num.enumerated() {
            let sign = index & 1 == 1 ? 1 : -1
            result += sign * ch.wholeNumberValue!
        } 
        return result == 0
    }
}
```
**One-Liner, terse (accepted answer)**
```
class Solution {
    func isBalanced(_ num: String) -> Bool {
        zip(sequence(first:1, next:{-$0}), num.compactMap(\\.wholeNumberValue)).map(*).reduce(0,+) == 0 
    }
}
```
**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func isBalanced(_ num: String) -> Bool {
        zip(
            sequence(first:1, next:{-$0}), // infinitely alternating +1, -1
            num.compactMap(\\.wholeNumberValue) // char-to-int digit conversion of `num`
        )
        .map(*) // multiply sign * digit
        .reduce(0,+) // sum up this sequence
        == 0  // compare to zero (= balanced)
    }
}
```