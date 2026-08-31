# Ruby, 1 line | Greedy

**Author:** siddarthajangid
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/2966420/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/2966420/)

---

# Code
```
# @param {Integer[]} damage
# @param {Integer} armor
# @return {Integer}
def minimum_health(damage, armor)
  damage.sum - [damage.max, armor].min + 1
end
```