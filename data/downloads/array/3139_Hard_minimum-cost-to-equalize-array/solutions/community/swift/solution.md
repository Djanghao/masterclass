# Minimum Cost To Equalize Array 🚦 Best Performing Approach using Swift

**Author:** lebon
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5159025/](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5159025/)

---

# Intuition
To equalize all elements in the array, the goal is to minimize the cost of operations. We have two operations available: incrementing a single element at a cost (`cost1`), and incrementing two different elements at a cost (`cost2`). We need to find an optimal strategy that uses these operations to achieve the goal with minimum cost.

First, we need to determine the total number of increments needed to make all elements equal to the maximum element in the array. Then, depending on the relative costs of the operations, we decide the optimal way to perform these increments. If `cost1` is significantly cheaper than `cost2`, we might prefer single increments. Conversely, if `cost2` is more cost-effective, we should utilize double increments where possible.

# Approach
1. **Initialization**:
   - Determine the number of elements (`n`) in the array.
   - Find the maximum (`mx`) and minimum (`minNum`) values in the array.
   - Define `mod` as `10^9 + 7` to handle large numbers.
   
2. **Calculate Gaps**:
   - Calculate the maximum gap (`maxGap`) between the highest and lowest values.
   - Calculate the total gap (`ttlGap`) needed to equalize all numbers to the maximum value by summing the differences.

3. **Cost Calculation**:
   - If using two single increments (`cost1 * 2`) is less than or equal to one double increment (`cost2`), always use single increments. The total cost will be the total gap multiplied by `cost1`.

4. **Utilize Double Increments**:
   - If the maximum gap is less than or equal to half the total gap, use as many double increments as possible:
     - Calculate the cost of double increments for half the total gap.
     - If there is an odd number of increments needed, handle the last increment separately.

5. **Complex Case Handling**:
   - For remaining gaps, use double increments to reduce the remaining gap.
   - If the remaining gap is greater than or equal to `n-1`, compare the costs of using single increments versus double increments and choose the cheaper option.
   - If there is still a remaining gap, compare the cost of using double increments versus single increments for the last round of increments.

6. **Return Result**:
   - Ensure the result is within the modulus limit by returning `res % mod`.

# Complexity
- **Time complexity**: $$O(n)$$
  - Finding the maximum and minimum values in the array takes linear time.
  - Calculating the total gap and iterating through the array to calculate costs also takes linear time.
  
- **Space complexity**: $$O(1)$$
  - The space used is constant and does not scale with the input size.
  

![Screenshot 2024-05-15 at 05.00.19.png](./images/0.png)


# Code
```swift []
class Solution {
    func minCostToEqualizeArray(_ nums: [Int], _ cost1: Int, _ cost2: Int) -> Int {
        let n = nums.count
        let mx = nums.max()!
        let mod = 1_000_000_007
        let minNum = nums.min()!
        
        // Maximum gap between the highest and lowest numbers
        let maxGap = mx - minNum
        // Total gap to equalize all numbers to the maximum
        let ttlGap = mx * n - nums.reduce(0, +)
        
        if cost1 * 2 <= cost2 {
            // If the cost of two single increments is less than or equal to one double increment
            // Always use single increments
            return ttlGap * cost1 % mod
        }
        
        if maxGap * 2 <= ttlGap {
            // If the maximum gap is less than or equal to half of the total gap
            // We can always find pairs to use double increments
            var res = (ttlGap / 2) * cost2
            if ttlGap % 2 == 1 {
                // If there's an odd number of increments needed, handle the last increment
                if n % 2 == 1 {
                    res += min(cost1, cost2 * (n + 1) / 2)
                } else {
                    res += cost1
                }
            }
            return res % mod
        }
        
        // Initial cost with as many double increments as possible
        var res = cost2 * (ttlGap - maxGap)
        var remainingGap = maxGap - (ttlGap - maxGap)
        
        if remainingGap >= n - 1 {
            if cost2 * (n - 1) >= cost1 * (n - 2) {
                // If it's cheaper to use single increments
                res += (remainingGap / (n - 1)) * (n - 1) * cost1
                remainingGap %= n - 1
            } else {
                // If it's cheaper to use double increments
                res += (remainingGap / (n - 2)) * (n - 1) * cost2
                remainingGap %= n - 2
            }
        }
        
        if remainingGap > 0 {
            // For the remaining gap, compare the cost of using double increments vs single increments
            let op2 = ((n + remainingGap) / 2) * cost2
            var adjustedOp2 = op2
            if (n + remainingGap) % 2 == 1 {
                if n % 2 == 1 {
                    adjustedOp2 += min(cost1, cost2 * (n + 1) / 2)
                } else {
                    adjustedOp2 += cost1
                }
            }
            
            res += min(adjustedOp2, remainingGap * cost1)
        }
        
        return res % mod
    }
}
