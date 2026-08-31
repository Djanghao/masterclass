# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/1918879/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/1918879/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of nums.
    //   - space: O(1), only constant space is used.
    
    func search(_ nums: [Int], _ target: Int) -> Bool {
        guard !nums.isEmpty else { return false }

        var start = 0
        var end = nums.count - 1

        while start <= end {
            let mid = start + (end - start) / 2

            guard nums[mid] != target else { return true }

            if nums[start] == nums[mid], nums[end] == nums[mid] {
                start += 1
                end -= 1
            } else if nums[start] <= nums[mid] {
                if nums[start] <= target, target < nums[mid] {
                    end = mid - 1
                } else {
                    start = mid + 1
                }
            } else {
                if nums[mid] < target, target <= nums[end] {
                    start = mid + 1
                } else {
                    end = mid - 1
                }
            }
        }

        return false
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.