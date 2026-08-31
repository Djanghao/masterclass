# Racket one liner

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/1251653/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/1251653/)

---

```scheme
(define/contract (kids-with-candies candies extraCandies)
  (-> (listof exact-integer?) exact-integer? (listof boolean?))
    (map (lambda (x) (>= (+ x extraCandies) (car (sort candies >)))) candies))
```