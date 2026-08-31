# Javascript super short and simple trie solution

**Author:** TheBigBadWolf
**Votes:** 6
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/807590/](https://leetcode.com/problems/stream-of-characters/solutions/807590/)

---

```
/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    this.root = {};
    for (let w of words) {
      w = w.split('').reverse().join('');  
      let node = this.root;
      for (let c of w) {
        if (!node[c]) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    this.letters = [];
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    this.letters.push(letter);
    let lookingIn = this.root;
    for(let i = this.letters.length-1; i >=0; i--) {
        if(lookingIn[this.letters[i]]) {
            lookingIn = lookingIn[this.letters[i]];
            if(lookingIn.word) return true;
        } else {
            return false;
        }
    }
    return false
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
```