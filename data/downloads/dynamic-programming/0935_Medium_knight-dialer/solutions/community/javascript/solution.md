# ✅ Beats 100% - Explained with [ Video ] - Memorization - Visualized Too

**Author:** lancertech6
**Votes:** 87
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4333888/](https://leetcode.com/problems/knight-dialer/solutions/4333888/)

---

![Screenshot 2023-11-27 085658.png](./images/0.png)

<!-- # YouTube Video Explanation:

[https://youtu.be/srgbxqoIqpw](https://youtu.be/srgbxqoIqpw)

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 500 Subscribers*
*Current Subscribers: 453*

--- -->

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is essentially asking for the number of distinct phone numbers of length `n` that can be dialed using a chess knight's movements on a phone pad. We need to find a recursive solution to calculate the count while considering the possible moves of the knight.

# Approach
<!-- Describe your approach to solving the problem. -->
- Create a 2D array `MOVES` to represent the possible moves for each digit on the phone pad.
- Use a recursive function `knightDialer` to calculate the count of distinct phone numbers.
- Use a cache (`cache` array) to store previously computed results for optimization.
- If `remaining` is 1, return the length of `nextNumbers`, indicating that the knight can be placed on any of the available numbers.
- Otherwise, iterate through each number in `nextNumbers` and recursively calculate the count for the remaining moves (`remaining - 1`) using the possible moves for the current number.
- Update the cache with the calculated result and return the total count.

# Complexity
- Time Complexity: `O(n * 10)` where `n` is the given input. This is because for each digit, there are at most 10 possible next moves, and the recursion is performed for each remaining move.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space Complexity: `O(n * 10)` for the cache array, as it stores intermediate results for optimization. The recursion stack also contributes to the space complexity.

# Code
```java []
class Solution {
    static final int mod = (int) 1e9 + 7;
    static final int[][] MOVES = {
            /*0*/ {4, 6},
            /*1*/ {6, 8},
            /*2*/ {7, 9},
            /*3*/ {4, 8},
            /*4*/ {0, 3, 9},
            /*5*/ {},
            /*6*/ {0, 1, 7},
            /*7*/ {2, 6},
            /*8*/ {1, 3},
            /*9*/ {2, 4}
    };
    static final int[][] cache = new int[5001][10];
     
    public int knightDialer(int n) {
        return knightDialer(n, new int[]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9});
    }

    int knightDialer(int remaining, int[] nextNumbers) {
        if (remaining == 1) return nextNumbers.length;
        int count = 0;

        for (int nextNumber : nextNumbers) {
            int cur = cache[remaining][nextNumber];
            if (cur == 0) {
                cur = knightDialer(remaining - 1, MOVES[nextNumber]);
                cache[remaining][nextNumber] = cur;
            }
            count += cur;
            count %= mod;
        }
        return count;
    }
} 
```
```C++ []
class Solution {
public:
    static const int mod = 1e9 + 7;
    vector<vector<int>> MOVES = {
    {4, 6},
    {8, 6},
    {7, 9},
    {4, 8},
    {3, 9, 0},
    {},
    {0, 1, 7},
    {2, 6},
    {1, 3},
    {2, 4},
};

    int cache[5001][10];

    int knightDialer(int n) {
        vector<int> nextNumbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
        return knightDialer(n, nextNumbers);
    }

    int knightDialer(int remaining, vector<int>& nextNumbers) {
        if (remaining == 1)
            return nextNumbers.size();

        int count = 0;
        for (int nextNumber : nextNumbers) {
            int cur = cache[remaining][nextNumber];
            if (cur == 0) {
                cur = knightDialer(remaining - 1, MOVES[nextNumber]);
                cache[remaining][nextNumber] = cur;
            }
            count += cur;
            count %= mod;
        }
        return count;
    }
};
```
```Python []
class Solution(object):
    mod = 10**9 + 7
    MOVES = [
        [4, 6],
        [6, 8],
        [7, 9],
        [4, 8],
        [0, 3, 9],
        [],
        [0, 1, 7],
        [2, 6],
        [1, 3],
        [2, 4]
    ]

    def __init__(self):
        self.cache = [[0] * 10 for _ in range(5001)]

    def knightDialer(self, n):
        next_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        return self.knightDialerRecursive(n, next_numbers)

    def knightDialerRecursive(self, remaining, next_numbers):
        if remaining == 1:
            return len(next_numbers)

        count = 0
        for next_number in next_numbers:
            cur = self.cache[remaining][next_number]
            if cur == 0:
                cur = self.knightDialerRecursive(remaining - 1, self.MOVES[next_number])
                self.cache[remaining][next_number] = cur
            count += cur
            count %= self.mod

        return count
        
```
```JavaScript []
/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
    const cap = (x) => x % (10 ** 9 + 7)
    const jumps = {
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [3, 9, 0],
        6: [1, 7, 0],
        7: [2,6],
        8: [1, 3],
        9: [2, 4],
        0: [4, 6]
    }

    let prev = Array.from(Array(10), _=>1)
    let cur = Array.from(Array(10), _=>0)

    for (let k=2; k<=n; k++) {
        for (let i=0; i<=9; i++) {
            if (i===5) continue
            cur[i] = cap(jumps[i].reduce((acc, c)=> {
                return cap(acc + prev[c])
            }, 0))
        }
        prev = [...cur]
    }
    const sum = prev.reduce((acc, cur)=>cap(acc+cur), 0)
    return cap(sum)
};

```
---
<!-- ![upvote1.jpeg](./images/1.jpeg) -->
