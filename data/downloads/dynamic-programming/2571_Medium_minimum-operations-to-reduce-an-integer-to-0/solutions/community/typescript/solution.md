# Small & Easy to understand code

**Author:** shobhit0109
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/5233901/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/5233901/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
As 2 is involved, so i thought somewhere bit representation is used.
So, I started writing every number and further steps numbers in bit form.
eg - 1) 39(100111) -> 40(101000) -> 32(100000) -> 0

# Approach
<!-- Describe your approach to solving the problem. -->
So, According to observation, we can do following steps: 
1) we will first remove all zeroes from bit representation by dividing by 2 or using bit operator
```
    while ((n & 1) === 0) {
        n >>= 1;
    }
```
Here, ((n & 1)===0) checks if number is even.

2) Now, see following example: (Greedy)
21 - 10101 (For this removing 1 will be better)
23 - 10111 (For this adding 1 will be better)
So, we will check if there is 0 or 1 at 2nd last index.
```
    if((n >> 1) % 2) n ++;
    else n--;
```
3) We will repeat this until number becomes power of 2 as the only 1 operation is required.
```
    (n & (n-1)) === 0 // this will be true if n is power of 2
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
function minOperations(n: number): number {
    let ans: number = 0;
    while ((n & n - 1) !== 0) {
        while ((n & 1) === 0) {
            n >>= 1;
        }
        (n >> 1) % 2 ? n++ : n--;
        ans++;
    }
    return ans + 1;
};
```