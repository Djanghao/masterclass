# Swift - Sliding Window

**Author:** gryphoon
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3773542/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3773542/)

---

# Intuition
To find the maximum beauty of the array, we need to identify the values that are most likely to be in the center of the array after applying the operation. We can do this by sorting the array and using a sliding window to find the answer.

After sorting the array, our sliding window's left index represents the minimum number in our window, while the right index represents the maximum number in the sliding window. Let's say we have a number `a`. We can convert all numbers in our sliding window to `a` if their range is between `a - k` and `a + k`. In other words, the sliding window is valid if the difference between our maximum and minimum values is `(a + k) - (a - k)`, which simplifies to `2k`.

# Approach
Since we are not interested in the content of our sliding window, we will only track the number of items in the sliding window itself. To get the minimum and maximum number in the sliding window, we can simply use our left and right index since the array is already sorted.

# Code
```swift
class Solution {
    func maximumBeauty(_ nums: [Int], _ k: Int) -> Int {
        let sortedNums = nums.sorted()
        var leftIndex: Int = 0
        var rightIndex: Int = 0

        var slidingWindowCount: Int = 0
        var answer: Int = 0
        
        while rightIndex < sortedNums.endIndex {
            var leftNum: Int { return sortedNums[leftIndex] }
            var rightNum: Int { return sortedNums[rightIndex] }
            
            // Add the right number to our sliding window
            slidingWindowCount += 1
            
            // If the sliding window is not valid, try to make it valid
            // by removing the left element until it's valid
            var isValid: Bool { return rightNum - leftNum <= 2 * k }
            while !isValid {
                leftIndex += 1
                slidingWindowCount -= 1
            }

            // Once the sliding window is valid, we can try to
            // calculate the maximum possible answer
            answer = max(answer, slidingWindowCount)
            
            rightIndex = rightIndex + 1
        }
        
        return answer
    }
}
```
