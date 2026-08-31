# Golang

**Author:** rickzhangDB
**Votes:** 5
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/3647087/](https://leetcode.com/problems/course-schedule-ii/solutions/3647087/)

---



```
func findOrder(numCourses int, prerequisites [][]int) []int {
    //build the graph
    graph := make([][]int,numCourses)
    in_degree := make([]int,numCourses)
    for _,v := range prerequisites{
        graph[v[1]] = append(graph[v[1]], v[0])
        in_degree[v[0]]++
    }

    frontier := []int{}
    for i,v := range in_degree{
        if v==0{
            frontier = append(frontier,i)
        }
    }

    result := []int{}
    for len(frontier)!=0{
        cur := frontier[0]
        frontier = frontier[1:]
        result = append(result,cur)
        for _,v := range graph[cur]{
            in_degree[v]--
            if in_degree[v]==0{
                frontier = append(frontier,v)
            }
        }
    }

    if len(result)==numCourses{
        return result
    }
    return []int{}
}
```