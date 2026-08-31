# O(n) O(1). Comments included.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/4430564/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/4430564/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {String} s
# @param {String} chars
# @param {Integer[]} vals
# @return {Integer}
def maximum_cost_substring(s, chars, vals)
    # Get char values into value hash.
    value_hash = {}
    i = 0
    while i < chars.size
        value_hash[chars[i]] = vals[i] 
        i += 1
    end

    ("a".."z").each_with_index do |v, i|
        if !value_hash[v]
            value_hash[v] = i + 1
        end
    end
    
    # Traverse array backwards calculating cost.
    i = s.size - 2
    prev_val = [0,value_hash[s[s.size - 1]] ].max
    max_cost = prev_val
    while i > -1

        cost = value_hash[s[i]]
        if prev_val > 0
            cost += prev_val
        end
        max_cost = [cost, max_cost].max
        prev_val = cost

        i -= 1
    end

    max_cost
end
```