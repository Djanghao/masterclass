# DFS c solution

**Author:** nameldi
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-remoteness-of-all-cells/solutions/4043068/](https://leetcode.com/problems/sum-of-remoteness-of-all-cells/solutions/4043068/)

---

O(N*N)
blockCnt: count how many cell connected
blockSum: sum of the connected cell value
```
typedef struct{
    int blockCnt;
    long long blockSum;
} QUEUE;

void DFS(int** grid, int rlen, int clen, int r, int c, int* qIdx, QUEUE* q){
    if(r<0 || c<0 || r>=rlen || c>=clen || grid[r][c] == -1)
        return;
    q[*qIdx].blockCnt++;
    q[*qIdx].blockSum += grid[r][c];
    grid[r][c] = -1; /* set -1 means visited */
    DFS(grid, rlen, clen, r+1, c, qIdx, q);
    DFS(grid, rlen, clen, r, c+1, qIdx, q);
    DFS(grid, rlen, clen, r-1, c, qIdx, q);
    DFS(grid, rlen, clen, r, c-1, qIdx, q);
}

long long sumRemoteness(int** grid, int gridSize, int* gridColSize) {
    int rlen = gridSize, clen = *gridColSize, qIdx = 0;
    int totalBlock = 0;
    long long totalSum = 0, ans = 0;
    QUEUE* q = (QUEUE*)calloc(rlen*clen, sizeof(QUEUE));
    for(int i = 0; i < rlen; i++){
        for(int j = 0; j < clen; j++){
            if(grid[i][j] != -1){
                DFS(grid, rlen, clen, i, j, &qIdx, q);
                totalSum += q[qIdx].blockSum;
                qIdx++;
            }
        }
    }
    
    for(int i = 0; i < qIdx; i++){
        ans += (q[i].blockCnt * (totalSum - q[i].blockSum));
    }
    return ans;
}
```