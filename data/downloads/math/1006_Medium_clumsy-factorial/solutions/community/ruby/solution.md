# Ruby O(n)

**Author:** reedperkins
**Votes:** 0
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/4657442/](https://leetcode.com/problems/clumsy-factorial/solutions/4657442/)

---

# Intuition
If we have the final computation string, we can simply `eval` it to get the answer

# Approach
We build up the computation string incrementally by looping over n and appending an operation plus a number to an array each pass. To append the correct operation, we use a counter to record our current position, and use this to index into the ops array (making sure to apply the modulus operator to ensure we wrap the index around appropriately). Finally, we eval the stringified array.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
# @param {Integer} n
# @return {Integer}
def clumsy(n)
    ops = %w[* / + -]
    result = [n]
    count = 0
    (n - 1).downto(1) do |i|
        op = ops[count % 4]
        count += 1
        result << op
        result << i
    end
    str = result.join(" ")
    eval(str)
end
```