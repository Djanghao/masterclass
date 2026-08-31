# Simple and understandable TypeScript/JavaScript solution

**Author:** saavy1
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5870965/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5870965/)

---

# Intuition
Split into hours and minutes and handle separately

# Approach
For handling hours, if the `firstChar` is "?" we should replace it with either "1" or "0" depending on the second char, if the `secondChar < 2` we'll use `11` for the hours, if it's greater than 2 we'll use 0

For handling minutes we just check if each place is "?" and if so we replace with highest possible value

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:

# Code
```typescript []
function handleHour(s: string): string {
  if (!s.includes("?")) return s

  let firstChar = s[0]
  let secondChar = s[1]
  if (firstChar === "?") {
    if (secondChar !== "?") {
      firstChar = secondChar <= "1" ? "1" : "0"
    } else {
      firstChar = "1"
    }
  }
  if (secondChar === "?") {
    secondChar = firstChar === "1" ? "1" : "9"
  }

  return `${firstChar}${secondChar}`
}

function handleMinutes(s: string): string {
  if (!s.includes("?")) return s

  let firstChar = s[0]
  let secondChar = s[1]
  if (firstChar === "?") firstChar = "5"
  if (secondChar === "?") secondChar = "9"

  return `${firstChar}${secondChar}`
}

function findLatestTime(s: string): string {
  if (!s.includes("?")) return s
  
  const maxHours = handleHour(s.substring(0, 2))
  const maxMinutes = handleMinutes(s.substring(3))

  return `${maxHours}:${maxMinutes}`
};
```