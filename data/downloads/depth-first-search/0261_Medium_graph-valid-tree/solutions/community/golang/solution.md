# Golang solutions with images for explanation

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/1417409/](https://leetcode.com/problems/graph-valid-tree/solutions/1417409/)

---

The idea of this solution is pretty simple:

* The tree must not have a loop
* And the tree must be fully connected

For the loop part I have drawn up an image for the idea to sink in.

![](https://i.imgur.com/RDYWFBZ.png)

**DFS Approach:*

``` go
func validTree(n int, edges [][]int) bool {
    if len(edges) != n - 1 { // checking for a loop
        return false
    }
    
    if n == 1 {
        return true
    }
    
    counter := 0
    stack := []int{ edges[0][0] }
    m := make(map[int] []int)
    contains := make(map[int] int)

    for _, i := range edges {
        m[i[0]] = append(m[i[0]], i[1])
        m[i[1]] = append(m[i[1]], i[0])
    }

    for len(stack) != 0 {
        pop := stack[len(stack) - 1]
        stack = stack[:len(stack) - 1]

        if contains[pop] != 1 {
            counter++
            stack = append(stack, m[pop]...)
            contains[pop] = 1
        }
    }

    return counter == n
}
```

**BFS Solution:**

```
func validTree(n int, edges [][]int) bool {
    if len(edges) != n - 1 { // checking for a loop
        return false
    }
    
    if n == 1 {
        return true
    }
    
    counter := 0
    queue := []int{ edges[0][0] }
    m := make(map[int] []int)
    contains := make(map[int] bool)

    for _, i := range edges {
        m[i[0]] = append(m[i[0]], i[1])
        m[i[1]] = append(m[i[1]], i[0])
    }

    for len(queue) != 0 {
        n := len(queue)
        
        for i := 0; i < n; i++ {
            pop := queue[0]
            queue = queue[1:]

            if !contains[pop] {
                counter++
                queue = append(queue, m[pop]...)
                contains[pop] = true
            }
        }
    }

    return counter == n
}
```