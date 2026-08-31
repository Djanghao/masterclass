# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-function/solutions/5020382/](https://leetcode.com/problems/rotate-function/solutions/5020382/)

---

This function calculates the maximum value of a rotation function F on an array nums. The rotation function F(k) is defined as 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1], where arrk is an array obtained by rotating nums by k positions clock-wise.


- Initialize two variables sum and F to 0. sum will hold the sum of all elements in nums, and F will hold the value of the rotation function for the current rotation.
- Iterate over the array nums. For each element, add its value to sum and add its value multiplied by its index to F.
- Initialize maxF to F. maxF will hold the maximum value of F found so far.
- Iterate over the array nums in reverse order. For each element, calculate the new value of F for the next rotation by adding sum to F and subtracting n times the current element. This is based on the observation that each rotation shifts every element to the right by one position, so the sum of the product of each element and its index increases by the sum of all elements minus n times the last element.
- If the new value of F is greater than maxF, update maxF to the new value of F.
- Return maxF as the maximum value of the rotation function.

# Code
```
class Solution {
    func maxRotateFunction(_ nums: [Int]) -> Int {
        let n = nums.count
        var sum = 0
        var F = 0
        for i in 0..<n {
            sum += nums[i]
            F += i * nums[i]
        }
        var maxF = F
        for i in (1..<n).reversed() {
            F = F + sum - n * nums[i]
            maxF = max(maxF, F)
        }
        return maxF
    }
}

```