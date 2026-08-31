# Beat 100% users in Time complexity and Space Complexity - Easy Approach

**Author:** Nabeel7801
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5651450/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5651450/)

---

# Approach
Brute Force with selected sorted columns. For Each rows I have pre-calculated the top 3 sorted cells. 

Finally I am iterating over all possible Combinations of Rows.

# Complexity
- Time complexity:
O(M x N x 3! x 3)

- Space complexity:
O(M x N)

# Code

```Javascript []
var maximumValueSum = function(board) {

    const m = board.length;
    const n = board[0].length;

    const sortedRows = Array.from({ length: m });
    for (let i = 0; i < m; i++) {
        const sortedCol = [];
        for (let j = 0; j < n; j++) {
            sortedCol.push([j, board[i][j]])
        }
        sortedCol.sort((a, b) => b[1] - a[1]);
        sortedRows[i] = sortedCol.slice(0, 3);
    }

    function getMaxSumForRows(row) {
        let maxSum = -Infinity;

        const dfs = (sum, usedCols, k) => {
            if (k === 3) {
                if (sum > maxSum) {
                    maxSum = sum;
                }
                return;
            };

            for (const sortVal of sortedRows[row[k]]) {
                const [idx, val] = sortVal;
                if (!usedCols.includes(idx)) {
                    dfs(sum+val, [...usedCols, idx], k+1);
                }
            }

        }

        dfs(0, [], 0);
        return maxSum;
    }

    let maxSum = -Infinity;
    for (let r1 = 0; r1 < m - 2; r1++) {
        for (let r2 = r1 + 1; r2 < m - 1; r2++) {
            for (let r3 = r2 + 1; r3 < m; r3++) {
                maxSum = Math.max(maxSum, getMaxSumForRows([r1, r2, r3]));
            }
        }
    }

    return maxSum;
};
```

```Python []
def maximum_value_sum(board):
    m = len(board)
    n = len(board[0])

    sorted_rows = []
    for i in range(m):
        sorted_col = []
        for j in range(n):
            sorted_col.append((j, board[i][j]))
        sorted_col.sort(key=lambda x: x[1], reverse=True)
        sorted_rows.append(sorted_col[:3])

    def get_max_sum_for_rows(row):
        max_sum = float('-inf')

        def dfs(current_sum, used_cols, k):
            nonlocal max_sum
            if k == 3:
                if current_sum > max_sum:
                    max_sum = current_sum
                return

            for idx, val in sorted_rows[row[k]]:
                if idx not in used_cols:
                    dfs(current_sum + val, used_cols + [idx], k + 1)

        dfs(0, [], 0)
        return max_sum

    max_sum = float('-inf')
    for r1 in range(m - 2):
        for r2 in range(r1 + 1, m - 1):
            for r3 in range(r2 + 1, m):
                max_sum = max(max_sum, get_max_sum_for_rows([r1, r2, r3]))

    return max_sum

```

```C++ []
#include <vector>
#include <algorithm>
#include <climits>

int maximumValueSum(std::vector<std::vector<int>>& board) {
    int m = board.size();
    int n = board[0].size();

    std::vector<std::vector<std::pair<int, int>>> sortedRows(m);
    for (int i = 0; i < m; ++i) {
        std::vector<std::pair<int, int>> sortedCol;
        for (int j = 0; j < n; ++j) {
            sortedCol.emplace_back(j, board[i][j]);
        }
        std::sort(sortedCol.begin(), sortedCol.end(), [](const auto& a, const auto& b) {
            return a.second > b.second;
        });
        sortedRows[i] = std::vector<std::pair<int, int>>(sortedCol.begin(), sortedCol.begin() + 3);
    }

    auto getMaxSumForRows = [&](const std::vector<int>& row) {
        int maxSum = INT_MIN;

        std::function<void(int, std::vector<int>, int)> dfs = [&](int sum, std::vector<int> usedCols, int k) {
            if (k == 3) {
                maxSum = std::max(maxSum, sum);
                return;
            }

            for (const auto& sortVal : sortedRows[row[k]]) {
                int idx = sortVal.first;
                int val = sortVal.second;
                if (std::find(usedCols.begin(), usedCols.end(), idx) == usedCols.end()) {
                    usedCols.push_back(idx);
                    dfs(sum + val, usedCols, k + 1);
                    usedCols.pop_back();
                }
            }
        };

        dfs(0, {}, 0);
        return maxSum;
    };

    int maxSum = INT_MIN;
    for (int r1 = 0; r1 < m - 2; ++r1) {
        for (int r2 = r1 + 1; r2 < m - 1; ++r2) {
            for (int r3 = r2 + 1; r3 < m; ++r3) {
                maxSum = std::max(maxSum, getMaxSumForRows({r1, r2, r3}));
            }
        }
    }

    return maxSum;
}

```

```Java []
import java.util.*;

public class MaxValueSum {
    public static int maximumValueSum(int[][] board) {
        int m = board.length;
        int n = board[0].length;

        List<int[]>[] sortedRows = new ArrayList[m];
        for (int i = 0; i < m; i++) {
            List<int[]> sortedCol = new ArrayList<>();
            for (int j = 0; j < n; j++) {
                sortedCol.add(new int[]{j, board[i][j]});
            }
            sortedCol.sort((a, b) -> Integer.compare(b[1], a[1]));
            sortedRows[i] = sortedCol.subList(0, 3);
        }

        int getMaxSumForRows(int[] row) {
            final int[] maxSum = {Integer.MIN_VALUE};

            void dfs(int sum, Set<Integer> usedCols, int k) {
                if (k == 3) {
                    maxSum[0] = Math.max(maxSum[0], sum);
                    return;
                }

                for (int[] sortVal : sortedRows[row[k]]) {
                    int idx = sortVal[0];
                    int val = sortVal[1];
                    if (!usedCols.contains(idx)) {
                        usedCols.add(idx);
                        dfs(sum + val, usedCols, k + 1);
                        usedCols.remove(idx);
                    }
                }
            }

            dfs(0, new HashSet<>(), 0);
            return maxSum[0];
        }

        int maxSum = Integer.MIN_VALUE;
        for (int r1 = 0; r1 < m - 2; r1++) {
            for (int r2 = r1 + 1; r2 < m - 1; r2++) {
                for (int r3 = r2 + 1; r3 < m; r3++) {
                    maxSum = Math.max(maxSum, getMaxSumForRows(new int[]{r1, r2, r3}));
                }
            }
        }

        return maxSum;
    }
}

```
