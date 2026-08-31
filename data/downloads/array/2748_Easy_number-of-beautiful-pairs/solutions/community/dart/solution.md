# Easy Approach

**Author:** Shaheed_Palappetty
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/4150457/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/4150457/)

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
  int countBeautifulPairs(List<int> nums) {
  int count = 0;

  int gcd(int a, int b) {
    while (b != 0) {
      final int temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  int getFirstDigit(int num) {
    while (num >= 10) {
      num ~/= 10;
    }
    return num;
  }

  for (int i = 0; i < nums.length - 1; i++) {
    int x = getFirstDigit(nums[i]);
    for (int j = i + 1; j < nums.length; j++) {
      int y = nums[j] % 10;
      if (gcd(x, y) == 1) {
        count++;
      }
    }
  }

  return count;
}
}
```