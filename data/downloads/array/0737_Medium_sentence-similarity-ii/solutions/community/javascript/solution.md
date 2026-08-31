# [JavaScript] Easy-understanding template using union-by-rank.

**Author:** Frankcolonel
**Votes:** 2
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/156980/](https://leetcode.com/problems/sentence-similarity-ii/solutions/156980/)

---

```/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
    if(words1.length != words2.length ) return false
    
    // use pairs array to construct the uf. 
    let N = pairs.length, uf = new UnionFind(2 * N), map = {}, count = 0
    for(let pair of pairs) {
        for(let p of pair) {
            if(!map.hasOwnProperty(p)) {
                map[p] = count;
                count++;
            }
        }
        uf.union(map[pair[0]], map[pair[1]])
    }
    
    for(let i = 0; i < words1.length; i++) {
        if(words1[i] === words2[i]) continue
        let word1 = words1[i], word2= words2[i]
        if(!map.hasOwnProperty(word1) || !map.hasOwnProperty(word2) || 
            uf.find(map[word1]) != uf.find(map[word2])) {
            return false
        }
    }
    return true;
    
};

// Use hashmap to store string. and a count value. 
var UnionFind = function(size) {
    let parent = Array(size), rank = Array(size).fill(0)
    for(let i = 0; i < size; i++) {
        parent[i] = i
    }
    
    return {find, union}
    
    function find(x) {
        if(parent[x] != x) parent[x] = find(parent[x])
        return parent[x]
    }
    
    function union(x, y) {
        let xr = find(x), yr = find(y)
        if(xr !== yr) {
           
            if(rank[xr] < rank[yr]) {
                parent[xr] = yr
            } else if(rank[xr] > rank[yr]) {
                parent[yr] = xr
            } else {
                parent[yr] = xr
                rank[xr]++
            }
        }
          
    }
}
```