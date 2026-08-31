# Typescript || BFS || Array

**Author:** onifs10
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/2843341/](https://leetcode.com/problems/shortest-bridge/solutions/2843341/)

---

# Intuition
finding shortest part within two node 

# Approach
Use BFS to get all edges of the first island,  then we span across all the edges till we hit the other highland

# Complexity
- Time complexity:
$$O(n*m)$$

- Space complexity:
$$ O(n) $$

# Code
```
type queueContent = [number, number];

function shortestBridge(grid: number[][]): number {
    const edgeOfIsLand:number[][] = [];
    
    const checkEdge = (x:number,y:number) => {
                if(grid[x-1]?.[y] == 0 || grid[x+1]?.[y] == 0 || grid[x][y-1] == 0 || grid[x][y+1] ==  0 ){
            edgeOfIsLand.push([x,y])
        }
    }

    const getSurrounding =  (x:number, y:number, check:(a:any) => boolean) => {
        let Surrounding:[number, number][] = []
        // top
        if(check(grid[x-1]?.[y])){
            Surrounding.push([x-1, y]);
        }
        //bottom
        if(check(grid[x+1]?.[y])){
            Surrounding.push([x+1, y]);
        }
        //left
        if(check(grid[x][y-1])){
            Surrounding.push([x, y-1]);
        }
        //right
        if(check(grid[x][y+1])){
            Surrounding.push([x, y+1]);
        }
        return Surrounding
    } 
    const paintGroup = (x:number, y:number, paint:number):number => {
        const queue:Array<queueContent> = [[x,y]]
        while(queue.length > 0){
            const position = queue.shift();
            checkEdge(position[0], position[1]);
            getSurrounding(position[0], position[1], (v) => v == 1).forEach(v => {
                grid[v[0]][v[1]] = paint; 
                queue.push(v);
            })
        }
        return 0
    }

    const getFirstIsLand = () => {
        for(let i = 0;i < grid.length;i++){
            for(let j = 0; j < grid[i].length; j++){
                if(grid[i][j] == 1){
                    grid[i][j] = 2; 
                    paintGroup(i,j,2);
                    return 
                }
            }
        }
    }

    getFirstIsLand()
    let flip = 0
    while(edgeOfIsLand.length > 0){
        let lengthEdge = edgeOfIsLand.length;
        for(let i = 0; i < lengthEdge; i++){
            const position = edgeOfIsLand.shift();
            if(grid[position[0]][position[1]] == 1){
                return flip - 1;
            }
            let children = getSurrounding(position[0], position[1], v => v == 0 || v ==1)
            children.forEach(v => {
                if(grid[v[0]][v[1]] == 0){
                    grid[v[0]][v[1]] = 2; 
                }
                edgeOfIsLand.push(v);
            })
        }
        flip++;
    }

    return -1;
};

```