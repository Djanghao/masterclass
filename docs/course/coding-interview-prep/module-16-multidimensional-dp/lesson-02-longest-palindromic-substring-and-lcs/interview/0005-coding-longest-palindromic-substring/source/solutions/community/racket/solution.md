# Longest Palindromic Substring in Racket

**Author:** dwish24
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/5762841/](https://leetcode.com/problems/longest-palindromic-substring/solutions/5762841/)

---

# Intuition
To find the longest palindromic substring in a given string, we need to identify substrings that read the same forwards and backwards. We can approach this problem by expanding around potential centers of the palindrome. The centers can be either a single character (for odd-length palindromes) or between two characters (for even-length palindromes).

# Approach
1. **Expand Around Center:** For each character in the string (and each pair of adjacent characters), expand outward as long as the substring remains a palindrome. This will help in determining the longest palindromic substring that can be centered at each position.
2. **Track the Longest Palindrome:** Keep track of the start and end indices of the longest palindrome found so far. Update these indices whenever a longer palindrome is identified.
3. **Return the Longest Palindrome:** Extract and return the substring using the start and end indices.

# Complexity
- **Time complexity:** $O(n^2)$, where $n$ is the length of the string. This is because we expand around each center, and each expansion takes linear time in the worst case.
- **Space complexity:** $O(1)$, excluding the space needed for the input and output. We use a constant amount of extra space for variables.

# Code
```racket []
(define (longest-palindrome s)
  (define (expand-around-center s left right)
    (let loop ([l left] [r right])
      (if (and (>= l 0)
               (< r (string-length s))
               (char=? (string-ref s l) (string-ref s r)))
          (loop (sub1 l) (add1 r))
          (values (add1 l) (sub1 r))))) ;; Return correct boundaries

  (define (find-longest-palindrome s)
    (define len (string-length s))
    (define start 0)
    (define end 0)
    (for ([i (in-range len)])
      ;; Odd-length palindromes centered at i
      (define-values (l1 r1) (expand-around-center s i i))
      ;; Even-length palindromes centered between i and i + 1
      (define-values (l2 r2) (expand-around-center s i (add1 i)))
      
      ;; Update the maximum length palindrome if necessary
      (when (> (- r1 l1) (- end start))
        (set! start l1)
        (set! end r1))
      (when (> (- r2 l2) (- end start))
        (set! start l2)
        (set! end r2)))
    (substring s start (add1 end))) 

  (find-longest-palindrome s))
```