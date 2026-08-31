# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297884/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297884/)

---

**Tiny One-Liner, terse (accepted answer)**
```
class Solution {
    func minPairSum(_ n: [Int]) -> Int {
        zip(n.sorted(),n.sorted().reversed()).map{$0.0+$0.1}.max()!
    }
}
```

---

**Better One-Liner, terse (accepted answer)**
```
class Solution {
    func minPairSum(_ nums: [Int]) -> Int {
        [nums.sorted()].map{a in a.indices.reduce(Int.min){max($0,a[$1]+a[a.count-1-$1])}}[0]
    }
}
```

---

**Better One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func minPairSum(_ nums: [Int]) -> Int {
        [nums.sorted()] // put sorted array into monad
        .map{arr in 
             (0..<arr.count/2) // loop through first half of array indices
             .reduce(Int.min) { result, i in 
                max(result, arr[i] + arr[arr.count-1-i])
            }
        }
        .first! // pull answer out of monad
    }
}
```