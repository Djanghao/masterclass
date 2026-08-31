# [Time O(n*log(n))] No Trie, Yes Binary search

**Author:** jhw123
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1722918/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1722918/)

---

### Thanks to @DammitWA, it turns out that this solution does not  work and luckily passes all test cases. Testcase that disproves this approach: [1,2,18]

### Idea

XOR of two numbers is maximized when one of the number is the bitwise flip of the other. 
For example, XOR of 5 (101) is maximum when the other number is 2 (010).
Based on this idea, we do binary-search of bitwise flip of each number.
Since there may not be the exact bitwise flip number, we find the closest numbers.
For example, in `[3,10,5,25,2,8]`,
the bitwise flip of 25 (11001) is 6 (110). 
However, there is no 6 in the list. We try the closest numbers, which are 5 (101) and 8 (1000).

### Corner Case

There is a corner case in this approach. 
If the bitwise length of numbers in the list are all equal, the closest number always becomes the minimum number in the list.
For example, in `[4,5,6]`,
the length of the numbers in their bit representations are same: 4=100, 5=101, 6=110.
Since the bitwise flip of each number is always smaller than 100, the closest number is always 4.
To compromise this, we also try the number closest to `bitwise flip + the most significant bit`.
In the example above, the most significant bit of numbers is 100; we add this to each bitwise flips of the numbers (11, 10, 1 -> 111, 110, 101).

### Complexity

Time: `O(n*log(n))`
Space: `O(n)`

```typescript
function findMaximumXOR(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let max = 0
    for (const num of nums) {
        const target = flip(num)
        const t1 = binarySearch(nums, target)
        max = Math.max(max, nums[t1] ^ num)
        if (1 <= t1) {
            max = Math.max(max, nums[t1-1] ^ num)            
        }
		const target2 = target + Math.pow(2, Math.floor(Math.log2(num)))
        const t2 = binarySearch(nums, target2)
        max = Math.max(max, nums[t2] ^ num)
        if (1 <= t2) {
            max = Math.max(max, nums[t2-1] ^ num)            
        }
    }
    return max
};

function binarySearch(nums: number[], target: number) {
    let l=0
    let r=nums.length-1
    while (l < r) {
        const m = Math.floor((l+r) / 2)
        if (target <= nums[m]) {
            r = m
        } else {
            l = m+1
        }
    }
    return l
}

function flip(num: number) {
    return parseInt(num.toString(2).split('').map(b => b === '1' ? '0': '1').join(''), 2)
}
```