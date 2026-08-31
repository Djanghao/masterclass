# Golang bucket sort solution

**Author:** JieBai
**Votes:** 1
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/962046/](https://leetcode.com/problems/campus-bikes/solutions/962046/)

---

```
0 <= workers[i][j], bikes[i][j] < 1000 
```
is the KEY of this question, since both works and bikes positions are less than 1000, then the max distance will be 2000, under this possible distance number we would use bucket sort

```

func assignBikes(workers [][]int, bikes [][]int) []int {
    //maintain 3D slice to store for each distance, a list of worker and bikes combinations matches with the distance
    dis := make([][][2]int, 2001) 
    res := make([]int, len(workers))
    workersVisited := make([]bool, len(workers)) 
    bikesVisited := make([]bool, len(bikes))
    
    for i := 0; i < len(workers); i++ {
        for j := 0; j < len(bikes); j++ {
            distance := abs(workers[i][0] - bikes[j][0]) + abs(workers[i][1] - bikes[j][1])
            list := [2]int{i, j}
            dis[distance] = append(dis[distance], list) //for each distance, the list of combinations follow the asked sequence already, sort by worker, bike
        }
    }
    
    for i := 0; i < len(dis); i++ {
        for j := 0; j < len(dis[i]); j++ {
            if !workersVisited[dis[i][j][0]] && !bikesVisited[dis[i][j][1]] { //ignore if visited already
                res[dis[i][j][0]] = dis[i][j][1] //output 
                workersVisited[dis[i][j][0]] = true //keep visited mark
                bikesVisited[dis[i][j][1]] = true

            }
        }
    }
    return res
}

func abs(a int) int {
    if a > 0 {
        return a
    } else {
        return -a
    }
}
```