# Simple solution with Backtracking in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/4162428/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/4162428/)

---

# Intuition
Here's a brief explanation of a problem:
- there're `n` and `k` integers
- our goal is to get `k` - th permutation of a **happy string** with length `n`

A **happy string** consists with letters `abc`, that's formed as permutation.
The neighbours **can't be equal** such as `s[i] != s[i+1] (or s[i-1])`.

The approach is straightforward: append to the current permutation a **character**, if it follows the rules above.

# Approach
1. declare `ans`, that's the answer
2. define `backtrack`, that accepts `path`
3. since we're looking for a permutation at `k - 1` - th position, if `k == 0`, we've founded it
4. then check `len(path) == n` and store a current permutation to the `ans`
5. otherwise iterate over `abc` and follow the rules above
6. finally check, if the count of permutation is more than `k`, and return an empty string or `ans` 

# Complexity
- Time complexity: **O(3^N)**, where **N** is the length of `abc` in worst-case scenario

- Space complexity: **O(N)**, for recursive call stack

# Code in Python3
```
class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        self.ans = ''

        def backtrack(path):
            nonlocal k

            if k == 0: return

            if len(path) == n:
                k -= 1
                self.ans = "".join(path)
                return

            for i in range(3):
                char = chr(97 + i)

                if not path or path[-1] != char:
                    path.append(char)
                    backtrack(path)
                    path.pop()
    
        backtrack([])

        return self.ans if not k else ''
```
# Code in TypeScript
```
function getHappyString(n: number, k: number): string {
    let ans = '';

    const backtrack = (path: string[]): void => {
        if (k === 0) return;

        if (path.length === n) {
            k--;
            ans = path.join('');
            return;
        }

        for (let i = 0; i < 3; i++) {
            const char = String.fromCharCode('a'.charCodeAt(0) + i);

            if (path[path.length - 1] !== char) {
                path.push(char);
                backtrack(path);
                path.pop();
            }
        }
    };

    backtrack([]);

    return !k ? ans : '';
}
```