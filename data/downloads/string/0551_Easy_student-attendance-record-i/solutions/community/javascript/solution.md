# A few short JavaScript solutions

**Author:** loctn
**Votes:** 10
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/101610/](https://leetcode.com/problems/student-attendance-record-i/solutions/101610/)

---

Count three consecutive lates as two absents:
```
var checkRecord = function(s) {
    let absentCount = 0;
    for (let i = 0; i < s.length && absentCount < 2; i++) {
        absentCount += (s[i] === 'A') + 2 * (s[i] === 'L' && s[i - 1] === 'L' && s[i - 2] === 'L');
    }
    return absentCount < 2;
};
```
And now for some one-liners...
```
var checkRecord = function(s) {
    return s.split('').reduce((c, a, i) => c + (a === 'A') + 2 * (a === 'L' && s[i - 1] === a && s[i - 2] === a), 0) < 2;
};
```
Using `indexOf`:
```
var checkRecord = function(s, a = 'dummy') {
    return !(~(a = s.indexOf('A')) && ~s.indexOf('A', a + 1) || ~s.indexOf('LLL'));
};
```
Using regex:
```
var checkRecord = function(s) {
    return !/(A.*A|LLL)/.test(s);
};
```
Configurable reward criteria:
```
var checkRecord = function(s, a = 2, l = 3) {
    return s.split('A').length - 1 < a && !~s.indexOf('L'.repeat(l));
};
```
Configurable regex:
```
var checkRecord = function(s, a = 2, l = 3) {
    return !new RegExp(`((A.*){${a}}|L{${l}})`).test(s);
};
```