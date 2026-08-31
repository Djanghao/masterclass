# Simple es5 Javascript: 94% time and 100% space

**Author:** jfeiasoj21
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/268589/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/268589/)

---

```
var lengthOfLongestSubstringKDistinct = function(s, k) {
  var [r,l,ans,counter] = [0,0,0,0];
  var hash = {};
  while (r < s.length) {
    var rChar = s[r];
    if (!hash[rChar ]) {
      hash[rChar] = 1;
      counter++;
    } else {
      hash[rChar]++;
    }

    while (counter === k+1) {
      var lChar = s[l];
      hash[lChar]--;
      if (hash[lChar] === 0) counter--;
      l++;
    }

    ans = Math.max(ans, r-l+1);
    r++;
  }

  return ans;
}
```