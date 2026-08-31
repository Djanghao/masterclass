# Dart implementation

**Author:** darv
**Votes:** 2
**Link:** [https://leetcode.com/problems/lru-cache/solutions/3781151/](https://leetcode.com/problems/lru-cache/solutions/3781151/)

---

# Code
```
import 'dart:collection';

class Node {
  final int key;
  int val;
  Node? next, prev;
  Node(this.key, this.val);
}
class LRUCache {
  final db = HashMap<int, Node>();
  final head = Node(-1, -1), tail = Node(-1, -1);
  final int capacity;

  LRUCache(this.capacity) {
    head.next = tail;
    tail.prev = head;
  }

  void _detach(Node node) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  void _append(Node node) {
    node.prev = tail.prev;
    node.next = tail;
    tail.prev!.next = node;
    tail.prev = node;
  }
  
  int get(int key) {
    final node = db[key];
    if (node == null) return -1;
    
    _detach(node);
    _append(node);
    return node.val;
  }
 
  void put(int key, int value) {
    Node? node = db[key];
    if (node == null) {
      node = Node(key, value);
      db[key] = node;
    } else {
      _detach(node);
      node.val = value;
    }
    _append(node);
    
    if (db.length > capacity) {
      final evicted = head.next;
      db.remove(evicted!.key);
      _detach(evicted);
    }
  }
}
```
