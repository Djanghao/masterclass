# TS sorting solution

**Author:** elyorsh
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/4421357/](https://leetcode.com/problems/minimum-time-difference/solutions/4421357/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findMinDifference(timePoints: string[]): number {
  
    timePoints.sort()
    const parsed = timePoints.map(time => parse(time))

    parsed.push(parsed[0] + 1440)

    let min = Infinity

    for (let i = 1; i < parsed.length; i++){
     min = Math.min(min, parsed[i] - parsed[i - 1])
    }

    return min
};

function parse (s: string) {

  const parsed = s.split(':')

  const hour = parseInt(parsed[0])
  const minute =  parseInt(parsed[1])

  return hour * 60 + minute
}
```