# Swift Solution

**Author:** olegmetallic
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-ugly-number/solutions/5028340/](https://leetcode.com/problems/super-ugly-number/solutions/5028340/)

---

# Approach
Declare `counts` array which will contain number of usages of corresponding primes.
```
F.e.
primes: [2, 3, 5]
counts: [2, 1, 0] - means we've used 2 two times, 3 one time and 5 zero times.
```
Next we need to declare `numbers` array (with 1 as a first element since 1 is an ugly number by default) here we will store all super ugly numbers.
Loop in range **(1,n)** and check candidates:
```
F.e. for n = 4
primes: [2, 3, 5]
counts: [2, 1, 0]
previous_numbers: [1, 2, 4, 0]
candidates: [2 * 4, 3 * 2, 5 * 1] -> min candidate is 5
next_numbers: [1, 2, 4, 5]
```
Find min candidate and set it to the current number and increase counts  where candidate is equal to min candidate by 1.
Return last number.

# Complexity
- Time complexity:
O(n*k) - where `n` is a given numbers count and `k` is `primes` count.

- Space complexity:
O(n) - store `numbers` array.

# Code
```
class Solution {
    func nthSuperUglyNumber(_ n: Int, _ primes: [Int]) -> Int {
        var counts = (0..<primes.count).map { _ in 0 }
        var numbsers = (0..<n).map { _ in 0 }
        numbsers[0] = 1
        for i in 1..<n {
            let candidates = zip(primes, counts).map { $0 * numbsers[$1] }
            if let minCandidate = candidates.min() {
                for (offset, candidate) in candidates.enumerated().filter({ $0.element == minCandidate }) {
                    counts[offset] += 1
                }
                numbsers[i] = minCandidate
            }
        }
        return numbsers[n - 1]
    }
}
```