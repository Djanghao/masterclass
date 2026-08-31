# Slow but method equals interview hire

**Author:** iamnooneinindia
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/5902990/](https://leetcode.com/problems/loud-and-rich/solutions/5902990/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

This could be based off of the get ancestors problem or the course schedule 4 problem. Once you have the ancestors, you can just do simple for loops to find the results.



# Approach
<!-- Describe your approach to solving the problem. -->

Reuse the same code of getAncestors.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func loudAndRich(richer [][]int, quiet []int) []int {
    richerMap := getAncestors(len(quiet), richer)
    
    ret := []int{}
    for i := 0; i < len(quiet); i++ {
        richer := richerMap[i]
        quietest := getQuietest(i, richer, quiet)
        ret = append(ret, quietest)
    }

    return ret
}

func getQuietest(curr int, richer []int, quiet []int) int {

    quietest := quiet[curr]
    qIndex := curr
    for i := 0; i < len(richer); i++ {
        if quiet[richer[i]] < quietest {
            quietest = quiet[richer[i]]
            qIndex = richer[i]
        }
    }

    return qIndex
}

func getAncestors(n int, edges [][]int) map[int][]int {
    
    edgeMap := make(map[int][]int)
    for _, edge := range edges {
        src := edge[0]
        dest := edge[1]

        if _, ok := edgeMap[src]; ok {
            edgeMap[src] = append(edgeMap[src], dest)
        } else {
            edgeMap[src] = []int{dest}
        }
    }

    ret := make(map[int][]int)
    for i := 0; i < n; i++ {
        vis := make(map[int]bool)
        dfs(edgeMap, i, i, &ret, vis)
    }

    return ret
}

func dfs(edgeMap map[int][]int, node, parent int, ret *map[int][]int, vis map[int]bool) {
    vis[node] = true

    for _, next := range edgeMap[node] {
        if _, ok := vis[next]; !ok {
            if _, ok := (*ret)[next]; ok {
                (*ret)[next] = append((*ret)[next], parent)
            } else {
                (*ret)[next] = []int{parent}
            }
            dfs(edgeMap, next, parent, ret, vis)
        }
    }
}

/*

We have to answer queries for 0->n-1 people 

To answer each query we need to know:
1. all the people richer than the current person
2. the quietest off a group of people

These two have to be answered independently and can have 2 different functions

getRicher(person int) []int

getQuietest(group []int) int

Something like this can be done


getRicher can be solved by getting all the ancestors of a value and storing it in a map[int][]int

We already know how to do that

getQuietest can be solved by a linear search also should be fine 500*500 time

*/
```