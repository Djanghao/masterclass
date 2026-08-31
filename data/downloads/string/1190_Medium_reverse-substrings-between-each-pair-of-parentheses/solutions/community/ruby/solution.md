# Recursion

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5462751/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5462751/)

---


# Code
```
# @param {String} s
# @return {String}
def reverse_parentheses(s)
    answer = []
    i = 0
    while i < s.size
        if s[i] == "("
            i += 1
            chars, i = recursive_stack_helper s, i, answer
            answer << chars.join
        else
            answer << s[i]
            i += 1
        end
    end
    
    answer.join
end

def recursive_stack_helper s, i, answer
    chars = []
    while s[i] != ")"
        while s[i] != ")" and s[i] != "("
            chars << s[i]
            i += 1
        end

        if s[i] == "("
            i += 1
            new_chars, i = recursive_stack_helper s, i, answer
            chars.concat new_chars
        end
    end

    [chars.reverse, i + 1]
end
```