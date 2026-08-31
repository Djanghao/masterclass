# Share my JavaScript code runtime beat 100% javascript

**Author:** MarsFreewill
**Votes:** 3
**Link:** [https://leetcode.com/problems/flip-game/solutions/73927/](https://leetcode.com/problems/flip-game/solutions/73927/)

---

var generatePossibleNextMoves = function(s) {

    var ans = [];
    if (!s || s.length < 2) {
        return ans;
    }
    for (var pos = s.indexOf("++"); pos != -1; pos = s.indexOf("++", pos+1)) {
        s = s.substr(0, pos) + "--" + s.substr(pos+2);
        ans.push(s);
        s = s.substr(0, pos) + "++" + s.substr(pos+2);
    }
    return ans;
};