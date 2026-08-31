# golang | intuitive tick by tick simulation with BFS. No DP, no double pointer, no nested loop | O(N)

**Author:** sam0737
**Votes:** 1
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2632853/](https://leetcode.com/problems/push-dominoes/solutions/2632853/)

---

```go
func pushDominoes(dominoes string) string {
    dx := []byte(dominoes)
    queue := []int{}
    for i := 0; i < len(dx); i++ {
        if dx[i] != '.' {
            // Put all pending falling dominoes into the BFS queue
            queue = append(queue, i)
        }
    }
    
    // BFS - Simulate the falling dominoes for each tick
    // Inside this loop, things happen in an atomic sense.
    // Note that confirmed fallen dominoes couldn't go back up (No need to back-track)
    for len(queue) > 0 {
        queue2 := []int{}
        for x := 0; x < len(queue); x++ {
            i := queue[x]
            
            if dx[i] == 'L' { // Process the falling `L`
                if i > 0 {
                    if dx[i-1] == 'r' {
                        // In the same tick this was pushed by an `R`, so it stands
                        dx[i-1] = '.'
                    } else if dx[i-1] == '.' {
                        // A standing domino! Now push it
                        dx[i-1] = 'L'
                        queue2 = append(queue2, i-1) // To be processed in the next tick
                    }
                }
            } else if dx[i] == 'r' || dx[i] == 'R' { // Process the falling 'R'
                dx[i] = 'R' // Commit the previous weak `r` to strong `R`
                if i < len(dx)-1 {
                    if dx[i+1] == '.' {
                        // A standing domino! Now push it
                        dx[i+1] = 'r' // Put a weak `r`, it might be reverted by a `L` in the same tick
                        queue2 = append(queue2, i+1) // To be processed in the next tick
                    }
                }
            } 
        }
        // Next tick
        queue = queue2
    }
    
    return string(dx)
}
```