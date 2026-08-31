# javascript 264ms

**Author:** jedmeng
**Votes:** 1
**Link:** [https://leetcode.com/problems/constructing-two-increasing-arrays/solutions/5715582/](https://leetcode.com/problems/constructing-two-increasing-arrays/solutions/5715582/)

---

# Intuition
Since **each integer should be used at most once**, we may write down the nums like 1, 2, 3, 4 \u2026\u2026. Then choose some numbers for num1 and some numbers for num2.

For example:
```text
nums1 = [0,1,0,1]
nums2 = [1,0,0,1]

1 2 3 4 5 6 7 8 9
1     0   0 1       numbers chosen for num1
  0 1         0 1   numbers chosen for num2

The answer is the last number 9
```

So, what we need to do is to merge the two arrays, there are lots of combines, like
```text
num1, num1, num1, num1, num2, num2, num2, num2
num1, num1, num2, num2, num1, num1, num2, num2
num1, num2, num1, num2, num1, num2, num1, num2
\u2026\u2026
```

To find the smallest one, it's a DP problem.

We need to get each dp[m][n], m is chosen numbers of num1 and n is chosen numbers of num2. So dp[num1.length][num2.length] is the answer.

The state-transition equation is: 
```javascript
dp[m][n] = min(dp[m - 1][n], dp[m][n - 1])

```

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(n\xB2)


# Code
```typescript []
function minLargest(nums1: number[], nums2: number[]): number {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const dp: number[][] = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(Infinity));
    dp[0][0] = 0;
    for (let i = 1; i <= len1 + len2; i++) {
        for (let j = Math.max(0, i - len2); j <= i && j <= len1; j++) {
            const [m, n] = [j, i - j];
            if (m > 0) {
                dp[m][n] = Math.min(dp[m][n], getNext(dp[m - 1][n], nums1[m - 1]));
            }
            if (n > 0) {
                dp[m][n] = Math.min(dp[m][n], getNext(dp[m][n - 1], nums2[n - 1]));
            }
        }
    }

    return dp[len1][len2];
};

function getNext(n: number, m: number) {
    return n % 2 === m ? n + 2 : n + 1;
}
```