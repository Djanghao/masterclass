# Javascript + Union Find

**Author:** CarlosBalladares
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-good-paths/solutions/3052905/](https://leetcode.com/problems/number-of-good-paths/solutions/3052905/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use Union Find to unite edges sorted from those involving smallest to largest valued nodes. As you union the nodes, keep track of how many nodes in each component have its largest value. When you join two components where the largest value is `k`
then the number of good paths increases by `count_of_nodes_with_k_a * count_of_nodes_with_k_b`. Don't forget that single nodes are also good paths.


# Approach
<!-- Describe your approach to solving the problem. -->
## Processing edges from smallest valued nodes to largest.
We process in this order because it allows us to count good paths, those where the intermediate values are smaller. If all other values are smaller then all the paths between the largest valued nodes are good paths.

```
edges.sort((a, b)=>{
    a = Math.max(...a.map(i => vals[i]));
    b = Math.max(...b.map(i => vals[i]));
    return a-b;
});

```

## Additional data we need to track
Use Union find with a small modification.

```
const count = [...Array(vals.length).keys()].map((i)=>[vals[i], 1]);

```
Count will have the count of the largest valued node of each union find group. Initially each node with have one of its value.
## Modify union to unite counts too

As described above, the union function will also have to unite the count of the largest valued nodes in each component. If they are the same, then the counts are added otherwise the component gets the count of the largest valued node. 
```
const union = (a, b)=>{
    a = find(a);
    b = find(b);
    if(a == b) return;
    if(rank[a] < rank[b]) [a, b] = [b, a];
    rank[a]+=rank[b];
    link[b]=a;
    const [a_max_val, a_count] = count[a];
    const [b_max_val, b_count] = count[b];
    if(a_max_val == b_max_val){
        count[a] = [a_max_val, a_count + b_count];
    }else if(a_max_val > b_max_val){
        count[a] = [a_max_val, a_count];
    }else{
        count[a] = [b_max_val, b_count];
    }
}
```
## Before calling union we can add good paths


Before doing the union we can get how many good paths we will add by joining nodes `a` and `b`. Because we process edges from those involving smallest to largest valued nodes, all paths between max valued nodes will be good paths. If both nodes have the same max value then `a_count*b_count` new good paths are added otherwise none.

```
const getPathsFromJoining =  (a, b)=>{
    a = find(a);
    b = find(b);
    if(a == b) return 0;
    const [a_max_val, a_count] = count[a];
    const [b_max_val, b_count] = count[b];
    if(a_max_val == b_max_val){
        return a_count*b_count;
    }
    return 0;
}
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$ 
From sorting and union find with path compression and rank optimizations.

- Space complexity:$$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
From the Union find link array.


# Code
```
const numberOfGoodPaths = (vals, edges) => {
    edges.sort((a, b)=>{
        a = Math.max(...a.map(i => vals[i]));
        b = Math.max(...b.map(i => vals[i]));
        return a-b;
    });
    const link = [...Array(vals.length).keys()]
    const rank = [...Array(vals.length).keys()].map(()=>1);
    const count = [...Array(vals.length).keys()].map((i)=>[vals[i], 1]);
    const find = (a)=>{
        while(a != link[a]){
            link[a] = link[link[a]];
            a = link[a];
        }
        return a;
    };
    const union = (a, b)=>{
        a = find(a);
        b = find(b);
        if(a == b) return;
        if(rank[a] < rank[b]) [a, b] = [b, a];
        rank[a]+=rank[b];
        link[b]=a;
        const [a_max_val, a_count] = count[a];
        const [b_max_val, b_count] = count[b];
        if(a_max_val == b_max_val){
            count[a] = [a_max_val, a_count + b_count];
        }else if(a_max_val > b_max_val){
            count[a] = [a_max_val, a_count];
        }else{
            count[a] = [b_max_val, b_count];
        }
    }

    const getPathsFromJoining =  (a, b)=>{
        a = find(a);
        b = find(b);
        if(a == b) return 0;
        const [a_max_val, a_count] = count[a];
        const [b_max_val, b_count] = count[b];
        if(a_max_val == b_max_val){
            return a_count*b_count;
        }
        return 0;
    }
    let ans = 0;
    for(let [a, b] of edges){
        ans+= getPathsFromJoining(a, b);
        union(a, b);
    }
    return ans + vals.length;
};
```