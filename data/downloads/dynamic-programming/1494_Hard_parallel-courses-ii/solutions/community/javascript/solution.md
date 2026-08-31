# [Javascript] DFS - Bitmasks- Memoization - Snoob

**Author:** George_Chrysochoou
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/1198515/](https://leetcode.com/problems/parallel-courses-ii/solutions/1198515/)

---

Bit of a tuffie tbh, but this problem is essentially a smart way of bruteforcing. Each state of picked nodes is represented as a bitmask (0 not picked 1 picked).  A node is available, only if its prerequisite nodes are already picked. From that we can build a solution where we try every combination of k nodes out of all the available nodes, while keeping track of the steps taken until every node is picked.
Snoob is a subroutine that returns the next higher number with the same count of set bits. This will help us only traverse the states containing k nodes and avoid any other state.

```

 let snoob=x=>{
    // right most set bit 
    let rightOne = x & -x; 
    
    // reset the pattern and set next higher bit 
    // left part of x will be here 
    let nextHigherOneBit = x + rightOne; 

    // nextHigherOneBit is now part [D] of the above explanation. 

    // isolate the pattern 
    let rightOnesPattern = x ^ nextHigherOneBit; 

    // right adjust pattern 
    rightOnesPattern = (rightOnesPattern)/rightOne; 

    // correction factor 
    rightOnesPattern >>= 2; 

    // rightOnesPattern is now part [A] of the above explanation. 

    // integrate new pattern (Add [D] and [A]) 
    let next = nextHigherOneBit | rightOnesPattern; 
    return next
}
var minNumberOfSemesters = function(n, dependencies, k) {
    // Create an Adjacency matrix for both ingoing and outgoing
    let next=[...Array(n)].map(d=>[]),prev=[...Array(n)].map(d=>[]),
        prereq=[...Array(n)]
    for(let [x,y] of dependencies)
        next[x-1].push(y-1),
        prev[y-1].push(x-1)

    // Create a mask for each node, that contains its prerequisites
    let dfs1=node=>{
        if(prereq[node]===undefined){
            prereq[node]=0
            if(prev[node])
                for(let nei of prev[node])
                    prereq[node]|=dfs1(nei)|(1<<nei)
        }        
        return prereq[node]
    }
    for(let i=0;i<n;i++)
        dfs1(i)
    
    //Traverse each possible scenario through dfs keeping track of the steps used
    let memo=[...Array(1<<n)].map(d=>[...Array(n)].map(d=>0)),res=Infinity
    let dfs=(picked,step=0)=>{
        if(step>=res||step>n+1||memo[picked][step]) //Useless states
            return 
        memo[picked][step]=true
        if(picked===((1<<n)-1)) // End result( everything used)
            return res=Math.min(step,res)
        // Save the available nodes in another bitmask
        let avail=0,count=0
        for(let i=0;i<n;i++)
            //the available nodes have to have their prerequisites already picked
            if((prereq[i]&picked)===prereq[i] && ( picked&(1<<i))===0)
                avail|=(1<<i),
                count++
        //start traversing each possible combination of k nodes,out of the available ones
        let start=count<=k?avail:( (1<<k)-1)
        for(let mask=start;mask<=avail&&mask>0;mask=snoob(mask)){
            if( (mask&avail)!==mask) //if this is not a subset of available, continue
                continue
            dfs(picked|mask,step+1) //try using these k available nodes
        }
    }
    dfs(0)
    return res
};
```