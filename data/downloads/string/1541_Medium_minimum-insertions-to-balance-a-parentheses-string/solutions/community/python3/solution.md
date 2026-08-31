# [Python] 💡 Simple and Fast | Time O(n) | Space O(1)

**Author:** Argent
**Votes:** 94
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/780221/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/780221/)

---

# \uD83D\uDCA1 Idea

* Record the number of '(' in an open bracket count int. 
* If there is a '))' or a ') 'then open bracket count -= 1
* If there is a '))' or a ') and open bracket count = 0 an '(' must be inserted
* If there is a single ')' another ')' must be inserted
* At the end of the program and if open bracket count >0 then an '))' must be added for each unmatched '('

---

# \uD83D\uDCD1Overview
* Solution 1: Time O(n), Space O(n) - String Replace <code style="background-color: Green; color: white;">Easy</code>
* Solution 2: Time O(n), Space O(1) - Case by Case <code style="background-color: OrangeRed; color: white;">Medium</code>


---


# \uD83C\uDFAFSolution 1: Simple String Replace <code style="background-color: Green; color: white;">Easy</code>


## Tricks

* Go through string replacing '))' with '}'
* This allows for easy differentiation between ')'  '))' when iterating through the input string
* This makes checking the above conditions a breeze 

## Examples
**Example 1:**
```
Input: s = "(()))"
Using '{' trick
Input: s = "((})"

Very easy to see the problem running through the string one character at a time
Case 1: Starting '(' has only one ')'       --> add 1
Output:                                             1
```

**Example 2:**
```
Input: s = "))())("
Using '{' trick
Input: s = "}(}("

Case 2: Starting '}' with no matching '('  --> add 1
Case 3: Ending '(' with no maching '}'     --> add 2
Output:                                            3
```

**Example 3:**
```
Input: s = ")))))))"
Using '{' trick
Input: s= "}}} )"

Case 2:  '}' with no matching '('                             --> add 1 x (3 times) 
Case 3:  ')' with no matching '(' or trailing ')'             --> add 2

Output:                                                               5

* Case 2 happens 3 times since there are three "}}}"
* Case 3: we automatically know there is not trailing a ')' becuase if there were the character would be a '}' instead
```

Examples 1-3 cover all the cases of mismatching brackets there are! You should be ready to try coding a solution :) 

## Code

```
class Solution:
    def minInsertions(self, s: str) -> int:
        
        s = s.replace('))', '}')
        missing_brackets = 0
        required_closed = 0

        for c in s:

            # Open Bracket Condition
            if c == '(':
                required_closed += 2
              
            # Closed Bracket Condition  
            else:
			
                # Case: ')' 
                # Requires additional ')' 
                if c == ')': 
                    missing_brackets += 1

                # Case: Matching ( for ) or ))
                if required_closed:
                    required_closed -= 2


                # Case: Unmatched ) or ))
                # Need to insert ( to balance string
                else:
                    missing_brackets += 1

        return missing_brackets + required_closed
```

---

# \uD83C\uDFAF Solution 2: Case by Case <code style="background-color: OrangeRed; color: white;">Medium</code>

## Implementation

* Implement a boolean that can track '))' in O(1) space
* Update logic from Solution 1 

## Code 
```
class Solution:
    def minInsertions(self, s: str) -> int:
        
        # Missing ')' to make valid pair
        missing_closed = 0 

        # Required '(' to make valid pair
        required_open = 0

        # Required ')' to make valid pair
        required_closed = 0

        # Track '))' cases 
        prev_closed = 0


        for c in s:

            # Open Bracket Condition
            if c == '(':

                # Failed to make valid pair 
                #')' Brackets are considered missing and cannot be made valid by subsequent brackets
                # Case: () (
                if required_closed % 2 == 1: 
                    missing_closed += 1  
                    required_closed -= 1

                required_closed += 2
                prev_closed = False
                
            # Closed Bracket Condition 
            else:

                # Match ( with )
                if required_closed:
                    required_closed -= 1

                # Unmatched ))
                elif prev_closed:
                    required_closed -= 1

                # Unmatched )
                else:
                    required_open += 1
                    required_closed += 1

                # Bool to track '))' 
                prev_closed = not prev_closed

        return required_open + required_closed + missing_closed
```

Like if this helped!
Cheers,
Argent 
