# Two JS Solutions

**Author:** hbjORbj
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/848572/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/848572/)

---

```
var numSplits = function(s) {
    let set1 = new Set(), set2 = new Set();
    let arr = [], res = 0;
    for (let i = 0; i < s.length; i++) {
        set1.add(s[i]);
        arr[i] = set1.size;
    }
    for (let j = s.length-1; j > 0; j--) {
        set2.add(s[j]);
        if (arr[j-1] === set2.size) res++;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}
```

```
var numSplits = function(s) {
    let arr = s.split(""), res = 0;
    for (let i = 1; i < arr.length; i++) {
        if (new Set(arr.slice(0,i)).size ===
            new Set(arr.slice(i)).size) res++;
    }
    return res;
    // Time Complexity: O(n^2)
    // Space Complexity: O(n)
    // TLE (Time Limit Exceeded)
};
```