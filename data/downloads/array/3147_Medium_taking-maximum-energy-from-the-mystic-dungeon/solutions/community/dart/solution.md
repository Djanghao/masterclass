# DP (Dart, 100%)

**Author:** kiujpl
**Votes:** 0
**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5180478/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5180478/)

---

# Intuition
The total energy that can be gained by starting at position i is the local energy at i plus the total energy at i+k (or 0 if position i+k doesn't exist.)

# Approach
Process magicians from right to left, initializing the total with `energy[i]` and adding `total[i+k]` if it exists.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
  int maximumEnergy(List<int> energy, int k) {
      List<int> total = [...energy];
      for (var i = energy.length-k-1; i>=0; i--){
          total[i] += total[i+k];
      }
      return total.reduce(max);
  }
}
```