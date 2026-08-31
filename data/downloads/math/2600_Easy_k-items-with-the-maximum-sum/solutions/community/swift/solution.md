# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3353240/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3353240/)

---

**One-Liner, expanded.  O(n) (accepted answer)**
\u26A0\uFE0F- Don't use O(n) solution in interview!! 
```
class Solution {
    func kItemsWithMaximumSum(_ numOnes: Int, _ numZeros: Int, _ numNegOnes: Int, _ k: Int) -> Int {
        zip([numOnes, numZeros, numNegOnes], [1,0,-1])
            .lazy
            .flatMap { Array(repeating: $0.1, count: $0.0) }
            .prefix(k)
            .reduce(0, +)        
    }
}
```

---

**O(1) (accepted answer)**
```
class Solution {
    func kItemsWithMaximumSum(_ numOnes: Int, _ numZeros: Int, _ numNegOnes: Int, _ k: Int) -> Int {
        // note how `numNegOnes` is not needed, because constraint:
        // "0 <= k <= numOnes + numZeros + numNegOnes"
        min(k, numOnes) - max(0, k - numOnes - numZeros)  
    }
}
```