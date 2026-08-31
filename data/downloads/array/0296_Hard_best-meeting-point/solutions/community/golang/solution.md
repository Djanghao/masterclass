# Without Sorting

**Author:** janakagoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/3183753/](https://leetcode.com/problems/best-meeting-point/solutions/3183753/)

---

# Intuition
The model solution #2 "Sorting" can be done without sorting, since the the i and j subproblems are already sorted

# Approach
Instead of keeping track of indexe of friends' homes, count the number of friends in at each index. Then the median can be found by simply adding up the counts till you hit the mid point.

# Complexity
- Time complexity:
O(mn)

- Space complexity:
O(mn)

# Code
```
type Point struct {
    i int
    j int
}

func abs (a int) int {
    if a < 0 {
        return -a
    }

    return a
}

func manhattan(a *Point, b *Point) int {
    return abs(a.i - b.i) + abs(a.i - b.j) 
}

func minTotalDistance(grid [][]int) int {
    iCount := make([]int, len(grid))
    jCount := make([]int, len(grid[0]))

    friends := []*Point{}

    total := 0
    for i := 0; i < len(grid); i ++ {
        for j := 0; j < len(grid[0]); j ++ {
            if grid[i][j] == 1 {
                friends = append(friends, &Point{
                    i,
                    j,
                })

                iCount[i]++
                jCount[j]++
                total++
            }
        }
    }

    i := 0
    sum := 0

    median := total/2
    if total % 2 == 1 {
        median += 1
    }

    for sum < median {
        sum += iCount[i]
        i++
    }
    iMedian := i - 1

    j := 0
    sum = 0
    for sum < median{
        sum += jCount[j]
        j++
    }
    jMedian := j - 1

    dist := 0
    for i, c := range iCount {
        delta := abs(i - iMedian)
        dist += delta * c
    }

    for j, c := range jCount {
        delta := abs(j - jMedian)
        dist += delta * c
    }

    return dist
}
```