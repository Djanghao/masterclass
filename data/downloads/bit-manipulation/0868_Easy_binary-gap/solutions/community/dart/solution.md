# [Dart] - Simple solution with explanation

**Author:** karp_in_sky
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-gap/solutions/5849750/](https://leetcode.com/problems/binary-gap/solutions/5849750/)

---

# Intuition
Let's note following observations:
1. First number in binary representation of any number will be `1` (of course, except `0`, but constraints are `1 <= n <= 10^9`). Having that information, we can start our loop from the second element in the binary representation;
2. We can either track number of zeros between two adjacent `1`'s or track the position of last `1`. I prefer the second variant;

# Complexity
- Time complexity: **O(n)**

- Space complexity: **O(1)**

# Code
```dart []
import 'dart:math';

class Solution {
  int binaryGap(int n) {
    String binary = n.toRadixString(2);
    int lastOneIndex = 0;
    int maxGap = 0;
    for (int i = 1; i < binary.length; i++) {
        if (binary[i] == '1') {
            maxGap = max(i - lastOneIndex, maxGap);
            lastOneIndex = i;
        } 
    }
    return maxGap;
  }
}
```