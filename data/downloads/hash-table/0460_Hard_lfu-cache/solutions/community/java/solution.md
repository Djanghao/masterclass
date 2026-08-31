# O(1) Time🔥🔥|| Full Explanation✅|| HashTable✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 108
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/3111521/](https://leetcode.com/problems/lfu-cache/solutions/3111521/)

---

# What is Cache & LFU Cache ?
1. A cache is a data structure that stores a limited number of items and is used to quickly retrieve items that have been previously accessed.
2. An LFU cache evicts the least frequently used item when it reaches capacity, as opposed to an LRU (Least Recently Used) cache, which evicts the least recently used item. 
# Explanation to Approach :
- Here we are using three maps to store the key-value pairs, the key-frequency pairs and the frequency-key pairs. 
- The implementation uses a combination of a HashMap and a LinkedHashSet to keep track of the keys and their frequencies, and to maintain the order of the keys. 
- When the cache reaches its maximum capacity, the least frequently used item will be removed. 
- This is done by keeping track of the number of times each item is accessed and removing the one that has been accessed the least amount of times. 
- The get() method returns the value associated with the given key, and updates the key's frequency. 
- The put() method adds a new key-value pair to the cache, and evicts the least frequently used key if the cache is at capacity.

# Complexity
- Time complexity : O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
# Codes [C++ | Java] : with Comments
```C++ []
struct Node {
  int key;
  int value;
  int freq;
  list<int>::const_iterator it;
};

class LFUCache {
 public:
  LFUCache(int capacity) : capacity(capacity), minFreq(0) {}

  int get(int key) {
    if (!keyToNode.count(key))
      return -1;

    Node& node = keyToNode[key];
    touch(node);
    return node.value;
  }

  void put(int key, int value) {
    if (capacity == 0)
      return;
    if (keyToNode.count(key)) {
      Node& node = keyToNode[key];
      node.value = value;
      touch(node);
      return;
    }

    if (keyToNode.size() == capacity) {
      // Evict LRU key from the minFreq list
      const int keyToEvict = freqToList[minFreq].back();
      freqToList[minFreq].pop_back();
      keyToNode.erase(keyToEvict);
    }

    minFreq = 1;
    freqToList[1].push_front(key);
    keyToNode[key] = {key, value, 1, cbegin(freqToList[1])};
  }

 private:
  int capacity;
  int minFreq;
  unordered_map<int, Node> keyToNode;
  unordered_map<int, list<int>> freqToList;

  void touch(Node& node) {
    // Update the node's frequency
    const int prevFreq = node.freq;
    const int newFreq = ++node.freq;

    // Remove the iterator from prevFreq's list
    freqToList[prevFreq].erase(node.it);
    if (freqToList[prevFreq].empty()) {
      freqToList.erase(prevFreq);
      // Update minFreq if needed
      if (prevFreq == minFreq)
        ++minFreq;
    }

    // Insert the key to the front of newFreq's list
    freqToList[newFreq].push_front(node.key);
    node.it = cbegin(freqToList[newFreq]);
  }
};
```
```Java []
class LFUCache {
  public LFUCache(int capacity) {
    this.capacity = capacity;
  }

  public int get(int key) {
    if (!keyToVal.containsKey(key))
      return -1;

    final int freq = keyToFreq.get(key);
    freqToLRUKeys.get(freq).remove(key);
    if (freq == minFreq && freqToLRUKeys.get(freq).isEmpty()) {
      freqToLRUKeys.remove(freq);
      ++minFreq;
    }

    // Increase key's freq by 1
    // Add this key to next freq's list
    putFreq(key, freq + 1);
    return keyToVal.get(key);
  }

  public void put(int key, int value) {
    if (capacity == 0)
      return;
    if (keyToVal.containsKey(key)) {
      keyToVal.put(key, value);
      get(key); // Update key's count
      return;
    }

    if (keyToVal.size() == capacity) {
      // Evict LRU key from the minFreq list
      final int keyToEvict = freqToLRUKeys.get(minFreq).iterator().next();
      freqToLRUKeys.get(minFreq).remove(keyToEvict);
      keyToVal.remove(keyToEvict);
    }

    minFreq = 1;
    putFreq(key, minFreq);    // Add new key and freq
    keyToVal.put(key, value); // Add new key and value
  }

  private int capacity;
  private int minFreq = 0;
  private Map<Integer, Integer> keyToVal = new HashMap<>();
  private Map<Integer, Integer> keyToFreq = new HashMap<>();
  private Map<Integer, LinkedHashSet<Integer>> freqToLRUKeys = new HashMap<>();

  private void putFreq(int key, int freq) {
    keyToFreq.put(key, freq);
    freqToLRUKeys.putIfAbsent(freq, new LinkedHashSet<>());
    freqToLRUKeys.get(freq).add(key);
  }
}
```
```Python3 []
from collections import deque, defaultdict, OrderedDict

class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.freq = 1

class LFUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.minFreq = 0
        self.keyToNode = dict()
        self.freqToList = defaultdict(deque)
        self.freqToKey = defaultdict(set)

    def get(self, key: int) -> int:
        if key not in self.keyToNode:
            return -1
        
        node = self.keyToNode[key]
        self.touch(node)
        return node.value

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return
        
        if key in self.keyToNode:
            node = self.keyToNode[key]
            node.value = value
            self.touch(node)
            return
        
        if len(self.keyToNode) == self.capacity:
            keyToEvict = self.freqToList[self.minFreq].pop()
            self.freqToKey[self.minFreq].remove(keyToEvict)
            del self.keyToNode[keyToEvict]
        
        self.minFreq = 1
        self.freqToList[1].appendleft(key)
        self.freqToKey[1].add(key)
        self.keyToNode[key] = Node(key, value)
        

    def touch(self, node):
        prevFreq = node.freq
        newFreq = node.freq + 1
        self.freqToList[prevFreq].remove(node.key)
        self.freqToKey[prevFreq].remove(node.key)
        
        if len(self.freqToList[prevFreq]) == 0:
            del self.freqToList[prevFreq]
            if prevFreq == self.minFreq:
                self.minFreq += 1
        
        if newFreq not in self.freqToList:
            self.freqToList[newFreq] = deque()
            self.freqToKey[newFreq] = set()
            
        self.freqToList[newFreq].appendleft(node.key)
        self.freqToKey[newFreq].add(node.key)
        node.freq = newFreq
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)

