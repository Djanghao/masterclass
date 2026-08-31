# Top-down Dynamic Programming solution written in Go

**Author:** i-am-harveyt
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3767742/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3767742/)

---

Sorry for my poor English skill at the very beginning.

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

First of all, to make this method can effectively sequentially check on every "run", I sort the `events` by the start time. I also think of we can sort by $\\frac{value}{end-start}$ at the same time, while I then think that it may not affect our performance.

After sorting it, looking at this problem, I firstly come up with **Backtracking**. It's not really wrong, but **too slow**. In my experience, to speed up backtracking, **Dynamic Programming** is a very useful method.

# Approach
<!-- Describe your approach to solving the problem. -->

Decided to use DP, the following question is "What to store". In my consideration, storing `(index, current_time, quota)` is enough. They are "the event we focus on", "the end time of the previous event" and "how many events we can participate" respectively.

We than start from the first event, scan to the last one step by step. In each run, we do the following actions:

1. Check if we scan all of the event, or if we still able to participate any event(`quota >= 0`)
2. Store the outcome of "If we ignore this event"
3. Store the outcome of "If we participate this event", and we do also check if this event is able to participate (time constraint).
4. Store the maximum between `3.` and `4.`, then return

Just before posting this solution, I've found out it looks same to the Approach 5 in Editorial. If you think a graph may help you understand the concept more easily, it may helps you.

# Complexity

I'm not very sure about this part, if I'm wrong, please leave your comment below and tell me.

- Time complexity: $O(nk + n\\log{n})$ : sorting spends about $O(n\\log{n})$, and scanning them spend $O(nk)$. I think using a binary search on searching the next available event will make it faster.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(nk)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func dfs(events *[][]int, mem *map[[3]int]int, idx, time, quota int) int {
    key := [3]int{idx, time, quota}
    if idx == len(*events) || quota == 0 {
        return 0
    } else if v, ok := (*mem)[key]; ok {
        return v
    }
    
    left := dfs(events, mem, idx+1, time, quota)

    right := 0
    if time < (*events)[idx][0]{
        right = dfs(events, mem, idx+1, (*events)[idx][1], quota-1) + (*events)[idx][2]
    }
    if left > right {
        (*mem)[key] = left
    } else {
        (*mem)[key] = right
    }

    return (*mem)[key]
}
func maxValue(events [][]int, k int) int {
    sort.SliceStable(events, func(i, j int) bool {
            return events[i][0] < events[j][0]
    })
    mem := make(map[[3]int]int, 0)
    return dfs(&events, &mem, 0, -1, k)
}
```