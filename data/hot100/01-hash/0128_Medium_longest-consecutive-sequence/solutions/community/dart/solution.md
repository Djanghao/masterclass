# Iterative approach with comments

**Author:** benottoman
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/4651893/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/4651893/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';

class Solution {
  int longestConsecutive(List<int> nums) {
    // Convert to [Set] for O(1) lookups
    final numsSet = Set.from(nums);
    
    int longestSeq = 0;

    for (int n in nums) {
      // Check for the start of a sequence
      //
      // [100,4,200,1,3,2]
      // x[1,2,3,4] x[100] x[200]
      // x represents an absent number (hence indicating that [n] is the start of a sequence)
      if (!numsSet.contains(n - 1)) {
        // Find all consecutive numbers after [n]
        int currSeqLength = 0;
        while (numsSet.contains(n + currSeqLength)) {
          currSeqLength++;
          longestSeq = max(currSeqLength, longestSeq);
        }        
      } 
    }

    return longestSeq;
  }
}
```