# Ruby - Short one line

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1436417/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1436417/)

---

Using standard library [Enumerable#minmax](https://apidock.com/ruby/Enumerable/minmax) and [Integer#gcd](https://apidock.com/ruby/Integer/gcd):

```ruby
def find_gcd(nums)
  nums.minmax.reduce(:gcd)
end
```

Time compexity: `O(log n)` ([for GCD](https://codility.com/media/train/10-Gcd.pdf))