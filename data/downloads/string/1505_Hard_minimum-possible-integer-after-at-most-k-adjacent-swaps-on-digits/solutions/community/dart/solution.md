# Dart solution, O(n^2), LinkedList

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/2903739/](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/2903739/)

---

# Intuition
When swapping (similar to bubble sort) numbers in a string - we should start minimising number from the left side by swapping every digit with the lowest possible number from the remaining ight side within the K limit.


# Approach

While the idea is prerry simple I faced timeout error on submission when result was kept in the array (List<int>) and swapping was perfomed by internal cycle.
Replacing array with the LinkedList (where swap costs O(1) instead of O(N) ) helped to submit solution within the Leetcode time limits.

# Complexity
- Time complexity:
O(N*N)

- Space complexity:
O(N) for the linked list

# Code
```

import 'dart:collection';

class IntEntry extends LinkedListEntry<IntEntry> {
  int val;
  IntEntry(this.val);
}

class Solution {
  static int zeroCode = '0'.codeUnitAt(0);

  String minInteger(String num, int k) {
    int L = num.length;
    if (L == 0) return "";

    final List<int> arr = num.codeUnits.map((e) => e - zeroCode).toList();
    final LinkedList<IntEntry> lst = LinkedList<IntEntry>();
    lst.addAll(arr.map((e) => IntEntry(e)));

    int i = 0;
    int r = k;

    IntEntry next = lst.first;
    while (next.next != null && r > 0) {
      int swapLess = 0;
      var minIdx = 0;
      var minPtr = next;

      var findMinIdx = 1;
      var findMinPtr = next.next;

      for (;
          findMinPtr != null && findMinIdx <= r;
          findMinPtr = findMinPtr.next, findMinIdx++)
        if (findMinPtr.val < minPtr.val) {
          minPtr = findMinPtr;
          minIdx = findMinIdx;
        }

      if (minPtr != next) {
        r -= minIdx;
        minPtr.unlink();
        next.insertBefore(minPtr);
      } else
        next = next.next!;
    }

    final ret = StringBuffer();
    lst.forEach((entry) {
      ret.write(entry.val);
    });
    return ret.toString();
  }
}
```