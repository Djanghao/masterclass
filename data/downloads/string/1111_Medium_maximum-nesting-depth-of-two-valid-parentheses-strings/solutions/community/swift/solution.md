# ✅ FP Solution

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/5037180/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/5037180/)

---

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func maxDepthAfterSplit(_ seq: String) -> [Int] {
         seq.lazy
            .enumerated()
            .reduce(into: [Int](repeating: 0, count: seq.count)) { (depths, pair: (i: Int, c: Character)) in
                // if char is openning: 
                //      -> index is even -> 0, odd -> 1
                // otherwise
                //      -> invert (index is even -> 0, odd -> 1) e.g. even -> 1, odd -> 0
                depths[pair.i] = pair.c == "(" ? pair.i & 1 : 1 - pair.i & 1
            }
    }
}
```