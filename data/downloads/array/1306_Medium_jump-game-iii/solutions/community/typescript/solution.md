# JS, TypeScript | DFS + Memoriaztion | Few lines of code, super easy to understand

**Author:** code4gura
**Votes:** 3
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/954386/](https://leetcode.com/problems/jump-game-iii/solutions/954386/)

---


```ts
function canReach(arr: number[], start: number): boolean {
    let mem = Array(arr.length).fill(false);
    return helper(start);

    function helper(cur) {
        // Return false if the current index has been reached before
        if (cur < 0 || cur >= arr.length || mem[cur]) return false;
        // reach target `0`
        if (arr[cur] === 0) return true;
        mem[cur] = true;
        return helper(cur + arr[cur]) || helper(cur - arr[cur]);
    }
}
```

**Explanation**
`mem[]` is used to track whether we have reached the current index before
1. `mem[cur] === true` means we have traversed `cur` index before
2. `mem[cur] === false` means the `cur` index hasn't been traversed yet


If we reach an index `cur` that we have traversed before, it means that we have also traversed **index** `cur + arr[cur]` and `cur - arr[cur]` before.

