# Java | Easy solution | Clean code

**Author:** judgementdey
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771223/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771223/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  public int minimumIndex(List<Integer> nums) {
    var map = new HashMap<Integer, Integer>();
    map.put(0, 0);
    int max = 0, m = nums.size();
    
    for (var n : nums) {
      map.put(n, map.getOrDefault(n, 0) + 1);
      
      if (map.get(n) > map.get(max))
        max = n;
    }
    var freq = 0;
    for (var i=0; i<m; i++) {
      if (nums.get(i) == max) freq++;
      
      if (freq * 2 > i+1 && (map.get(max) - freq) * 2 > (m-i-1))
        return i;
    }
    return -1;
  }
}
```
If you like my solution, please upvote it!