# Longest Path in C++, Java & Python

**Author:** cpcs
**Votes:** 29
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3570203/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3570203/)

---

# Intuition
It\u2019s another version of the longest path problem which can be solved by DP.




# Approach
1. Let m and n be the number of rows and columns of the matrix. Create 2 arrays r and c whose lengths are m and n. Initialize them to all 0s. They are the maximum path length of each row or column.
2. Sort all the values in the matrix in non increasing order, for each value v, save all the positions (x, y) of that value in a list (reverse indexed).
3. Loop all the values from largest to smallest, for each v, all the occurrence positions (x, y), save temp[x][y] = max(r[x], c[y]) + 1, this is the longest path starting from that value.
4. Update r[x] = max(r[x], temp[x][y]) and c[y] = max(c[y], temp[x][y]) for all the above (x, y)s. This is to update the longest path for each row and column. Also note this step should be done after step 3 is fully complete.
5. The maximum value in arrays r and c is the final answer.




# Complexity




- Time complexity:
O(m * n * log(m * n))


- Space complexity:
O(m * n)


# Code


C++
```
class Solution {
public:
    int maxIncreasingCells(vector<vector<int>>& mat) {
        const int m = mat.size(), n = mat[0].size();
        vector<int> r(m), c(n);
        unordered_map<int, vector<vector<int>>> vmap;
        vector<vector<int>> temp(m, vector<int>(n));
        set<int> s;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                vmap[-mat[i][j]].push_back({i, j});
                s.insert(-mat[i][j]);
            }
            
        }
        for (int x : s) {
            for (const auto& v : vmap[x]) {
                temp[v[0]][v[1]] = max(r[v[0]], c[v[1]]) + 1;
            }
            for (const auto& v : vmap[x]) {
                r[v[0]] = max(r[v[0]], temp[v[0]][v[1]]);
                c[v[1]] = max(c[v[1]], temp[v[0]][v[1]]);
            }   
        }
        return max(*max_element(r.begin(), r.end()), *max_element(c.begin(), c.end()));
        
    }
};
     
```


Java:
```
class Solution {
    public int maxIncreasingCells(int[][] mat) {
        final int m = mat.length, n = mat[0].length;
        int[] r = new int[m], c = new int[n];
        Map<Integer, List<int[]>> vmap = new HashMap<>();
        int[][] temp = new int[m][n];
        Set<Integer> s = new TreeSet<>();
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                vmap.computeIfAbsent(-mat[i][j], k->new ArrayList<>()).add(new int[]{i,j});
                s.add(-mat[i][j]);
            }
            
        }
        for (Integer x : s) {
            for (int[] v : vmap.get(x)) {
                temp[v[0]][v[1]] = Math.max(r[v[0]], c[v[1]]) + 1;
            }
            for (int[] v : vmap.get(x)) {
                r[v[0]] = Math.max(r[v[0]], temp[v[0]][v[1]]);
                c[v[1]] = Math.max(c[v[1]], temp[v[0]][v[1]]);
            }   
        }
        int ans = Integer.MIN_VALUE;
        for (int x : r) {
            ans = Math.max(ans, x);
        }
        for (int x : c) {
            ans = Math.max(ans, x);
        }
        return ans;
    }
}
```


Python3:
```
 class Solution:
    def maxIncreasingCells(self, mat: List[List[int]]) -> int:
        m, n = len(mat), len(mat[0])
        r, c = [0] * m, [0] * n
        vmap = {}
        from sortedcontainers import SortedSet
        s = SortedSet()
        for i in range(0, m):
            for j in range(0, n):
                if not -mat[i][j] in vmap:
                    vmap[-mat[i][j]] = []
                vmap[-mat[i][j]].append([i, j])
                s.add(-mat[i][j])
        temp = [[0] * n for _ in range(m)]
        for x in s:
            for v in vmap.get(x):
                temp[v[0]][v[1]] = max(r[v[0]], c[v[1]]) + 1
            for v in vmap.get(x):
                r[v[0]] = max(r[v[0]], temp[v[0]][v[1]])
                c[v[1]] = max(c[v[1]], temp[v[0]][v[1]])
        return max(max(r), max(c))
             
```

