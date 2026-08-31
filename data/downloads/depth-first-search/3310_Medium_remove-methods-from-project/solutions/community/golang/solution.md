# Golang. DFS from k. 2 cases.

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5876621/](https://leetcode.com/problems/remove-methods-from-project/solutions/5876621/)

---

# Intuition

Find all nodes starting from k using DFS/BFS and consider this component. 

Two cases :

1. If there exists  some node not from the component that contains an edge to the component, no nodes will be deleted. Return every node.

2. No outside node contains an edge to the component. Return every node that is not within the component.


# Code
```golang []
func remainingMethods(n int, k int, invocations [][]int) []int {
    // dfs and determine
    adj := map[int][]int{}
    for _,v := range(invocations) {
        adj[v[0]] = append(adj[v[0]], v[1])
    }
    within := map[int]bool{}
    res := []int{}
    stack := []int{k}
    for len(stack) > 0 {
        top := stack[len(stack) - 1]
        within[top] = true
        stack = stack[:len(stack) - 1]
        for _,v := range(adj[top]) {
            if !within[v] {
                stack = append(stack, v)
            }
        }
    }  
    for _,v  := range(invocations) {
        if !within[v[0]] && within[v[1]] {
            curr := []int{}
            for i := 0 ; i < n ; i ++ {
                curr = append(curr,  i)
            }
                        return curr
        }
    }
    for i := 0 ; i < n ; i ++ {
        if !within[i] {
        res = append(res,  i)

        }
    }
    return res 

}
```