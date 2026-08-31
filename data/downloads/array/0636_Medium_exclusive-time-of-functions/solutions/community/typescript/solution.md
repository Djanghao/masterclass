# [Typescript] ACTUALLY easy to understand solution. 93% faster/89% better memory

**Author:** lolimdumbwataboutu
**Votes:** 1
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/4367800/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/4367800/)

---

# Intuition
The other guy's solution is a mess. Look at mine.
# Approach
The mechanism can be thought of as keeping track of the gap between each interval. Once we hit either a start or end, add this gap to the appropriate process (which we can keep track of in a stack).

Important data structures:
`stack` helps us keep track of which process to add the gap time to
`prev` helps us keep track of the latest gap
`results` keeps track of the total time for each process

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function exclusiveTime(n: number, logs: string[]): number[] {
    const stack = [];
    const results = new Array(n).fill(0);

    let prev = 0;
    for (const log of logs) {
        const [process,flag,time] = log.split(':');
        if (flag === 'start') {
            if (stack.length > 0)
                // add the current gap to last process's total count
                results[stack[stack.length-1]] += parseInt(time) - prev;
            prev = parseInt(time);
            stack.push(parseInt(process));
        }
        if (flag === 'end') {
            results[stack.pop()] += parseInt(time) - prev + 1;
            prev = parseInt(time) + 1;
        }
    }

    return results;
};
```