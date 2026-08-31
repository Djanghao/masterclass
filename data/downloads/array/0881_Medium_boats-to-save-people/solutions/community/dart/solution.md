# easy

**Author:** mariyavthomas
**Votes:** 2
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/5109470/](https://leetcode.com/problems/boats-to-save-people/solutions/5109470/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)

- Space complexity:
- o(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int numRescueBoats(List<int> a, int limit) {
  int count = 0;
  a.sort(); 
  int left = 0;
  int right = a.length - 1;
  
  while (left <= right) {
    if (a[left] + a[right] <= limit) {
     
      left++;
      right--;
    } else {
     
      right--;
    }
    count++; 
  }
  
  return count;
}

}
```