# Dart

**Author:** ShahbozTuronov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3534191/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3534191/)

---

# Complexity
- Time complexity: 100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 100%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  int pairSum(ListNode? head) {
      List<int> values = [];
  ListNode? current = head;

  // Store the values of the nodes in an array
  while (current != null) {
    values.add(current.val);
    current = current.next;
  }

  int maxSum = 0;
  int length = values.length;

  // Iterate over the array to find the maximum twin sum
  for (int i = 0; i < length ~/ 2; i++) {
    int twinSum = values[i] + values[length - 1 - i];
    maxSum = twinSum > maxSum ? twinSum : maxSum;
  }

  return maxSum;
  }
  
}
```