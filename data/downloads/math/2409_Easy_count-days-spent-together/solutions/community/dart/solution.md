# Be simple

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/4522755/](https://leetcode.com/problems/count-days-spent-together/solutions/4522755/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    int datetoInt(String date) {
    const dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    final list =
        date.split('-').map((e) => int.tryParse(e)).whereType<int>().toList();
    var sum = 0;
    for (var i = 0; i < list.first - 1; i++) {
      sum += dates[i];
    }
    return sum + list.last;
  }

  int countDaysTogether(String arriveAlice, String leaveAlice, String arriveBob, String leaveBob) {
    final aA = datetoInt(arriveAlice);
    final lA = datetoInt(leaveAlice);

    final aB = datetoInt(arriveBob);
    final lB = datetoInt(leaveBob);
    var staying = <int>[];
    for (var i = aA; i <= lA; i++) {
      staying.add(i);
    }

    var sameDay = 0;
    for (var i = aB; i <= lB; i++) {
      if (staying.contains(i)) {
        sameDay++;
      }
    }
    return sameDay;
  }
}
```