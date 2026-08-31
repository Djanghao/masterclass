# Solution Maximum Number of Balls in a Box

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/5565692/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/5565692/)

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
  int digitSum(int n) {
    int sum = 0;
    while (n > 0) {
      sum += n % 10;
      n ~/= 10; // Integer division
    }
    return sum;
  }

  int countBalls(int lowLimit, int highLimit) {
    Map<int, int> mp = {}; // Equivalent to unordered_map in C++
    
    while (lowLimit <= highLimit) {
      int index = digitSum(lowLimit);
      if (mp.containsKey(index)) {
        mp[index] = mp[index]! + 1;
      } else {
        mp[index] = 1;
      }
      lowLimit++;
    }
    
    int max = 0;
    mp.forEach((key, value) {
      if (value > max) {
        max = value;
      }
    });
    
    return max;
  }
}

```