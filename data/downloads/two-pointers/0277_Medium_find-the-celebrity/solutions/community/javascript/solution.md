# 💡JavaScript Solution w/ Explanation

**Author:** AminiCK
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/429491/](https://leetcode.com/problems/find-the-celebrity/solutions/429491/)

---

### The Idea
1. Imagine people lined up and you ask from the first person `c` whether he/she knows `i` person, two situations are going to happen:
	* he/she doesn't, this means, `c` person has the potential to become the celebrity while `i` person does not, we move on
	* If he/she does, this automatically mark him/her as unqualified and we can mark `i` person as our new `c`, and the people in between automatically disqualified. Why? because in order to become a celebrity, everybody has to know you. and because of the set up, between `c` & `i` at least one person doesnt know him/her.
``` javascript
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let c = 0;
        for (let i=1;i<n;i++) {
            if (knows(c,i)) {
                c = i;
            }
        }
        
        for (let i=0;i<n;i++) {
            if (i!=c) {
                if (!knows(i,c) || knows(c,i)) {
                    return -1;
                }
            }
        }
        
        return c;
        
    };
};
```