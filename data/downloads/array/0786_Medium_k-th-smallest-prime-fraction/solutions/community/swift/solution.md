# Easy O(n^2) solution in Swift

**Author:** olegmetallic
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5139098/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5139098/)

---

# Approach
It is kinda a bruteforce solution where we calculate all possible fractions in the given `arr` array, sort them in ascending order and return `k`th smallest fraction.

# Complexity
- Time complexity:
O(n^2) - calculate `fractions` with two nested loops.

- Space complexity:
O(n^2) - store all `fractions`. 

# Code
```
class Solution {
    func kthSmallestPrimeFraction(_ arr: [Int], _ k: Int) -> [Int] {
        var fractions = [(fraction: Float, val1: Int, val2: Int)]()
        for i in 0..<arr.count-1 {
            for j in i+1..<arr.count {
                let val1 = arr[i]
                let val2 = arr[j]
                fractions.append((fraction: Float(val1) / Float(val2), val1: val1, val2: val2))
            }
        }
        let fraction = fractions.sorted(by: { $0.fraction < $1.fraction })[k - 1]
        return [fraction.val1, fraction.val2]
    }
}
```