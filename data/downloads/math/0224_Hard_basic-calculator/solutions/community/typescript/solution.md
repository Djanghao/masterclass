# ✅ 2 Simplest Solutions (Simple Loop O(N)) (Dummy approach using Recursive O(N * 2)) in TypeScript

**Author:** mlajkim
**Votes:** 2
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/2858057/](https://leetcode.com/problems/basic-calculator/solutions/2858057/)

---


# Code (Simple loop)
- Here N is the length of the given string
    - Time Complexity O(N)
        - Smartly ignore empty spaces
        - Smartly handle multiple nested parenthesis
    - Space Complexity O(1)
```
function calculate(s: string): number {
    const isNumber = (char: string) => '0' <= char && char <= '9'
    let calculatedResult = 0
    let currentNumber = 0
    let sign = 1

    // 1 is default in signStackForParenthesis, so that we can have at least one number all the time.
    const signStackForParenthesis: number[] = [1] 

    // Get the last sign of the array, without Array.pop()
    const getLastSign = () => signStackForParenthesis[signStackForParenthesis.length - 1]

    // Calculate "current number" into the result.
    const calculateResult = () => {
        const finalSign = sign * getLastSign() // 1 or -1
        calculatedResult += currentNumber * finalSign // add positive/negative number
        currentNumber = 0 // reset the current number, as it is added (subtracted)
    }

    for (const char of s) {
        // We can do the following, with that "1 4" is not a valid number 14, and such
        // string won't be given by its rule of the question.

        if (isNumber(char)) {
            currentNumber = currentNumber * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0))
            
        } else { 
            calculateResult()

            if (char === '-') sign = -1
            else if (char === "+") sign = 1
            else if (char === "(") {
                // Make sure to push with the lastSign of parenthesis!
                // if two negatives, it should be positive, and that is why.
                signStackForParenthesis.push(sign * getLastSign())

                sign = 1 // need to reset, as the + sign can be skipped
            }
            else if (char === ")") signStackForParenthesis.pop()
        }
    }
    
    calculateResult()
    return calculatedResult
};
```

# Code (Dummy approach using Recursive)
- Here N is the length of the given string
   - Time Complexity O(N * 2)
        - Remove the space with regex
            - Which is not really necessary for the approach above
        - Loop through each character of N 
    - Space Complexity O(1)
```
function calculate(s: string): number {
    // replace parenthis, spaces as we do not need for add and subtract
    s = s.replace(/[\\s]/g, "")
    // Want to start the string with symbol for positive nums, just like negative nums.
    if (s[0] !== "-") s = "+" + s

    const calculate = (givenStr: string): number => {
        let result = 0
        let isPlus: boolean = true
        const getSymbol = () => isPlus ? 1 : -1

        let parenthesisStartedIndex: null | number = null
        let stackedNumStr: string = "0"
        let parenthesesCnt = 0

        let i = -1
        do {
            const eachChar = givenStr[++i]

            if (eachChar === "(") {
                if (parenthesisStartedIndex === null) parenthesisStartedIndex = i
                parenthesesCnt++
                continue
            }
            else if (eachChar === ")" && --parenthesesCnt === 0) {
                // Happens when parethensis is used
                result += calculate(givenStr.slice(parenthesisStartedIndex + 1, i)) * getSymbol()
                parenthesisStartedIndex = null
                continue
            } else if (parenthesisStartedIndex !== null) continue

            if (!isNaN(parseInt(eachChar))) { // This is number!
                stackedNumStr += eachChar
                continue
            }

            result += parseInt(stackedNumStr) * getSymbol()
            isPlus = eachChar === "+"
            stackedNumStr = "0"
            
        } while (i < givenStr.length)

        return result
    }

    return calculate(s)
};
```

# Thank you!
Upvote if you like. \uD83D\uDC4D
Let me know if you have any questions. \uD83D\uDE4F