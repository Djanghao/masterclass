# 🔥 Beats 100% Runtime (TypeScript) [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-iii/solutions/5684135/](https://leetcode.com/problems/strobogrammatic-number-iii/solutions/5684135/)

---

# Intuition
To solve the problem of counting strobogrammatic numbers in a given range, we need to understand that a strobogrammatic number reads the same when rotated 180 degrees. We generate such numbers by recursively building them from smaller strobogrammatic numbers using specific digit pairs that maintain the property of being strobogrammatic.

# Approach
Digit Pair Generation: Use recursive generation to construct strobogrammatic numbers of various lengths using predefined digit pairs.

Counting: Count the valid strobogrammatic numbers that fall within the given range [low, high] based on their digit lengths.

# Complexity
- Time complexity:
\uD835\uDC42(5\uD835\uDC5B/2), where n is the maximum number of digits in the range.

- Space complexity:
 \uD835\uDC42(5\uD835\uDC5B/2), where n is the maximum length of numbers considered.

# Code
```typescript []
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
function strobogrammaticInRange(low: string, high: string): number {
    const minDigits = low.length;
    const maxDigits = high.length;
    let ans = 0;

    // Parse low and high as integers
    const lowNum = parseInt(low, 10);
    const highNum = parseInt(high, 10);

    // Array to store counts of strobogrammatic numbers
    const strobogrammaticNumbersCount: number[] = new Array(16).fill(0);
    strobogrammaticNumbersCount[1] = 2;
    strobogrammaticNumbersCount[2] = 4;
    
    // Populate counts for each digit length
    for (let i = 3; i <= 14; i += 2) {
        strobogrammaticNumbersCount[i] = 3 * strobogrammaticNumbersCount[i - 1];
        strobogrammaticNumbersCount[i + 1] = 5 * strobogrammaticNumbersCount[i - 1];
    }

    function findStrobogrammatic(n: number): string[] {
        if (n === 0) return [];
        if (n === 1) return ["0", "1", "8"];
        
        const result: string[] = n % 2 === 0 ? [""] : ["0", "1", "8"];
        const pairs = ["11", "69", "88", "96", "00"];
        
        let i = n % 2 ? 3 : 2;
        while (i <= n) {
            const temp: string[] = [];
            for (const str of result) {
                for (const pair of pairs) {
                    if (i === n && pair === "00") {
                        continue;
                    }
                    temp.push(pair[0] + str + pair[1]);
                }
            }
            result.length = 0; // Clear previous results
            result.push(...temp); // Append new results
            i += 2;
        }
        
        return result;
    }

    for (let i = minDigits; i <= maxDigits; i++) {
        if (i === minDigits || i === maxDigits) {
            const result = findStrobogrammatic(i);
            for (const num of result) {
                const numValue = parseInt(num, 10);
                if (maxDigits === minDigits) {
                    if (numValue >= lowNum && numValue <= highNum) {
                        ans++;
                    }
                } else if (i === minDigits && numValue >= lowNum) {
                    ans++;
                } else if (i === maxDigits && numValue <= highNum) {
                    ans++;
                }
            }
        } else {
            ans += strobogrammaticNumbersCount[i];
        }
    }

    return ans;
}

```