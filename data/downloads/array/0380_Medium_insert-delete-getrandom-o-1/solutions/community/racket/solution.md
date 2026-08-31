# Simple Racket solution

**Author:** dmitryx64
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/4577076/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/4577076/)

---

## Intuition

At first I wanted to implement a hash set based on array, but there was no fast way to randomly pick items with the same probability from it.
So I understood that there should be an array storing all the items, so that I can pick a random element with `O(1)`, but also I have to came up with that fast insert and remove operations.

## Approach

So to randomly pick an item I have to maintain an array with all the values in it. To be able to remove from the array and check if a value exists in the array I have to maintain a hash table with (value, position in the array) pairs.

Operations will look like this:

```text
remove(value):
  1. check if value exists and result with false if not
  2. get value's position using the hash table
  3. swap with the last position in the array and shrink the array
  4. remove value from hash table

insert:
  1. check if value exists and result with false if yes
  2. add (value, array size) pair to the hash table
  3. append value to the array

get-random:
  1. pick random index from the array
``` 

## Complexity

All the operations take constant time in both hash table and array. Appending to the array some times copies all the previously added items, but it happens rare enough to state that this operation has constant time complexity on the average.

- Time complexity:
    + insert $$O(1)$$
    + remove $$O(1)$$
    + get-random $$O(1)$$

- Space complexity:
    + $$O(n)$$

## Code
```racket
(define randomized-set%
  (class object%
    (super-new)

    (field [vals (make-gvector #:capacity 256)]
           [positions (make-hash)])
    
    ; insert : exact-integer? -> boolean?
    (define/public (insert val)
      (if (hash-has-key? positions val)
          #f
          (begin
            (hash-set! positions val (gvector-count vals))
            (gvector-add! vals val)
            #t)))
    ; remove : exact-integer? -> boolean?
    (define/public (remove val)
      (if (hash-has-key? positions val)
          (let
            ([position (hash-ref positions val)])
            (begin
              (hash-remove! positions val)
              (gvector-set! vals position (gvector-ref vals (- (gvector-count vals) 1)))
              (gvector-remove-last! vals)
              (when (< position (gvector-count vals))
                (hash-set! positions (gvector-ref vals position) position))
              #t))
          #f))
    ; get-random : -> exact-integer?
    (define/public (get-random)
      (gvector-ref vals (random (gvector-count vals))))))
```