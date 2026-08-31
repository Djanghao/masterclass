# Racket, 100/100 (by default, few submissions)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/4113105/](https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/4113105/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is simple with built-in Racket functions.

# Approach
<!-- Describe your approach to solving the problem. -->
We split the string into words, reverse them, and join the result.

The one hitch in Racket is that you can't do much with strings without turning them into lists. So, the lambda which is mapped to the split words has to turn each string into a list of chars, reverse the list, and then combine it back into a string again.

# Complexity

Should be O(n) (but there's a lot of n's!)



# Code
```
(define/contract (reverse-words s)
  (-> string? string?)
    (string-join (map (lambda (w) (list->string (reverse (string->list w)))) (string-split s)))
  )
```