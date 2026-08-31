# Accepted O(n)

**Author:** mnapier1234
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5260982/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5260982/)

---


```
class Solution {
    private func sumOfInt(num: Int) -> Int {
        var total = 0
        var numb = num

        while numb > 0 {
            total += numb % 10
            numb /= 10
        }
        return total
    }

    func maximumSum(_ nums: [Int]) -> Int {
        var ans = -1
        var dict = [Int:Int]()

        for(index, number) in nums.enumerated() {
            let total = sumOfInt(num: number)
            if dict[total] != nil {
                ans = max(ans, number + dict[total, default: 0])
            }
            dict[total, default: 0] = max(dict[total, default: 0], number)
        }
        return ans
    }
}
```