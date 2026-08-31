# [Java] [90ms] Without Union Find

**Author:** hydro_0
**Votes:** 21
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/909962/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/909962/)

---

Algorithm:
1. Build a map, where key is some number in a matrix and value is a list of cells that have this value.
2. For each value find all the graphs of connected cells(have the same row or column) and calculate their rank.
	* 	 The rank of the cell is the maximum rank in row or column it belongs to plus one.
	* 	 The rank of the graph of connected cells is the maximum rank among them.

```java
class Solution {
    public int[][] matrixRankTransform(int[][] m) {
        int M = m.length, N = m[0].length;
        int[][] a = new int[M][N];
        int[] maxRankRow = new int[M];
        int[] maxRankCol = new int[N];
        TreeMap<Integer, List<int[]>> map = new TreeMap<>();
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                map.putIfAbsent(m[i][j], new ArrayList<>());
                map.get(m[i][j]).add(new int[] { i, j });
            }
        }
        
        // go from the lowest value key to the highest
        for (int k : map.keySet()) {
            // repeat for each value until we used all cells with the same number
            // on each step we find cells connected by row/column and calculate their rank
            while (map.get(k).size() > 0) {
                Set<Integer> rowsUsed = new HashSet<>();
                Set<Integer> colsUsed = new HashSet<>();
                List<int[]> allSame = map.get(k);
                
                // get the first cell as the root and find all connected cells
                int[] root = allSame.get(0);
                rowsUsed.add(root[0]);
                colsUsed.add(root[1]);
                boolean[] used = new boolean[allSame.size()];
                used[0] = true;
                // continue until we found all connected 
                while (true) {
                    int added = 0;
                    for (int i = 1; i < allSame.size(); i++) {
                        int[] n = allSame.get(i);
                        if (used[i]) continue;
						// if the cell is in the same row or column with the root or any one that is already connected with the root
                        if (rowsUsed.contains(n[0]) || colsUsed.contains(n[1])) {
                            rowsUsed.add(n[0]);
                            colsUsed.add(n[1]);
                            used[i] = true;
                            added++;
                        }
                    }
                    if (added == 0) break;
                }
                List<int[]> connected = new ArrayList<>();
                List<int[]> left = new ArrayList<>();
                for (int i = 0; i < allSame.size(); i++) {
                    if (used[i]) connected.add(allSame.get(i));
                    else left.add(allSame.get(i));
                }
                // put all that are not connected back to the map
                map.put(k, left);

                int rank = Integer.MIN_VALUE;
                
                // calculate the maximum rank of all connected cells
                for (int[] n : connected) {
                    rank = Math.max(rank, Math.max(maxRankRow[n[0]], maxRankCol[n[1]]) + 1);
                }
                // update maxRank for all cols and rows and set the rank as answer for each connected cell
                for (int[] n : connected) {
                    maxRankRow[n[0]] = maxRankCol[n[1]] = rank;
                    a[n[0]][n[1]] = rank;
                }
            }
        }
        return a;
    }
}
```