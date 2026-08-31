# 100% both time and memory complexity

**Author:** ankushgoyal030
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/4747805/](https://leetcode.com/problems/flip-game/solutions/4747805/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Take two consecutive '+' convert it to two consecutive '-'. The change is one answer. Revert the change and proceed to next

# Approach
<!-- Describe your approach to solving the problem. -->
1. Convert to array of characters
2. Check two consecutive '+' and change them to two consecutive '-'
3. Add the change as string to result list
4. Revert the change in point 2.

# Complexity
- Time complexity: O(n) [neglecting the part to covert the string and add to list]
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func generatePossibleNextMoves(currentState string) []string {
    var res []string
    chars := []rune(currentState)
    for i := 0; i < len(currentState)-1; i++ {
        if chars[i] == '+' && chars[i+1] == '+' {
            chars[i], chars[i+1] = '-', '-'
            res = append(res, string(chars))
            chars[i], chars[i+1] = '+', '+'
        }
    }
    return res
}
```