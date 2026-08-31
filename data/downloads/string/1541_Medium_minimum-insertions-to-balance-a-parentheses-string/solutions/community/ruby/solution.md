# Stack. Lots of comments.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/4739086/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/4739086/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
def min_insertions(s)
    ans = 0
    stack = []
    right_parenthesis_count = 0
    last_char = ""
    i = 0
    s.each_char do |char|
        if char == "("
            # This condition describes when having a "()" and then 
            # running into a "(". In this situation we add a 
            # closing parenthesis.
            if stack.size > 0 and last_char == ")" and right_parenthesis_count == 1
                ans += 1
                right_parenthesis_count -= 1
                stack.pop
            end
            stack << char
        else
            right_parenthesis_count += 1
            # If we have a "(" in our stack and more than one ")"
            # we pop our stack and reduce our right parenthesis counter
            # by 2.
            if stack.size > 0 and right_parenthesis_count > 1
                stack.pop
                right_parenthesis_count -= 2
            # This situation describes when we run into a ")"
            # with no available ")" in our stack. We then
            # add a "(" to our stack and add 1 to answer.
            elsif stack.size == 0
                ans += 1
                stack << "("
            end

        end
        last_char = char
         i += 1
    end

    ans += (stack.size * 2) - right_parenthesis_count
end
```