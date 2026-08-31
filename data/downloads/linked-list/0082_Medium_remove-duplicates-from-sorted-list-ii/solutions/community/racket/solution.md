# Racket with list operations

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1820219/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1820219/)

---

The idea is the following:
1. convert the linked list to a list of integers
2. count the number of each value
3. filter the hash map so it only contains those values with a count of 1
4. get the keys for the filtered hash map
5. sort them
6. convert the list of integers to a linked list

```
(define (linked-list->numbers ll)
  (if (not (list-node? ll))
      '()
      (append (list (list-node-val ll))
              (linked-list->numbers (list-node-next ll)))))

(define (numbers->linked-list numbers)
  (if (empty? numbers) #f (foldr list-node #f numbers)))

(define (hash-table-counter ls)
  (let ([counts (make-hash)])
    (for-each (\u03BB (v) (hash-update! counts v add1 0)) ls)
    counts))

(define (val-filter ht predicate)
  (for/hash ([(k v) (in-hash ht)] #:when (predicate v)) (values k v)))

(define (delete-duplicates head)
  (let ([counts (hash-table-counter (linked-list->numbers head))])
    ((compose1
      numbers->linked-list
      (curryr sort <)
      hash-keys
      (curryr val-filter (\u03BB (v) (= v 1))))
     counts)))
```