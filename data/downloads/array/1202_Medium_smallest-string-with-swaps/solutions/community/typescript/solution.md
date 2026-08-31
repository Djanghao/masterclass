# Union Find | Typescript

**Author:** TK-X
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/5315670/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/5315670/)

---

# Intuition
To use union find algo to solve this problem

# Approach
1: loop through the pairs, union the connected chars and generate components
2: each component is list sored in ascending order
3: generate the smallest string as per the components
# Code
```
function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    let disjointSet = new DisjointSet(s);
    pairs.forEach(p => {
        if(!disjointSet.isConnected(p[0],p[1])){
            disjointSet.union(p[0],p[1]);
        }
    })
    return disjointSet.getSmallestString();
};

class DisjointSet{
    rank: number[];
    root: number[];
    word: string;
    components: Map<number, string[]>;
    constructor(word: string){
        this.root = [...Array(word.length)].map((_, i) => i);
        this.rank = [...Array(word.length)].fill(1);
        this.word = word;
        this.components = new Map();
    }

    union(v1: number, v2: number): void{
        let rootV1 = this.find(v1);
        let rootV2 = this.find(v2);
        let rankV1 = this.rank[rootV1];
        let rankV2 = this.rank[rootV2];
        if(rankV1 > rankV2){
            this.root[rootV2] = rootV1;
        }else if(rankV1 === rankV2){
            this.root[rootV2] = rootV1;
            this.rank[rootV1]++;
        }else{
            this.root[rootV1] = rootV2;
        }
    }

    find(v: number): number{
        if(v === this.root[v]){
            return v;
        }
        this.root[v] = this.find(this.root[v]);
        return this.root[v];
    }

    isConnected(v1: number, v2: number): boolean{
        return this.find(v1) === this.find(v2);
    }

    private sort(): void{
        [...this.word].forEach((ch, i) => {
            const root = this.find(i);
            const children = this.components.get(root);
            if(children){
                children.push(ch);
            }else{
                this.components.set(root, [ch]);
            }
        });
        for(const v of this.components.values()){
            v.sort().reverse();
        }
    }

    getSmallestString(): string {
        this.sort();
        let smallest = '';
        [...this.word].forEach((ch, i) => {
            let iRoot = this.find(i);
            let chars = this.components.get(iRoot);
            smallest += chars.pop();
        });
        return smallest;
    }
}
```