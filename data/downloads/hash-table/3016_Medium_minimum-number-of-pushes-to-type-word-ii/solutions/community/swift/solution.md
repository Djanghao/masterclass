# Swift💯fast

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5593909/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5593909/)

---

**Greedy (accepted answer)**
Fast: 45-50ms; utf8CString is very fast.
```

class Solution {
    func minimumPushes(_ word: String) -> Int {
        let w = word.utf8CString.dropLast() //  drop zero terminator
        let freq = Dictionary(w.map{($0,1)}, uniquingKeysWith:+)
        return zip(8...,freq.values.sorted(by:>))
                .map{$0/8 * $1} // (# key presses) * (letter freq.) 
                .reduce(0,+)
    }
}
```

**Squeezed down to terse one-liner (accepted answer)**
Slow: 275ms
```
class Solution {
    func minimumPushes(_ w: String) -> Int {
        zip(8...,Dictionary(w.map{($0,1)}){$0+$1}.values.sorted(by:>)).reduce(0){$0+$1.0/8*$1.1}
    }
}
```