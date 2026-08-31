# TypeScript: No hash table libraries or generic objects used.

**Author:** EliJArmstrong
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-hashset/solutions/3785267/](https://leetcode.com/problems/design-hashset/solutions/3785267/)

---

# Intuition
The code implements a simple HashSet data structure using open addressing with linear probing to handle collisions. The HashSet allows adding, removing, and checking for the existence of elements in a collection. The crucial aspect of this implementation is the usage of prime numbers for the size of the underlying array to reduce the likelihood of collisions.

# Approach
The HashSet class uses an array to store elements, and the elements are inserted into the array using a hash function to determine the appropriate index. If there is a collision (i.e., the index is already occupied), linear probing is used to find the next available index for insertion. If the load factor (ratio of elements to array size) becomes too high (>= 75%), the array is rehashed with a larger size to reduce collisions.

The add method inserts an element into the HashSet. It computes the hash value using the hash function and resolves collisions using linear probing. If the load factor becomes high, the method triggers a rehash operation to resize the array.
The remove method removes an element from the HashSet. It searches for the element using the hash function and removes it from the array.
The contains method checks if an element exists in the HashSet. It follows the same process of computing the hash value and probing linearly until it finds the element or reaches an empty slot.

# Complexity
- Time complexity:
The time complexity of adding, removing, and checking the existence of an element in the HashSet is generally O(1). However, in the worst-case scenario of many collisions, the time complexity can approach O(n), where n is the number of elements in the HashSet.

- Space complexity:
The space complexity is O(n), where n is the number of elements in the HashSet. Additionally, there is extra space used for the array and other variables, but their sizes are constant, so they do not affect the overall space complexity

# Code
```
class MyHashSet {
    // An array of prime numbers used to determine the size of the internal array
    primes = [53, 97, 193, 389, 769, 1543, 3079, 6151, 12289, 24593, 49157, 98317, 196613, 393241, 786433, 1572869]
    
    // The current size of the hash set (number of elements)
    size = 0;

    // The index used to access the prime number for the current internal array
    i = 0;

    // The internal array representing the hash set, initialized with undefined values
    arr = Array(this.primes[this.i]).fill(undefined);

    constructor() {
        // The constructor is empty as initialization is already done above.
    }

    // Adds a key to the hash set
    add(key: number): void {
        let hashKey = this.hash(key);
        let firstNegOne = -1;

        // While the current position in the internal array is occupied and not the key we're looking for
        // Keep probing for the next available position using linear probing
        while(this.arr[hashKey] !== undefined && this.arr[hashKey] !== key){
            // Keep track of the first position with value -1 (previously removed element)
            if(this.arr[hashKey] === -1 && firstNegOne === -1){
                firstNegOne = hashKey;
            }
            hashKey = (hashKey + 1) % this.primes[this.i];
        }

        // If a position with value -1 was found, use it for the new key
        // Otherwise, if the position is still undefined, store the new key there
        if(this.arr[hashKey] === undefined && firstNegOne !== -1){
            this.size++;
            this.arr[firstNegOne] = key;
        } else if(this.arr[hashKey] === undefined){
            this.size++;
            this.arr[hashKey] = key;
        }

        // Check if the hash set has exceeded the load factor (75%)
        // If so, trigger a rehash to increase the internal array size and reduce collisions
        if((this.size / this.primes[this.i]) * 100 >= 75){
            this.rehash();
        }
    }

    // Removes a key from the hash set
    remove(key: number): void {
        let hashKey = this.hash(key);

        // While the current position in the internal array is occupied and not the key we're looking for
        // Keep probing for the next position to find the key to remove
        while(this.arr[hashKey] !== undefined && this.arr[hashKey] !== key){
            hashKey = (hashKey + 1) % this.primes[this.i];
        }

        // If the key is found at the current position, remove it from the hash set by setting it to -1
        if(this.arr[hashKey] === key){
            this.size--;
            // Need to set it to -1 for the contains function.
            // If we set it to undefined then the contains function might exit earlier than its needed.
            this.arr[hashKey] = -1;
        }
    }

    // Checks if the hash set contains a given key
    contains(key: number): boolean {
        let hashKey = this.hash(key);

        // While the current position in the internal array is occupied and not the key we're looking for
        // Keep probing for the next position to check if the key exists in the hash set
        while(this.arr[hashKey] !== undefined && this.arr[hashKey] !== key){
            hashKey = (hashKey + 1) % this.primes[this.i];
        }

        // Return true if the key is found in the hash set (i.e., the position is not undefined)
        // Otherwise, return false
        return this.arr[hashKey] !== undefined ? true : false;
    }

    // Rehashes the hash set, increasing the size of the internal array and redistributing the keys
    rehash(): void{
        this.i++;
        
        // Store the old internal array in a temporary variable
        let oldArray = this.arr;
        // Create a new internal array with the next prime size
        this.arr = Array(this.primes[this.i]).fill(undefined);
        // Reset the size counter
        this.size = 0;

        // Re-insert all non-removed keys from the old internal array into the new array
        for(let i = 0; i < oldArray.length; i++){
            if(oldArray[i] !== undefined && oldArray[i] !== -1){
                this.add(oldArray[i]);
            }
        }
    }

    // Hash function that maps a key to an index in the internal array
    hash(key: number): number{
        return key % this.primes[this.i];
    }

}
```