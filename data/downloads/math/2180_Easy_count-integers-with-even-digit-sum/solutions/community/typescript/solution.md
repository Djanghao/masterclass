# Analytical solution, probably optimal runtime

**Author:** cajubelt
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/6121270/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/6121270/)

---

# Intuition
The general idea is that numbers typically alternate between having even sums of digits and odd sums of digits, though there are interesting edge cases around multiples of 10. This leads to an analytical solution that lets you avoid checking every number between 1 and `num` for even sums of digits.

# Approach
The edge cases around multiples of 10 work as follows:
- Between 1 and 9 (inclusive), the evens have even sums of digits (clearly). So we alternate between even and odd sums of digits.
- The digits of 10 add to 1, meaning we reached our first edge case-- both 9 and 10 have odd sums of digits. This means we can't just divide by 2 to get the count of numbers with even sums of digits. We have two consecutive numbers with odd sums of digits.
- Between 10 and 19, the odd numbers have even sums of digits, and the even numbers have odd sums of digits. 
- 19 and 20 both have even sums of digits. This "cancels out" the 9 and 10 case where two consecutive numbers had odd sums of digits.

There are more interesting cases at 99 and 100, 199 and 200, ...

The general rule is in the code. Leaving a full proof as an exercise to the reader (to be honest it's not immediately obvious to me how to prove it), but the pattern I found is that if `num` is even AND has an even sum-of-digits, then all the "edge cases" of consecutive odd sums-of-digits and consecutive even sums-of-digits "cancel out", and if it is odd and has an even sum-of-digits, they do not.

# Complexity
- Time complexity:
O(log(num)), aka linear with the length of the input

- Space complexity:
O(log(num)), same. Could be done in O(log(log(num))), but I was lazy-- leaving this as an exercise to the reader.

# Code
```typescript []


function isEvenSum(num: number): boolean {
    const digits: number[] = String(num).split('').map((char) => parseInt(char))
    const digitSum = digits.reduce((acc, cur) => acc + cur)
    return digitSum % 2 === 0
}

function countEven(num: number): number {
    return isEvenSum(num) ? Math.floor(num / 2) : Math.ceil(num / 2) - 1
}

```