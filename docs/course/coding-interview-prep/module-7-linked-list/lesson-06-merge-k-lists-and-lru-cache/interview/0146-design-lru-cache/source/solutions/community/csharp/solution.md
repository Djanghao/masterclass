# C# Solution for LRU Cache Problem

**Author:** Aman_Raj_Sinha
**Votes:** 17
**Link:** [https://leetcode.com/problems/lru-cache/solutions/3781030/](https://leetcode.com/problems/lru-cache/solutions/3781030/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the LRUCache implementation is to use a combination of a dictionary and a linked list to efficiently store and manage the cache items. The dictionary provides fast access to cache items based on their keys, while the linked list maintains the order of recently used items.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach involves using a dictionary (cacheMap) to store the cache items, where the key is the item's key and the value is a reference to the corresponding node in the linked list. The linked list (cacheList) keeps track of the order of the items, with the most recently used item at the front of the list.

When performing a Get operation, the implementation checks if the key exists in the dictionary. If it does, the corresponding node is moved to the front of the linked list (representing the most recently used item) and its value is returned. If the key is not found, -1 is returned.

When performing a Put operation, the implementation first checks if the key already exists in the cache. If it does, the corresponding node is updated with the new value, moved to the front of the linked list, and no additional space is used. If the key is not found, the implementation checks if the cache has reached its capacity. If it has, the least recently used item (at the end of the linked list) is removed from both the dictionary and the linked list. Then, a new node is created with the given key and value, added to the front of the linked list, and added to the dictionary for future access.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the Get and Put operations is O(1) on average since dictionary lookups, linked list operations (addition, removal), and updating the cache map all have constant time complexity. 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(capacity) since the cache size is limited by the given capacity parameter, and both the dictionary and the linked list store the cache items.

# Code
```
public class LRUCache {

    private readonly int capacity;
    private readonly Dictionary<int, LinkedListNode<CacheItem>> cacheMap;
    private readonly LinkedList<CacheItem> cacheList;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        cacheMap = new Dictionary<int, LinkedListNode<CacheItem>>(capacity);
        cacheList = new LinkedList<CacheItem>();
    }
    
    public int Get(int key) {
        if (cacheMap.TryGetValue(key, out var node))
        {
            cacheList.Remove(node);
            cacheList.AddFirst(node);
            return node.Value.Value;
        }
        return -1;
    }
    
    public void Put(int key, int value) {
        if (cacheMap.TryGetValue(key, out var node))
        {
            node.Value.Value = value;
            cacheList.Remove(node);
            cacheList.AddFirst(node);
        }
        else
        {
            if (cacheMap.Count >= capacity)
            {
                var lastNode = cacheList.Last;
                cacheMap.Remove(lastNode.Value.Key);
                cacheList.RemoveLast();
            }

            var newNode = new LinkedListNode<CacheItem>(new CacheItem(key, value));
            cacheMap.Add(key, newNode);
            cacheList.AddFirst(newNode);
        }
    }

    private class CacheItem
    {
        public int Key { get; }
        public int Value { get; set; }

        public CacheItem(int key, int value)
        {
            Key = key;
            Value = value;
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */
```