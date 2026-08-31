# Easy TS solution

**Author:** filbert2525
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/5679873/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/5679873/)

---



# Approach
1. Identify the components:
    - Split the string into two parts based on the + sign. Let's say left is the part before + and right is the part after +.
2. Brute Force Possible Parentheses Insertion:
    - Try inserting the left parenthesis before each possible digit in left.
    - Try inserting the right parenthesis after each possible digit in right.
3. Calculate the value for each possible insertion:
    - For each combination, calculate the value of the expression.
    - Track the combination that yields the smallest value.
4. Return the combination:
    - Return the expression with parentheses that resulted in the smallest value.

# Complexity
- Time complexity: O(N^2)
- Space complexity: O(1)


# Code
```typescript []
const minimizeResult = (expression: string): string => {
    // Split the expression into left and right parts around the '+'
    const [left, right] = expression.split('+');

    let minValue = Number.MAX_SAFE_INTEGER;
    let result = '';

    // Try every possible way to insert parentheses
    for (let i = 0; i < left.length; i++) {
        for (let j = 1; j <= right.length; j++) {
            const leftPart = left.slice(0, i);
            const middleLeft = left.slice(i);
            const middleRight = right.slice(0, j);
            const rightPart = right.slice(j);

            // Construct the expression
            const evalExpression = `${leftPart}(${middleLeft}+${middleRight})${rightPart}`;
            
            // Evaluate the expression
            const value = (leftPart === '' ? 1 : parseInt(leftPart)) *
                          (parseInt(middleLeft) + parseInt(middleRight)) *
                          (rightPart === '' ? 1 : parseInt(rightPart));

            // Update the result if this value is the smallest found
            if (value < minValue) {
                minValue = value;
                result = evalExpression;
            }
        }
    }

    return result;
};

```