# UnionFind | Typescript

**Author:** TK-X
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/5278883/](https://leetcode.com/problems/graph-valid-tree/solutions/5278883/)

---

# Intuition
To use union find alog by typescript to work out this problem

# Approach
1: Loop through edges(no repeated edge), use union find algo to find if two vertexs are already connected, if already connected, then it cannot be a tree. 
2: After looping through all edges, if all vertexes are connected, then it is a tree, otherwise there are some vertexed not connected, its not a tree

# Complexity
#\u03B1(n): Inverse Ackermann function
- Time complexity: 
- Constructor: O(n)
- Find: O(\u03B1(n))
- Union: O(\u03B1(n))
- isConnected: O(\u03B1(n))


- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function validTree(n: number, edges: number[][]): boolean {
    let disjointSet = new DisjointSet(n);
    for(let edge of edges){
        let v1 = edge[0];
        let v2 = edge[1];
        if(disjointSet.isConnected(v1, v2)){
            return false;
        }else{
            disjointSet.union(v1, v2);
        }
    }
    return disjointSet.n === 1;
};

class DisjointSet{
    root: number[];
    rank: number[];
    n: number;

    constructor(n: number){
        this.root = [...Array(n)].map((_, index) => index);
        this.rank = [...Array(n)].fill(1);
        this.n = n;
    }

    isConnected(v1: number, v2: number): boolean{
        return this.find(v1) === this.find(v2);
    }

    union(v1: number, v2: number): void{
        let rootV1 = this.find(v1);
        let rootV2 = this.find(v2);
        let rankV1 = this.rank[rootV1];
        let rankV2 = this.rank[rootV2];
        if(rankV1 > rankV2){
            this.root[rootV2] = rootV1;
        }else if(rankV2 === rankV1){
            this.root[rootV2] = rootV1;
            this.rank[rootV1]++;
        }else{
            this.root[rootV1] = rootV2;
        }
        this.n--;
    }

    find(v: number): number{
        if(this.root[v] === v){
            return v;
        }
        this.root[v] = this.find(this.root[v]);
        return this.root[v];
    }
}
```