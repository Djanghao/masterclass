# 4 Solutions | Time: O(N)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/4085949/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/4085949/)

---

# Table of Contents

[toc]

# Code 1 - Fill in the Gaps

- Time complexity: $$O(N)$$

- Space complexity: $$O(1)$$

```typescript []
const ALPHABET_MIN = 97; // ASCII a; aka "a".charCodeAt(0);
const ALPHABET_LEN = 26;

function repeatLimitedString(s: string, repeatLimit: number): string {
    // Base case
    const N = s.length;
    if (N <= repeatLimit) {
        return s;
    }

    // Count letter frequencies
    const counts = new Array(ALPHABET_LEN).fill(0);
    for (let i = 0; i < N; ++i){
        ++counts[s.charCodeAt(i) - ALPHABET_MIN];
    }

    // Initialize output
    const buf: string[] = new Array(N).fill(" ");

    // For each letter in DESC order
    for (let i = ALPHABET_LEN - 1; i >= 0; --i) {
        // Skip unused letters
        if (counts[i] <= 0) {
            continue;
        }

        // Get character
        const char = String.fromCharCode(i + ALPHABET_MIN);

        // Check the output for gaps
        for (let j = 0; j < N && counts[i] > 0; ++j) {
            
            // Fill sequential gaps up to max repeatLimit
            const M = Math.min(repeatLimit, counts[i]);
            for (let k = 0; k < M && buf[j] === " "; ++k) {
                buf[j++] = char;
                --counts[i];
            }
        }
    }

    // Truncate the output to the first gap
    const len = buf.indexOf(" ");
    buf.length = (len >= 0) ? len : N;
    
    return buf.join("");
};
```

# Code 2 - Queue

- Time complexity: $$O(N)$$

- Space complexity: $$O(M)$$, where M is max letter frequency

```typescript []
const LOWER_A = "a".charCodeAt(0);
function repeatLimitedString(s: string, repeatLimit: number): string {
    const N = s.length;

    // Base case
    if (N <= repeatLimit) {
        return s;
    }

    // Get letter frequencies from s
    const counts = new Array(26).fill(0);
    for (let i = 0; i < N; ++counts[25 - s.charCodeAt(i++) + LOWER_A]){}

    // Initialize the output
    const buf: string[] = [];

    // Initialize the queue.
    // It will contain only one
    // repeating letter at a time
    // Ex: ["zzz", "zzz", "zz"]
    const q: string[] = [""];

    // For each letter in DESC order
    for (let i = 0; i < 26; ++i) {
        if (counts[i] <= 0) {
            continue;
        }

        // Use the letter as a separator
        // to move queue entries to output
        const M = Math.min(counts[i], q.length - 1);
        const char = String.fromCharCode(25 - i + LOWER_A);
        for (let j = 0; j < M; buf.push(q[j++], char)) {}
        counts[i] -= M;
        q.splice(0, M);

        // If letter was fully used
        if (counts[i] <= 0) {
            continue;
        }

        // Last entry does not need a separator
        // as it'll be neighbored by this letter.
        // Add it directly to the output.
        buf.push(q.pop());

        // Populate the queue with groups of this letter
        for (let len = 0; counts[i] > 0; counts[i] -= len) {
            len = Math.min(counts[i], repeatLimit);
            q.push(char.repeat(len));
        }
    }
    
    buf.push(q[0]);
    return buf.join("");
};
```

# Code 3 - Stack

- Time complexity: $$O(N)$$

- Space complexity: $$O(M)$$, where M is max letter frequency

```typescript []
const ALPHABET_MIN = 97; // ASCII a; aka "a".charCodeAt(0);
const ALPHABET_LEN = 26;

function repeatLimitedString(s: string, repeatLimit: number): string {
    // Base case
    const N = s.length;
    if (N <= repeatLimit) {
        return s;
    }

    // Count letter frequencies
    const counts = new Array(ALPHABET_LEN).fill(0);
    for (let i = 0; i < N; ++i){
        ++counts[s.charCodeAt(i) - ALPHABET_MIN];
    }

    // Initialize the output
    const buf: string[] = [];

    // Initialize the stack.
    // It will contain only one
    // repeating letter at a time
    // Ex: ["zz", "zzz", "zzz"]
    const stack: string[] = [""];

    // For each letter in DESC order
    for (let i = ALPHABET_LEN - 1; i >= 0; --i) {
        if (counts[i] <= 0) {
            continue;
        }

        // Use the letter as a separator
        // to move stack entries to output
        const M = Math.min(counts[i], stack.length - 1);
        const char = String.fromCharCode(i + ALPHABET_MIN);
        for (let i = 0; i < M; ++i) {
            buf.push(stack.pop(), char);
        }

        // If letter was fully used
        if (counts[i] <= M) {
            continue;
        }

        // Last entry does not need a separator
        // as it'll be neighbored by this letter.
        // Add it directly to the output.
        buf.push(stack.pop());

        // Populate the queue with groups of this letter
        counts[i] -= M;
        const remainder = counts[i] % repeatLimit;
        if (remainder > 0) {
            counts[i] -= remainder;
            stack.push(char.repeat(remainder));
        }
        while (counts[i] > 0) {
            stack.push(char.repeat(repeatLimit));
            counts[i] -= repeatLimit;
        }
    }

    buf.push(stack.pop());
    return buf.join("");
};
```

# Code 4 - Greedy

- Time complexity: $$O(N)$$

- Space complexity: $$O(1)$$

```typescript []
const ALPHABET_MIN = 97; // ASCII a; aka "a".charCodeAt(0);
const ALPHABET_LEN = 26;

function repeatLimitedString(s: string, repeatLimit: number): string {
    // Base case
    const N = s.length;
    if (N <= repeatLimit) {
        return s;
    }

    // Count letter frequencies
    const counts = new Array(ALPHABET_LEN).fill(0);
    for (let i = 0; i < N; ++i){
        ++counts[s.charCodeAt(i) - ALPHABET_MIN];
    }

    // For each letter from z to a
    let prev = "";
    let prevCount = 0;
    const buf: string[] = [];
    for (let i = ALPHABET_LEN - 1; i >= 0; --i) {
        // Skip unused letters
        if (counts[i] <= 0) {
            continue;
        }

        // Get current letter
        const curr = String.fromCharCode(i + ALPHABET_MIN);

        // Determine how many full groups of prev can be created
        // using curr as the separator. Leave some prev as remainder.
        let groups = Math.trunc((prevCount - 1) / repeatLimit);
        groups = Math.min(groups, counts[i]);

        // If groups are possible, create them
        if (groups > 0) {
            counts[i] -= groups;
            prevCount -= groups * repeatLimit;
            const group = prev.repeat(repeatLimit);
            while (--groups >= 0) {
                buf.push(group, curr);
            }
        }

        // If prev is exhausted, update prev to curr.
        // Otherwise, curr was exhausted
        if (prevCount <= repeatLimit) {
            buf.push(prev.repeat(prevCount));
            prevCount = counts[i];
            prev = curr;
        }
    }

    // Add any remaining prev to the end
    buf.push(prev.repeat(Math.min(prevCount, repeatLimit)));

    // Create and return the output
    return buf.join("");
};
```