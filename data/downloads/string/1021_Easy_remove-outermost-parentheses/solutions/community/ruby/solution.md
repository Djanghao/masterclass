# [Ruby] Using Stack with explanation

**Author:** yushitoh
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/1010522/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/1010522/)

---

```
# @param {String} s
# @return {String}
def remove_outer_parentheses(s)
	# Initialize the stack with empty value. 
	# Note: In ruby we can use array as a stack by utilizing push and pop methods.
	
    stack = []
    primitive_string = ""
	
	# Iterate till the end of string.
	
    for i in 0...s.length
		# Pop the stack if you encounter a ')' it will work since, the description of this question is:
		# Given a valid parentheses string S.
		# So the input will always be valid and hence it will never start with ')' and it won't cause issue while doing a pop.
		# Add the value to primitive_string if stack is not empty which means there's a open parentheses already there.
		# Adding the '(' to stack on next step will always remove the second most parentheses on the next iteration.
		# So only when there's no value to be added to the primitive_string, the pop will execute to remove last open parentheses.
		
        stack.pop if s[i] == ')'
        primitive_string += s[i] if !stack.empty?
        stack.push('(') if s[i] == '('
    end
    return primitive_string
end
```