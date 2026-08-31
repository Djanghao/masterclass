# 🔥 🔥 🔥 Easy to understand | Beats 💯 of users | In 4 languages 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/5132098/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/5132098/)

---

# Intuition
- The problem exploits the fact that moving chips between positions of the same parity (odd or even) is free due to the zero-cost of moving by two positions. Therefore, the cost only accrues when moving chips between different parities, making the optimal strategy to move the lesser number of chips to match the parity of the majority.

# Approach
- **Identify Parity:**
Chips at even positions can be moved amongst each other at no cost, similarly for odd positions due to the zero-cost of two-position moves.
The only time a cost is incurred is when moving a chip from an even position to an odd position, or vice versa, as this requires a one-position move.
- **Count Parity:**
Iterate through the array of chip positions.
Maintain two counters: one for chips at even positions (evenCount) and another for chips at odd positions (oddCount).
- **Calculate Minimum Cost:**
Since moving chips within the same parity group (even to even or odd to odd) costs nothing, the only decision is to determine the lesser cost between moving all even-positioned chips to an odd position or moving all odd-positioned chips to an even position.
The cost is directly proportional to the number of chips being moved. Hence, to minimize the cost, you would move all chips from the smaller group (either oddCount or evenCount) to the larger group.
- **Return the Result:**
The function returns the smaller of the two counts (evenCount or oddCount), representing the minimum cost based on the number of moves required.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```python []
class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        evenCount = 0
        oddCount = 0

        for pos in position:
            if pos % 2:
                oddCount += 1
            else:
                evenCount += 1
        return min(oddCount, evenCount)
```
```Java []
class Solution {
    public int minCostToMoveChips(int[] position) {
        int evenCount = 0;
        int oddCount = 0;

        for (int pos : position) {
            if (pos % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
        return Math.min(oddCount, evenCount);
    }
}
```
```C++ []
class Solution {
public:
    int minCostToMoveChips(vector<int>& position) {
        int evenCount = 0;
        int oddCount = 0;

        for (int pos : position) {
            if (pos % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
        return std::min(oddCount, evenCount);
    }
};
```
```Javascript []
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let evenCount = 0;
    let oddCount = 0;

    for (const pos of position) {
        if (pos % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return Math.min(oddCount, evenCount);
};
```

**Please Upvote**

![DALL\xB7E 2024-05-08 00.50.08 - A visually appealing graphic design featuring the text 'Please Upvote. It makes me happy' in vibrant, eye-catching colors. The background should inclu.webp](./images/0.webp)
