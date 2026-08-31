# 🟢🔴🟢 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5711033/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5711033/)

---

## Intuition
To determine if two events have a scheduling conflict, we need to check whether their time intervals overlap. Specifically, two events conflict if one event starts before the other ends, and the other starts before the first one ends.

## Approach
1. **Convert Time Strings to Integers**:
   - The time strings given in `event1` and `event2` are in the "HH:MM" format. We convert these time strings into integers by removing the colon, making it easier to compare them.

2. **Extract Start and End Times**:
   - For `event1`, extract the start time (`startEvent1`) and end time (`endEvent1`) as integers.
   - Similarly, extract the start time (`startEvent2`) and end time (`endEvent2`) for `event2`.

3. **Check for Overlap**:
   - If `event1` ends before `event2` starts (`endEvent1 < startEvent2`) or `event2` ends before `event1` starts (`endEvent2 < startEvent1`), the events do not overlap, so return `false`.
   - Otherwise, return `true`, indicating that the events conflict.

### Example Workthrough

**Example**:
- `event1 = ["10:00", "11:30"]`
- `event2 = ["11:00", "12:00"]`

1. Convert the times to integers:
   - `startEvent1 = 1000`, `endEvent1 = 1130`
   - `startEvent2 = 1100`, `endEvent2 = 1200`

2. Check overlap:
   - `endEvent1` (1130) is not less than `startEvent2` (1100).
   - `endEvent2` (1200) is not less than `startEvent1` (1000).

Since both conditions for no overlap are false, the events do conflict, so return `true`.

## Complexity

- **Time Complexity**: 
  - \\( O(1) \\) because the operations involve a fixed number of comparisons and parsing operations, which do not depend on the input size.

- **Space Complexity**: 
  - \\( O(1) \\) as only a fixed amount of additional space is used for the integer variables.

## Code

```dart
class Solution {
  bool haveConflict(List<String> event1, List<String> event2) {
    int startEvent1 = int.parse(event1.first.replaceAll(":",""));
    int endEvent1 = int.parse(event1.last.replaceAll(":",""));
    int startEvent2 = int.parse(event2.first.replaceAll(":",""));
    int endEvent2 = int.parse(event2.last.replaceAll(":",""));

    if(endEvent1 < startEvent2 || endEvent2 < startEvent1) return false;
    return true;
  }
}
