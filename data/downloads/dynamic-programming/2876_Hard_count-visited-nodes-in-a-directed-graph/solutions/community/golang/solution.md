# Weekly Contest 365--Cycle Detection using DFS //Commented

**Author:** eshu0007
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/4112364/](https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/4112364/)

---

# Intuition
If we find a cycle then all the nodes in the cycle will have the same values of visited node

# Approach
If we find a cycle then all the nodes in the cycle will have the same values of visited node--using a map to detect cycle with DFS

# Complexity
- Time complexity:
O(n)

- Space complexity:
~O(n)

# Code
```
func countVisitedNodes(edges []int) []int {
    n:=len(edges)
    mp:=make(map[int]int,n)
    graph:=make([][]int,len(edges))
    for i,edge:=range edges{
        graph[i]=append(graph[i],edge)//making a adj List
    }
    ans:=make([]int,len(edges))
    for i:=0;i<len(edges);i++{
        if _,ok:=mp[i];ok{//if already visited hence already computed
            ans[i]=mp[i]
            continue
        }
        loopEnd:=-1
        count:=dfs(i,graph,mp,&loopEnd)
        ans[i]=count
        
    }
    return ans
}
func dfs(ind int,graph [][]int,mp map[int]int,loopEnd *int)int{
    if _,ok:=mp[ind];ok{//if already visited then loopEnd found
        *loopEnd=ind
        return mp[ind]
    }
//marking the node visited
    mp[ind]=0
    count:=1
    for _,adjNode:=range graph[ind]{
        //counting the number of visted nodes starting with and including the node i
        count+=dfs(adjNode,graph,mp,loopEnd)
    }
    mp[ind]=count
//When we find a Loop we use same count for all the nodes in the loop
    if ind==*loopEnd{
        s:=ind
        x:=0//for skipping the first iteration as in the start s will always equal to loopEnd
        for x==0||s!=*loopEnd{
            x=1
            mp[s]=count
            s=graph[s][0]
        }
    }
    return count
}
```