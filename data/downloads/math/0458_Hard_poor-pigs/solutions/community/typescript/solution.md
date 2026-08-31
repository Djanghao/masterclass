# JS/TS | Base Conversion | Efficient

**Author:** vincecoppola
**Votes:** 2
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/4221541/](https://leetcode.com/problems/poor-pigs/solutions/4221541/)

---

# Intuition
The problem seems unusual at first glance but it actually translates into a mathematical problem involving base conversion. We are essentially trying to represent the number of buckets ($b$) in a different base ($rounds$), where each "digit" in this number system corresponds to a pig. The base of this number system is determined by the number of states a single pig can be in, given the testing duration and the latency period for the poison to take effect.

# Approach
1. Calculate the total number of states a single pig can be in ($rounds$), which is $(testDur / latency) + 1$.
2. Initialize a counter ($n$) for the number of pigs needed.
3. Run a while loop to find the minimum $n$ such that $rounds^n >= b$.

# Complexity
- **Time complexity**: $O(\\log_{rounds} b)$
We are using a while loop to find the minimum $n$ where $rounds^n >= b$.

- **Space complexity**: $O(1)$
We're only using constant extra space.

# Code
```
function poorPigs(b: number, latency: number, testDur: number): number {
    // Total states one pig can be in
    let rounds: number = testDur / latency + 1, n = 0
    // Find min n where rounds^n >= b
    while (rounds ** n < b) n++
    return n
}

```