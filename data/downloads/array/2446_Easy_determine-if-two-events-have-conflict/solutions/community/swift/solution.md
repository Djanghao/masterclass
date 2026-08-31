# ✅ Proper Swift String Comparison

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5836313/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5836313/)

---

# Solution
```swift []
struct Solution {
    @_optimize(speed)
    func haveConflict(_ event1: [String], _ event2: [String]) -> Bool {
        event1[0].compare(event2[1]) != .orderedDescending && 
        event2[0].compare(event1[1]) != .orderedDescending
    }
}
```