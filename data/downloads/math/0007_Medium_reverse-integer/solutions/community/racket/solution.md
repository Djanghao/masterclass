# Multiple Racket Solutions

**Author:** edalorzo
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/1373343/](https://leetcode.com/problems/reverse-integer/solutions/1373343/)

---

I have played with this problem for a few hours today, trying to figure out a way to obtain 100% of runtime, alas unsuccessfully. I'm fairly new to Racket, so some of my solutions could be improved. 

### Attempt 1: Reversed String
For me, the most obvious and easiest solution was to convert the integer to a string and just reverse the characters, then back to an integer. Curiously, this has been my fastest solution so far (90%).

The problem with my solution here is that it wouldn't eagerly detect any overflow. If my function is given a number of 10^10, it would still reverse it all and then check to find the overflow afterward, in the fully reversed number. Obviously, that would waste time if the number is too big.

```scheme
(require (rename-in racket [reverse rb:reverse]))

(define min-int -2147483648)
(define max-int 2147483647)

(define (overflow? n)
  (or (> n max-int) (< n min-int)))

(define/contract (reverse x)
  (-> exact-integer? exact-integer?)
  (let* ([reverse-int (compose string->number list->string rb:reverse string->list ~a abs)]
          [answer (reverse-int x)])
    (if (overflow? answer) 0 
      (if (>= x 0) answer (- answer)))))
```

### Attempt 2: Arithmetic with Indices

Then, I decided to use arithmetic to do the work. Here I was bit naive at the beginning, and what I tried to accomplish was to divide the number in a list of integers e.g. `1978` becomes `'(1 9 7 8)`, and then I indexed this list e.g. `'((0 1) (1 9) (2 7) (3 8))`, which I used later to elevate the number to the right power of 10 using their index: `1 * 10^0 + 9 * 10^1 + 7 * 10^2 +  8 * 10^3 =  8791`.

The stupid thing in this solution is that I had to iterate twice, once to get the digits, and another one to do the power of 10 arithmetic. Up to this point I should have thought of the correct/best solution, I just didn't see it. I feel stupid now, but it was so easy to just go from here to a single loop doing all the math, but I failed to see it.

```scheme
(define/contract (reverse x)
  (-> exact-integer? exact-integer?)
  (letrec ([loop (lambda (x xs)
                  (if (zero? x) xs 
                    (let-values ([(x r) (quotient/remainder x 10)])
                      (loop x (cons r xs)))))]
            [answer (for/sum ([(n p) (in-indexed (loop x empty))]) (* n (expt 10 p)))])   
    (if (overflow? answer) 0 
      (if (>= x 0) answer (- answer)))))
```

### Attempt 3: Arithmetic with Logarithms

The fact that I could use powers of 10 with indices to solve the problem derailed me for a while. I noticed that if I used arithmetic to decompose the big number into digits, I would always start at the least significant digit (e.g. 8 in 1978), which in the reverse number should be the most significant digit (i.e. 8791). In other words, my previous algorithm was always starting the work at the last digit I should place in the reverse number. I wonder, what could I do to start in the opposite direction? For that I needed to know how many digits the number had first.

Well, if the number is 1978, I can use logarithms to determine how many digits it has, and once I know that, I could divide the big number by the corresponding power of 10 to get the first digit. For example, log10(1978) = 3.29, so it means that if I divide 1978 / 10 ^ 3, the quotient should be the first digit, i.e. 1, and the remainder is 978, for which I can do the same thing. Doing this, I could go over from the most significant digit first.

What I thought was the advantage of this approach is that I didn't need to iterate twice, since I could do all the math as I went decomposing the digits, and by the end, I would have the reversed number already. (Again this is me failing to see how to fix attempt 2, and I was just trying a different approach here)

My solution is not so bad, but it is more computationally expensive than the suggested best solution.

```scheme
(define (power-of n)
  (if (zero? n) n (inexact->exact (floor (/ (log (abs n)) (log 10))))))

(define (reverse-int x pl [pr 0] [rev 0])
  (if (zero? x) rev
    (let*-values ([(p10) (expt 10 pl)]
                  [(q r) (quotient/remainder x p10)])
      (reverse-int (- x (* q p10)) (- pl 1) (+ pr 1) (+ rev (* q (expt 10 pr)))))))

(define/contract (reverse x)
  (-> exact-integer? exact-integer?)
    (let ([answer (reverse-int x (power-of x))])
      (if (not (overflow? answer)) answer 0)))
```

### The Suggested Solution

At this point, I thought I was tired and I wanted to know what was "the right" and most efficient solution to the problem. That's when I learned what I failed to see with my second attempt. How simple it was to accomplish this in a single iteration, duh!

What I don't think I would have thought of was that of determining the overflow eagerly. 

Anyways, I did an implementation of the algorithm in Racket after I read the solution and cuirously, this is not the fastest solution I've found. I still don't know which solution accomplishes a 100% of runtime performance.

```scheme
(define min-int-by-10 (quotient -2147483648 10))
(define max-int-by-10 (quotient 2147483647 10))

(define (overflows? n r)
  (or (> n max-int-by-10) (and (= n max-int-by-10) (> r 7))
      (< n min-int-by-10) (and (= n min-int-by-10) (< r -8))))

(define (reverse-int x [rev 0])
  (if (zero? x) rev
    (let-values ([(q r) (quotient/remainder x 10)])
      (if (overflows? rev r) 0
          (reverse-int q (+ (* rev 10) r))))))

(define/contract (reverse x)
  (-> exact-integer? exact-integer?)
    (reverse-int x))
```

I think this was enough already. Time to move on to something else :-)
