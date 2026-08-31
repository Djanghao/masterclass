# Sliding Window | O(n)

**Author:** nikofk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/5959588/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/5959588/)

---

# Intuition
Use a sliding window to find the minimal white blocks in a window of k blocks

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```golang []
func minimumRecolors(blocks string, k int) int {
    best := 0
    for i := 0; i < k; i++ {
        if blocks[i] == 'W' {
            best += 1
        }
    }

    i := 0
    j := k - 1
    window := best
    for j < len(blocks) - 1 {
        j++
        if blocks[j] == 'W' {
            window += 1
        }

        if blocks[i] == 'W' {
            window -= 1
        }
        i++

        best = min(window, best)
    }

    return best
}
```