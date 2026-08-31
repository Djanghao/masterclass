# shit why not

**Author:** aplyd
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/2747431/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/2747431/)

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
function countTime(time: string): number {
  let startingValue = 1
  time.split(':').forEach((h, i) => {
    if (h === '??') {
      if (i === 0) { // hours
        startingValue = 24
      } else { // minutes
        startingValue *= 60
      }
      time = time.replace('??', '00')
    }
  })

  return time.split('').reduce<number>((acc, curr, i): number => {
    if (curr === '?') {
      switch(i) {
        case 0:
          if (Number(time[1]) >= 4) {
            return acc *= 2
          } else {
            return acc *= 3
          }
        case 1:
          if (Number(time[0]) === 2)  {
            return acc *= 4
          } else {
            return acc *= 10
          }
        case 3:
          return acc *= 6
        default: 
          return acc *= 10
      }
    }

    return acc
  }, startingValue)
};
```