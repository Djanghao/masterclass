# Javascript backtracking solution with written intuition

**Author:** gradyz
**Votes:** 9
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/1682486/](https://leetcode.com/problems/permutations-ii/solutions/1682486/)

---

Time: `O(n!)` - Each `dfs` call makes (n-1) `dfs` calls
Space: `O(n!)` - If all nums are unique, a unique combo is yielded at end of every branch.

Strategy and Intuition

* When asked for combos, it's a good bet that we can use a recursive approach.
* To place an item once per combo, we'll need to save info about the indicies we've visited.
* To meet the condition for unique combos, we'll need a way to "skip" over nums that have already yielded combos.  Sorting helps us check if the curr num is a repeat one.
* Every `dfs` call has 3 steps.
	1) Add `i` to visited
	2) Call `dfs`
	3) Remove `i` from visited (this is the backtracking step)
* In plain English, "skip" the current `i` when:
	* We've already been to the index in an earlier call to `dfs`
		* `if (visited.has(i)) continue;`
	* The curr num is the same as the prev num AND we haven't seen the prev index
		* `if (nums[i] === nums[i-1] && !visited.has(i-1)) continue;`
* **Preventing Duplicates**
	* Any subsequent repeat nums will yield duplicate combos if not handled.
	* Take the input `[a1, a2, b1]` which yields combos `[a1, a2, b1], [a2, a1, b1]`
		* To prevent this, simply stop `a2` from being added before `a1`
		* Thus, `!visited.has(i-1)) continue;`

Hope this helps!
```
var permuteUnique = function(nums) {
    let res = [];
    dfs(nums.sort(), res, new Set());
    return res;
};

const dfs = (nums, res, visited) => {
    if (nums.length === visited.size) {
        let arr = [];
        for (let idx of visited) {
            arr.push(nums[idx]);
        }
        res.push(arr);
        return;
    }
    
    for (let i = 0; i < nums.length; i++) {         
        if (nums[i] === nums[i-1] && !visited.has(i-1)) continue;
        if (visited.has(i)) continue;
        visited.add(i);
        dfs(nums, res, visited);
        visited.delete(i);
    }
}
```