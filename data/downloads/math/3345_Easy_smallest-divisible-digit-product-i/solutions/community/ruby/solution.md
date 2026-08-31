# Ruby 0ms one-liner, faster than 100%

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6092776/](https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6092776/)

---

```ruby []
# @param {Integer} n
# @param {Integer} t
# @return {Integer}
def smallest_number(n, t)
  (n..).find { _1.digits.reduce(:*) % t == 0 }  
end
```