# Optimized Depth-First Search Solution for the 24 Game in JavaScript.

**Author:** crazyycoder805
**Votes:** 0
**Link:** [https://leetcode.com/problems/24-game/solutions/5080737/](https://leetcode.com/problems/24-game/solutions/5080737/)

---

# Intuition
To solve this problem, we can use a depth-first search (DFS) approach to try out different combinations of mathematical operations on the given numbers until we find a combination that evaluates to 24.
# Approach
We'll define a DFS function that takes an array of numbers as input. At each step of the DFS, we'll iterate over all possible pairs of numbers and all possible mathematical operations ('+', '-', '*', '/') to generate new arrays of numbers. We'll then recursively call the DFS function with these new arrays until we reach a single number. If any of the resulting numbers is approximately equal to 24 (within a small epsilon value to handle floating-point arithmetic), we'll return true. Otherwise, if we exhaust all possible combinations without finding a valid expression, we'll return false.
# Complexity
- Time complexity:
The time complexity of the DFS algorithm is approximately O(4^n), where n is the number of cards. However, due to the pruning of certain branches of the search tree, the actual time complexity is significantly lower in practice.
- Space complexity:
The space complexity is O(n) for storing the recursive call stack during DFS.
# Code
```
const epsilon = 0.0001;

var judgePoint24 = function(cards) {
    const ops = ['+', '-', '*', '/'];
    
    const dfs = (nums) => {
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24) < epsilon;
        }
        
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    const nextNums = [];
                    for (let k = 0; k < nums.length; k++) {
                        if (k !== i && k !== j) {
                            nextNums.push(nums[k]);
                        }
                    }
                    for (const op of ops) {
                        if ((op === '+' || op === '*') && i > j) {
                            continue;
                        }
                        if (op === '/' && Math.abs(nums[j]) < epsilon) {
                            continue;
                        }
                        if (op === '/' && Math.abs(nums[i] / nums[j] - 24) < epsilon) {
                            return true;
                        }
                        if (dfs([...nextNums, (op === '/' ? nums[i] / nums[j] : (op === '+' ? nums[i] + nums[j] : (op === '-' ? nums[i] - nums[j] : nums[i] * nums[j]))) ])) {
                            return true;
                        }
                    }
                }
            }
        }
        
        return false;
    };
    
    return dfs(cards);
};

```