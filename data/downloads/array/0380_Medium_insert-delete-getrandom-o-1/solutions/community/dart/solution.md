# Simple Dart

**Author:** sayandh
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/4398623/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/4398623/)

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
import 'dart:math';

class RandomizedSet {
  List<int> _items = [];
  Random _random = Random();

  RandomizedSet() {}

  bool insert(int val) {
    if (_items.contains(val)) {
      return false;
    } else {
      _items.add(val);
      return true;
    }
  }

  bool remove(int val) {
    if (_items.contains(val)) {
      _items.remove(val);
      return true;
    } else {
      return false;
    }
  }

  int getRandom() {
    int index = _random.nextInt(_items.length);
    return _items[index];
  }
}
```