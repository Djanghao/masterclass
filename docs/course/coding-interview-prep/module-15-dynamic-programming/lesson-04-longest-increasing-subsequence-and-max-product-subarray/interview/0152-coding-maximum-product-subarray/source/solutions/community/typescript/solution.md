# 💯✅  [TypeScript] 2 Simplest Solutions (DP) (Brute Force)

**Author:** mlajkim
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/2929925/](https://leetcode.com/problems/maximum-product-subarray/solutions/2929925/)

---

\uD83E\uDEF0 Solutions are ordered from the best solution to the worst (or a bit dummy approach)
\uD83D\uDC4D Upvote if you like
\uD83D\uDCAF Title with the emoji left represents it has really cool method solving

# Code (DP)
- Here N is the length of nums
    - Time Complexity O(N)
    - Space Complexity O(1)
- Explanation
    - It is always to have them all multiplied, but there is an exception with negative number
    - Lowest number should be saved, just in case if we meet another negative number, then it could be the potential maximum number
    - Zero will reset the value, but the max should be saved seperately.
```
// \u2705 1 <= nums.length <= 2 * 104
// \u2705 -10 <= nums[i] <= 10 

function maxProduct(nums: number[]): number {
    let highest = nums[0]
    let lowestSoFar = highest
    let highestSoFar = highest

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i] // this num is also a candidate
        const candidateOne = lowestSoFar * num
        const candidateTwo = highestSoFar * num

        highestSoFar = Math.max(num, candidateOne, candidateTwo)
        lowestSoFar = Math.min(num, candidateOne, candidateTwo)

        highest = Math.max(highestSoFar, highest)
    }

    return highest
};
```

# Solution (Brute Force) (A bit dummy)
- Here N is the length of nums
    - Time Complexity O(2N + N / (2 ^ N))
        -  O(N) for the first loop
        -  O(N - 1) for the second loop
        - The loop takes N / (2 ^ N)
    - Space Complexity O(1)
- Explanation
    - Although this solution was still a brute force, I still believe I have found cool patter along sovling this problem. 
    - This solution won't pass the tester with too many nums.
```
function maxProduct(nums: number[]): number {
    let biggest: undefined | number
    const push = (given: number) => {
        if (biggest !== undefined) biggest = Math.max(given, biggest)
        else biggest = given
    }

    // Make sure that the given stacked has not the default 1 from calculate func
    const loop = (stacked: number[]) => {
        const length = stacked.length
        if (length === 0) return

        const leftMost = stacked[0]
        const newStack: number[] = []
        
        for (let i = 1; i < length; i++) {
            // No zero here.
            const newValue = stacked[i] / leftMost
            newStack.push(newValue)
            push(newValue)
        }
        loop(newStack)
    }

    const calculate = (given: number[]) => {
        const stacked: number[] = [1] // 1 is the defeault
        let maxLength = given.length // this can diminish when it counters 0

        for (let i = 0; i < maxLength; i++) {
            const curr = given[i]
            if (curr === 0) {
                push(curr) // set the biggest 0, if not set.
                calculate(given.slice(i + 1))
                maxLength = i
            } else {
                const calculated = given[i] * stacked[stacked.length - 1]
                stacked.push(calculated)
                push(calculated)
            }
        }

        let currentNum = stacked[maxLength]
        for (let j = 0; j < maxLength - 1; j++) {
            // No zeros here. 
            // calculated = max / given[j]
            currentNum /= given[j]
            push(currentNum)
        }

        loop(stacked.slice(1, maxLength))
    }

    calculate(nums)
    return biggest || 0
};
```

# Thank you! \uD83D\uDE0A
Upvote if you like. \uD83D\uDC4D
Let me know if you have any questions. \uD83E\uDD1D 

# Help! \uD83D\uDE4F
If you think you can
- Refactor better for this code
- Solve in a more efficient way
- Use less memory


Please let me know in the comment sections. I would be more than happy to learn.

# Credits
This solution was hugely inspired by the [solution article](https://leetcode.com/problems/maximum-product-subarray/solutions/738529/maximum-product-subarray/) of the leetcode.