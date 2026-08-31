# Go | 2 Queue | Simple

**Author:** b3k3r
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/4495979/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/4495979/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Intuition seemed nothing special. Pretty much transcribed the description into code. Queue data structure matched the desired semantics.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
I think its O(t) where t is the max arrival time
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) for extra queues

# Code
```
func timeTaken(arrival []int, state []int) []int {
    enterQ := []int{}
    exitQ := []int{}
    prev := -1
    answer := make([]int, len(arrival))

    for i, t := 0, 0; ; t++ {
        for ; i < len(arrival) && arrival[i] == t; i++ {
            switch state[i] {
            case 0:
                enterQ = append(enterQ, i)
            case 1:
                exitQ = append(exitQ, i)
            }
        }

        v := -1
        switch {
        case len(enterQ) > 0 && len(exitQ) > 0:
            switch prev {
            case -1, 1:
                v, exitQ = popQ(exitQ)
                prev = 1
            case 0:
                v, enterQ = popQ(enterQ)
                prev = 0
            }
        case len(enterQ) > 0:
            v, enterQ = popQ(enterQ)
            prev = 0
        case len(exitQ) > 0:
            v, exitQ = popQ(exitQ)
            prev = 1
        default:
            prev = -1
        }
        if v >= 0 { answer[v] = t }
        if i == len(arrival) && len(enterQ) == 0 && len(exitQ) == 0 { break }
    }
    return answer
}

func popQ(q []int) (int, []int) {
    v := q[0]
    q = q[1:]
    return v, q
}
```