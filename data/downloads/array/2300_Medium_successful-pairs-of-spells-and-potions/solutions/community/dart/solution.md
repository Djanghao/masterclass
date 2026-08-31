# ✅ ✅Simple O(n*log m) solution!! Clear code😂 😈!!! Binary search😀!! ✅ ✅

**Author:** LTDigor
**Votes:** 1
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3370770/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3370770/)

---

# Approach
We don't care about the order of the elements in the potion array, so we can sort it

Now, if the success condition is met for some potion, then it is also met for all potions on the right. To find the minimum potion index for which there will be success, we use a binary search.

# Complexity
- Time complexity: $$O(n *logm)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> successfulPairs(List<int> spells, List<int> potions, int success) {
      var poisonsForSpell = <int, int>{};
      potions.sort();

      var res = <int>[];
      for (int i = 0; i < spells.length; i++) {
        var minInd = 0;
        var maxInd = potions.length - 1;
        while (minInd <= maxInd) {
            var mid = (minInd + maxInd) ~/ 2;
            if (potions[mid] * spells[i] >= success) {
                maxInd = mid - 1;
            }
            else {
                minInd = mid + 1;
            }
        }

        res.add(potions.length - minInd);
      }

      return res;
  }
}
```