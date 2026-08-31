# [javascript] 2 pass simple solution with explanation

**Author:** bt4r9
**Votes:** 30
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/1054366/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/1054366/)

---

The problem becomes really simple if we consider the example.
```js
0 1 2 3 4 5 6 7 8 9 10 11
l o v e l e e t c o d  e
```
What is the shortest distance for index `9` if the character is `e`?
The closest `e` from the left side has the index `6`.
`9 - 6 = 3`
The closest `e` from the right side has the index `11`.
`11 - 9 = 2`
The minimum distance between them is 2, so the answer is 2. Can we do it for any index?
Yes we can, all we need to do is to keep track of the previous character index while iterating from the left to the right and vice versa. The only edge case here is that initially we could possibly don't have a previous index, so to mitigate it for such indecies we can put the shortest distance for them as Infinity and once we complete 2 passes at least one non-Infinity value for each index should exist.
Let's consider the example again.
```js
character = "e"

index  | 0 1 2 3 4 5 6 7 8 9 10 11
char   | l o v e l e e t c o d  e
// shortest distance from left to right
l -> r | I I I 0 1 0 0 1 2 3 4  0 // I = Infinity
// shortest distance from right to left
l <- r | 3 2 1 0 1 0 0 4 3 2 1  0
// the minimum between them is the answer
result | 3 2 1 0 1 0 0 1 2 2 1  0
```

```js
var shortestToChar = function(s, c) {
    let n = s.length;
    let res = [];
        
    let prev = Infinity;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) prev = i;
        res[i] = Math.abs(prev - i);
    }

    prev = Infinity;

    for (let i = n - 1; i >= 0; i--) {
      if (s[i] === c) prev = i;
      res[i] = Math.min(res[i], prev - i);
    }

    return res;
}
```

Time complexity: O(n)
Space complexity: O(n)