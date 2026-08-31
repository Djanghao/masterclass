# Greedy Approach [Typescript]

**Author:** movchanchik
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/5309905/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/5309905/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m), where n is the length of target and m is the length of source
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function shortestWay(source: string, target: string): number {
    let targetIndex: number = 0;
    let result: number = 0;

    while (targetIndex < target.length) {
        let sourceIndex: number = 0;
        let matched: boolean = false;

        while (sourceIndex < source.length && targetIndex < target.length) {
            if (source[sourceIndex] === target[targetIndex]) {
                targetIndex++;
                matched = true;
            }
            sourceIndex++;
        }

        if (!matched) {
            return -1;
        }

        result++;
    }

    return result;
}

```