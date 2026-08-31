# [Java] 3 approaches: BFS (2 ways), Make each row zero

**Author:** shk10
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/1001973/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/1001973/)

---

**BFS (Type 1)**

Think of it as a graph problem where each matrix represents a vertex and a flip operation on each of its indices represents an edge that connects this vertex to a different vertex corresponding to the transformed matrix. Since all edges have unit cost, we can use a BFS to find the shortest path from given matrix to desired matrix (i.e. zero matrix).

Since inputs limits are pretty low, we can use an integer as a bitset to represent the whole matrix.

```
// 2 ms. 74.36%
class Solution {
    private static final int[][] dir = {{-1, 0}, {0, -1}, {0, 0}, {0, 1}, {1, 0}};
    public int minFlips(int[][] mat) {
        int m = mat.length, n = mat[0].length, start = 0;
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                start |= mat[i][j] << (i * n + j);
            }
        }
        if(start == 0) return 0;
        boolean[] visited = new boolean[1 << (m * n)];
        Deque<Integer> Q = new LinkedList<>();
        visited[start] = true;
        Q.add(start);
        int res = 0;
        while(!Q.isEmpty()) {
            res++;
            int size = Q.size();
            while(size-- > 0) {
                int cur = Q.poll();
                for(int i = 0; i < m; i++) {
                    for(int j = 0; j < n; j++) {
                        int next = cur;
                        for(int[] d: dir) {
                            int x = i + d[0], y = j + d[1];
                            if(x >= 0 && x < m && y >= 0 && y < n) {
                                next ^= 1 << (x * n + y);
                            }
                        }
                        if(!visited[next]) {
                            if(next == 0) return res;
                            visited[next] = true;
                            Q.add(next);
                        }
                    }
                }
            }
        }
        return -1;
    }
}
```

Time complexity: O(2<sup>mn</sup> mn)
Space complexity: O(2<sup>mn</sup>)

**BFS (Type 2)**

Note that if we apply a flip operation to an index twice, the values get reverted to their old values (or equivalent to applying no operation). This means that we only need to apply 0 or 1 operation to every index in order to generate all possible matrices. So basically we can iterate over every possible subset of indices and apply 1 flip operation on them and return the subset of minimum size that leads to a zero matrix, if such subset exists. This hints a better way: directly iterate in the order of increasing subset sizes so that first subset that works is the answer. We can implement this idea using a BFS.

```
// 6 ms. 29.74%
class Solution {
    private static final int[][] dir = {{-1, 0}, {0, -1}, {0, 0}, {0, 1}, {1, 0}};
    public int minFlips(int[][] mat) {
        int m = mat.length, n = mat[0].length, start = 0;
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                start |= mat[i][j] << (i * n + j);
            }
        }
        if(start == 0) return 0;
        int[] visited = new int[1 << (m * n)];
        Deque<Integer> Q = new LinkedList<>();
        visited[0] = start;
        Q.add(0);
        int res = 0;
        while(!Q.isEmpty()) {
            res++;
            int size = Q.size();
            while(size-- > 0) {
                int cur = Q.poll();
                for(int i = 0; i < m; i++) {
                    for(int j = 0; j < n; j++) {
                        if((cur & (1 << (i * n + j))) == 0) {
                            int next = cur | (1 << (i * n + j)), state = visited[cur];
                            for(int[] d: dir) {
                                int x = i + d[0], y = j + d[1];
                                if(x >= 0 && x < m && y >= 0 && y < n) {
                                    state ^= 1 << (x * n + y);
                                }
                            }
                            if(state == 0) return res;
                            visited[next] = state;
                            Q.add(next);
                        }
                    }
                }
            }
        }
        return -1;
    }
}
```

Time complexity: O(2<sup>mn</sup> mn)
Space complexity: O(2<sup>mn</sup>)

**Make rows zero one by one**

This code is inspired from @StefanPochmann [post](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/discuss/447012/O(2-mn)). Upvote that post :)
Basically the approach goes like this:
Try all subsets of first row indices and apply flip operations on them.
For each arrangement of first row, all the cells from second row onwards have unique fate i.e. whether a flip operation should be applied on them or not.

- If the previous row upper element i.e. A[i-1][j] is 0, then we can't apply flip operation on current element i.e. A[i][j] (because otherwise there would be no way to make upper element 0 later).
- Similarly, if the previous row upper element i.e. A[i-1][j] is 1, then we must apply flip operation on current element i.e. A[i][j] (because otherwise there would be no way to make upper element 0 later).

This way, we iterate from second row to last row and make the previous row all 0's. The only candidate that we need to check in the end for any remaining 1's is the last row. If that is all 0's too, then we're done otherwise we ignore this branch.

If the number of rows are smaller than columns, then we can simply use this approach on column by column basis to reduce time complexity.

```
// 0 ms. 100%
class Solution {
    private static final int[][] dir = {{-1, 0}, {0, -1}, {0, 0}, {0, 1}, {1, 0}};
    private void flip(int[][] A, int i, int j) {
        for(int[] d: dir) {
            int x = i + d[0], y = j + d[1];
            if(x >= 0 && x < A.length && y >= 0 && y < A[0].length) {
                A[x][y] ^= 1;
            }
        }
    }
    private int helper(int[][] A, int col, int count) {
        if(col < A[0].length) {
            flip(A, 0, col);
            int res = helper(A, col + 1, count + 1);
            flip(A, 0, col);
            return Math.min(res, helper(A, col + 1, count));
        }
        int m = A.length, n = A[0].length;
        int[][] B = new int[m][];
        for(int i = 0; i < m; i++) {
            B[i] = A[i].clone();
        }
        for(int i = 1; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(B[i - 1][j] == 1) {
                    flip(B, i, j);
                    count++;
                }
            }
        }
        for(int j = 0; j < n; j++) {
            if(B[m - 1][j] == 1) return Integer.MAX_VALUE;
        }
        return count;
    }
    public int minFlips(int[][] mat) {
        int res = helper(mat, 0, 0);
        return res == Integer.MAX_VALUE ? -1 : res;
    }
}
```

Time complexity: O(2<sup>min(m,n)</sup> mn)
Space complexity: O(min(m,n)) [I am using additional array B (size = mn) in my code but it is not really needed. We can make this work with just n auxiliary space too.]