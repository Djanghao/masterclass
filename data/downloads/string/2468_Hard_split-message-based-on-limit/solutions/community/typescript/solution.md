# Only four cases

**Author:** beizhedenglong
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/2807698/](https://leetcode.com/problems/split-message-based-on-limit/solutions/2807698/)

---

# Intuition
The uppper of total number only can be one of `[9, 99, 999, 9999]`. So we can try every `numberLength(1,2,3,4)` and find the total number of the parts

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```
function splitMessage(message: string, limit: number): string[] {
  const list = [9, 99, 999, 9999]
  for (const upper of list) {
    let { length } = message
    for (let i = 1; i <= upper; i++) {
      let charLen = (limit - 3 - i.toString().length - upper.toString().length)
      if (charLen < 0) {
        break
      }
      length -= charLen
      if (length <= 0) {
        let index = 0
        const result: string[] = []
        for (let j = 1; j <= i; j++) {
          charLen = (limit - 3 - j.toString().length - upper.toString().length)
          let current = ''
          for (let k = index; k < Math.min(charLen + index, message.length); k++) {
            current += message[k]
          }
          result.push(`${current}<${j}/${i}>`)
          index += charLen
        }
        return result
      }
    }
  }
  return []
}
```