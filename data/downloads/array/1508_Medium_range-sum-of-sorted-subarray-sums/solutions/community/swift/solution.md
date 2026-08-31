# Compact solution. Beats 100%

**Author:** MrsTrier
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5587674/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5587674/)

---

# Code
```
class Solution {
    func rangeSum(_ nums: [Int], _ n: Int, _ left: Int, _ right: Int) -> Int {
        var febonachiArray: [Int] = []
		var firstIndx = 0
		let modulo = 1_000_000_007

		febonachiArray.append(nums[0])

		for i in 1..<n {
			febonachiArray.append(febonachiArray[i-1] + nums[i])
		}

		for i in 1..<n {
			febonachiArray.append(contentsOf: febonachiArray[i..<n].map({ $0 - febonachiArray[i - 1] }))
		}

		let sum = febonachiArray.sorted()[left-1...right-1].reduce(0, +)

		return sum % modulo
    }
}
```