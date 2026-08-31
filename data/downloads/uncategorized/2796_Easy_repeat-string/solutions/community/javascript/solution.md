# Recursive

**Author:** mfatihuslu
**Votes:** 10
**Link:** [https://leetcode.com/problems/repeat-string/solutions/3827968/](https://leetcode.com/problems/repeat-string/solutions/3827968/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Beside the normal way, you can use a recursive approach to solve this. 

# Code
```
String.prototype.replicate = function(times) {
    return times == 1 ? this : this + this.replicate(times-1)
}
```