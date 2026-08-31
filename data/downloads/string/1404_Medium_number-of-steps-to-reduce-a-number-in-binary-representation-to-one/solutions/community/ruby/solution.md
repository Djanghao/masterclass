# Ruby solution.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5233063/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5233063/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @return {Integer}
def num_steps(s)
    op = 0
    n = s.length
    carry = 0

    (n - 1).downto(1) do |i|
        if (s[i].to_i + carry) % 2 == 1
            carry = 1
            op += 2
        else
            op += 1
        end
    end
    
    op + carry # add carry to operations if there is any left at the end
end
```