# [Python] O(1) using DLL and Dictionary

**Author:** kuntalroy
**Votes:** 79
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/800188/](https://leetcode.com/problems/lfu-cache/solutions/800188/)

---

**Approach:**

*Data Structures:*
1. Frequency Table: A dictionary to store the mapping of different frequency values with values as DLLs storing (key, value) pairs as nodes
2. Cache Dicitionary: Nodes in the DLL are stored as values for each key pushed into the cache

*Algorithm:*
* get(key):
	* If key is not present in cache, return -1
	* Get the node from the cache
	* Update the node frequency
	* Remove the node from the DLL of node's previous frequency
	* Add the node to the DLL with the node's updated frequency
	* Update min frequency value

* put(key, value):
	* If key is present in cache
		* Similar logic to that of get function
		* Only difference being that we need to update the value here
	* If key not present in cache
		* If the cache has already reached it's capacity, delete the tail node from the DLL with least frequency
		* Create the new node with the (key, value) pair passed as arguments
		* Add the node to the frequency table with frequency key = 1
		* Add the node to the cache 
		* Update min frequency to be 1

```
class ListNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.freq = 1
        self.prev = None
        self.next = None
        
class DLL:
    def __init__(self):
        self.head = ListNode(0, 0)
        self.tail = ListNode(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.size = 0
        
    def insertHead(self, node):
        headNext = self.head.next
        headNext.prev = node
        self.head.next = node
        node.prev = self.head
        node.next = headNext
        self.size += 1
        
    def removeNode(self, node):
        node.next.prev = node.prev
        node.prev.next = node.next
        self.size -= 1
        
    def removeTail(self):
        tail = self.tail.prev
        self.removeNode(tail)
        return tail
    

class LFUCache:

    def __init__(self, capacity: int):
        self.cache = {}
        self.freqTable = collections.defaultdict(DLL)
        self.capacity = capacity
        self.minFreq = 0
        
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        return self.updateCache(self.cache[key], key, self.cache[key].val)
        

    def put(self, key: int, value: int) -> None:
        if not self.capacity:
            return
        if key in self.cache:
            self.updateCache(self.cache[key], key, value)
        else:
            if len(self.cache) == self.capacity:
                prevTail = self.freqTable[self.minFreq].removeTail()
                del self.cache[prevTail.key]
            node = ListNode(key, value)
            self.freqTable[1].insertHead(node)
            self.cache[key] = node
            self.minFreq = 1
        
    
    def updateCache(self, node, key, value):
        node = self.cache[key]
        node.val = value
        prevFreq = node.freq
        node.freq += 1
        self.freqTable[prevFreq].removeNode(node)
        self.freqTable[node.freq].insertHead(node)
        if prevFreq == self.minFreq and self.freqTable[prevFreq].size == 0:
            self.minFreq += 1
        return node.val
```