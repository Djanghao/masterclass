# Beats 100% - Union Find with path compression and union by rank

**Author:** dbysani
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/3547263/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/3547263/)

---

# Intuition
Keep adding links till all are connected. 

# Approach
Use disjoint sets or UnionFind to maintain clusters of friends
Sort logs by timestamps
Check if the tree is complete at the end of each log


# Complexity
- Time complexity:
O(logn) - path compression is used. Depends on union and find operations both of order n in the worst case.

- Space complexity:
rank and parent arrays of size n. O(n)

# Code
```
func earliestAcq(logs [][]int, n int) int { 
    ds := ds{}
    ds.New(n)
    
    sort.Slice(logs[:], func(i, j int) bool {
		return logs[i][0] < logs[j][0]
	})
    
    for _,log := range(logs){
        ts := log[0]
        f1 := log[1]
        f2 := log[2]
        ds.union(f1,f2)
        if ds.getCount()==1{
            return ts
        }
    } 
    return -1
}

type ds struct{
    root, rank []int
    count int
}

func (ds *ds) New(size int){
    ds.root = make([]int, size)
    ds.rank = make([]int, size)
    ds.count = size
    for i:=0; i<size; i++{
        ds.root[i] = i
        ds.rank[i] = 1
    }
}

func (ds *ds) getCount() int{
    return ds.count
}

func (ds *ds) union(m,n int){
    mroot := ds.find(m)
    nroot := ds.find(n)
    if mroot == nroot{
        return
    }
    if ds.rank[mroot] > ds.rank[nroot]{
        ds.root[nroot] = mroot
    } else if ds.rank[mroot] < ds.rank[nroot]{
        ds.root[mroot] = nroot
    } else{
        ds.root[nroot] = mroot
        ds.rank[mroot] +=1
    }
    ds.count--
}

func (ds *ds) find(n int) int{
    if n == ds.root[n]{
        return n
    }
    ds.root[n] = ds.find(ds.root[n])
    return ds.root[n]
}
                      

                      
```