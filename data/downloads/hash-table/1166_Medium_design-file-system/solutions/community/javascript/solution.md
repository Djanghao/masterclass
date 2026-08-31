# Simple HashMap Solution JS

**Author:** shushanik777
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-file-system/solutions/5093144/](https://leetcode.com/problems/design-file-system/solutions/5093144/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

var FileSystem = function() {
    this.paths = new Map()
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    let parent = path.slice(0, path.lastIndexOf("/"))

    if (path !== "" && path !== "/" && !this.paths.has(path) && (this.paths.has(parent) || parent === "")) {
        this.paths.set(path,value)
        return true
    }
    return false
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    if (this.paths.has(path)) return this.paths.get(path)
    return -1
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
```