# Two Pointers in Ruby

**Author:** toshimaru
**Votes:** 3
**Link:** [https://leetcode.com/problems/string-compression/solutions/3681973/](https://leetcode.com/problems/string-compression/solutions/3681973/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->


# Approach
<!-- Describe your approach to solving the problem. -->

Two Pointers.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

$$O(1)$$

# Code

```rb
def compress(chars)
    walker, runner = 0, 0

    while runner < chars.size
        chars[walker] = chars[runner]
        count = 1
        while chars[runner] == chars[runner + 1]
            runner += 1
            count += 1
        end
        if count > 1
            count.to_s.each_char do |c|
                chars[walker += 1] = c
            end
        end
        runner += 1
        walker += 1
    end
    
    walker
end
```