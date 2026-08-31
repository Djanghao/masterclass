# 😀Clean code!!! 🥹Very easy to understand! 100% beats 😍😍

**Author:** LTDigor
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-hashset/solutions/3578160/](https://leetcode.com/problems/design-hashset/solutions/3578160/)

---

# Code
```
class MyHashSet {
  final double _loadFactor = 0.7;
  int _itemsNumber = 0;
  int _size = 10;
  List<List<int>> _arr = List<List<int>>.generate(10, (_) => []);

  void add(int key) {
    if (contains(key)) {
      return;
    }

    _arr[key % _size].add(key);
    _itemsNumber++;

    if (_itemsNumber / _size >= _loadFactor) {
      _rehash();
    }
  }

  void _rehash() {
    int newSize = 2 * _size;
    List<List<int>> newArr = List<List<int>>.generate(newSize, (_) => []);

    for (List<int> bucket in _arr) {
      for (int key in bucket) {
        newArr[key % newSize].add(key);
      }
    }

    _size = newSize;
    _arr = newArr;
  }

  void remove(int key) {
    if (contains(key)) {
      _arr[key % _size].remove(key);
      _itemsNumber--;
    }
  }

  bool contains(int key) {
    return _arr[key % _size].contains(key);
  }
}

```