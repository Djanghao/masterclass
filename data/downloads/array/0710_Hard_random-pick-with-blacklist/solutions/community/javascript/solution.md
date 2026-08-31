# Map blacklisted numbers, create map elegantly in single pass

**Author:** cepheids
**Votes:** 4
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/3386777/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/3386777/)

---

# Intuition
We want to only call Math.random() once, we want to be able to check the blacklist once to figure out the actual output to return, and we want to be able to process the blacklist quickly. 

# Approach
At `pick` time, we generate a random number in the range `[0, n - blacklist.length]` as that reflects the actual number of valid outputs. However, that number may be in the blacklist, so, we refer to a map to figure out what to transform that number into.

To build that map, we go through the blacklist and assign each blacklisted number to a new map-to value that starts right after `n - blacklist.length` incrementing by one each time.

However, the map-to values we assign are not guaranteed to be valid outputs as they may also be in the blacklist. To fix this, everytime we process a blacklisted number, we also need to check if another blacklisted number has already been mapped to it.

Because of this, we need to process the blacklisted numbers in ascending order. At each blacklisted number, we will be able to determine if it is a brand new number, or if it has already been assigned as a map-to value for another blacklisted number.

For brand new numbers, we simply assign the next map-to number. For those that have already been referenced, we need to go back and update the entry that referenced it.

# Optimization
Now, it is possible to avoid sorting with a little bit of acrobatics. Instead of simply tacking on a new tail segment and updating the head entry on each iteration, we make the code a bit complex to handle the possibility of attaching head segments and joining chains.

It turns out that this can be elegantly done, most of the acrobatics is in determine the head and tail indices.

# Complexity
- Time complexity:
- - Solution: $$O(b)$$
- - Pick: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- - Solution: $$O(b)$$
- - Pick: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
    this.space = n - blacklist.length;
    this.map = {};

    blacklist.forEach((b, i) => {
        const next = this.space + i;

        const head = this.map[b] === undefined ? b : this.map[b];
        const tail = this.map[next] === undefined ? next : this.map[next];

        this.map[head] = tail;
        this.map[tail] = head;
    });
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    const result = Math.floor(Math.random() * this.space);
    return this.map[result] || result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
```