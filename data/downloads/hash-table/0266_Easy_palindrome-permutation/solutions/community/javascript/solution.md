# Share my JavaScript code runtime beat 100% javascript

**Author:** MarsFreewill
**Votes:** 6
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/69660/](https://leetcode.com/problems/palindrome-permutation/solutions/69660/)

---

var canPermutePalindrome = function(s) {
// implement hashset in javascript

    var set = {};
    for (var i = 0; i < s.length; i++) {
        if (!(s.charAt(i) in set)) {
            set[s.charAt(i)] = true;
        } else {
            delete set[s.charAt(i)];
        }
    }
    return Object.keys(set).length === 0 || Object.keys(set).length === 1;
};