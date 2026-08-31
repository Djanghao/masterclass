# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 12
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2989456/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2989456/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.
\uD83D\uDD35 Check out [Screencast](https://www.youtube.com/watch?v=JTA_WgDqx8o&list=PLBu4Bche1aEWMj1TdpymXbD8Tn8xKVYwj&index=3) if you are interested.

---

# Intuition
Compare two characters in adjacent row in the same column to see if they are sorted, we can delete that column if they are not sorted.

# Approach
Brute Force. First we iterate the columns, then iterate the rows. If the character in the previous row is greater than the character in the current row, then we can delete this column. 

# Complexity
- Time complexity: $$O(n * m)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
public:
    int minDeletionSize(vector<string>& s) {
        int ans = 0;
        // iterate cols
        for (int col = 0; col < s[0].size(); col++) {
            // iterate rows
            for (int row = 1; row < s.size(); row++) {
                // if the character in the previous row is greater than the character in the current row
                // then we can delete this column
                if (s[row - 1][col] > s[row][col]) {
                    ans += 1;
                    break;
                }
            }
        }
        return ans;
    }
};
```