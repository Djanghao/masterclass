# javascript solution beats 100%

**Author:** fatalme
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1663092/](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1663092/)

---

modified binary index tree method:

```
var subarraysWithMoreZerosThanOnes = function(nums) {
    let a = Array(2 * 100000 + 3).fill(0);
    let i = 100001;
        while(i < a.length) {
            a[i]++;
            i += i & -i;
        }
    let presum = 0;
    let res = 0;
    for(let n of nums) {
        presum += n?1:-1;
        let i = presum + 100001;
        let j = i - 1;
        while(j > 0) {
            res += a[j];
            res %= 1000000007;
            j -= j & -j;
        }
        while(i < a.length) {
            a[i]++;
            i += i & -i;
        }
    }
    return res;
};
```