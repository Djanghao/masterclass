# 💥[EXPLAINED] TypeScript. Runtime beats 100.00%

**Author:** r9n
**Votes:** 6
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/5683855/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/5683855/)

---

# Intuition
The RandomizedCollection efficiently handles inserting, removing, and retrieving random elements, even with duplicates, by using a combination of a list and a map. The list maintains the elements, while the map tracks the indices of each value in the list, enabling quick updates and lookups.

# Approach
Insert: Add the value to the list and update the map with its index.

Remove: Swap the target element with the last element in the list, update the map accordingly, and then remove the last element.

Get Random: Simply return a random element from the list.

# Complexity
- Time complexity:

  Insert: O(1) on average.

  Remove: O(1) on average.

  Get Random: O(1).

- Space complexity:

  O(n), where n is the number of elements in the collection, due to   the storage in both the list and the map.

# Code
```typescript []
class RandomizedCollection {
    private map: Map<number, Set<number>>;
    private list: number[];

    constructor() {
        this.map = new Map();
        this.list = [];
    }

    insert(val: number): boolean {
        let isNew = false;
        if (!this.map.has(val)) {
            this.map.set(val, new Set());
            isNew = true;
        }
        this.map.get(val)!.add(this.list.length);
        this.list.push(val);
        return isNew;
    }

    remove(val: number): boolean {
        if (!this.map.has(val) || this.map.get(val)!.size === 0) {
            return false;
        }
        
        // Remove the value from the list and map
        let indexToRemove = this.map.get(val)!.values().next().value;
        let lastElement = this.list[this.list.length - 1];
        
        // Swap the element to be removed with the last element
        this.list[indexToRemove] = lastElement;
        this.map.get(val)!.delete(indexToRemove);
        
        if (this.map.get(val)!.size === 0) {
            this.map.delete(val);
        }
        
        // Update the map for the last element
        if (indexToRemove !== this.list.length - 1) {
            this.map.get(lastElement)!.delete(this.list.length - 1);
            this.map.get(lastElement)!.add(indexToRemove);
        }
        
        this.list.pop();
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}

// Example usage
const collection = new RandomizedCollection();
console.log(collection.insert(1)); // true
console.log(collection.insert(1)); // false
console.log(collection.insert(2)); // true
console.log(collection.getRandom()); // 1 or 2
console.log(collection.remove(1)); // true
console.log(collection.getRandom()); // 1 or 2

```