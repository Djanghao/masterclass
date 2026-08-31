# O(n) Simple Javascript Solution Using 2 Hashmaps

**Author:** aayushsingh7
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6097248/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6097248/)

---

# Intuition
The main aim is to split the string `s` into `k` equal-sized substrings and `check` that can `s` be rearranged to become string `t` and not the ways to convert it to `t` itself.

that means, both `s` & `t`, should have same pairs so that `s` can be rearranged into `t`.

Example
`````
Input: s = "abcd", t = "cdab", k = 2
// split s and t into k equal-sized substrings pairs
s = ["ab","cd"]
t = ["cd","ab"]
`````

here observe that, both `s` & `t` has same `pairs` and in same `frequencies`, that simply means `s` can be rearranged. 


# Approach
- simply calculate how many elements should be their in each array of substrings using `s.length / totalPairs`
- Create 2 maps for storing substring pairs of `s` & `t` respectively.
- use 1 for loop to `store values` into both maps.
- use `.slice` method to slice substrings of length `elemPerPairs`.
- finally compare both maps to check both `s` & `t` has all the pairs and every pair has same frequencies.


# Complexity
> O(n) + O(n) => O(n)

- Space complexity:
> O(n^2) for using 2 maps

# Code
```javascript []
/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var isPossibleToRearrange = function (s, t, totalPairs) {
    if (s.length !== t.length) return false
    let elemPerPairs = Math.floor(s.length / totalPairs)

    let tSplitMap = new Map();
    let sSplitMap = new Map();
    for (let i = 0; i < totalPairs; i++) {
      // to calculate starting and ending indexes for slicing 
        let [start, end] = [i * elemPerPairs, (i * elemPerPairs) + elemPerPairs]
        sSplitMap.set(s.slice(start, end), (sSplitMap.get(s.slice(start, end)) || 0) + 1);
        tSplitMap.set(t.slice(start, end), (tSplitMap.get(t.slice(start, end)) || 0) + 1)
    }
    for (let [key, val] of tSplitMap) {
// return false if key doesn't exist or is not in same frequency
        if (sSplitMap.get(key) !== val) return false;
    }

    return true
};
```