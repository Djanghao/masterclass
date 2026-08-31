# Using sort library in standard library

**Author:** bedminer1
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-election/solutions/5147392/](https://leetcode.com/problems/online-election/solutions/5147392/)

---

# Code
```
type TopVotedCandidate struct {
    timeline [][2]int // holds [time, person] pairs 
}


func Constructor(persons []int, times []int) TopVotedCandidate {
    votes := make(map[int]int)
    timeline := make([][2]int, len(times))

    leadingCount := 0
    leader := persons[0]

    for i, person := range persons {
        time := times[i]

        votes[person]++
        numVotes, _ := votes[person]

        if numVotes >= leadingCount {
            leadingCount = numVotes
            leader = person
        }

    // track leader at each time in times
        timeline[i] = [2]int{time, leader}
    }

    return TopVotedCandidate {
        timeline: timeline,
    }
}


func (this *TopVotedCandidate) Q(t int) int {
    pos := sort.Search(len(this.timeline), func(eventIndex int) bool {
        return this.timeline[eventIndex][0] >= t // find time in timeline
    })

    // if there is an exact match
    if pos < len(this.timeline) && (pos == 0 || this.timeline[pos][0] == t) {
        return this.timeline[pos][1]
    // else interpolate between times
    } else {
        return this.timeline[pos - 1][1]
    }
}


/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * obj := Constructor(persons, times);
 * param_1 := obj.Q(t);
 */
```