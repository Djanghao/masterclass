# 🟢🔴🟢 Beats 100.00% 👏 Most Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/5862264/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/5862264/)

---

# Intuition
The problem can be approached by simulating a list `P` that is initialized with the values `[1, 2, ..., m]`. For each query, we need to find the index of the queried number, add that index to the result list, and then move that queried number to the front of the list. 

This directly implies that each query involves finding the position of the number in `P`, removing it from that position, and then placing it at the start of the list.

# Approach
1. **Initialization**: Create the list `P` with values from `1` to `m`.
2. **Processing Queries**:
   - For each query, find the index of the number in `P`.
   - Add this index to the result list.
   - Move the queried number to the front of `P`.
3. **Return Result**: After processing all queries, return the result list of indices.

### Example:
**Input**:  
`queries = [3, 1, 2, 1]`, `m = 5`

- Initially, `P = [1, 2, 3, 4, 5]`
  1. Query `3`: Index is `2`. Move `3` to the front: `P = [3, 1, 2, 4, 5]`. Result: `[2]`
  2. Query `1`: Index is `1`. Move `1` to the front: `P = [1, 3, 2, 4, 5]`. Result: `[2, 1]`
  3. Query `2`: Index is `2`. Move `2` to the front: `P = [2, 1, 3, 4, 5]`. Result: `[2, 1, 2]`
  4. Query `1`: Index is `1`. Move `1` to the front: `P = [1, 2, 3, 4, 5]`. Result: `[2, 1, 2, 1]`

**Output**: `[2, 1, 2, 1]`

# Complexity
- **Time complexity**:  
  The time complexity is $$O(n \\cdot m)$$ where `n` is the length of the `queries` and `m` is the size of the list `P`. For each query, finding the index of an element in `P` takes `O(m)` and inserting it back at the front of the list takes `O(m)` as well.
  
- **Space complexity**:  
  The space complexity is $$O(m)$$ due to the storage of list `P`.

# Code
```dart
class Solution {
  List<int> processQueries(List<int> queries, int m) {
    // Initialize the list P with values from 1 to m
    List<int> p = List.generate(m, (i) => i + 1);
    List<int> res = [];
    
    // Process each query
    for (int i = 0; i < queries.length; i++) {
      int num = queries[i];
      int index = p.indexOf(num);  // Find the index of the number in P
      res.add(index);              // Add the index to the result
      p.removeAt(index);           // Remove the number from its current position
      p = [num, ...p];             // Move the number to the front of the list
    }
    
    return res;  // Return the result list
  }
}
