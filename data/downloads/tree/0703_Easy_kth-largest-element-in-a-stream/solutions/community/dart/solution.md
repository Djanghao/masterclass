# Pure Dart Collection Solution (Without Heap Implementation)

**Author:** hyungzin
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/5624396/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/5624396/)

---

# Intuition
Dart doesn't have built-in priority queue or heap data structures, which can make problems like this quite challenging at first glance. However, Dart provides alternative data structures that can be used similarly to heaps for solving such problems. In this case, we can use a SplayTreeMap, which is part of Dart's collection library. While it's a map structure and not as straightforward to use as a heap, with a few tricks, we can achieve the same result efficiently.


# Approach
The core idea is to maintain a sorted structure of size k, where the smallest element in this structure is the kth largest element in the stream. Here's how we implement this using SplayTreeMap:

1. We use a SplayTreeMap to store the elements in sorted order. The key is the element value, and the value is its frequency.
2. We keep track of the total count of elements in our structure.
3. When adding a new element:
    - We insert it into the SplayTreeMap, incrementing its frequency.
    - If the total count exceeds k, we remove elements from the start of the map (smallest elements) until the count is back to k.

4. The kth largest element is always the first (smallest) key in our SplayTreeMap.

This approach ensures that we always have the k largest elements in our SplayTreeMap, with the kth largest as the first key.

# Complexity
- Time complexity:
 O(log k) per 'add'

- Space complexity:
 O(N)

# Code
```
import 'dart:collection';
class KthLargest {
  final int k;
  final stm = SplayTreeMap<int, int>((a, b) => a.compareTo(b));
  int cnt = 0;
  KthLargest(this.k, List<int> nums) {
    for (final n in nums){
      stm[n] = (stm[n] ?? 0) + 1;
      cnt++;
    }
  }
  
  int add(int val) {
    stm[val] = (stm[val] ?? 0) + 1;
    cnt++;
    while (cnt > k){
      final firstKey = stm.firstKey()!;
      stm[firstKey] = stm[firstKey]! - 1;
      if (stm[firstKey] == 0){
        stm.remove(firstKey);
      }
      cnt--;
    }
    return stm.firstKey()!;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = KthLargest(k, nums);
 * int param1 = obj.add(val);
 */


```