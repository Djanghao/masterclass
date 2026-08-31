# Easy TypeScript Solution | 100% Beats

**Author:** callmeanupam
**Votes:** 1
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5875773/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5875773/)

---

# Intuition
The goal of this problem is to efficiently compute the greatest common divisor (GCD) values for given numbers and respond to queries about those GCDs. By counting the occurrences of each number, we can utilize combinatorial mathematics to calculate how many pairs can be formed that share the same GCD.

# Approach
1. **Frequency Count**:
   - Use an array `fr` to keep track of the frequency of each number up to a maximum value of 50,000.
   - Iterate through `nums` and populate `fr` with the count of each number.

2. **Count Pairs by GCD**:
   - Initialize an array `ct` to store the count of pairs for each possible GCD.
   - For each possible GCD `g`, accumulate the frequency of its multiples to calculate how many numbers can share this GCD.
   - Use the combination formula to count the number of pairs for each GCD.

3. **Adjust Counts for Multiples**:
   - Iterate from the maximum down to 1, and for each GCD, subtract the counts of its multiples to ensure the counts are exclusive to that GCD.

4. **Prepare for Queries**:
   - Create two arrays: `xgl` for GCDs with positive counts and `xcl` for their respective counts.
   - Calculate a prefix sum array `pr` to facilitate quick responses to queries.

5. **Answer Queries**:
   - For each query, check if it falls within the valid range. If it does, use binary search to find the corresponding GCD.

## Complexity
- **Time complexity**: 
  - The algorithm runs in \\(O(n + m \\log m + q \\log m)\\), where \\(n\\) is the number of elements in `nums`, \\(m\\) is the maximum number (50,000), and \\(q\\) is the number of queries.
  
- **Space complexity**: 
  - The space complexity is \\(O(m)\\) due to the arrays `fr`, `ct`, `xgl`, `xcl`, and `pr`.

# Code
```typescript []
function gcdValues(nums: number[], queries: number[]): number[] {
    const mx = 50000;
    const fr: number[] = new Array(mx + 1).fill(0);
    nums.forEach(n => {
        fr[n] += 1;
    });
    
    const ct: number[] = new Array(mx + 1).fill(0);
    for (let g = 1; g <= mx; g++) {
    let tm = fr[g] || 0;  // Initialize tm with fr[g]
    
    for (let m = g * 2; m <= mx; m += g) {
        tm += fr[m];
    }
    ct[g] = comb(tm, 2);
}

    
    for (let g = mx; g >= 1; g--) {
    const start = 2 * g; 
    for (let m = start; m <= mx; m += g) {
        ct[g] -= ct[m]; 
    }
}

    const xgl: number[] = [];
    const xcl: number[] = [];

    for (let g = 1; g <= mx; g++) {
        if (ct[g] > 0) {
            xgl[xgl.length] = g;
            xcl[xcl.length] = ct[g];
        }
}


    const szs = xgl.length;
    const pr: number[] = new Array(szs);
    pr[0] = xcl[0];

    for (let i = 1; i < szs; i++) {
        pr[i] = pr[i - 1] + xcl[i];
    }

    const res: number[] = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        const q = queries[i];
        res[i] = (q < 0 || q >= pr[szs - 1]) ? -1 : xgl[binarySearch(pr, q)];
    }

    return res;
}

function comb(n: number, k: number): number {
    if (n < k) return 0;
    
    const numerator = n * (n - 1);
    return Math.floor(numerator / 2);
}


function binarySearch(pr: number[], q: number): number {
    let lft = 0, rgt = pr.length - 1;
    while (lft < rgt) {
        const m = lft + Math.floor((rgt - lft) / 2);
        if (pr[m] > q) {
            rgt = m;
        } else {
            lft = m + 1;
        }
    }
    return lft;
}

```