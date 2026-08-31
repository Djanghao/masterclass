# 💥TypeScript | Runtime and memory beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/5737582/](https://leetcode.com/problems/cracking-the-safe/solutions/5737582/)

---

# Intuition
The problem is about finding the shortest string that contains every possible sequence of n digits using a given set of digits. This is akin to creating a "superstring" that includes every possible combination of length n as a substring.

# Approach
De Bruijn Sequence: Use a special mathematical sequence called a De Bruijn sequence. It efficiently covers all possible combinations of length n using k digits.

Construct the Sequence: Build this sequence for the given n and k. For special cases like k = 1, handle them separately since all characters are the same.

Adjust for Circular Nature: Append a prefix to ensure all sequences are included when considering rotations.

# Complexity
- Time complexity:
O(k^n), where n is the length of the sequences and k is the number of possible digits. This is because generating a De Bruijn sequence requires processing all possible combinations.

- Space complexity:
O(k^n), used to store the sequence which covers all k^n possible combinations.

# Code
```typescript []
function crackSafe(n: number, k: number): string {
    function buildDeBruijn(n: number, k: number): string {
        const sequence: number[] = [];
        const a: number[] = Array(k ** n).fill(0);
        const sequenceLength = k ** n;
        const generate = (t: number, p: number) => {
            if (t > n) {
                if (n % p === 0) {
                    for (let j = 1; j <= p; j++) {
                        sequence.push(a[j]);
                    }
                }
            } else {
                a[t] = a[t - p];
                generate(t + 1, p);
                for (let j = a[t - p] + 1; j < k; j++) {
                    a[t] = j;
                    generate(t + 1, t);
                }
            }
        };
        generate(1, 1);
        return sequence.join('');
    }

    if (k === 1) {
        // Special case when k = 1, every character must be '0'
        return '0'.repeat(n * k);
    }
    
    const deBruijn = buildDeBruijn(n, k);
    const result = deBruijn + deBruijn.slice(0, n - 1);
    return result;
}



```