# [Javascript] SET

**Author:** Lynn19950915
**Votes:** 11
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2185818/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2185818/)

---

Create a `set` of unique letters in `s`, then check from `Z` to `A`.

```
var greatestLetter = function(s) {
    let set=new Set(s.split(""));
	// ASCII(A-Z, a-z)=(65-90, 97-122).
    for(let i=90; i>=65; i--){
        if(set.has(String.fromCharCode(i)) && set.has(String.fromCharCode(i+32))){
            return String.fromCharCode(i);
        }
    }
    return "";
};
```

Thanks for your reading and **up-voting** :)

**\u2B50 Check [HERE](https://github.com/Lynn19950915/LeetCode_King) for my full Leetcode Notes ~**