# Swift Solution

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/4304959/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/4304959/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func longestEqualSubarray(_ nums: [Int], _ k: Int) -> Int {
        var numsLength = nums.count
        var storeValues = [Int: [Int]]()
        var uniqueElements = Set<Int>(nums)

        for iterator in 0..<numsLength {
            if let _ = storeValues[nums[iterator]] {
                storeValues[nums[iterator]]!.append(iterator)
            } else {
                storeValues[nums[iterator]] = [Int]()
                storeValues[nums[iterator]]!.append(iterator)
            }
        }

        var ans = 1

        for val in uniqueElements {
            var tempK = k
            var array = storeValues[val]!
            var arrayLength = array.count
            var startIndex = 0
            var currentLength = 1

            var endIndex = 1
            while endIndex < arrayLength {
                ans = max(ans,currentLength)
                currentLength = currentLength + 1
                tempK = tempK - (array[endIndex] - array[endIndex - 1] - 1)

                while tempK < 0 {
                    tempK = tempK + (array[startIndex + 1] - array[startIndex] - 1)
                    startIndex = startIndex + 1
                    currentLength = currentLength - 1
                }

                endIndex = endIndex + 1
            }

            if tempK >= 0 {
                ans = max(ans,currentLength)
            }
        }

        return ans
    }
}
```