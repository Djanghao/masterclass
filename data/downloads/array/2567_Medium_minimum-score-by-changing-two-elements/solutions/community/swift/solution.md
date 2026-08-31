# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3230202/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3230202/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func minimizeSum(_ nums: [Int]) -> Int {
        [nums.sorted()].map{zip($0,$0[($0.count-3)...]).map{$0.1-$0.0}.min()!}[0]
    }
}
```

---

**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func minimizeSum(_ nums: [Int]) -> Int {
        [nums.sorted()] // wrap sorted array in array monad, so `map()` elements will be the entire array, not just elems.
        .map{ sortedArray in 
            zip(sortedArray, sortedArray[(sortedArray.count-3)...]) // zip lowest three, and highest three elements
            .map{ zippedElems in  // map to array of scores (result size 3)
                 let (lowScore, highScore) = zippedElems
                 let score = highScore - lowScore
                 return score
            } 
            .min()! // of the three scores, choose the lowest
        }
        .first! // unwrap monad (now minimum score)
    }
}
```