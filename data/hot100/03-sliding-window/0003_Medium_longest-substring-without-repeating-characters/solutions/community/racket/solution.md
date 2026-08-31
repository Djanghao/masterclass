# Racket Solution, Greedy O(N)

**Author:** frankli2598
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5600491/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5600491/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Greedy approach, add chars to substring until a conflict is found.
- If a conflict is found, then we can truncate the substring to remove the specific collision.
- In order to efficiently find out where to truncate the list, we use a map data structure to provide k-v access in amortized O(1) time.

# Approach
- Create a helper to turn the string into an enumerated charlist.
    - `l`: current list
    - `h`: map of chars->last encountered idx
    - `cur`: length of current run
    - `max-v`: maximum run encountered
- Initialize immutable hash, and starting values for recursion.
- Recursively iterate through list. We use a hashmap to retrieve the most recently encountered value for an element in O(1)-ish time.
- If an element isn't in map or the index is before our current run (we can use `i` - `idx` to figure out the first index we care about), then we want to:
    - Increment the current run by 1
    - Take max of prev recorded max run and current run
    - Add current char to hashmap
- If an element is within the range we care about, we want to truncate the current run so that it's excluded, which leaves a substring of length `i - idx`.
- If the list is null, terminate recursion and return current max value.

# Complexity
- Time complexity:
O(N), iterating through list

- Space complexity:
Worst case O(N), every elem is unique

# Code
```
(define/contract (length-of-longest-substring s)
  (-> string? exact-integer?)
    (substring (for/list ([c s] [i (range (string-length s))]) (cons i c)) (hash) 0 0)
  )

(define (substring l h cur max-v)
  (if (null? l)
    max-v
    (let* ([i (begin (caar l))] 
           [c (cdar l)] 
           [idx (hash-ref h c null)])
        (if (or (null? idx) (< idx (- i cur)))
            (substring (cdr l) (hash-set h c i) (+ cur 1) (max max-v (+ cur 1)))
            (substring (cdr l) (hash-set h c i) (- i idx) max-v)))))
            


```