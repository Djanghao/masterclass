# Easy to understand Solution

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/3954290/](https://leetcode.com/problems/sum-of-distances/solutions/3954290/)

---



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func distance(_ nums: [Int]) -> [Int] {
        
        var returnArr = [Int](repeating: 0, count: nums.count)
        var prefixCount = [Int: Int]()
        var prefixSum = [Int: Int]()
        var sufixCount = [Int: Int]()
        var sufixSum = [Int: Int]()

        

        for i in 0..<nums.count {
            prefixCount[nums[i]] = prefixCount[nums[i], default: 0] + 1
            prefixSum[nums[i]] = prefixSum[nums[i], default: 0] + i
            returnArr[i] = -prefixSum[nums[i], default: 0] + prefixCount[nums[i], default: 0] * i 
        }

        for i in stride(from: nums.count - 1, through: 0, by: -1) {
            sufixCount[nums[i]] = sufixCount[nums[i], default: 0] + 1
            sufixSum[nums[i]] = sufixSum[nums[i], default: 0] + i
            returnArr[i] += sufixSum[nums[i], default: 0] - sufixCount[nums[i], default: 0] * i 
        }

        return returnArr
    }
}
```