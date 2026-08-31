# 🟢🔴🟢 Beats 100%👏 3 Lines Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/5845134/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/5845134/)

---

# Intuition
To move all chips to a single position, the key observation is that moving a chip from an even position to another even position (or from odd to odd) is free, while moving between odd and even positions costs 1. Therefore, the minimum cost to gather all chips in one position would be determined by the smaller number of chips at even or odd positions.

# Approach
1. **Count chips at even and odd positions**: Iterate through the `position` list and count how many chips are placed on even-numbered and odd-numbered positions.
2. **Calculate minimum cost**: The minimum cost to move all chips is the smaller number of either the chips on even or odd positions. Since moving within even or odd positions is free, you can just move all chips to the smaller group with the minimum cost.

### Example Walkthrough
**Example Input**:  
`position = [1, 2, 3]`

1. We count the number of chips at odd and even positions:
   - Chips at odd positions: 2 (positions 1 and 3)
   - Chips at even positions: 1 (position 2)
2. The minimum cost will be the smaller count, which is 1.

**Output**:  
`1`

# Complexity
- **Time complexity**:  
  We only need to iterate through the `position` list once, so the time complexity is:
  $$O(n)$$

- **Space complexity**:  
  Since we only use a few extra variables to store counts, the space complexity is:
  $$O(1)$$

# Code
```dart []
class Solution {
  int minCostToMoveChips(List<int> position) {
    int even = 0; int odd = 0;
    for(int p in position) p.isEven ? even++ : odd++;
    return min(even,odd);
  }
}
```