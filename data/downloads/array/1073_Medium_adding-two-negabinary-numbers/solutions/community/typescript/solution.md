# Bitwise addition with carry

**Author:** jhw123
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/1656454/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/1656454/)

---

time complexity: O(n)
space complexity: O(1)
```typescript
function addNegabinary(arr1: number[], arr2: number[]): number[] {
    let i=0
    let carry = 0
    const ans = []
    for (let i=0; i<Math.max(arr1.length, arr2.length); i+=1) {
        const sum = carry + (arr1[arr1.length - 1 - i] ?? 0) + (arr2[arr2.length - 1 - i] ?? 0)
        if (sum === -1) {
			// 1 is borrowed from next digit in order to compensate -1
            carry = 1
        } else if (1 < sum) {
			// carry is -1 because it is negabinary
            carry = -1
        } else {
            carry = 0
        }
        ans.unshift(Math.abs(sum % 2))
    }
	// after the loop, carry is either 0 or -1
    if (carry === -1) {
        ans.unshift(1, 1)
    }
	// remove leading zeros
    while (1 < ans.length && ans[0] === 0) {
        ans.shift()
    }
    return ans
};
```