# Go solution

**Author:** neelanjan_00
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/6000747/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/6000747/)

---

```go
func closetTarget(words []string, target string, startIndex int) int {
    // base case
	if words[startIndex] == target {
        return 0
    }
    
	// initialize pointers and other variables
    wordsCount := len(words)
    left := startIndex-1
    right := startIndex+1
    distance := 1
    
	// check if the target exists while incrementing the pointers
	// exit if we completer a circle and the target isn't found
    for {
        if left < 0 {
            left = wordsCount - 1
        }
        
        if right > (wordsCount - 1) {
            right = 0
        }
        
        if words[left] == target || words[right] == target {
            return distance
        }
        
        if left == right {
            return -1
        }
        
        left--;
        right++;
        distance++;
    }
    
	// this case is never reached
    return -1;
}
```