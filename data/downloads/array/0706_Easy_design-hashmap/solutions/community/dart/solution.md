# Dart

**Author:** darv
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/4127072/](https://leetcode.com/problems/design-hashmap/solutions/4127072/)

---

# Code
```
class _Item {
  final int key;
  int value;
  _Item? next = null;
  _Item(this.key, this.value);
}

class MyHashMap {
  late final List<_Item> db = List.generate(1000, (_) => _Item(-1, -1));
  MyHashMap() {}
  
  int getkey(int key) => key % 1000;
  
  void put(int key, int value) {
    var cur = db[getkey(key)];
    while (cur.next != null) {
      if (cur.next!.key == key) {
        cur.next!.value = value;
        return;
      }
      cur = cur.next!;
    }
    cur.next = _Item(key, value);
  }
  
  int get(int key) {
    var cur = db[getkey(key)];
    while (cur.next != null) {
      if (cur.next!.key == key)
        return cur.next!.value;
      cur = cur.next!;
    }
    return -1;
  }
  
  void remove(int key) {
    var cur = db[getkey(key)];
    while (cur.next != null) {
      if (cur.next!.key == key) {
        cur.next = cur.next!.next;
        return;
      }
      cur = cur.next!;
    }
  }
}
```