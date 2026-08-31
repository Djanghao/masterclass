# [Ruby] 1-liner

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2977759/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2977759/)

---

```ruby
def count_digits(n) = n.digits.count { n % _1 == 0 }
```