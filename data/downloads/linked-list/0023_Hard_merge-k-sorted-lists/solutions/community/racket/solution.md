# Racket successive merge of 2 lists until only 1 is remaining

**Author:** bhrgunatha
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/1211378/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/1211378/)

---

I don't know if  [racket's heap module](https://docs.racket-lang.org/data/Binary_Heaps.html) is available so my approach is to split the list into two halves and merge the left half result with the right half result using a 2-way merge.

Luckily [I have a 2 way merge!](https://leetcode.com/problems/merge-two-sorted-lists/) 
```
(define (merge-two-lists l1 l2)
  (cond [(not l1) l2]
        [(not l2) l1]
        [(< (list-node-val l1) (list-node-val l2))
         (set-list-node-next! l1 (merge-two-lists (list-node-next l1) l2))
         l1]
        [else
         (set-list-node-next! l2 (merge-two-lists l1 (list-node-next l2)))
         l2]))
```

I don't want to actually split `lists` so I convert it into a vector and then use 2 pointers `lo` and `hi` with a separate procedure `successive-merge` that merges all the lists between `lo` and `hi` together. 

Somewhat like a binary search the trick is to use the `mid` point between `lo` and `hi` to create 2 distinct ranges and recursively call successive-merge` on `lo - mid` and `mid - hi` and  use the 2 way merge to create the final fully merged list. 

I made successive-merge` a nested procedure so it has access to the vector without having to pass it as an argument to make the logic a bit clearer.

```
(define/contract (merge-k-lists lists)
  (-> (listof (or/c list-node? #f)) (or/c list-node? #f))
  (define ls (list->vector lists))

  (define (successive-merge lo hi)
    (cond [(= lo hi) (vector-ref ls lo)]
          [else (define mid (arithmetic-shift (+ lo hi) -1))
                (merge-two-lists
                 (successive-merge lo mid)
                 (successive-merge (add1 mid) hi))]))

  (cond [(null? lists) #f]
        [else (successive-merge 0 (sub1 (length lists)))]))
```