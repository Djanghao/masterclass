# JS strategy-switching algorithm beats 99%

**Author:** bwce33
**Votes:** 5
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/2002034/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/2002034/)

---

There are two valid algorithms implemented here, one which works well for short words and one which works better for small dictionaries (potentially containing long words). Strategy-switching is not a common consideration in most LC problems however in real life this is a very important technique. It is very common for real-world implementations of algorithms like Sorting to optimize their implementation by changing the algorithm depending on which constraints are identified to be the most significant.

This is not the only way to efficiently solve this issue but other optimizations are much more complex and difficult. At the moment this is the only posted JS algorithm that contains the efficient `O(Nm^2)` solution without hitting memory limits as `M` increases.

```
var differByOne = function(dict) {
    if(!dict.length) return false;
    // Here we calculate the expected runtime of the two alternative
    // solutions to see which strategy to apply
	let sol1 = Math.pow(dict[0].length, 2) * dict.length;
    let sol2  = dict.length * dict.length;
	// We are switching strategies depending on which has better efficiency
	// Thanks @ThabetS for suggesting a replacement for hardcoded dict[0].length
    if(sol1 < sol2) {
        // This algorithm is fast with words that are short however it falls apart
        // as word length increases and eventually fails due to memory limits
        const found = new Set();
        for(let word of dict) {
            for(let i = 0; i < word.length; i++) {
                const key = word.slice(0,i) + '*' + word.slice(i+1, word.length);
                if(found.has(key)) return true;
                found.add(key);
            }
        }
        return false;
    } else {
        // This algorithm is better against small N of words. Since this problem
        // is constrained by the *total number of characters in the question*
        // we know that dictionaries containing long words must have small N
        for(let i = 0; i < dict.length; i++) {
            for(let j = i+1; j < dict.length; j++) {
                if(compareTwoStrings(dict[i], dict[j])) return true;
            }
        }
        return false;
    }
};

function compareTwoStrings(string1, string2) {
    let misses = 0;
    for(let i = 0; i < string1.length; i++) {
        if(string1[i] !== string2[i]) {
            misses++;
            if(misses > 1) return false;
        }
    }
    return true;
}
```