# Typescript || Union-FInd || Commented

**Author:** onifs10
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-good-paths/solutions/2632419/](https://leetcode.com/problems/number-of-good-paths/solutions/2632419/)

---

```
class DisjointSet {
  private setMap: Map<number, number>
  private setRank: Map<number, number>; 
  /**
   * this contructor takes in a group of disjoint set. make sure there is no union within any two set
   * @param sets Container<Container>
   */
  constructor(len: number) {
    // map value to parent;
    this.setMap = new Map();
    this.setRank = new Map();
    for (let i = 0; i < len; i++){
        this.setRank.set(i,1);
        this.setMap.set(i,i)
    } 
  }

  /**
   * find the set where the value belongs too 
   * @param setValue number
   * @returns numer
   */
  find(setValue: number): number{
    while (this.setMap.get(setValue) != setValue) {
      setValue = this.setMap.get(setValue)
    }
    return setValue
  }

  /**
   * join two disjoint set
   * @param setValueA number
   * @param setValueB number
   */
  union(setValueA: number, setValueB: number) {
    let setA = this.find(setValueA);
    let setB = this.find(setValueB);
    let rankA = this.setRank.get(setA) as number;
    let rankB = this.setRank.get(setB) as number; 
    if (rankA > rankB) {
      this.setMap.set(setB, setA);
    } else if(rankA < rankB) {
      this.setMap.set(setA, setB);      
    } else {
      this.setMap.set(setA, setB);
      this.setRank.set(setB, this.setRank.get(setB) + 1)
    }
  }
}

function numberOfGoodPaths(vals: number[], edges: number[][]): number {
    const sameValueNodes: Map<number, Array<number>> = new Map();
    const adjList: number[][] = new Array(vals.length).fill(0).map(_ => []);
    const uniqueValues: number[] = []
    for(let i = 0; i < vals.length; i++){
        if(sameValueNodes.has(vals[i])){
            sameValueNodes.get(vals[i]).push(i)
        }else{
            sameValueNodes.set(vals[i], [i]); 
            uniqueValues.push(vals[i])
        }
    }
    
    uniqueValues.sort((a,b) => a - b);
    
    for(const edge of edges){
        if(vals[edge[0]] >= vals[edge[1]]){
            adjList[edge[0]].push(edge[1])
        }else{
            adjList[edge[1]].push(edge[0])
        }
    }
    
    const UFClass = new DisjointSet(vals.length);
    
    let allGoodPath = 0
    for(const val of uniqueValues){
        // get all nodes index with this value
        allGoodPath += sameValueNodes.get(val).length;
        /** 
         * mapping through index of nodes with same val --> v rep index
         * to create subtrees with nodes less than of equal to the current val
        */
        for(const v of sameValueNodes.get(val)){
            // edges with nodes less than or equal to this node index and is connected to that index; 
            const edges = adjList[v];
            for(const u of edges){
                UFClass.union(v,u);
            }
        }
        // get count of node with value val in every dejoint set (subTree) created above;
        // every subtree have a unique representative
        const subTrees = new Map();
        // mapping through index of nodes with same val --> v rep index
        for(const v of sameValueNodes.get(val)){
            if(subTrees.has(UFClass.find(v))){
                subTrees.set(UFClass.find(v), subTrees.get(UFClass.find(v)) + 1);
            }else{
                subTrees.set(UFClass.find(v), 1);
            }
        }
        subTrees.forEach((count) => {
            // get calculation of possible path from the subtree 
            allGoodPath += (count*(count - 1)/2);
        })
    }
    return allGoodPath;
};
```