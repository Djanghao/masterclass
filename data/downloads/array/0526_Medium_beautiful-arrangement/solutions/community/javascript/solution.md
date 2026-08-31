# JS | DFS + Backtracking | Beats 70%, 90% Memory

**Author:** adt
**Votes:** 5
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/1508858/](https://leetcode.com/problems/beautiful-arrangement/solutions/1508858/)

---

The format for a lot of these DFS/backtracking problems is very similar. I'd suggest that for anything that has to do with generating **permutations**, **combinations**, or **subsets** with any sort of constraint on them (counting, looking for specific types, etc) to consider some sort of recursive/DFS solution. For me at least, this will help understand the problem space and you can always find a more clever bottom-up approach further down the line if needed. 

On a side note, you can either choose to use a `bool` array as pictured, or build your own array containing only valid entries and return if `arr.length === n`. The second approach was more intuitive to me, but is a bit less efficient due to making use of `array.includes` or some other check to make sure we aren't double counting the current `idx`. 

```
const countArrangement = (n) => {
	if (n < 3) return n;
    const visited = Array(n+1).fill(false);
	let ans = 0;

	const dfs = (i) => {
		if (i > n) {
            ans++;
            return;
        }

		for (let idx=1;idx<=n;idx++) {
            // need this here to avoid the double counting
            if (!visited[idx] && (idx % i === 0 || i % idx === 0)) {
                visited[idx] = true;
                dfs(i+1);
                visited[idx] = false;
            }
		}
        return;
	};

	dfs(1);
	return ans;
};
```