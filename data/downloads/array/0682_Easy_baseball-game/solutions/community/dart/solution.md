# Solution with dart

**Author:** AliAltiyev
**Votes:** 0
**Link:** [https://leetcode.com/problems/baseball-game/solutions/6086187/](https://leetcode.com/problems/baseball-game/solutions/6086187/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```dart []
class Solution {
  int calPoints(List<String> operations) {
  List myList = <int>[];
    final String cancel = 'C';
    final String plus = '+';
    final multiply = 'D';
    int sum = 0;

    for (var i = 0; i < operations.length; i++) {
      if (operations[i] == cancel) {
        myList.removeLast();
      } else if (operations[i] == multiply) {
        myList.add(myList.last * 2);
      } else if (operations[i] == plus) {
        myList.add(myList[myList.length - 1] + myList[myList.length - 2]);
      } else {
        myList.add(int.parse(operations[i]));
      }
    }
    for (int element in myList) {
      sum += element;
    }
    return sum;
  }
}
```