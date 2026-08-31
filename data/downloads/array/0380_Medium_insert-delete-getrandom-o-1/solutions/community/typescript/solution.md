# ✅Step by step approach | O(1)

**Author:** SumitPokhriyal
**Votes:** 4
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/3687193/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/3687193/)

---

# Intuition
The problem requires us to implement a data structure called RandomizedSet, which supports three operations: insert, remove, and getRandom. The insert operation adds a value to the set if it doesn't already exist and returns true, or returns false if the value already exists. The remove operation removes a value from the set if it exists and returns true, or returns false if the value doesn't exist. The getRandom operation returns a random value from the set.

# Approach
To solve this problem, we can use a combination of a Set and an array. We'll use the Set to store the unique values and ensure constant-time operations for checking existence and removing values. We'll use the array to store the values in a random order and facilitate the getRandom operation.

Here's a breakdown of each operation:

1. insert(val: number): boolean: To insert a value, we'll first check if it already exists in the set using set.has(val). If it does, we'll return false to indicate that the value was not inserted. Otherwise, we'll add the value to both the set and the array, and return true.

2. remove(val: number): boolean: To remove a value, we'll first check if it exists in the set using set.has(val). If it doesn't, we'll return false to indicate that the value was not removed. Otherwise, we'll delete the value from both the set and the array. To efficiently remove the value from the array, we'll swap it with the last value in the array and then pop the last element. This way, the array remains in a random order even after removal. Finally, we'll return true.

3. getRandom(): number: To get a random value, we'll convert the set to an array using Array.from(set). Then, we'll generate a random index within the bounds of the array using Math.random() * array.length. Finally, we'll return the value at the random index.

# Complexity
- Time complexity:
Insert: O(1)
Remove: O(1)
getRandom: O(1)
- Space complexity:
O(n), where n is the number of elements in the set.

# Code
```
class RandomizedSet {
    private set: Set<number>;
    private array: number[];

    constructor() {
        this.set = new Set<number>();
        this.array = [];
    }

    insert(val: number): boolean {
        if (this.set.has(val)) {
            return false;
        }
        this.set.add(val);
        this.array.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.set.has(val)) {
            return false;
        }
        this.set.delete(val);
        const index = this.array.indexOf(val);
        this.array[index] = this.array[this.array.length - 1];
        this.array.pop();
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.array.length);
        return this.array[randomIndex];
    }
}


/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```