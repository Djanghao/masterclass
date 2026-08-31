# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/6073609/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/6073609/)

---

**One-Liner, terse (accepted answer)**
```
import Algorithms
class Solution {
    func countCompleteDayPairs(_ hours: [Int]) -> Int {
        hours.combinations(ofCount:2).reduce(0){$0+(($1[0]+$1[1]) % 24==0 ? 1:0)}
    }
}
```

**One-Liner, expanded (accepted answer)**
```
import Algorithms
class Solution {
    func countCompleteDayPairs(_ hours: [Int]) -> Int {
        hours
        .combinations(ofCount:2)
        .reduce(into: 0){ result, pair in 
            guard (pair[0]+pair[1]) % 24 == 0 else { return }
            result += 1
        }
    }
}
```