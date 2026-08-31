# ✅ [Accepted] [Swift] Median sliding window

**Author:** maxches99
**Votes:** 1
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/3264213/](https://leetcode.com/problems/sliding-window-median/solutions/3264213/)

---

# Intuition
The idea of this algorithm is to use a sliding window approach to iterate through the input array nums and for each window of size k, calculate the median of the numbers in the window. The median is defined as the middle value of an ordered list of numbers, or the average of the middle two values if the list has an even number of elements.

To efficiently compute the median, we can maintain the window as a sorted array and use binary search to insert new elements in the correct position and remove old elements when the window moves. This allows us to find the median of the current window in constant time.

# Approach
The approach involves initializing the first window of size k, sorting it, and computing its median. Then, for each subsequent window, we remove the leftmost element from the previous window, insert the new element at the correct position using binary search, and compute the median of the new window. We repeat this process until we have processed all windows in the input array.

# Complexity
- Time complexity:
$$O(nklogk)$$, where n is the length of the input array and k is the window size. The main factor contributing to the time complexity is the sorting operation for each window, which takes O(klogk) time. However, the use of binary search to insert and remove elements from the window reduces the time complexity of these operations to O(logk). Therefore, the overall time complexity of the algorithm is dominated by the sorting operation.

- Space complexity:
$$O(k)$$, which is the size of the window we maintain.

# Code
```
class Solution {
    func medianSlidingWindow(_ nums: [Int], _ k: Int) -> [Double] {
        var window = Array(nums[0..<k])
        window.sort()
        var medians = [Double]()
        for i in k..<nums.count {
            let median = k % 2 == 0 ? (Double(window[k/2-1]) + Double(window[k/2])) / 2.0 : Double(window[k/2])
            medians.append(median)
            // remove the first element from window and insert new element
            if let index = window.firstIndex(of: nums[i-k]) {
                window.remove(at: index)
            }
            var left = 0, right = window.count
            while left < right {
                let mid = left + (right - left) / 2
                if window[mid] < nums[i] {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            window.insert(nums[i], at: left)
        }
        let median = k % 2 == 0 ? (Double(window[k/2-1]) + Double(window[k/2])) / 2.0 : Double(window[k/2])
        medians.append(median)
        return medians
    }
}
```