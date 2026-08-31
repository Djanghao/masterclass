# JavaScript | one-liner

**Author:** the_golden_panther
**Votes:** 54
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/1369400/](https://leetcode.com/problems/concatenation-of-array/solutions/1369400/)

---

```
var getConcatenation = function(nums) {
	//spread the nums array twice and return it
    return [...nums,...nums]
};
```