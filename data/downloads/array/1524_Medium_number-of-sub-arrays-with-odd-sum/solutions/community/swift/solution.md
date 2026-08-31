# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/1343126/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/1343126/)

---

Let's iterate nums in `arr` and calc running sum. If the current sum is odd, then the number of subarrays ending with the current element with an odd sum is equal to the number of previous even sums and vice versa. At the start, we have one even sum (zero) and no odd sums

Time complexity O(n), space complexity O(1)
```
class Solution {
    func numOfSubarrays(_ arr: [Int]) -> Int {
        var runningSum = 0, counts = [1, 0], result = 0
        for num in arr {
            runningSum += num
            result += counts[(runningSum + 1) % 2]
            counts[runningSum % 2] += 1
        }
        return result % 1_000_000_007
    }
}
```