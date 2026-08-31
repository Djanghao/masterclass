# ✔🟨JS ||☑✨TypeScript || Easiest solution || beats 100% 🥇

**Author:** amrcool
**Votes:** 5
**Link:** [https://leetcode.com/problems/memoize-ii/solutions/3412240/](https://leetcode.com/problems/memoize-ii/solutions/3412240/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Create a cache object to store previously computed results of a function, and return the cached result instead of recomputing if the same input is provided again. This approach is simple to implement but may consume a lot of memory if the function is called with a large number of unique inputs.

Use a data structure like a hash table or a tree to store previously computed results of a function, and retrieve the result from the data structure if the same input is provided again. This approach can be more memory-efficient than a cache object, but may be more complex to implement.

Use a memoization library or framework that provides a pre-built solution for caching function results. This can be an easy and convenient approach, but may require some learning curve to understand the library or framework.

Overall, the choice of approach will depend on factors such as the complexity of the function being memoized, the expected number of unique inputs, and the memory constraints of the application
# Approach
<!-- Describe your approach to solving the problem. -->
Create a cache object or data structure to store the cached results.

Create a wrapper function that takes the original function as an argument.

Inside the wrapper function, return a new function that takes the arguments for the original function as its own arguments.

Inside the new function, check if the cached result exists for the current set of arguments. If it does, return the cached result.

If the cached result does not exist, call the original function with the current set of arguments, store the result in the cache, and return the result.

Add a way to clear the cache if needed, for example, if the input to the original function has changed.

Return the new function from the wrapper function.

Overall, this approach should allow the original function to be called with the same set of arguments multiple times without having to recompute the result, thus reducing the computation time and improving performance.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time complexity: 
O(n), where n is the number of arguments passed to the memoized function. The time complexity of the memoized function is mainly due to the traversal of the Trie data structure to retrieve or store cached results. The worst-case scenario is when all the arguments passed to the function are unique, which would require traversing the entire Trie structure for every call to the function.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(mn), where m is the maximum number of unique arguments for any given position in the argument list, and n is the length of the argument list. The space complexity is due to the storage of cached results in the Trie data structure. The worst-case scenario is when all the arguments passed to the function are unique, which would require creating a new Trie node for every argument at every position in the argument list.
# Code
```javascript []
// Define a type for memoized functions
const memoize = (fn) => {
  // Define a TrieNode class to store the cache
  class TrieNode {
    constructor() {
      this.value = null;
      this.children = new Map();
    }

    getValue(args) {
      return this.children.get(args)?.value;
    }

    setValue(args, value) {
      const childNode = this.children.get(args) ?? new TrieNode();
      childNode.value = value;
      this.children.set(args, childNode);
    }
  }

  // Create a cache using the TrieNode class
  const cache = new TrieNode();

  // Define the memoized function
  const memoized = (...args) => {
    // If no arguments are passed, return the cached value
    if (args.length === 0) {
      if (cache.value !== null) {
        return cache.value;
      }
      const result = fn.apply(this, args);
      cache.value = result;
      return result;
    }

    // Traverse the TrieNode based on the arguments
    let currentNode = cache;
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const childNode = currentNode.children.get(arg) ?? new TrieNode();
      currentNode.children.set(arg, childNode);
      currentNode = childNode;
    }

    // If the value is not cached, cache it and return it
    if (currentNode.value === null) {
      const result = fn.apply(this, args);
      currentNode.value = result;
    }

    return currentNode.value;
  };

  return memoized;
};

```
```TypeScript []
type MemoizedFn<T> = (...args: any[]) => T;

class TrieNode<T> {
  value: T | null = null;
  children = new Map<any, TrieNode<T>>();

  getValue(args: any[]): T | undefined {
    return this.children.get(args)?.value;
  }

  setValue(args: any[], value: T): void {
    const childNode = this.children.get(args) ?? new TrieNode<T>();
    childNode.value = value;
    this.children.set(args, childNode);
  }
}

function memoize<T>(fn: (...args: any[]) => T): MemoizedFn<T> {
  const cache = new TrieNode<T>();

  const memoized = (...args: any[]): T => {
    if (args.length === 0) {
      if (cache.value !== null) {
        return cache.value;
      }
      const result = fn.apply(this, args);
      cache.value = result;
      return result;
    }

    let currentNode = cache;
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const childNode = currentNode.children.get(arg) ?? new TrieNode<T>();
      currentNode.children.set(arg, childNode);
      currentNode = childNode;
    }

    if (currentNode.value === null) {
      const result = fn.apply(this, args);
      currentNode.value = result;
    }

    return currentNode.value as T;
  };

  return memoized;
}
```

```


```