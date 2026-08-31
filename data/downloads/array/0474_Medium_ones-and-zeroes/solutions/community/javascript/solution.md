# JS, Python, Java, C++ | Easy DP Knapsack Solution w/ Explanation

**Author:** sgallivan
**Votes:** 127
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/1138695/](https://leetcode.com/problems/ones-and-zeroes/solutions/1138695/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem is a variation on the **0-1 Knapsack Problem** with a wrinkle: each item has a 2-dimensional weight, but a constant value. If we were to naively attempt every single permutation of up to **600** strings, that would be **2^600** permutations.

But thankfully we're not tasked with keeping track of each permutation, but simply the maximum number of items. This calls for the use of **dynamic programming** (**DP**) to reduce the overall complexity by instead only keeping track of the best results of the various subproblems encountered while working our way to the eventual answer.

For our DP array (**dp**), **dp[i][j]** will represent the largest number of items that can be added to yield **i** zeros and **j** ones. Thus, our answer will ultimately be **dp[M][N]**. We'll naturally being doing a bottom-up DP approach, as we'll be starting with no data and iterating through the input array (**S**), adding more data to **dp** as we go.

Since each string in **S** will require us to iterate through the entirety of **dp** looking for data to update, we'll need to do this iteration in a top-down fashion, to avoid interfering with our overall bottom-up approach, which would occur if we were to update entries that will be the basis for later updates in the same pass.

Once we reach the end, we return **dp[M][N]**.


---

#### ***Implementation:***

As each entry in dp will be in the range **[0,200]** based on the constraints for **M** and **N**, we have the option of using an **8-bit** number storage array for the purpose.

Python has other, faster solutions, but this is one of the easiest, and mirrors the solutions in the other languages.

---

#### ***Javascript Code:***

The best result for the code below is **104ms / 39.2MB** (beats 99% / 100%).
```javascript
var findMaxForm = function(S, M, N) {
    let dp = Array.from({length:M+1},() => new Uint8Array(N+1))
    for (let i = 0; i < S.length; i++) {
        let str = S[i], zeros = 0, ones = 0
        for (let j = 0; j < str.length; j++)
            str.charAt(j) === "0" ? zeros++ : ones++
        for (let j = M; j >= zeros; j--)
            for (let k = N; k >= ones; k--)
                dp[j][k] = Math.max(dp[j][k], dp[j-zeros][k-ones] + 1)
    }
    return dp[M][N]
};
```

---

#### ***Python Code:***

The best result for the code below is **3228ms / 14.2MB** (beats 76% / 100%).
```python
class Solution:
    def findMaxForm(self, S: List[str], M: int, N: int) -> int:
        dp = [[0 for _ in range(N+1)] for _ in range(M+1)]
        for str in S:
            zeros = str.count("0")
            ones = len(str) - zeros
            for i in range(M, zeros - 1, -1):
                for j in range(N, ones - 1, -1):
                    dp[i][j] = max(dp[i][j], dp[i-zeros][j-ones] + 1)
        return dp[M][N]
```

---

#### ***Java Code:***

The best result for the code below is **31ms / 37.9MB** (beats 98% / 97%).
```java
class Solution {
    public int findMaxForm(String[] S, int M, int N) {
        int[][] dp = new int[M+1][N+1];
        for (String str : S) {
            int zeros = 0, ones = 0;
            for (char c : str.toCharArray())
                if (c == '0') zeros++;
                else ones++;
            for (int i = M; i >= zeros; i--)
                for (int j = N; j >= ones; j--)
                    dp[i][j] = Math.max(dp[i][j], dp[i-zeros][j-ones] + 1);
        }
        return dp[M][N];
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **32ms / 8.5MB** (beats 100% / 100%).
```c++
class Solution {
public:
    int findMaxForm(vector<string>& S, int M, int N) {
        int dp[101][101]{0};
        for (string str : S) {
            int zeros = 0, ones = 0;
            for (char c : str)
                c == '0' ? zeros++ : ones++;
            for (int i = M; i >= zeros; i--)
                for (int j = N; j >= ones; j--)
                    dp[i][j] = max(dp[i][j], dp[i-zeros][j-ones] + 1);
        }
        return dp[M][N];
    }
};
```