# modified union find

**Author:** shayankhan1156
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/6059510/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/6059510/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
 class Dsu{
    constructor(n){
        this.parent=new Array(n).fill(0);
        this.rank=new Array(n).fill(1);
        this.right_edge=new Array(n).fill(0);
        for(let i=0;i<n;i+=1)this.parent[i]=i;
        for(let i=0;i<n;i+=1)this.right_edge[i]=i;
    }
    find_parent(n){
        if(this.parent[n]==n)return n;
        return this.parent[n]=this.find_parent(this.parent[n]);
    }
    union_by_rank(u,v){
        let upu=this.find_parent(u);
        let upv=this.find_parent(v);
        if(upu==upv)return;
        if(this.rank[upu]==this.rank[upv]){
            this.rank[upu]+=this.rank[upv];
            this.parent[upv]=upu;
        }else if(this.rank[upu]>this.rank[upv]){
            this.parent[upv]=upu;
        }else{
            this.parent[upu]=upv;
        }
    }

 }
 const work=(start,end,visited,s)=>{
//calculation nodes which gets removed on performing ith query in order
let cnt=0;
if(end-start+1<=3){
    if(end-start+1<=2)return 0;
    if(visited[start+1])return 0;
    visited[start+1]=1;
    return 1;
}
let prev=start+1;
let i=start+2;
let j=end-1;
if(!visited[prev]){
    visited[prev]=1;
    cnt+=1;
}else{
    prev=s.right_edge[s.find_parent(prev)];
    i=prev+1;
}
while(i<=j && prev<=j){
    if(visited[i]){
        let temp=s.right_edge[s.find_parent(i)];
        s.union_by_rank(prev,i);
        s.right_edge[s.find_parent(i)]=temp;
        prev=temp;
        i=temp+1;
    }else{
        cnt+=1;
        visited[i]=1;
        s.union_by_rank(prev,i);
        s.right_edge[s.find_parent(i)]=i;
        prev=i;
        i+=1;
    }
}
return cnt;
 }
var shortestDistanceAfterQueries = function(n, queries) {
    const s=new Dsu(n);
    const visited=new Array(n).fill(0);
    let ans=n;
    const result=new Array();
    for(let i=0;i<queries.length;i+=1){
        let res=work(queries[i][0],queries[i][1],visited,s);
        console.log(i,res)
        ans=ans-res;
        result.push(ans-1);
    }
    return result;
};
```