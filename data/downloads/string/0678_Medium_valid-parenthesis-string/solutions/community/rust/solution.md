# O(n) | 0ms | Beats 100% | Learn Rust 🦀| Python3

**Author:** wasimcodex
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4987343/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4987343/)

---

# Intuition
When we see a string with parentheses and asterisks, we want to understand if it represents a valid expression. Here, a valid expression follows these rules:

Every opening parenthesis $$($$ must have a matching closing parenthesis $$)$$.
The number of closing parentheses $$)$$ cannot exceed the number of opening parentheses $$)$$.
Asterisks $$*$$ act as wildcards, representing either an opening or closing parenthesis.
Our intuition would be to track the opening/closing parentheses and use wildcards to "fill in the gaps" if there are not enough opening/closing parentheses.

# Approach
1. Track Opening Parentheses and Wildcards: We'll use two stacks:
    - open_stack: Stores indices of opening parentheses '$$($$'.
    - wild_stack: Stores indices of asterisks '*'.
2. Process the String: Loop through each character:
    - If it's a '$$($$', push its index onto open_stack.
    - If it's a '$$)$$':
        -  If there's a corresponding opening parenthesis in open_stack, pop it (match found).
        - Otherwise, check wild_stack. If there's a wildcard, pop it (use it as a opening parenthesis).
        - If neither match is found, the string is invalid.
    - If it's a '$$*$$', push its index onto wild_stack.
3. Handle Remaining Parentheses: After processing the string, we might still have unmatched opening parentheses. We can use wildcards to "match" them as long as the opening parenthesis's index is before the wildcard's index (ensuring wildcards don't create new parentheses).
    - We iterate through both stacks while they're not empty.
    - If the opening parenthesis comes before the wildcard (valid use of wildcard), pop both elements.
    - Otherwise, the string is invalid (wildcard cannot create a new opening parenthesis).
4. Check for Validity: Finally, we check if all opening parentheses have been matched (either by corresponding parentheses or wildcards). If open_stack is empty, the string is valid.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the string. We iterate through the string once and the while loop processes elements at most once each.

- Space complexity: $$O(n)$$, due to the two stacks, which can hold up to n elements in the worst case.

# Code
```Rust []
impl Solution {
    pub fn check_valid_string(s: String) -> bool {
        let mut open_stack: Vec<usize> = Vec::new();
        let mut wild_stack: Vec<usize> = Vec::new();

        for (idx, char) in s.chars().enumerate() {
            match char {
                '(' => open_stack.push(idx),
                ')' => {
                    if let Some(open_idx) = open_stack.pop() {
                        continue;
                    } else if let Some(wild_idx) = wild_stack.pop() {
                        continue;
                    } else {
                        return false;
                    }
                }
                _ => wild_stack.push(idx)
            }
        }
        while !open_stack.is_empty() && !wild_stack.is_empty() {
            if (open_stack[open_stack.len()-1] < wild_stack[wild_stack.len()-1]) {
                open_stack.pop();
                wild_stack.pop();
            } else {
                return false;
            }
        }
        return open_stack.is_empty();
    }
}
```
```Python3 []
class Solution:
    def checkValidString(self, s: str) -> bool:
        stack = []
        poly_stack = []
        for i in range(len(s)):
            if s[i] == ')':
                if stack:
                    stack.pop()
                elif poly_stack:
                    poly_stack.pop()
                else:
                    return False
            elif s[i] == '(':
                stack.append(i)
            else:
                poly_stack.append(i)
        a = b = 0
        print(stack, poly_stack)
        while(a < len(stack) and b < len(poly_stack)):
            if stack[a] < poly_stack[b]:
                a += 1
                b += 1
            else:
                b += 1
        if (a == len(stack)):
            return True
        else:
            return False
```