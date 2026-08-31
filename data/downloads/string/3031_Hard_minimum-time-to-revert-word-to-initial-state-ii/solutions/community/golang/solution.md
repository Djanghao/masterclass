# Find the Grid of Region Average using Go | O(n*n) | using strings.HasPrefix()

**Author:** singhsourav73
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674094/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674094/)

---

# Intuition
The goal is to find the minimum time required for the word to revert to its initial state by performing certain operations at every second.

# Approach
We can iterate over the word and, at each step, remove the first k characters and add any k characters to the end of the word. We check if the current state is equal to the initial state. If it is, we return the count of iterations.

# Complexity
- Time complexity: O(n*n)

- Space complexity: O(1)

# Code
```
func minimumTimeToInitialState(word string, k int) int {
    count := 1
    for i := k ; i < len(word); i +=k {
        startWord := word[i:]
        if strings.HasPrefix(word, startWord) {
            break
        } 
        count++
    }
    return count
}
```