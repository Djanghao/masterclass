# Assign large numbers to the indexes with high overlap of requests

**Author:** jhw123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/1658417/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/1658417/)

---

Since we can make any permutation, we can achieve the highest sum by assigning large  numbers to the indexes with high overlap of requests. Therefore, we first count the number of request overlap for each index and calculate the sum.

time complexity: `O(r + n log n)`
space complexity: `O(r + n)`
where `n` is the length of nums and `r` is the number of reqeusts
```typescript
const MOD = Math.pow(10, 9) + 7

function maxSumRangeQuery(nums: number[], requests: number[][]): number {
    // save all the start and end index of the requests in sorted order
	const start = []
    const end = []
    for (let request of requests) {
        const [s, e] = request
        start.push(s)
        end.push(e)
    }
    start.sort((a, b) => a - b)
    end.sort((a, b) => a - b)
	
	// for each index, count the number of request overlap
    const overlap = Array(nums.length).fill(0)
    let cnt = 0
    for (let i=0; i<overlap.length; i+=1) {
        while (start[0] === i) {
            cnt += 1
            start.shift()
        }
        while (end[0] + 1 === i) {
            cnt -= 1
            end.shift()
        }
        overlap[i] = cnt
    }
	
	// calculate the sum
    let sum = 0
    nums.sort((a, b) => a - b)
    overlap.sort((a, b) => b - a)
    for (let overlapCnt of overlap) {
        if (overlapCnt === 0) {
            break
        }
        sum += overlapCnt * nums.pop() % MOD
    }
    return sum % MOD
};
```