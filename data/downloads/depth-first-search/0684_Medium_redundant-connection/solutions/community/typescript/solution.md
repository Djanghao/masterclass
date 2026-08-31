# Typescript union-find solution

**Author:** ShaalanMarwan
**Votes:** 2
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/2313809/](https://leetcode.com/problems/redundant-connection/solutions/2313809/)

---

```
function find(edge:number,parents:Array<number>){
    if(parents[edge]==edge){
        
        return edge;
    }
        
    return find(parents[edge],parents)
        
}
function findRedundantConnection(edges: number[][]): number[] {
    
    let n=edges.length;
    
    const parents=new Array(n+1);
    
    for(let index=0;index<n;index++){
         parents[index]=index
    }
    
    for(const edge of edges){
        
        let u=find(edge[0],parents)
        let v=find(edge[1],parents)
        // console.log()
        if(u==v){
            return edge
            
        }
        parents[v]=u
        
    }
    
    return []
    


};
```