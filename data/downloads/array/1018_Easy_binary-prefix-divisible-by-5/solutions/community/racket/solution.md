# Racket solution + general advice for all languages on modulo math

**Author:** hunkyjimpjorps
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/1199926/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/1199926/)

---

Since `A` can have up to 30,000 elements, and 2<sup>30 000</sup> is well out of easy brute-force computing range, we need to look at what the problem's asking and seeing if there's a simpler iterative way to check the divisibility.

First, note that if the first *i* digits from *A*<sub>0</sub> to *A*<sub>*i*</sub> represent *S*<sub>*i*</sub>, then the first *i + 1* digits represent *S*<sub>*i*+1</sub>= 2*S*<sub>*i*</sub> + *A*<sub>*i*+1</sub>.

For this problem, the relevant properties of modulo are:
1. (*a* + *b*) mod *n* = *a* mod *n* + *b* mod *n*
2. (*ka* mod *n*) = *k*(*a* mod *n*)
3. (*a* mod *n*) mod *n* = *a* mod *n*

Applying this to the recursive definition of the value:

*S*<sub>*i*+1</sub> mod 5 = (2*S*<sub>*i*</sub> + *A*<sub>*i*+1</sub>) mod 5
= 2*S*<sub>*i*</sub> mod 5 + *A*<sub>*i*+1</sub> mod 5 (identity 1)
= 2(*S*<sub>*i*</sub> mod 5) + *A*<sub>*i*+1</sub> mod 5 (identity 2)
= [2(*S*<sub>*i*</sub> mod 5) + *A*<sub>*i*+1</sub> mod 5] mod 5 (identity 3)
= [2(*S*<sub>*i*</sub> mod 5) + *A*<sub>*i*+1</sub>] mod 5 (since *A*<sub>*n*</sub> is always either 1 or 0)


The only value we need to carry forward is *S*<sub>*i*</sub> mod 5, rather than *S*<sub>*i*</sub> itself.  Starting from *S*<sub>0</sub> being either 0 or 1 depending on the first bit, and thus *S*<sub>0</sub> mod 5 = 0 or 1, we can iteratively compute every remainder afterwards without directly computing any full representations of the binary number.

For example, for the example `[0,1,1,1,1,1]`:

* 0<sub>b</sub> = 0; 0 mod 5 = 0 \u2192 true
* 01<sub>b</sub> = 1; [2(0) + 1] mod 5 = 1 \u2192 false
* 011<sub>b</sub> = 3; [2(1) + 1] mod 5= 3 \u2192 false
* 0111<sub>b</sub> = 7; [2(3) + 1] mod 5 = 7 mod 5 = 2 \u2192 false
* 01111<sub>b</sub> = 15; [2(2) + 1] mod 5 = 5 mod 5 = 0 \u2192 true
* 011111<sub>b</sub> = 31; [2(0) + 1] mod 5 = 1 \u2192 false

Here's my solution in Racket, but the general algorithm would work for any language.

```scheme
(define/contract (prefixes-div-by5 A)
  (-> (listof exact-integer?) (listof boolean?))
  (define ns (make-vector (length A) #false)) ; Preallocate a vector
  (for/fold ([acc 0]) ; Accumulator to keep track of values of S_i mod 5
            ([b (in-list A)] ; Iterate over every bit
             [i (in-naturals)]) ; and its associated vector index
    (let ([test-val (remainder (+ (* 2. acc) b) 5)]) ; Calculate S_i+1 mod 5 based on S_i mod 5
      (when (= 0 test-val) (vector-set! ns i #true)) ; If S_i+1 mod 5 = 0, flip its associated vector element to true
      test-val)) ; Assign test-val to acc and continue folding
  (vector->list ns))
```