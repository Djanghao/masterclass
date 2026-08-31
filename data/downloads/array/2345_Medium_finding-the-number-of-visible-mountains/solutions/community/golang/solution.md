# Go flatten to base's L/R coords; sort; single-pass loop

**Author:** bunnycode
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3765442/](https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3765442/)

---

# Approach
Since every mountain has a 45-degree slope, we can project down from the peak to the left/right boundaries of that mountain's base. Every mountain's base is:
`left = horizontal_coordinte - height`
`right = horizontal_coordinate + height`
Using the mountain's left/right base coordinates simplifies the problem. Any mountain with a base fully inside another mountain's base is "hidden" -- just remember to follow the puzzle's rules about handling duplicate peaks.

# Code
```
const (
    // for readability
    HORIZ = 0
    VERT  = 1
    L     = 0
    R     = 1
    MIN   = math.MinInt
)

type Base [2]int

func visibleMountains(peaks [][]int) int {
    // sort with left-most base at left of slice; ties go to biggest base (right-most)
    sort.Slice(peaks, func(i, j int) bool {
        iBase := peakToBase(peaks[i])
        jBase := peakToBase(peaks[j])
        if iBase[L] == jBase[L] {
            return iBase[R] > jBase[R]
        }
        return iBase[L] < jBase[L]
    })

    res := 0
    curBase := Base{ MIN, MIN }
    sawDupe := map[Base]bool{}
    for _, p := range peaks {
        base := peakToBase(p)
        // check for duplicate peaks
        if base[L] == curBase[L] && base[R] == curBase[R] {
            // if more than 2 duplicates, just skip it
            if sawDupe[base] { continue }

            sawDupe[base] = true
            res--
            continue
        }

        // we already know base[L] will be >= curBase[L] due to sort,
        // so just check if the new mountain's right base is covered
        if base[R] <= curBase[R] { continue }

        // if not covered, increment counter & update curBase
        res++
        curBase = base
    }
    return res
}

// flatten to left/right range of mountain's base
// this turns the problem to something more akin to looking at intervals
func peakToBase(p []int) Base {
    return Base{
        p[HORIZ] - p[VERT], // left-most index of mountain base
        p[HORIZ] + p[VERT], // right-most index of mountain base
    }
}
```