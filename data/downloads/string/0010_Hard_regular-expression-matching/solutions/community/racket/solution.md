# Regular Expression Matching with Dynamic Programming in Racket

**Author:** dwish24
**Votes:** 0
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/5762800/](https://leetcode.com/problems/regular-expression-matching/solutions/5762800/)

---

# Intuition
The problem is to determine if a string `s` matches a pattern `p` where the pattern may include `.` which matches any character and `*` which matches zero or more of the preceding element. This is a classic regular expression matching problem.

# Approach
1. **Dynamic Programming (DP) Approach:**
- We use a 2D dynamic programming approach where `dp(i, j)` indicates whether the substring `s[i:]` matches the pattern `p[j:]`.
- We use memoization to store the results of subproblems to avoid redundant computations and improve efficiency.
2. **Memoization:**
- A hash table is used to store the results of subproblems, keyed by `(i, j)` where `i` is the current index in string `s` and `j` is the current index in pattern `p`.
3. **Recursive Solution:**
- **Base Case:** If we have reached the end of the pattern `p`, check if we are also at the end of the string s. If so, return `#t` (true) if both are at the end; otherwise, return `#f` (false).
- **Recursive Case:** If the current character in the pattern `p` is `*`, it can either:
    - Match zero occurrences of the preceding character (skip the `*` and the preceding character).
    - Match one or more occurrences of the preceding character (proceed with the string `s` and check the next character).
If the current character in the pattern is `.`, it matches any single character in the string `s`.

# Complexity
- **Time complexity:** $O(m \	imes n)$, where `m` is the length of the string `s` and `n` is the length of the pattern `p`. Each subproblem is solved once, and there are $m \	imes n$ subproblems.

- **Space complexity:** $O(m \	imes n)$, for the memoization table which stores the results of each subproblem.

# Code
```racket []
(define (is-match s p)
  (define memo (make-hash))

  (define (dp i j)
    (cond
      [(hash-has-key? memo (cons i j))
       (hash-ref memo (cons i j))]
      [(>= j (string-length p))
       (let ([result (>= i (string-length s))])
         (hash-set! memo (cons i j) result)
         result)]
      [else
       (let* ([first-match (and (< i (string-length s))
                                (or (char=? (string-ref p j) #\\.)
                                    (char=? (string-ref s i) (string-ref p j))))]
              [result (if (and (< (+ j 1) (string-length p))
                               (char=? (string-ref p (+ j 1)) #\\*))
                          (or (dp i (+ j 2))
                              (and first-match (dp (+ i 1) j)))
                          (and first-match (dp (+ i 1) (+ j 1))))])
         (hash-set! memo (cons i j) result)
         result)]))

  (dp 0 0))
```