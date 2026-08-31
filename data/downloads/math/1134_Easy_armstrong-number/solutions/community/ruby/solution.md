# Simple Ruby Solution

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/5841578/](https://leetcode.com/problems/armstrong-number/solutions/5841578/)

---


# Code
```ruby []
# @param {Integer} n
# @return {Boolean}
def is_armstrong(n)
    k = n.to_s.length
    ans = 0
    n.to_s.split('').each do |n|
    ans += n.to_i ** k
    end 
    return ans == n ? true : false
end
```