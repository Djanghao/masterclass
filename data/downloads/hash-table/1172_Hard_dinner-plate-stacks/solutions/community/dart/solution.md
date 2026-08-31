# Dart solution

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/5064837/](https://leetcode.com/problems/dinner-plate-stacks/solutions/5064837/)

---

# Code
```
import 'dart:collection';

class DinnerPlates {
  List<List<int>> stacks = [];
  var openStacks = SplayTreeSet<int>();
  int capacity;

  DinnerPlates(this.capacity) {}

  void push(int val) {
    if (openStacks.isEmpty) {
      stacks.add(<int>[]);
      openStacks.add(stacks.length - 1);
    }

    stacks[openStacks.first].add(val);
    if (stacks[openStacks.first].length == capacity) {
      openStacks.remove(openStacks.first);
    }
  }

  int pop() => _pop(stacks.length - 1);

  int popAtStack(int index) => _pop(index);

  int _pop(int i) {
    if (i < 0 || i >= stacks.length || stacks[i].isEmpty) {
      return -1;
    }
    var popValue = stacks[i].removeLast();
    openStacks.add(i);
    while (stacks.isNotEmpty && stacks.last.isEmpty) {
      stacks.removeLast();
      openStacks.remove(openStacks.last);
    }
    return popValue;
  }
}
```