# Racket, 100/100

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/2937009/](https://leetcode.com/problems/number-of-distinct-averages/solutions/2937009/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Rather than search for the max and min each time, it's best to just sort the whole array, and peel off the beginning values as the minima and the end values as the maxima.

# Approach
<!-- Describe your approach to solving the problem. -->
I wrote get-end-averages, which makes an array out of the averages of two arrays. I feed the front and back halves of the sorted array to this, remove the duplicates from the result, and get the length.

I'm still a Racket noob - please post if you have a better method!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The most complex part is the sort, which is n log n.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We're creating the sorted list, the front half, and the back half, along with (I assume) a hashmap during remove-duplicates. These should all be order n in size.

# Code
```
(define (get-end-averages fwd bak)
  (if (empty? fwd) empty
  (cons (/ (+ (car fwd) (car bak)) 2) (get-end-averages (cdr fwd) (cdr bak)))))

(define/contract (distinct-averages nums)
  (-> (listof exact-integer?) exact-integer?)
    (let* ((arranged (sort nums <))
           (halflen (/ (length nums) 2))
           (fwd (take arranged halflen))
           (bak (take (reverse arranged) halflen))
           (averages (get-end-averages fwd bak)))
        (length (remove-duplicates averages)))
  )
```