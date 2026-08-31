# Recursive | Simple | Faster | JavaScript Submission

**Author:** Mrmagician
**Votes:** 10
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/471322/](https://leetcode.com/problems/iterator-for-combination/solutions/471322/)

---

**Please do upvote, it motivates me to write more such posts\uD83D\uDE03**

```
var CombinationIterator = function(characters, combinationLength) {
    this.arr = build(combinationLength, characters.split("").sort().join(""));
    this.pos = 0;   
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    if(this.pos<this.arr.length){
        return this.arr[this.pos++];
    }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.pos<this.arr.length;
};

function build(max, str, out = [], curr = ""){
    if(curr.length === max){
        out.push(curr);
        return ;
    }
    else{
        for(let i = 0; i<str.length; i++){
            build(max, str.slice(i+1), out, curr + str[i]);
        }
    }
    
    return out;
}
```

***if you have any question, do comment
I would love to clarify them\uD83C\uDFC4\u200D***
