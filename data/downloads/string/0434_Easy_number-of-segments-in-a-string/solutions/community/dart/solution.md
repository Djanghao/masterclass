# Easy Approach && Easy to Understand for beginners

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/5061332/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/5061332/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int countSegments(String s) {
    List<String> segments = s.trim().split(' ');
    int count = 0;
    
    if (s.isEmpty) {
      return 0;
    }
    
    for (int i = 0; i < segments.length; i++) {
      if (segments[i].isNotEmpty) {
        count++;
      }
    }
    
    return count;
  }
}

```