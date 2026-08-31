# BFS c solution

**Author:** nameldi
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3892991/](https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3892991/)

---

```
#define Q_SIZE 32768

void EnQueue(int* q, int* wIdx, int r, int c, int second){
    q[(*wIdx)++] = r<<24 | c<<16 | second;
    *wIdx %= Q_SIZE;
}

void DeQueue(int* q, int* rIdx, int* r, int* c, int* s){
    int data = q[(*rIdx)++];
    *rIdx %= Q_SIZE;
    *r = data >> 24;
    *c = (data >> 16) & 0xFF;
    *s = data & 0xFFFF;
}

int minimumSeconds(char *** land, int landSize, int* landColSize){
    int** memo = (int**)calloc(landSize, sizeof(int*));
    int* queue = (int*)calloc(Q_SIZE, sizeof(int));
    int wIdx = 0, rIdx = 0;
    int rSrc, cSrc, rDst, cDst;
    for(int i = 0; i < landSize; i++){
        memo[i] = (int*)calloc(landColSize[i], sizeof(int));
        for(int j = 0; j < landColSize[i]; j++){
            if(land[i][j][0] == '*'){
                EnQueue(queue, &wIdx, i, j, 2);/* put '*' into queue */
                memo[i][j] = 1;
            } else if(land[i][j][0] == 'S'){ /* record S position */
                rSrc = i;
                cSrc = j;
            } else if(land[i][j][0] == 'D'){ /* record D position */
                rDst = i;
                cDst = j;
                memo[i][j] = -1;
            } else if(land[i][j][0] == 'X'){/* stone set -1 */
                memo[i][j] = -1;
            }
        }
    }
    /* BSF for water to calculate step to destionation */
    int rr, cc, sec;
    int rowDir[4] = {0, 1, -1, 0};
    int colDir[4] = {1, 0, 0, -1};
    while(rIdx != wIdx){
        DeQueue(queue, &rIdx, &rr, &cc, &sec);
        for(int i = 0; i < 4; i++){
            int c = cc + colDir[i], r = rr + rowDir[i];
            if(r < 0 || r >= landSize || c < 0 || c >= landColSize[r] || memo[r][c] == -1)
                continue;
            if(memo[r][c] && memo[r][c] <= sec)
                continue;
            memo[r][c] = sec;
            EnQueue(queue, &wIdx, r, c, sec + 1);
        }
    }
    /* BSF for start to calculate step to destionation */  
    memo[rDst][cDst] = 0;/* D */
    memo[rSrc][cSrc] = 1;   /* S */
    EnQueue(queue, &wIdx, rSrc, cSrc, 2);
    while(rIdx != wIdx){
        DeQueue(queue, &rIdx, &rr, &cc, &sec);
        for(int i = 0; i < 4; i++){
            int c = cc + colDir[i], r = rr + rowDir[i];
            if(r < 0 || r >= landSize || c < 0 || c >= landColSize[r] || memo[r][c] == -1)
                continue;
            if(memo[r][c] && memo[r][c] <= sec)
                continue;
            memo[r][c] = sec;
            EnQueue(queue, &wIdx, r, c, sec + 1);
        }
    }  
    /* if memo[rDst][cDst] == 0, means dest is blocked by water */
    return memo[rDst][cDst] - 1;
}
```