# The most readable solution?

**Author:** andychow523
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/5023495/](https://leetcode.com/problems/maximum-prime-difference/solutions/5023495/)

---

N is the length of `nums`.
M is the average of `nums`.

# Complexity
- Time complexity:
O(NlogM), it takes O(N) to iterate the `nums`, O(logM) to check if a number is prime.

- Space complexity:
O(N), since `res` potentially stores all number

# Code
```
function maximumPrimeDifference(nums: number[]): number {
    const res = []; // Store all prime numbers
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) {
            res.push(i)
        }
    }
    // If there is no prime number/only 1 prime number
    if (res.length <= 1) {
        return 0
    }
    // the index of last prime number - the index of first prime number
    return res[res.length - 1] - res[0]
};

function isPrime(num: number) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
```