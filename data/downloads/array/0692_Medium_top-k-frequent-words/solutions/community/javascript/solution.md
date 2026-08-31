# 💡JavaScript Solution

**Author:** AminiCK
**Votes:** 40
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/444221/](https://leetcode.com/problems/top-k-frequent-words/solutions/444221/)

---

#### The idea
1. Build a hash and count the frequency
2. Sort the hash using frequency or compare strings
3. Return the top k results
``` javascript
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let hash = {};
    for (let word of words) {
        hash[word] = hash[word]+1||1;
    }
    let result = Object.keys(hash).sort((a,b)=>{
            let countCompare = hash[b] - hash[a];
            if (countCompare == 0) return a.localeCompare(b);
            else return countCompare;
        }   
    );
    return result.slice(0, k);
};
```