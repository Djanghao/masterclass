# Clean solution of sliding window

**Author:** HawtinZeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5503556/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5503556/)

---

# Intuition
1. count the frequency of one in the range of window.
2. test nums[i] & (1<<bit), not i+x, i++!
3. precalculate constants before going to the loop process. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countSubarrays(nums: number[], k: number): number {
  function atLeast(m: number) {
    const onesFreq = new Array(32).fill(0);
    let l = 0, count = 0, sumAdd = 0;
    for (let i = 0; i < nums.length; i++) {
      onesFreq.forEach((_: number, bit: number) => {
        if ((nums[i] & (1<<bit))) onesFreq[bit]++;
      })
      while (calcAdd(onesFreq, l, i) < m && i - l + 1 > 0) {
        onesFreq.forEach((_: number, bit: number) => {
          if ((nums[l] & (1<<bit))) onesFreq[bit]--;
        })

        l++;
      }
      count += (i-l+1);
    }

    return count;
    
  }
  return atLeast(k) - atLeast(k+1);
};

function calcAdd(oneFreq: number[], l: number, r: number) {
  let sum = 0;
  oneFreq.forEach((v, i) => {
    if (v === r - l + 1) {
      sum += 1<<i;
    }
  })

  return sum;
}
```