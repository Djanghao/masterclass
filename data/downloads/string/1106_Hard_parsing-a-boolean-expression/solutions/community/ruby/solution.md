# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5944478/](https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5944478/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {String} expression
# @return {Boolean}
def parse_bool_expr(expression)
    st = []

    # Traverse through the expression
    expression.each_char do |curr_char|
        if curr_char == "," || curr_char == "("
            curr_char  # Skip commas and open parentheses
        end

        # Push operators and boolean values to the stack
        if ["t", "f", "!", "&", "|"].include?(curr_char)
            st.push(curr_char)
        end

        # Handle closing parentheses and evaluate the subexpression
        if curr_char == ")"
            has_true = false
            has_false = false

            # Process the values inside the parentheses
            while !["!", "&", "|"].include?(st.last)
                top_value = st.pop
                has_true = true if top_value == "t"
                has_false = true if top_value == "f"
            end

            # Pop the operator and evaluate the subexpression
            op = st.pop
            if op == "!"
                st.push(has_true ? "f" : "t")
            elsif op == "&"
                st.push(has_false ? "f" : "t")
            else
                st.push(has_true ? "t" : "f")
            end
        end
    end

    # The final result is at the top of the stack
    return st.last == "t"
end
```