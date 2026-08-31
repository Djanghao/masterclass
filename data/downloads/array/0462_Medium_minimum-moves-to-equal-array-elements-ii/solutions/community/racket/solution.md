# Racket Solution | Explanation | Probably the only person to do this in Racket

**Author:** nebby22
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/1218841/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/1218841/)

---

```
(define/contract (min-moves2 nums) 
    (-> (listof exact-integer?) exact-integer?)
        (foldl (lambda (nums-in average result)
            (+ result (abs (- nums-in average))))
            0
            nums
            (make-list (length nums) (list-ref (sort nums <) (arithmetic-shift (length nums) -1))))
)
```

I learned Racket earlier this year and after doing this in Java decided to have some fun in Racket

This implementation is quite similar to the other solutions here, you find the median and compare the other values to it

My syntax might be bad, its been a while since I've coded Racket

My solution finds the median ```(list-ref (sort nums <) (arithmetic-shift (length nums) -1))))``` by sorting the list and grabbing the value at the middle index
This uses a bit shift to find the half way point since the normal divide procedure returns a float

The median is then used to create a list of equal length as the input list ```(make-list (length nums) (list-r...``` since the foldl wants to use a list instead of a single number 

The foldl then takes the input list and the medians and finds the absolute difference between the input value and median ```(+ result (abs (- nums-in average))))``` and accumlates it in ```result```

This is then returned from the foldl at the end.

