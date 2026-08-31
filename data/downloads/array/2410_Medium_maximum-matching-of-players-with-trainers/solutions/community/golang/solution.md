# EASY GO SOLUTION

**Author:** RICHWING
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/6122427/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/6122427/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n*log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func matchPlayersAndTrainers(players []int, trainers []int) int {
    sort.Ints(players)
    sort.Ints(trainers)
    i:=0

    for j:=0;i<len(players) && j<len(trainers);j++{
        if  trainers[j]>=players[i]{
            i++
        }
    }
    return i
}
```