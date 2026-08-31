# Ruby - Two lines

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/1038065/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/1038065/)

---

### Factorize number
To factorize number can use built in method [prime_division](https://apidock.com/ruby/Prime/prime_division) from class [Prime](https://ruby-doc.org/stdlib-2.6.1/libdoc/prime/rdoc/Prime.html#method-i-prime_division)

### Solve for k = p ** e

If `k == p ** e` where `p` is a prime number then answer equals to combinations with repetition of `e` elements in `n` position.

### General case

```
k = p_1**e_1 * p_2**e_2 * .... * p_n**e_n
```

In general case answer is equal to multiplicatin of combinations with repetition for all pairs of `ei` and `n`.

### Combinations with repetition formula:

```
           (k+n-1)!
 CR(n,k) = -----------
           (n-1)! k!
```

### Solution

```ruby
require 'prime'

def ways_to_fill_array(qs)
  cr = ->(n, e) { (1..e).reduce(1) { |cr, i| cr * (i + n - 1) / i } }
  qs.map { |n, k| k.prime_division.reduce(1) { |res, (p, e)| res * cr[n, e] % 1000000007 } }
end
```