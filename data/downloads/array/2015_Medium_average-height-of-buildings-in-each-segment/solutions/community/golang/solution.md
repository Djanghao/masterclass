# golang solution

**Author:** zoowong
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/5128609/](https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/5128609/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
first thought is to sort the building and iterate and merge buildings. But while implementing it seems I only care about the starting and ending of a building.

# Approach
<!-- Describe your approach to solving the problem. -->
Extract the (start, height) and (end, height) as points and sort the points by the first element in the tuple. Go through each point and build the unmerged street.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
log2(n) - n is the length of the building since I need to sort the points which 2 * n

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
n

# Code
```
func averageHeightOfBuildings(buildings [][]int) [][]int {
    var points [][]int
    for _, building := range buildings {
        points = append(points, []int{building[0], building[2]})
        points = append(points, []int{building[1], -building[2]})
    }

    sort.Slice(points, func(i, j int) bool {
        if points[i][0] == points[j][0] {
            return points[i][1] < points[j][1]
        }
        
        return points[i][0] < points[j][0]
    })

    var result [][]int

    start := 0
    height := 0
    ct := 0
    for _, p := range points {
        // if there is building when we encounter next point we should
        // record
        if ct > 0 && start != p[0]{
            aveHeight := height / ct
            result = append(result, []int{start, p[0], aveHeight})
        }

        // update start to current point
        start = p[0]
        // update height sum
        height = height + p[1]
        // if it's end of a building we should decrement building count
        if p[1] < 0 {
            ct--
        } else {
            ct++
        }
    }

    // merge the result 
    return mergeResult(result)
}

func mergeResult(before [][]int) [][]int {
    var after [][]int
    for _, seg := range before {
        if len(after) == 0 {
            after = append(after, seg)
            continue
        }

        pre := after[len(after) - 1]
        if seg[0] <= pre[1] && seg[2] == pre[2] {
            pre[1] = seg[1]
        } else {
            after = append(after, seg)
        }
    }
    return after
}
```