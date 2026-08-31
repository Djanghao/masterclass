# My thought process to approach it

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3447440/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3447440/)

---

Let's estimate the lower/upper bound of the minimum number of operations to see
what happens.

## Lower Bound

If we are lucky, each operation will convert a number to 1, then the lower bound
is `n = length(nums)`, or more precisely, `n - count(1, nums)`.
When this happens?
Obviously, if we have 1 in the input array, we can spread it to the whole array.

So we have this pseudocode:

```python
def solve(nums: list[int]):
    if nums.contains(1):
        return nums.len() - nums.count(1)
    else:
        ...
```

## Upper Bound

Then we estimate the upper bound. The case there is no 1.

Things start to become complex.

Let us start with a simple example.
We have two numbers: `[a, b]`, let `g = gcd(a, b)`.
We might have this operation sequence:

```
a1 <- g
b1 <- gcd(a1, b) = gcd(g, b) = g
a2 <- gcd(a1, b1) = gcd(g, g) = g
...
```

You might noticed that more operations are meaningless, because
the result is always `g`, that means we can do at most 2 operations for 2
elements array, if it will succeed to make them to be 1.

It's a good sign.
Let's see what happens for 3 elements array `[a, b, c]`.
This is a possible operation sequence:

```
a1 <- gcd(a, b)
b1 <- gcd(a1, b) = gcd(gcd(a, b), b) = gcd(a, b)
c1 <- gcd(b1, c) = gcd(gcd(a, b), c) = gcd(a, b, c)
a2 <- gcd(a1, b1) = gcd(a, b)
b2 <- gcd(b2, c1) = gcd(a, b, c)
c2 <- gcd(b2, c1) = gcd(a, b, c)
...
```

Look what happens! the new `a` will always be one of `gcd(a, b)`, `gcd(a, b, c)`
the new `b` will always be one of `gcd(a, b)`, `gcd(b, c)`, or `gcd(a, b, c)`.

If these gcd values don't contain 1, then it fails. Otherwise, we can do at most
2 operations to make the array appears 1.

Finally, we can do at most `n-1` operations to make the `n` length array appears 1.

## Generalize

In this case, suppose `nums[i]` will be the first 1, it might be the values

```
gcd(nums[i], nums[i+1])
gcd(nums[i], nums[i+1], nums[i+2])
...
gcd(nums[i-1], nums[i])
gcd(nums[i-2], nums[i-1], nums[i])
...
gcd(nums[i-1], nums[i], nums[i+1])
...
```

Any gcd of a subarray that contains `nums[i]` might be the first 1.

We can enumerate all subarrays to find the minimum length subarray that gcd is 1.

Finally, the pseudocode:

```python
def solve(nums: list[int]):
    if nums.contains(1):
        return nums.len() - nums.count(1)
    else:
        min_len = inf
        for subarray in subarrays_of(nums):
            if gcd(subarray) == 1:
                min_len = min(min_len, subarray.len())
        if min_len == inf:
            return -1
        else:
            return (nums.len() - 1) + (min_len - 1)
```

# Code

```scheme
(define (min-operations nums)
  (define inf #e1e9)
  (define min-len inf)
  (define n (length nums))
  (for* ([j (inclusive-range 1 n)]
         [i j])
    (when (= 1 (apply gcd (sublist nums i j)))
      (set! min-len (min min-len (- j i)))))

  (if (= min-len inf)
      -1
      (+ (- n (max 1 (count (\u03BB (x) (= x 1)) nums)))
         (- min-len 1))))

(define (sublist lst from to)
  (drop (take lst to) from))

```

## Conclusion

The only important idea is to estimate the space of the result.

Upvote if you like it.
