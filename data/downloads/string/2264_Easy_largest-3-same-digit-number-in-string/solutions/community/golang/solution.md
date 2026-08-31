# Go. Two pointers with small optimizations

**Author:** sergei-m
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4361044/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4361044/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
// num = "11333888"
func largestGoodInteger(num string) string {
  cursor := -1

  for i := 0; i < len(num) - 2; i++ {
    if num[i] != num[i+1] {
      continue
    }

    // if i = 0, then we checked the values num[0] == num[1] // 1 == 1
    // but the next check will be false because num[0] == num[2] // 1 == 3
    if num[i] != num[i+2] {
      // and in order not to repeat a deliberately false iteration, 
      // we will increase i by an additional unit
      i += 1
      continue
    }

    // In the case where we previously encountered "333", 
    // we need to check that the new string consisting of "888" is greater than the previous one, 
    // for this we can rely on the string comparison properties in the ASCII table. 
    // In the ASCII table, the numbers are in ascending order, 
    // so we just need to compare any character with a regular comparison symbol
    if cursor != -1 && num[cursor] > num[i] {
      continue
    }

    cursor = i
  }

  if cursor > -1 {
     return num[cursor:cursor+3]
  }

  return ""
}
```