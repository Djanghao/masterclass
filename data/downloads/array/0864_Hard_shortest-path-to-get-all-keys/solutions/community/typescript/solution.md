# Typescript beats 100% 80% BFS Simple solution

**Author:** tony3502
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3699263/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3699263/)

---

# Code
```
function shortestPathAllKeys(grid: string[]): number {
    let start;
    const sample=0;
    let ansKey = sample;
    let memo=new Array(grid.length);
    const anum='a'.charCodeAt(0);
    const znum='z'.charCodeAt(0);
    const Anum='A'.charCodeAt(0);
    const Znum='Z'.charCodeAt(0);

    for(let i=0;i<grid.length;i++){
        memo[i]=new Array(grid[0].length)
        for(let j=0;j<grid[i].length;j++){
            memo[i][j]={};
            if(grid[i][j]==='@')start=[i,j];
            if(grid[i].charCodeAt(j)>=anum&&grid[i].charCodeAt(j)<=znum){
                ansKey =(ansKey|(1<<(grid[i].charCodeAt(j)-anum+1)));
            }
        }   
    }

    let queue=[[start,sample]];
    let level=-1;
    while(queue.length>0){
        let nextQueue=[];
        level++;
        while(queue.length>0){

            let cur = queue.pop();
            let row = cur[0][0];
            let col = cur[0][1];
            let now = cur[1];

            if(row>=grid.length||row<0)continue;
            if(col>=grid[0].length||col<0)continue;
            if(grid[row][col]==='#')continue;
            if(memo[row][col][now])continue;

            if(grid[row].charCodeAt(col)>=Anum&&grid[row].charCodeAt(col)<=Znum){
                if((now&(1<<(grid[row].charCodeAt(col)-Anum)+1))===0)continue;
            }

            if(grid[row].charCodeAt(col)>=anum&&grid[row].charCodeAt(col)<=znum){
                now = (now|(1<<(grid[row].charCodeAt(col)-anum+1)));
            }

            memo[row][col][now]=true;

            if(now===ansKey){
                return level;
            }

            nextQueue.push([[row+1,col],now]);
            nextQueue.push([[row-1,col],now]);
            nextQueue.push([[row,col+1],now]);
            nextQueue.push([[row,col-1],now]);
        }
        queue=nextQueue;
    }
    return -1;
};
```