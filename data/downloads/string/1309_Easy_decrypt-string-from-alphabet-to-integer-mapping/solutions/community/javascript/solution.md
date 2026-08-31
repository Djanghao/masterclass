# [JavaScript] Easy to understand - 3 solutions

**Author:** poppinlp
**Votes:** 30
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/473186/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/473186/)

---

First, we use a map for all 3 solutions here. We could generate this map easily via `JSON.stringify`. And I won't include this part into codes bellow.

```js
const map = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m","14":"n","15":"o","16":"p","17":"q","18":"r","19":"s","20":"t","21":"u","22":"v","23":"w","24":"x","25":"y","26":"z"};
```

### SOLUTION 1

In this problem, we only meet 2 kinds of letters - '#' and others. So we can solve it easily via stack. Actually it's a general solution to all problems like this.

```js
const freqAlphabets = s => {
  const stack = [];
  for (const char of s) {
    if (char !== '#') { stack.push(char); continue; }
    const digit = stack.pop();
    stack.push(map[(stack.pop() + digit)]);
  }
  let ret = '';
  for (const char of stack) {
    ret += char <= '9' ? map[char] : char;
  }
  return ret;
};
```

### SOLUTION 2

The logic is pretty simple for this problem. So we could just traversal and check the `i+2` letter to convert easily without a stack.

```js
const freqAlphabets = s => {
  let ret = '';
  for (let i = 0; i < s.length; ++i) {
    ret += map[s[i + 2] === '#' ? (i += 2, s[i - 2] + s[i - 1]) : s[i]];
  }
  return ret;
};
```

### SOLUTION 3

Sure, we could use RegExp here.

```js
const freqAlphabets = s => s.replace(/(\\d\\d#|\\d)/g, t => map[t.length === 3 ? t[0] + t[1] : t]);
```