# Recursive solution with Typescript

**Author:** kira565
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/6029854/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/6029854/)

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
```typescript []
function kthCharacter(k: number): string {

    function recursion(state: string) {
        if (state.length >= k) return state[k - 1]
        let add = "";
        for (let char of state) {
            const code = char.charCodeAt(0)
            if (code === 122) {
                add += "a"
            } else add += String.fromCharCode(code + 1)
        }

        return recursion(state + add)
    }
    return recursion("a")
};
```