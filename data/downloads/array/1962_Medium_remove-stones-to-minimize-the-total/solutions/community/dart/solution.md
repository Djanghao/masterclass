# 🟢🔴🟢Using Heap Priority Queue Data Structure🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/5913192/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/5913192/)

---

# Minimize the Total Number of Stones

## Intuition
The problem asks to minimize the total number of stones in the piles after performing a specified number of operations. In each operation, we remove half (rounded up) of the stones from the pile with the most stones. This suggests a greedy approach where we always operate on the largest pile to achieve the fastest reduction.

## Approach
1. **Heap (Priority Queue)**:
   - Use a max-heap (priority queue) to efficiently track and retrieve the pile with the most stones at each step.
   - After each operation, reinsert the pile with its stones halved (rounded up) back into the heap to maintain the max-heap property.
   
2. **Steps**:
   - Initialize the max-heap with all piles.
   - Perform `k` operations:
     - Extract the maximum pile, reduce its stones by half (rounded up), and reinsert it into the heap.
   - After all operations, sum up the stones remaining in all piles and return the result.

## Example Walkthrough

Consider the input `piles = [5, 4, 9]` and `k = 2`.

- **Step 1**: Add all elements to the max-heap: `maxHeap = [9, 5, 4]`.
- **Step 2**: Perform `k = 2` operations:
  1. Extract `9`, halve it: `9 / 2 = 5` (rounded up). Insert `5` back into the heap: `maxHeap = [5, 5, 4]`.
  2. Extract `5`, halve it: `5 / 2 = 3` (rounded up). Insert `3` back into the heap: `maxHeap = [5, 4, 3]`.

- **Final Step**: Sum up the remaining stones: `5 + 4 + 3 = 12`.

- **Final Output**: The total remaining stones after `k = 2` operations is `12`.

## Complexity

- **Time complexity**:  
  - Heap operations (insertion and extraction) take $$O(\\log n)$$. Since we perform `k` operations, the total time complexity is $$O(k \\log n)$$, where `n` is the number of piles and `k` is the number of operations.

- **Space complexity**:  
  - The space complexity is $$O(n)$$ due to the space required for storing the heap, where `n` is the number of piles.

## Solution Code

```dart
import 'package:collection/collection.dart';

class Solution {
  int minStoneSum(List<int> piles, int k) {
    final maxHeap = HeapPriorityQueue<int>((a, b) => b.compareTo(a));
    maxHeap.addAll(piles);
    
    while (k > 0) {
      int maximum = maxHeap.removeFirst();
      maxHeap.add((maximum / 2).ceil());
      k--;
    }
    
    return maxHeap.toList().fold(0, (a, b) => a + b);
  }
}
