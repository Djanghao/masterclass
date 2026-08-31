# Sorted array using two pointers

**Author:** sghiassy
**Votes:** 1
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/5144512/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/5144512/)

---

# Code
```
class Solution {

    func numFriendRequests(_ ages: [Int]) -> Int {
        let sortedAges = ages.sorted() // O(n log n)
        var left = 0
        var right = 0
        var ans = 0

        for age in sortedAges {
            // Move the 'left' pointer to satisfy age / 2 + 7 < otherAge
            while left < sortedAges.count && sortedAges[left] <= age / 2 + 7 {
                left += 1
            }

            // Move the 'right' pointer to the last occurrence of the current 'age'
            while right < sortedAges.count && sortedAges[right] <= age {
                right += 1
            }

            // The number of people 'age' can send friend requests to is the number of people between 'left' and 'right'
            if right > left { // Ensure there is at least one valid person to request
                ans += right - left - 1 // Subtract 1 to exclude the person itself if counted
            }
        }

        return ans
    }
}
```