# Typescript BackTracking with Explanation

**Author:** michaeleliot
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/5515022/](https://leetcode.com/problems/beautiful-arrangement/solutions/5515022/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We essentially just need to try every possibility. Since there are only 15 possibilities, we can just try them all in each spot, so long as they abide by the division rules and don't already exist in the array.

# Approach
<!-- Describe your approach to solving the problem. -->
Recusrively, starting at 1, iterate through all possible numbers that could work for 1. When a match is found, we add it to a set to signify it being a part of the array, and move onto 2. We continue this until we hit n + 1, where we know we have hit a beautiful arrangement, and can increment the counter by 1. We then return the incremental

# Complexity
- Time complexity: O(n!): We are looking for all permutations of the numbers 1 through n essentially, which is O(n!) time.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) we keep a set of numbers up to size n. This could be improved with a bitmap. However, given n must be 15 or under, it's not imporant.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countArrangement(n: number): number {
    const set = new Set()
    let ret = 0

    function helper(i: number) {
        if (i === n + 1) {
            ret++
        }
        else {
            for (let j = 1; j <= n; j++) {
                let isDivisibleBy = !(j % i)
                let dividesInto = !(i % j)
                if ((isDivisibleBy || dividesInto) && !set.has(j)) {
                    set.add(j)
                    helper(i+1)
                    set.delete(j)
                }
            }
        }
    }

    helper(1)
    return ret
};
```