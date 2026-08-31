# Eye Blink Solution

**Author:** 1nNOWYafsP
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/6082068/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/6082068/)

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
```dart []


class Solution {
  List<int> numberOfPairs(List<int> nums) {
    int pairs = 0;
    int i = 0;

    while (i < nums.length) {
      bool foundPair = false;

      for (int j = i + 1; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
          nums.removeAt(j); 
          nums.removeAt(i);
          pairs++;
          foundPair = true;
          break; 
        }
      }

      if (foundPair) {
        i = 0; 
      } else {
        i++; 
      }
    }

    return [pairs, nums.length]; 
  }
}


```