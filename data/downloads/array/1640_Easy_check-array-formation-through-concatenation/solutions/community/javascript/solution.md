# simple and easy solution with javascript

**Author:** armageddon2033
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/918538/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/918538/)

---

here's my simple solution,if there is any suggestion for improvement or a better solution,feel free to share it in the comment section below 

```
var canFormArray = function(arr, pieces) {
	let total = "";
    arr=arr.join("");
    for (let i = 0; i < pieces.length; i++) {
      pieces[i] = pieces[i].join("");
      total += pieces[i];
      if (arr.indexOf(pieces[i]) == -1) return false;
    }
    return total.length == arr.length;
};
```