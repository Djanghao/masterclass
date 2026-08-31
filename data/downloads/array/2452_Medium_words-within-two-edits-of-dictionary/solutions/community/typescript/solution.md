# 3 layers for-loop, 77ms (Beats 50%) 53.03MB (Beats 50%)

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/4835403/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/4835403/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function twoEditWords(queries: string[], dictionary: string[]): string[] {
    let ans: string[] = new Array()
    for (let querie of queries)
        for (let word of dictionary) {
            let count: number = 0
            for (let i: number = 0; i < querie.length; i++) {
                if (querie[i] != word[i]) count++
                if (count > 2) break
            }
            if (count < 3) {
                ans.push(querie)
                break
            }
        }
    return ans
};
```
![\u87A2\u5E55\u64F7\u53D6\u756B\u9762 2024-03-07 121700.png](./images/0.png)
