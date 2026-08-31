# 2 lines Code

**Author:** amanguptaprogrammer
**Votes:** 3
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3502359/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3502359/)

---

# Intuition
Think Bottom UP.
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```C++ []
class Solution {
public:
    int minIncrements(int n, vector<int>& cost) {
        int moves = 0;
        for(int i = n / 2 - 1; i >= 0; i--) {
            moves += abs(cost[2 * i + 1] - cost[2 * i + 2]);
            cost[i] += max(cost[2 * i + 1], cost[2 * i + 2]);
        }
        return moves;
    }
};
```
```Java []
class Solution {
    public int minIncrements(int n, int[] cost) {
        int moves = 0;
        for(int i = n / 2 - 1; i >= 0; i--) {
            moves += Math.abs(cost[2 * i + 1] - cost[2 * i + 2]);
            cost[i] += Math.max(cost[2 * i + 1], cost[2 * i + 2]);
        }
        return moves;
    }
}
```
```JavaScript []
var minIncrements = function(n, cost) {
    let moves = 0;
    for(let i = (n + 1) / 2 - 2; i >= 0; i--) {
        moves += Math.abs(cost[2 * i + 1] - cost[2 * i + 2]);
        cost[i] += Math.max(cost[2 * i + 1], cost[2 * i + 2]);
    }
    return moves;
};
```