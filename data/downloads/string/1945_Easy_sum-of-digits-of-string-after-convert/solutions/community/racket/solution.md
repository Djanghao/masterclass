# Get lucky on Racket

**Author:** bigbag
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5728404/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5728404/)

---

# Intuition
The problem can be broken down into two main steps: converting the string to a number based on letter positions, and then repeatedly summing the digits of that number. The key is to implement these operations efficiently and apply them the correct number of times.

# Approach
1. **String to Number Conversion**:
   - Create a helper function `char->num` that converts each character to its alphabetical position (a=1, b=2, ..., z=26).
   - Use `string->num` to apply this conversion to the entire string, concatenating the results into a single number.

2. **Digit Sum Transformation**:
   - Implement `sum-digits` to calculate the sum of digits for a given number.
   - Use recursion in `transform` to apply the digit sum operation `k` times.

3. **Main Function**:
   - In `get-lucky`, first convert the string to a number, then apply the transformation `k` times.

4. **Racket-specific Optimizations**:
   - Use Racket's built-in functions like `string->list`, `char->integer`, and `string-append` for efficient string manipulation.
   - Leverage Racket's functional programming features, such as `compose` and `map`, for cleaner and potentially more optimized code.

# Complexity
- Time complexity: O(n * k), where n is the length of the input string and k is the number of transformations.
  - String to number conversion: O(n)
  - Each transformation: O(log m), where m is the current number (as we're dealing with digits)
  - We perform k transformations: O(k * log m)
  - Overall: O(n + k * log m), which simplifies to O(n * k) in the worst case when m is very large

- Space complexity: O(n)
  - The space is mainly used in the initial string to number conversion, which can require O(n) space to store the converted number.
  - The recursive calls in `transform` and `sum-digits` use constant extra space and the recursion depth is limited by k and log m respectively, which are typically much smaller than n.

# Code
```racket []
(require racket/contract)

(define/contract (get-lucky s k)
  (-> string? exact-integer? exact-integer?)
  
  (define (char->num c)
    (- (char->integer c) 96))
  
  (define (string->num s)
    (string->number
     (apply string-append
            (map (compose number->string char->num)
                 (string->list s)))))
  
  (define (sum-digits n)
    (if (< n 10)
        n
        (+ (remainder n 10) (sum-digits (quotient n 10)))))
  
  (define (transform n k)
    (if (zero? k)
        n
        (transform (sum-digits n) (sub1 k))))
  
  (transform (string->num s) k))
```