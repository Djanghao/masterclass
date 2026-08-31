# JS, Python, Java, C++ | Easy DP Solution w/ Explanation

**Author:** sgallivan
**Votes:** 75
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/1264516/](https://leetcode.com/problems/stone-game-vii/solutions/1264516/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Like most of the Stone Game problems, this one boils down to a system of ever-repeating subproblems, as the there are many different ways to get to the same board condition as we move towards the end of the game. This naturally points to a **dynamic programming** (**DP**) solution.

In order to represent the different board positions, we'd normally build an **N * N** DP matrix where **N** is the length of the stones array (**S**). In this DP array, **dp[i][j]** would represent the best score difference with **i** representing the leftmost remaining stone's index and **j** representing the rightmost remaining stone's index.

We'll start at **i = N - 2** and iterate backwards and start each nested **for** loop at **j = i + 1**. This ensures that we're building the pyramid of DP results downward, always starting each row with **i** and **j** next to each other.

For each row, we'll keep track of the sum **total** of the stones in the range **[i,j]** by adding **S[j]** at each iteration of **j**. Then, we can represent the current player's ideal play by choosing the best value between picking the stone at **i** (**total - S[i]**) and picking the stone at **j** (**total - S[j]**). For each option, we have to also subtract the best value that the other player will get from the resulting board position (**dp[i+1][j]** or **dp[i][j-1]**).

Since we will only be building off the cells to the left and above the current cell, however, we can actually eliminate the DP matrix and instead just one array representing the current row, reusing it each time. This will drop the **space complexity** from **O(N^2)** to **O(N)**.

This approach works because, when evaluating a new cell, the cell to the left will already have been overwritten and will accurately represent the previous cell on the same row. The not-yet-overwritten current cell value still represents the cell that would have been in the row above in a full DP matrix.

At the end, the solution will be the value stored in the DP array representing the board position with all stones present. We should therefore **return dp[N-1]**.

 - _**Time Complexity: O(N^2)** where **N** is the length of **S**_
 - _**Space Complexity: O(N)** for **dp**_

---

#### ***Javascript Code:***

The best result for the code below is **108ms / 37.9MB** (beats 100% / 100%).
```javascript
var stoneGameVII = function(S) {
    let N = S.length, dp = new Uint32Array(N)
    for (let i = N - 2; ~i; i--) {
        let total = S[i]
        for (let j = i + 1; j < N; j++) {
            total += S[j]
            dp[j] = Math.max(total - S[i] - dp[j], total - S[j] - dp[j-1])
        }
    }
    return dp[N-1]
};
```

---

#### ***Python Code:***

The best result for the code below is **2668ms / 14.3MB** (beats 97% / 99%).
```python
class Solution:
    def stoneGameVII(self, S: List[int]) -> int:
        N, dp = len(S), [0] * len(S)
        for i in range(N - 2, -1, -1):
            total = S[i]
            for j in range(i + 1, N):
                total += S[j]
                dp[j] = max(total - S[i] - dp[j], total - S[j] - dp[j-1])
        return dp[-1]
```

---

#### ***Java Code:***

The best result for the code below is **16ms / 38.2MB** (beats 100% / 99%).
```java
class Solution {
    public int stoneGameVII(int[] S) {
        int N = S.length;
        int[] dp = new int[N];
        for (int i = N - 2; i >= 0; i--) {
            int total = S[i];
            for (int j = i + 1; j < N; j++) {
                total += S[j];
                dp[j] = Math.max(total - S[i] - dp[j], total - S[j] - dp[j-1]);
            }
        }
        return dp[N-1];
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **124ms / 9.9MB** (beats 96% / 100%).
```c++
class Solution {
public:
    int stoneGameVII(vector<int>& S) {
        int N = S.size();
        vector<int> dp(N);
        for (int i = N - 2; ~i; i--) {
            int total = S[i];
            for (int j = i + 1; j < N; j++) {
                total += S[j];
                dp[j] = max(total - S[i] - dp[j], total - S[j] - dp[j-1]);
            }
        }
        return dp[N-1];
    }
};
```