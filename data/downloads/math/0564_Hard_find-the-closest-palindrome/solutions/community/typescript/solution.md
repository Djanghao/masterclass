# 🔥O(1) 100% Java & JavaScript & TypeScript ✅Easy Explanation✅Simple Soltuion🔥

**Author:** Ala-dine
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/5685361/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/5685361/)

---

![2024-08-24_19-06.png](./images/0.png)

# \u2705Intuition
### The problem is to find the nearest palindromic number to a given number `n`. A palindrome reads the same forward and backward, so the idea is to generate potential palindromes by manipulating the first half of the number and then reflecting it to form a palindrome. We consider not only the direct reflection but also small variations (incrementing or decrementing the first half) to account for cases where the nearest palindrome might be slightly larger or smaller. Additionally, edge cases like very small or very large palindromes (e.g., 999 or 1001 for a 3-digit number) are also considered.
# \u2705Approach
### 1.\u26A1Determine the First Half: Extract the first half of the number. This will be the basis for generating potential palindromes.
### 2.\u26A1Generate Palindrome Candidates: Create potential palindromes by :
- #### Mirroring the first half directly.
- #### Mirroring the first half after incrementing it by 1.
- #### Mirroring the first half after decrementing it by 1.
- #### Handling edge cases such as numbers like `999`... or `100`...`001`.
### 3.\u26A1Evaluate the Candidates: Compare the generated palindromes to the original number, and select the one with the smallest difference. If there is a tie, select the smaller palindrome.
### 4.\u26A1Return the Result: The closest palindrome is then returned as the result.
# \u2705Complexity
### \uD83D\uDD25Time complexity : $O(1)$

### \uD83D\uDD25Space complexity : $O(1)$

# \u2705Code
``` java []
class Solution {
    public String nearestPalindromic(String numberStr) {
        long number = Long.parseLong(numberStr);
        if (number <= 10) return String.valueOf(number - 1);
        if (number == 11) return "9";

        int length = numberStr.length();
        long leftHalf = Long.parseLong(numberStr.substring(0, (length + 1) / 2));
        
        long[] palindromeCandidates = new long[5];
        palindromeCandidates[0] = generatePalindromeFromLeft(leftHalf - 1, length % 2 == 0);
        palindromeCandidates[1] = generatePalindromeFromLeft(leftHalf, length % 2 == 0);
        palindromeCandidates[2] = generatePalindromeFromLeft(leftHalf + 1, length % 2 == 0);
        palindromeCandidates[3] = (long)Math.pow(10, length - 1) - 1;
        palindromeCandidates[4] = (long)Math.pow(10, length) + 1;

        long nearestPalindrome = 0;
        long minDifference = Long.MAX_VALUE;

        for (long candidate : palindromeCandidates) {
            if (candidate == number) continue;
            long difference = Math.abs(candidate - number);
            if (difference < minDifference || (difference == minDifference && candidate < nearestPalindrome)) {
                minDifference = difference;
                nearestPalindrome = candidate;
            }
        }

        return String.valueOf(nearestPalindrome);
    }

    private long generatePalindromeFromLeft(long leftHalf, boolean isEvenLength) {
        long palindrome = leftHalf;
        if (!isEvenLength) leftHalf /= 10;
        while (leftHalf > 0) {
            palindrome = palindrome * 10 + leftHalf % 10;
            leftHalf /= 10;
        }
        return palindrome;
    }
}
```
``` javascript []
function nearestPalindromic(n) {
    const len = n.length;
    const i = len % 2 === 0 ? Math.floor(len / 2) - 1 : Math.floor(len / 2);
    const firstHalf = parseInt(n.substring(0, i + 1));

    // Generate possible palindromic candidates
    const possibilities = [
        halfToPalindrome(firstHalf, len % 2 === 0),
        halfToPalindrome(firstHalf + 1, len % 2 === 0),
        halfToPalindrome(firstHalf - 1, len % 2 === 0),
        BigInt(Math.pow(10, len - 1)) - 1n,
        BigInt(Math.pow(10, len)) + 1n
    ];

    // Find the palindrome with minimum difference, and minimum value
    let diff = BigInt(Number.MAX_SAFE_INTEGER);
    let res = 0n;
    const nl = BigInt(n); // Convert n to BigInt for large numbers
    
    for (let cand of possibilities) {
        cand = BigInt(cand);
        if (cand === nl) continue;
        const currentDiff = cand > nl ? cand - nl : nl - cand;
        if (currentDiff < diff) {
            diff = currentDiff;
            res = cand;
        } else if (currentDiff === diff && cand < res) {
            res = cand;
        }
    }

    return res.toString();
}

function halfToPalindrome(left, even) {
    let res = BigInt(left);
    if (!even) left = Math.floor(left / 10);
    while (left > 0) {
        res = res * 10n + BigInt(left % 10);
        left = Math.floor(left / 10);
    }
    return res;
}

```
``` typescript []
function nearestPalindromic(n: string): string {
    const len = n.length;
    const i = len % 2 === 0 ? Math.floor(len / 2) - 1 : Math.floor(len / 2);
    const firstHalf = parseInt(n.substring(0, i + 1), 10);

    // Generate possible palindromic candidates
    const possibilities: bigint[] = [
        halfToPalindrome(firstHalf, len % 2 === 0),
        halfToPalindrome(firstHalf + 1, len % 2 === 0),
        halfToPalindrome(firstHalf - 1, len % 2 === 0),
        BigInt(Math.pow(10, len - 1)) - 1n,
        BigInt(Math.pow(10, len)) + 1n
    ];

    // Find the palindrome with minimum difference, and minimum value
    let diff = BigInt(Number.MAX_SAFE_INTEGER);
    let res = 0n;
    const nl = BigInt(n); // Convert n to BigInt for large numbers
    
    for (let cand of possibilities) {
        if (cand === nl) continue;
        const currentDiff = cand > nl ? cand - nl : nl - cand;
        if (currentDiff < diff) {
            diff = currentDiff;
            res = cand;
        } else if (currentDiff === diff && cand < res) {
            res = cand;
        }
    }

    return res.toString();
}

function halfToPalindrome(left: number, even: boolean): bigint {
    let res = BigInt(left);
    if (!even) left = Math.floor(left / 10);
    while (left > 0) {
        res = res * 10n + BigInt(left % 10);
        left = Math.floor(left / 10);
    }
    return res;
}
```
![can you upvote please.png](./images/1.png)
