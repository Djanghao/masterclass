# Easy Hash O(n)

**Author:** sleight42
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/5398428/](https://leetcode.com/problems/strobogrammatic-number/solutions/5398428/)

---

# Intuition
Iteration against case statement

# Approach
Case got too complicated. Saw some solutions used a map. but that's $$O(mn)$$. Hash is $$O(1)$$ so we get $$O(n)$$

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```ruby
def is_strobogrammatic(num)
    l = num.length
    h = {
        "0" => "0",
        "1" => "1",
        "8" => "8",
        "6" => "9",
        "9" => "6"
    }
    (0..l/2).each do |i|
        return false unless num[i] == h[num[num.length-i-1]]
    end
    true
end

```