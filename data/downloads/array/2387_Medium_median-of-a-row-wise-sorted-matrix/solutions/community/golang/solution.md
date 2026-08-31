# Golang ||  clean binary search solution n log(m) log(10^6)

**Author:** kisulken
**Votes:** 0
**Link:** [https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/3590295/](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/3590295/)

---

# Intuition
Lets find median in range 1 .. 10^6 
The median should be as close as possible to this value: $$\\frac{ (n * m)}{2}$$ (its half of all values)

# Approach
To find median we'll use binary search l = 1, r = $$10^6$$ 
For each median, count the number of less than or equal values and check this flag : $$\\frac{ (n * m)}{2} > count$$
We can easily find count the number of less than or equal values in sorted row with binary search. 

# Complexity
- Time complexity:
$$O(n \\cdot log(m) \\cdot log(10^6))$$


# Code
```
import "sort"

func positionOfCurrentMedian(row []int, median int) int {
    idx := sort.Search(len(row), func(i int) bool { return row[i] > median})
    return idx
}

func numOfLower(grid [][]int, median int) int {
    count := 0
    for i := 0; i < len(grid); i++ {
        count += positionOfCurrentMedian(grid[i], median)
    }
    fmt.Println(median, count)
    return count
}

func matrixMedian(grid [][]int) int {
    fmt.Println("half = ",((len(grid) * len(grid[0])) / 2))
    l := 1
    r := int(1e6)
    for l < r {
       //if l + 1 == r {return l}
       median := (l + r) / 2
       fmt.Println("l, r = ", l, r)
        if (len(grid) * len(grid[0]) + 1) / 2 > numOfLower(grid, median) {
            l = median + 1
        } else {
            r = median
        }
        
    }
    return l
}
```