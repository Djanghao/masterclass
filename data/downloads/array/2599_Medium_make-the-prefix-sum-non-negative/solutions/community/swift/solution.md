# Swift | Priority Queue

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3353460/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3353460/)

---

**Priority Queue (accepted answer)**
```
class Solution {
    func makePrefSumNonNegative(_ nums: [Int]) -> Int {
        // Simplified Priority Queue
        var a = [Int]()
        func push(_ e: Int) {
            a.append(e)
            var pos = a.count - 1
            while pos > 0 {
                let p = (pos-1) / 2
                guard a[p] > a[pos] else { break }
                a.swapAt(p, pos)
                pos = p
            }
        }

        func pop() -> Int {
            let last = a.popLast()!
            guard !a.isEmpty else { return last }
            var result = a[0], pos = 0, i = 1
            a[0] = last
            while i < a.count {
                let j = 2*pos+2
                if j < a.count, a[pos]>a[j] && (a[i] > a[pos] || a[i] > a[j]) {
                    a.swapAt(pos, j)
                    pos = j
                } else if a[pos] > a[i] {
                    a.swapAt(pos, i)
                    pos = i
                } else {
                    break
                }
                i = 2*pos + 1
            }
            return result
        }
        
        // Solution
        var sum = 0
        for num in nums {
            push(num)
            sum += num
            while sum < 0 {
                sum -= pop()
            }
        }
                
        return nums.count - a.count
    }
}
```