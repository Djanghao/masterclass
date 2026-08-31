# TS solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/4572586/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/4572586/)

---

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
```
class Solution {
  private n: number;
  private blacklist: number[];
  private validNums: number;
  private mp: Map<number, number>;

  constructor(n: number, blacklist: number[]) {
    this.n = n;
    this.blacklist = blacklist;
    this.validNums = this.n - this.blacklist.length;
    this.mp = new Map();
    this.init();
  }

  private init() {
    const st = new Set(this.blacklist);
    let idx = this.validNums;
    for (const x of this.blacklist) {
      if (x < this.validNums) {
        while (st.has(idx)) {
          idx++;
        }
        this.mp.set(x, idx++);
      }
    }
  }

  pick(): number {
    let ans = Math.floor(Math.random() * this.validNums);
    if (this.mp.has(ans)) {
      return this.mp.get(ans)!;
    }
    return ans;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
```