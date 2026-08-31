# ✅ O(n) optimal solution

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5332916/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5332916/)

---

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func countCompleteDayPairs(_ hours: [Int]) -> Int {
        var reminders = [Int: Int]()
        var completeDays = 0

        for hour in hours {
            let reminder = hour % 24 
            let complement = (24 - reminder) % 24

            if let count = reminders[complement] {
                completeDays += count
            }
            reminders[reminder, default: 0] += 1
        } 
        return completeDays
    }
}
```