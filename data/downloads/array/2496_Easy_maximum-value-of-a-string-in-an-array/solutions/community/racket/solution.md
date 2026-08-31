# Racket 100%/100% (by default)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3032510/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3032510/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Racket already has a function string->number which returns #f (false) if all characters aren't digits, so let's leverage that along with max and map.
# Approach
<!-- Describe your approach to solving the problem. -->
I wrote a separate function string-val which returns the number or the string length. I used this instead of a lambda to make things a little nicer.

I then mapped the function to the strs list, and applied max to the resulting list.

For some reason, large numbers resulted in a float output, which violated the function contract, so I wrapped the result with exact-round.

I'm still new to Racket, so please post any slicker version you come up with!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Converts each string once, and uses max. Both of these are O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
I map my function to the whole vec before taking max, so this is O(n). Using foldl could get a O(1) solution.

# Code
```
(define (string-val s)
    (let ((n (string->number s)))
        (if n n
        (string-length s))))

(define/contract (maximum-value strs)
  (-> (listof string?) exact-integer?)
    (exact-round (apply max (map string-val strs)))
  )
```