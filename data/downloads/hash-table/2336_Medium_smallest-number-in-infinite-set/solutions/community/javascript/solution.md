# Simple Array. Soooo easy.

**Author:** hanbi58
**Votes:** 8
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3271543/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3271543/)

---

# Intuition
Use index to represent the numbers.

Well, I do welcome any better solutions. But this intuitive one works perfectly.

# Complexity
- Time complexity:
O(n)>

- Space complexity:
O(n)

# Code
```
class SmallestInfiniteSet {
  constructor() {
    this.arr = new Array(1001).fill(true);
  }
  popSmallest() {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i]) {
        this.arr[i] = false;
        return i;
      }
    }
    return null;
  }
  addBack(num) {
    this.arr[num] = true;
  }
}

```

![1.jpg](./images/0.jpeg)
