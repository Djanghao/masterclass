# Typescript solution faster

**Author:** mozart12
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5637635/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5637635/)

---

# Intuition
Looks on the input value, and think how i can manipulate that data

# Approach
After knew the input value is the total of sum that we have to find smallest combination, i was plan to loop that and add fibonacci array. then find the smallest combination from fibonacci 

# Code
```
function findMinFibonacciNumbers(k: number): number {
    const fibonacci = []
    const s = []
    let total = 0
    for (let i = 0; total < k; i++) {
        if (i === 0) {
            s.push(1)
            fibonacci.unshift(1)
            continue
        }
        const curr = s[i-1]
        const prev = i === 1 ? 0 : s[i-2]
        let temp = curr + prev
        total = temp
        s.push(temp)
        fibonacci.unshift(temp)
    }

    const result = []
    let currentSum = 0
    for (let i = 0; i < fibonacci.length; i++) {
        if (currentSum + fibonacci[i] <= k) {
            currentSum += fibonacci[i]
            result.push(fibonacci[i])
        }
        if (currentSum === k) break
    }
    return result.length
};
```