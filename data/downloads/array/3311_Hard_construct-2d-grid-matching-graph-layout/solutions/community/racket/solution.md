# Simple Racket Solution and Explanation

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5877933/](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5877933/)

---

# Intuition

Let `neighbor` be a hashmap that contains all neighbors of a given node.

If we have placed the first row correctly, then we can place the second row using the first row, then the third row, ..., and the whole grid.

That means, we only need to make sure the first row to be placed correctly.

But how?

Let's start from the first element of the first row.

Let **degree** of a node be the number of its neighbors. Then the first element must have minimum or one of the minimum degree.

Let `degree` be a hashmap that contains the degree of each node. Then we determine the first element `start` by choosing a random minimum degree node:

```racket
(define min-degree (minimum (hash-values degree)))
(define start (for/first ([i n]
                          #:when (= min-degree (hash-ref degree i)))
                i))
```

# First Row

Because our method place nodes row by row. We have a hashset that contains all placed nodes:

```racket
(define seen (mutable-set))
```

For convenient, we will have a function `(avail-nei node)` to get the available placeable neighbors of `node`:

```racket
(define (avail-nei x)
  (define neix (hash-ref neighbor x))
  (filter (\u03BB (i) (not (set-member? seen i))) neix))
```

For the first element `start`, we have its placeable neighbors `(define nei1 (avail-nei start))`:

If `nei1` has no elements, then the whole grid only contains one element `start`. By the problem constraints `2 <= n`, it's impossible.

If `nei1` has 1 elements, then the whole grid is actually one row. So we can place it easily:

```racket
(define (place-single-row row)
  (match (avail-nei (car row))
    ['() row]
    [(list a) (set-add! seen a)
              (place-single-row (cons a row))]))

;; call with (place-single-row (list start))
```

Note `nei1` can't contain more than 2 elements. So the final case is that if `nei1` has 2 elements `x` and `y`, we randomly choose `x` to be the second element of the first row, and `y` to be the first element of the second row:

```
[start, x]
[y]
```

We only concentrate the first row, so we try to place the next element of `x`. Let `nei2` be `(avail-nei x)`. It should contain either 1 or 2 elements, remember `(avail-nei x)` only returns avaible placeable neighbors, `x` might have 2 or 3 neighbors, but `nei2` only contains at most 2 elements.

If `nei2` has one element, let it be the second element of the second row.

If `nei2` has two elements `a` and `b`. How to place them? it is either

```
[start, x, a]
[y,     b]
```

or

```
[start, x, b]
[y,     a]
```

Obviously the second element of the second row must be the neighbor of `y`. So if `a` is, we choose the second case, otherwise the first case.

This example implicits that we can't just place the first row, we need place both the first two rows. Luckily, the second row does not need the third row, so we just need the first two rows.

# The First Two Rows

Let `place-first-2rows` be the function that place first 2 rows. We have function `place-first-row` to complete the task that place the first row, then place every row according to its above row.

```racket
(define (place-first-row x)
  (match (avail-nei x)
    [(list a) (set-add! seen a)
              (place-single-row (list a x))]
    [(list a b) (set-add! seen a)
                (set-add! seen b)
                (place-first-2rows (list a x) (list b))]))

(define row1 (place-first-row start))
```

And `place-first-2rows`:

```racket
(define (place-first-2rows row1 row2)
  (define x (car row1))
  (define y (car row2))

  (match (avail-nei x)
    [(list a)
     (for ([i (cons a row2)])
       (set-remove! seen i))
     row1]
    [(list a b)
     (set-add! seen a)
     (set-add! seen b)
     (if (memq a (hash-ref neighbor y))
         (place-first-2rows (cons b row1) (cons a row2))
         (place-first-2rows (cons a row1) (cons b row2)))]))
```

# The Next Row

Finally, we have function `(place-below-row row)` to return the next row of row `row`:

```racket
(define (place-below-row row)
  (let loop ([row row]
             [row2 '()])
    (cond [(null? row) (reverse row2)]
          ;; the next row does not exist
          [(null? (avail-nei (car row))) (reverse row2)]
          [else
           (define avlx (avail-nei (car row)))
           (define a (car avlx))
           (set-add! seen a)
           (loop (cdr row) (cons a row2))])))

```

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code
```racket []
(define (construct-grid-layout n edges)
  (define neighbor (make-hash))

  (for ([e edges])
    (match-define (list a b) e)
    (hash-update! neighbor a (\u03BB (old) (cons b old)) '())
    (hash-update! neighbor b (\u03BB (old) (cons a old)) '()))

  (define degree
    (for/hash ([(x nei) neighbor])
      (values x (length nei))))

  (define seen (mutable-set))

  (define (avail-nei x)
    (define neix (hash-ref neighbor x))
    (filter (\u03BB (i) (not (set-member? seen i))) neix))

  (define (place-first-2rows row1 row2)
    (define x (car row1))
    (define y (car row2))

    (match (avail-nei x)
      [(list a)
       (for ([i (cons a row2)])
         (set-remove! seen i))
       row1]
      [(list a b)
       (set-add! seen a)
       (set-add! seen b)
       (if (memq a (hash-ref neighbor y))
           (place-first-2rows (cons b row1) (cons a row2))
           (place-first-2rows (cons a row1) (cons b row2)))]))

  (define (place-single-row row)
    (match (avail-nei (car row))
      ['() row]
      [(list a) (set-add! seen a)
                (place-single-row (cons a row))]))

  (define (place-first-row x)
    (match (avail-nei x)
      [(list a) (set-add! seen a)
                (place-single-row (list a x))]
      [(list a b) (set-add! seen a)
                  (set-add! seen b)
                  (place-first-2rows (list a x) (list b))]))

  (define (place-below-row row)
    (let loop ([row row]
               [row2 '()])
      (cond [(null? row) row2]
            [(null? (avail-nei (car row))) row2]
            [else
             (define avlx (avail-nei (car row)))
             (define a (car avlx))
             (set-add! seen a)
             (loop (cdr row) (cons a row2))])))

  (define min-degree (minimum (hash-values degree)))
  (define start (for/first ([i n]
                            #:when (= min-degree (hash-ref degree i)))
                  i))

  (set-add! seen start)
  (define row1 (place-first-row start))

  (define rows (list row1))
  (let loop ([row1 row1])
    (define row2 (reverse (place-below-row row1)))
    (when (not (null? row2))
      (set! rows (cons row2 rows))
      (loop row2)))

  rows)


(define (minimum lst)
  (foldl min (car lst) lst))

```