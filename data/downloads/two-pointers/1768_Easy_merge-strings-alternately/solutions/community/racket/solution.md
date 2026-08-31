# Racket, 100/100 (by default, few submissions)

**Author:** ctd
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/3428909/](https://leetcode.com/problems/merge-strings-alternately/solutions/3428909/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Convert the words to lists of char's. If one list is empty, return the entirety of the other list. If neither is empty, return the head of the first list, followed by the head of the second, followed by the interlaced remainders.

# Approach
<!-- Describe your approach to solving the problem. -->
This is a more primitive version than Dr Neptune's version, using only cons, cond, and recursion (okay, and string->list and list->string).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - n operations for the split and join, and n for the interlacing.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - n for the list version of the words.

# Code
```
(define (merge-list-alternately wl1 wl2)
    (cond ((empty? wl1) wl2)
          ((empty? wl2) wl1)
          (else (cons (car wl1) (cons (car wl2) (merge-list-alternately (cdr wl1) (cdr wl2))))))
)

(define/contract (merge-alternately word1 word2)
  (-> string? string? string?)
    (list->string (merge-list-alternately (string->list word1) (string->list word2)))
  )
```