# Easy JS Solution: Queue

**Author:** dollysingh
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2661015/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2661015/)

---

**Explanation:**
Data structure : Queue. 

```
var LUPrefix = function(n) {
    let q = new Array(n).fill(0);
    this.q = q;
    this.f = 0; //"f" is front of queue
};

//O(1)
LUPrefix.prototype.upload = function(video) {
    this.q[video - 1] = 1;
};

//O(n)
LUPrefix.prototype.longest = function() {
    while(this.q[this.f] && this.f < this.q.length) {
        this.f += 1;
    }
    return this.f;
};
 ```