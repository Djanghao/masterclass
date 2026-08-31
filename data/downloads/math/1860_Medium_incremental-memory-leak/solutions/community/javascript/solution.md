# [JavaScript] 1860. Incremental Memory Leak

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/3800716/](https://leetcode.com/problems/incremental-memory-leak/solutions/3800716/)

---


- 1 - with comments
- 2 - without comments
- 3 - for loop
- 4 - short - 3 conditions checks each time - not optimal

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

1 - with comments
```
var memLeak = function (availableMemoryBits1, availableMemoryBits2) {
  // after i seconds
  //    i bits are taken
  //    from  the bigger of the  availableMemoryBits
  let i = 1
  while (1) {
    // i bits are taken from  the bigger of the  availableMemoryBits
    if (availableMemoryBits1 >= availableMemoryBits2) {
      if (availableMemoryBits1 < i) break //  not enough bits   to take
      availableMemoryBits1 -= i; //           take it
    } else {
      if (availableMemoryBits2 < i) break //  not enough bits   to take
      availableMemoryBits2 -= i; //           take it
    }
    i++
  }
  return [i, availableMemoryBits1, availableMemoryBits2];
};
```

2 - without comments
```
var memLeak = function (bits1, bits2) {
  let i = 1
  while (1) {
    if (bits1 >= bits2) {
      if (bits1 < i) break
      bits1 -= i;
    } else {
      if (bits2 < i) break
      bits2 -= i;
    }
    i++
  }
  return [i, bits1, bits2];
};
```

3 - for loop
```
var memLeak = function (b1, b2) {
  let i
  for (i = 1; ; i++) {
    if (b1 >= b2) {
      if (b1 < i) break
      b1 -= i;
    } else {
      if (b2 < i) break
      b2 -= i;
    }
  }
  return [i, b1, b2];
};
```

4 - short - 3 conditions checks each time, not optimal
```
var memLeak = function (b1, b2) {
  for (let i = 1; ; i++) {
    if (i > b1 && i > b2)
      return [i, b1, b2];

    if (b1 >= b2)
      b1 -= i;
    else
      b2 -= i;
  }
};
```
