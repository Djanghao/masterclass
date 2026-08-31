# Javascript solution straightforward

**Author:** chrystal-lyu
**Votes:** 5
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/373385/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/373385/)

---

The idea is to play around with probalibilities (see comments in code below).
Adopted from [@niwota](https://leetcode.com/niwota) and [@hwei002](https://leetcode.com/hwei002) --> [here](https://leetcode.com/problems/implement-rand10-using-rand7/discuss/150312/Easy-solution). 
```
var rand10 = function() {
  let i = 7;
  let j = 6;
  while (i > 6) i = rand7(); // i could be 1, 2, 3, 4, 5, or 6
  while (j > 5) j = rand7(); // j could be 1, 2, 3, 4, or 5
  if (i % 2 === 0) { // if i end up being even (50% the chance because it could be 2, 4, 6)
    return j; // return 1, 2, 3, 4, or 5
  } else { //if i end up being odd (also 50% of the chance because it could be 1, 3, 5)
    return j + 5; // return 6, 7, 8, 9, or 10
  }
};
```

I found this solution better in terms of understanding. Hope it also helps you guys!