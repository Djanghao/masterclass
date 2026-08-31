# Golang heap solution with inline explanation and heap implementation

**Author:** JieBai
**Votes:** 1
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/1129667/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/1129667/)

---

```
 type Node struct {
     x int
     y int
     h int
 }

func trapRainWater (heightMap [][]int) int {
    res := 0
    m := len(heightMap)
    n := len(heightMap[0])
    
    //maintain a MIN heap
    list := make([]Node, 0)
    visited := make([][]bool, m)
    for i := 0; i < m; i++ {
        visited[i] = make([]bool, n)
    }
    directions := [][]int{{1,0},{-1,0},{0,1},{0,-1}}
    
    //add the borders into heap 
    for i := 0; i < m; i++ {
        newNode := Node{}
        newNode.x = i
        newNode.y = 0
        newNode.h = heightMap[i][0]
        list = append(list, newNode)
        newNode.y = n - 1
        newNode.h = heightMap[i][n - 1]
        list = append(list, newNode)
        visited[i][0] = true
        visited[i][n - 1] = true        
    }

    for j := 1; j < n-1; j++ {
        newNode := Node{}
        newNode.x = 0
        newNode.y = j
        newNode.h = heightMap[0][j]
        list = append(list, newNode)
        newNode.x = m - 1
        newNode.h = heightMap[m - 1][j]
        list = append(list, newNode)
        visited[0][j] = true
        visited[m - 1][j] = true 
    }
    
    genHeap(list)
    
    //iterate the heap until heap is empty
    for len(list) > 0 {
        
        //current node is the shortest cell in the heap
        curNode := list[0]
        list = list[1:]
        
        //explore the neighbours of current node
        for _, direction := range directions {
            X := curNode.x + direction[0]
            Y := curNode.y + direction[1]
            if valid(heightMap, X, Y, visited) {
                if heightMap[X][Y] < curNode.h {
                    //if the neighbour's height is shorter
                    //rain water can be trapped 
                    res += curNode.h - heightMap[X][Y]
                }
                newNode := Node{}
                newNode.x = X
                newNode.y = Y
                //update neighbour cell's height if shorter than current node, as it has been filled by water
                newNode.h = max(heightMap[X][Y], curNode.h)
                //add the neighbour into heap
                list = append(list, newNode)
                visited[X][Y] = true
            }
        }    
        //keep the heap in sequence
        genHeap(list)
    }

    return res
}

func valid(heightMap [][]int, x, y int, visited [][]bool) bool {
    if x < 0 || y < 0 || x >= len(heightMap) || y >= len(heightMap[0]) {
        return false
    }
    return !visited[x][y]
}

//generate heap
func genHeap(list []Node) {
    n := len(list) - 1
    for i := (n + 1) / 2; i >= 0; i-- {
        heapify(list, n, i)
    }
    return
}

//move cell i to the right position
func heapify(list []Node, n, i int) {
    c1 := i * 2 + 1
    c2 := i * 2 + 2
    MIN := i

    if c1 <= n && list[c1].h < list[MIN].h {
        MIN = c1
    }
    if c2 <= n && list[c2].h < list[MIN].h {
        MIN = c2
    }
    
    if MIN != i {
        swap(list, MIN, i)
        heapify(list, n, MIN)
    }
    return
}

func swap(list []Node, a, b int) {
    temp := list[a]
    list[a] = list[b]
    list[b] = temp
    return
}

func max(a, b int) int {
    if a > b {
        return a
    } else {
        return b
    }
}
```