# Segment tree easy implementation | C++ | Segment Tree

**Author:** B_Rabbit007
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5651132/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5651132/)

---

# Intuition
Solved this problem's easy contraints varient in ```O(n^3)``` time complexity. So had to think about some optimised solution in ```O(n^2 * logn)``` order for this one.

# Approach
Since I figured out that we need to track only 3 greatest elements in each row. Hence stored their indices in ```idx``` vector for each row.
Then brute forced in ```O(n^2)``` to get first 2 cells and implemented segment tree to get third cell in ```O(logn)``` time.


# Brute Force Solution (Easy contraints)
```
class Solution {
public:
    long long maximumValueSum(vector<vector<int>>& board) {
        int n = board.size(), m = board[0].size();

        // storing indices of three greatest elements in each row
        vector<vector<int> > idx(n, vector<int> (3, -1));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                for (int k = 0; k < 3; k++) {
                    if (idx[i][k] == -1 || board[i][idx[i][k]] <= board[i][j]) {
                        for (int l = 2; l > k; l--) {
                            idx[i][l] = idx[i][l - 1];
                        }
                        idx[i][k] = j;
                        break;
                    }
                }
            }
        }

        long long ans = LLONG_MIN;
        for (int i = 0; i < n - 2; i++) {
            // selecting first cell
            for (int k1 : idx[i]) {
                for (int j = i + 1; j < n - 1; j++) {
                    for (int k2 : idx[j]) {
                        // selecting second cell
                        if (k2 != k1) {
                            for (int l = j + 1; l < n; l++) {
                                for (int k3 : idx[l]) {
                                    // selecting third cell
                                    if (k3 != k1 && k3 != k2) {
                                        ans = max(ans, board[i][k1] + 0LL + board[j][k2] + board[l][k3]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return ans;
    }
};
```


# Complexity
- Time complexity: ```O(N * N * N)```

- Space complexity: ```O(3 * N)```


# Implementation with Segment tree
```
class Solution {
    class seg {
        public:
        vector<int> tree;
        
        int build(int node, int l, int r, vector<int> &a) {
            if (l == r) {
                return tree[node] = a[l];
            }
            int m = l + r >> 1;
            return tree[node] = max(build(node + 1, l, m, a), build(node + (r - l + 2) / 2 * 2, m + 1, r, a));
        }

        int query(int node, int l, int r, int lo, int hi) {
            if (l > hi || lo > r) {
                return INT_MIN;
            }
            if (l >= lo && r <= hi) {
                return tree[node];
            }
            int m = l + r >> 1;
            return max(query(node + 1, l, m, lo, hi), query(node + (r - l + 2) / 2 * 2, m + 1, r, lo, hi));
        }
    };
public:
    long long maximumValueSum(vector<vector<int>>& board) {
        int n = board.size(), m = board[0].size();

        // storing indices of three greatest elements in each row
        vector<vector<int> > idx(n, vector<int> (3, -1));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                for (int k = 0; k < 3; k++) {
                    if (idx[i][k] == -1 || board[i][idx[i][k]] <= board[i][j]) {
                        for (int l = 2; l > k; l--) {
                            idx[i][l] = idx[i][l - 1];
                        }
                        idx[i][k] = j;
                        break;
                    }
                }
            }
        }

        // building segment tree for each row from last row
        vector<seg> SEG(n);
        vector<int> mx(m, INT_MIN);
        for (int i = n - 1; i > 0; i--) {
            for (int j = 0; j < m; j++) {
                mx[j] = max(board[i][j], mx[j]);
            }
            SEG[i].tree.resize(2 * m - 1);
            SEG[i].build(0, 0, m - 1, mx);
        }

        long long ans = LLONG_MIN;
        for (int i = 0; i < n - 2; i++) {
            for (int k1 : idx[i]) {             // first cell selected
                for (int j = i + 1; j < n - 1; j++) {
                    for (int k2 : idx[j]) {
                        if (k2 != k1) {         // second cell selected
                            int l = k1, r = k2;
                            if (l > r) {
                                swap(l, r);
                            }

                            // using segment tree to query for third cell
                            int plus = INT_MIN;
                            if (l > 0) {
                                plus = max(plus, SEG[j + 1].query(0, 0, m - 1, 0, l - 1));
                            }
                            if (r < m - 1) {
                                plus = max(plus, SEG[j + 1].query(0, 0, m - 1, r + 1, m - 1));
                            }
                            if (l + 1 < r) {
                                plus = max(plus, SEG[j + 1].query(0, 0, m - 1, l + 1, r - 1));
                            }
                            ans = max(ans, board[i][k1] + 0LL + board[j][k2] + plus);
                        }
                    }
                }
            }
        }

        return ans;
    }
};
```

# Complexity
- Time complexity: ```O(N * N * logN)```

- Space complexity: ```O(2 * N * N)```


Feel free to ask if you have any queries :)