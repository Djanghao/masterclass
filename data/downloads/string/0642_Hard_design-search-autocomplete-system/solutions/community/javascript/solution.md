# 💡JavaScript Solution (Trie)

**Author:** AminiCK
**Votes:** 14
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/443177/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/443177/)

---

### The Idea
1. Store the information as a trie
2. Every input character before '#' will be saved cumulatively to `inputString`, run an initial traverse to find the end node for `inputString`, and run dfs on the rest 
```
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.trie = {};
    this.inputString = "";
    for (let i=0;i<sentences.length;i++) {
       this.insert(sentences[i], times[i])
    }
};

/** 
 * @param {string} 
 * @return {}
 */
AutocompleteSystem.prototype.insert = function(sentence, times) {
    let node = this.trie;
    for (let char of sentence) {
        if (node[char]==null) node[char] = {};
        node = node[char];
    }
    node.isEnd = true;
    node.times = node.times+1||times;
}


/** 
 * @param {character} 
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if (c == '#') {
        this.insert(this.inputString, 1);
        this.inputString = "";
        return [];
    }

    this.inputString+=c;
    let node = this.trie;
    let result = {};
    // initial traverse 
    for (let char of this.inputString) {
        if (node[char]) node = node[char];
        else return [];
    }
    
    let dfs = function(root, char) {
        for (let key in root) {
            if (key == 'isEnd') { // found a complete sentence
                if (!result[root.times]) result[root.times] = []; // housekeeping initialize
                result[root.times].push(char);
                result[root.times].sort();
            }
            dfs(root[key], char+key);
        }
    }

    // dfs on rest of the nodes
    dfs(node, this.inputString);

    // sort and filter
    let sorted = [];
    let sortedKeys = [...Object.keys(result)].sort((a,b)=>b-a);
    for (let key of sortedKeys) sorted.push(...result[key]);

    return sorted.slice(0,3);
};
```