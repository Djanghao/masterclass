# Fast and Simple Racket Solution (100%)

**Author:** PineappleW
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/3516672/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/3516672/)

---

# Intuition
We make use of three built-in Racket functions: `group-by`,  `sort`, and `flatten`.

# Approach
1. Group the input list by values, creating a frequency distribution.
`(group-by values nums)`

2. Sort the resulting list of lists based on a complex comparator. If the two sublists have differenct lengths (i.e. the numbers appear with different frequencies), sort the by length (i.e. frequency). If they have the same length/frequency, sort them by value descending instead.
```
(sort ... (lambda(x y) (if (= (length x) (length y))    # same frequency?
                           (> (first x) (first y))      # if so, by value.
                           (< (length x) (length y))))) # if not, by length.
```

3. We now have a list of lists, but the numbers are in the right order. All we have to do is get rid of all the nesting, which we do with `flatten`.

# Code
```
(define/contract (frequency-sort nums)
  (-> (listof exact-integer?) (listof exact-integer?))  
  (flatten (sort (group-by values nums)
                 (lambda(x y) (if (= (length x) (length y))
                                  (> (first x) (first y))
                                  (< (length x) (length y)))))))

  
```