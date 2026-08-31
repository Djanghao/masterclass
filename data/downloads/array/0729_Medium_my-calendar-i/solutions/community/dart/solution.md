# Dart solution

**Author:** kamvis
**Votes:** 1
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/5568406/](https://leetcode.com/problems/my-calendar-i/solutions/5568406/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MyCalendar {
  List<List<int>> events = [];

  MyCalendar() {}

  bool book(int start, int end) {
    for (var event in events) {
      if (event[0] < end && event[1] > start) return false;
    }
    events.add([start, end]);
    return true;
  }
}
/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar obj = MyCalendar();
 * bool param1 = obj.book(start,end);
 */
```