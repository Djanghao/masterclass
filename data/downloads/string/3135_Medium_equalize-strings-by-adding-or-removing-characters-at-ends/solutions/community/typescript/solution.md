# Typescript | Short solution without dynamic programming

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5515892/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5515892/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When removing from the first and last elements, the most beneficial way to remove the elements from initial is to find the longest common substring (LCS) between initial and target.

# Approach
<!-- Describe your approach to solving the problem. -->
Instead of using dynamic programming, we just simply check all positions and count the size of a continous substring. The solution is the length of initial plus the length of target - the length of the LCS * 2.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * m)$$ 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ 

# Code
```
function minOperations(initial: string, target: string): number {
    const n: number = initial.length;
    const m: number = target.length;

    var sol: number = 0;

    for(let i=-m+1; i<n; i++){
        var a: number = 0;

        for(let j=Math.max(0, -i); i+j < n && j < m; j++){
            a = (initial[i+j] == target[j]) ? a + 1 : 0;
            sol = Math.max(sol, a);
        }
    }

    return n + m - 2 * sol;
};
```