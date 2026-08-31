# Ruby || DP || T/S O(n^2)/O(n)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/4701052/](https://leetcode.com/problems/largest-divisible-subset/solutions/4701052/)

---


# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$ O(n) $$

# Code
```ruby
class Numeric
    def max(v) = (self < v ? v : self)
end

def largest_divisible_subset(nums)
    ms, mi = 1, 0
    dp = nums.sort!.each_with_index.each_with_object(Array.new(nums.size, 1)) {|(v, i), dp|
        i.times {|j|
            next unless (v % nums[j]).zero?
            ms, mi = dp[i], i if ((dp[i] = dp[i].max(dp[j] + 1)) > ms)
        }
    }
    mn = nums[mi]
    mi.downto(0).each_with_object([]) {|i, r|
        next unless ((mn % nums[i]).zero? && dp[i] == ms)
        r << (mn = nums[i])
        ms -= 1
    }
end
```