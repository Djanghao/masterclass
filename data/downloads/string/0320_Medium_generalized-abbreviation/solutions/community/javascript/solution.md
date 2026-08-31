# Javascript, 260ms, backtracking

**Author:** ykwwind
**Votes:** 1
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/77233/](https://leetcode.com/problems/generalized-abbreviation/solutions/77233/)

---

<pre>
<code>
var generateAbbreviations = function(word) {
    var result = [];
    if(!word) return [''];
    var sb = [];
    dfs(result, sb, word, 0, 0);
    return result;
};
function dfs(result, sb, strs, num, index) {
    if(index === strs.length) {
        result.push(sb.join('')+(num?String(num):''));
        return;
    }
    dfs(result, sb, strs, num+1, index+1);
    if(num)sb.push(num);
    sb.push(strs.charAt(index));
    dfs(result, sb, strs, 0, index+1);
    sb.pop();
    if(num)sb.pop();
}
</code>
</pre>