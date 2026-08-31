# Swift | Explained approach

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3521395/](https://leetcode.com/problems/power-of-heroes/solutions/3521395/)

---

# Approach
###### Note that only the minimum and maximum elements of each group are important for the power value, any number or combination of intermediate members yields the same result.
###### Sort the array in ascending order.
###### For each pair of max `i`-th and min `j`-th element, the count of all in-between possible members combinations equals `2^(i-j-1)`. They will all have the power of `nums[j] * nums[i]^2`.
###### We can just brute-force through all possible pairs of `(i, j)`, but there's some optimization that can be done here. Suppose we picked the maximal element `i`, and loop through all values of `j` up to it. The values added to the result would be `nums[i]^2 * nums[j] * 2^(i - j - 1)`. Let's take the common multiplier `nums[i]^2`  outside the parentheses and look at the prefix sum $$\u2211$$`(nums[j] * 2^(i - j - 1))`, `j in 0..<i`.
###### For `i`-th element, prefix sum is `nums[i-1] + 2 * nums[i-2] + 4 * nums[i-3] + ... + 2^(i-1) * nums[0]`. For `i-1`-th element, prefix sum is `nums[i-2] + 2 * nums[i-3] + 4 * nums[i-4] + ... + 2^(i-2) * nums[0]`. It can be easily seen that the sum can be computed iteratively, as the sum for the previous value of `i`, multiplied by two, plus the next array number. Single-person groups, where `i` equals `j` are a little out of the pattern, so we just calculate them separately.

# Complexity
- Time complexity: $$O(n*log(n))$$, for sorting
- Space complexity: $$O(1)$$

# Code
```
class Solution
{
    func sumOfPower(_ nums: [Int]) -> Int
    {
        let nums = nums.sorted()
        // the value for the all single-hero groups summed up
        var answer = nums.reduce(0) { sum, num in sum + num.cubed() } % modulo
        var maxSquared = 0, prefixSum = 0
        for i in 1..<nums.count
        {
            maxSquared = (nums[i] * nums[i]) % modulo
            prefixSum = (2 * prefixSum + nums[i - 1]) % modulo      
            answer += maxSquared * prefixSum
            // that's how it would be if we counted each pair manually, without prefix sum
            // for j in 0..<i {
            //     answer += (nums[j] * maxSquared * 2^(i - j - 1)) % modulo
            // }
            answer %= modulo
        }
        return answer
    }
}

let modulo = 1_000_000_007
extension Int
{
    func cubed() -> Int {
        return (((self * self) % modulo) * self) % modulo
    } // these damn numbers overflow at the slightest action >_<
}
```