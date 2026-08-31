# 0ms Faster Solution Using Hashmaps

**Author:** muhammadfarhankt
**Votes:** 1
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/4641843/](https://leetcode.com/problems/furthest-point-from-origin/solutions/4641843/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The furthest distance we can reach depends on the difference between the number of 'R' and 'L' moves, as well as how we strategically utilize the '_' moves.
- We don't need to track the exact positions after each move; we only need to know the net difference between 'R' and 'L' moves to determine the furthest distance.
![image.png](./images/0.png)

# Approach
<!-- Describe your approach to solving the problem. -->
1. Count the occurrences of each move: Create a map to efficiently count the occurrences of 'L', 'R', and '_' moves in the string.
2. Determine the dominant direction: Check if there are more 'R' moves or 'L' moves.
3. Calculate the furthest distance: Add the number of '_' moves to the count of the dominant direction. Subtract the count of the opposite direction to account for the net movement. This gives us the furthest distance from the origin.

# Complexity
- Time complexity: O(n), where n is the length of the string. We iterate through the string once to count the moves.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 
- Space complexity: O(1), as the map's size is bounded by the three possible characters ('L', 'R', and '_'), regardless of the input string's length.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func furthestDistanceFromOrigin(moves string) int {
    movesMap := make(map[rune]int)
    for _, move := range moves {
        movesMap[move]++
    }
    if movesMap['R'] > movesMap['L'] {
        return movesMap['_'] + movesMap['R'] - movesMap['L']
    } else {
        return movesMap['_'] + movesMap['L'] - movesMap['R']
    }
    return 0
}
```