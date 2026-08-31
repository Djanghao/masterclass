# Sweep line (event logs) with self-documenting code

**Author:** ngxiankai286
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/5293674/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/5293674/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

All in one timeline and sweep. Add blooms then check persons then subtract withers.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

O((n+m)log(n+m))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

O(n+m)

# Code
```
type TimelineEntryType int

// order is important. Inclusive bloom so Wither happens at the end of timestamp.
const (
	Bloom TimelineEntryType = iota
	Person
	Wither
)

type TE struct { // timeline entry
    Time, Index int
    Type TimelineEntryType
}

func fullBloomFlowers(flowers [][]int, people []int) []int {
    timeline := make([]TE, 0)
    for _, flower := range flowers {
        timeline = append(timeline, TE{Time: flower[0], Type: Bloom})
        timeline = append(timeline, TE{Time: flower[1], Type: Wither})
    }
    for i, person := range people {
        timeline = append(timeline, TE{Time: person, Type: Person, Index: i})
    }

    sort.Slice(timeline, func (i, j int) bool {
        if timeline[i].Time != timeline[j].Time {
            return timeline[i].Time < timeline[j].Time
        }
        return timeline[i].Type < timeline[j].Type
    })

    res := make([]int, len(people))
    currInBloom := 0
    for _, te := range timeline {
        switch te.Type {
        case Bloom:
            currInBloom++
        case Person:
            res[te.Index] = currInBloom
        case Wither:
            currInBloom--
        }
    }
    return res
}
```