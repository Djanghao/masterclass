# 👾 Swift: Sliding Window Maximum

**Author:** AsahiOcean
**Votes:** 23
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/1122916/](https://leetcode.com/problems/sliding-window-maximum/solutions/1122916/)

---

#### Approach:
The idea is very basic run a loop, the which will mark the starting point of the subarray of length k, the loop will run from the starting index to end index+k. 

#### Algorithm: 
1. Create a nested loop, the outer loop from starting index to n \u2013 k th elements.
2. The inner loop will run for k iterations.
3. Create a variable to store the maximum of k elements traversed by the inner loop.
4. Find the maximum of k elements traversed by the inner loop.
5. And find the end element in every iteration of outer loop

```swift
import Foundation

class Solution {
    func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {
        guard nums.isEmpty == false else { return [] }
        
        var left = [Int]()
        var right = [Int]()
        
        for i in 0..<nums.count {
            while (left.count > 0) && (nums[left.last!] < nums[i]) {
                left.removeLast()
            }
            left.append(i)
            
            if i >= k - 1 {
                if left.first! + k == i { left.removeFirst() }
                right.append(nums[left.first!])
            }
        }
        return right
    }
}

func tests() {
    let s = Solution()
    assert(s.maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3) == [3,3,5,5,6,7])
    assert(s.maxSlidingWindow([1], 1) == [1])
    assert(s.maxSlidingWindow([1,-1], 1) == [1,-1])
    assert(s.maxSlidingWindow([9,11], 2) == [11])
    assert(s.maxSlidingWindow([4,-2], 2) == [4])
}

tests()
```