# Sliding Window and Hashmap in Swift

**Author:** thirtham
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4948084/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4948084/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to use a sliding window approach to iterate through the array while keeping track of the count of distinct elements within the current window. We adjust the window's boundaries based on whether the count exceeds or equals the target number of distinct elements, k. i.e. we maintain a window with the enough number of leftmost element in currentsubarray.



# Approach
<!-- Describe your approach to solving the problem. -->
Initialize two pointers, left and right, to mark the boundaries of the current window.
Initialize a dictionary, counter, to store the count of each distinct element within the window.
Iterate through the array using the right pointer.
Update the count of the current element in the counter dictionary.
If the count of distinct elements exceeds k, move the left pointer to shrink the window until the count equals k again.
While moving the left pointer, update the count of the removed element from the counter dictionary.
If the count of distinct elements equals k, count the number of subarrays that can be formed with the current window and update the answer accordingly.
Repeat steps 3-7 until the right pointer reaches the end of the array.
Return the total count of good subarrays.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

The solution iterates through the array once with two pointers.

- Space complexity: O(n)s
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The counter dictionary can store up to n elements in the worst case.

# Code
```
class Solution {
    func subarraysWithKDistinct(_ nums: [Int], _ k: Int) -> Int {
        var left = 0, right = 0, ans = 0, curr_count = 0
        var counter: [Int: Int] = [:]
        let n = nums.count

        while right < n {
            counter[nums[right], default: 0] += 1
            if counter.count > k {
                counter[nums[left], default: 1] -= 1
                if counter[nums[left]] == 0 {
                    counter.removeValue(forKey: nums[left])
                }
                left += 1
                curr_count = 0
            }

            if counter.count == k {
                while let cnt = counter[nums[left]], cnt > 1 {
                    counter[nums[left]] = cnt - 1
                    left += 1
                    curr_count += 1
                }

                ans += (curr_count + 1)
            }

            right += 1
        }

        return ans
    }
}
```