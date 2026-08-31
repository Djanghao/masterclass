# TypeScript: Simple solution with O(1) get and put

**Author:** martpie
**Votes:** 44
**Link:** [https://leetcode.com/problems/lru-cache/solutions/1770891/](https://leetcode.com/problems/lru-cache/solutions/1770891/)

---

The tricky thing is to have O(1) get and put time. We could create linked lists and hashmaps, but it's very complex and easy to go wrong.

Fortunately JS/TS has a very convenient structure called Map, which behaves like an object, with the particularity of **respecting insertion order of keys**. So we know if we add a key, it will be at the end of the object, and the first inserted key will be at the beginning.

The "key" (haha) is to be sure to remove keys and re-add it at the end of the map when interacted with.

```typescript
class LRUCache {
  capacity: number;
  map: Map<number, number>;

  constructor(capacity: number) {
      this.capacity = capacity;
      this.map = new Map();
  }

  get(key: number): number {
    const value = this.map.get(key);

    if (value === undefined) return -1;
          
    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key);
    this.map.set(key, value);
    
    return value;
  }

  put(key: number, value: number): void {
    // remove last element to avoid overflow, only if it does not have 
    // the inserted key is a new key
    if (this.map.size >= this.capacity && !this.map.has(key)) {
        const firstKey = this.map.keys().next().value;
        this.map.delete(firstKey);
    }
    
    // Small hack to re-order keys: we remove the requested key and place it at the end
    this.map.delete(key);
    this.map.set(key, value);
  }
}
```