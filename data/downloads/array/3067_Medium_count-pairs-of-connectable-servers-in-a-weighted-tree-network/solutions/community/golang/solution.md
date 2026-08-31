# DFS + Math works!

**Author:** user8272RT
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4816521/](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4816521/)

---

# Intuition
It's a tree problem coupled with the following criteria which made me consider DFS.
`The path from c to b and the path from c to a do not share any edges`

# Approach
1. Consider a root node, and find all nodes from each connected edge that have a reachable distance (`distance % signalSpeed == 0`).

    Eg. For instance, if edges `A`,`B`,`C` are connected to the root node, and through edge `A`, `B` and `C` there are `a`,`b` and `c` reachable nodes respectively. Then the total number of pairs possible are `a*b +b*c +c*a`.

    Pairwise sum can be obtained from a derived variation of the *whole squared* formula,

    $$(a+b+c+..)^2 = a^2+b^2+.. + 2*(a*b+b*c+c*a+...)$$

2. Iteratively consider every node as a root node, and repeat the process above and store the results in an array.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
var g [][][]int
var sp int

func countPairsOfConnectableServers(edges [][]int, signalSpeed int) []int {
    n:=len(edges)+1
    sp=signalSpeed
    g=make([][][]int, n)
    for i:=range g{
        g[i]=[][]int{}
    }
    for _,e:=range edges{
        g[e[0]]=append(g[e[0]], []int{e[1],e[2]})
        g[e[1]]=append(g[e[1]], []int{e[0],e[2]})
    }
    ans:=make([]int, 0, n)
    for i:=range g{
        sqSum,sum:=0,0
        for _,e:=range g[i]{
            count:=dfs(i,e[0],e[1])
            sqSum+=count*count
            sum+=count
        }
        ans=append(ans, (sum*sum-sqSum)/2)
    }
    return ans
}

func dfs(p, i, d int) int {
    ans:=0
    if d%sp == 0{
        ans++
    }
    for _,e:=range g[i]{
        if e[0]==p {continue}
        ans+=dfs(i,e[0],d+e[1])
    }
    return ans
}
```