# Crawler Log Folder on Racket

**Author:** bigbag
**Votes:** 1
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/5467991/](https://leetcode.com/problems/crawler-log-folder/solutions/5467991/)

---

# Intuition
The problem essentially asks us to track the depth of our current position in a file system as we process a series of navigation commands. The key insight is that we can represent our position as a single integer (depth) and update it based on each command.

# Approach
- Initialize a depth counter to 0 (representing the main folder).
- Iterate through each log entry:
- If we encounter "../", decrease the depth by 1, but never go below 0.
- If we see "./", keep the depth unchanged.
- For any other entry (representing a child folder), increase the depth by 1.
- After processing all logs, the final depth value represents the minimum number of "../" operations needed to return to the main folder.

In Racket, we implement this using a for/fold loop to maintain and update the depth as we process each log entry. The process-log helper function encapsulates the logic for updating the depth based on each log entry type.

# Complexity
- Time complexity: O(n) 
Where n is the number of log entries. We process each log entry exactly once in a single pass through the input list.

- Space complexity: O(1)
The algorithm uses a constant amount of extra space regardless of the input size. We only maintain a single depth counter and don't use any data structures that grow with the input.

# Code
```
(define (min-operations logs)
  (define (process-log log depth)
    (cond
      [(string=? log "../") (max 0 (sub1 depth))]
      [(string=? log "./") depth]
      [else (add1 depth)]))
  
  (for/fold ([depth 0])
            ([log logs])
    (process-log log depth)))
```