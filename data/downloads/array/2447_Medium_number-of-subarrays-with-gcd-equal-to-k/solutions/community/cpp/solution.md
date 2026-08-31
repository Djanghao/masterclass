# [C++] Simple Code with Dry Run

**Author:** theomkumar
**Votes:** 45
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2734158/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2734158/)

---

1.gcd of (0, n) is n.

```
    int subarrayGCD(vector<int>& nums, int k) {
		int cnt = 0;
        for (int i = 0; i < size(nums); i++)
        {
            int currGcd = 0;
            for (int j = i; j < size(nums); j++)
            {
                currGcd = gcd(currGcd, nums[j]);
                if (currGcd == k) cnt++;
            }
        }
        return cnt;
    }
```
Dry Run for nums : `[9,3,1,2,6,3]`, `K = 3`
```
i : 9 j: 9 currGcd: 9 cnt:0
i : 9 j: 3 currGcd: 3 cnt:1 *
i : 9 j: 1 currGcd: 1 cnt:1
i : 9 j: 2 currGcd: 1 cnt:1
i : 9 j: 6 currGcd: 1 cnt:1
i : 9 j: 3 currGcd: 1 cnt:1

i : 3 j: 3 currGcd: 3 cnt:2 *
i : 3 j: 1 currGcd: 1 cnt:2
i : 3 j: 2 currGcd: 1 cnt:2
i : 3 j: 6 currGcd: 1 cnt:2
i : 3 j: 3 currGcd: 1 cnt:2

i : 1 j: 1 currGcd: 1 cnt:2
i : 1 j: 2 currGcd: 1 cnt:2
i : 1 j: 6 currGcd: 1 cnt:2
i : 1 j: 3 currGcd: 1 cnt:2

i : 2 j: 2 currGcd: 2 cnt:2
i : 2 j: 6 currGcd: 2 cnt:2
i : 2 j: 3 currGcd: 1 cnt:2

i : 6 j: 6 currGcd: 6 cnt:2
i : 6 j: 3 currGcd: 3 cnt:3 *

i : 3 j: 3 currGcd: 3 cnt:4 *
```


**Optimisation**:  after updating count : `if(currGcd < k || (currGcd % k) != 0) break;`  [@parameterNextNaive](https://leetcode.com/parameterNextNaive/)

`[9,3,1,2,6,3]`, `K = 3`

```
i : 9 j: 9 currGcd: 9 cnt:0
i : 9 j: 3 currGcd: 3 cnt:1 *
i : 9 j: 1 currGcd: 1 cnt:1

i : 3 j: 3 currGcd: 3 cnt:2 *
i : 3 j: 1 currGcd: 1 cnt:2

i : 1 j: 1 currGcd: 1 cnt:2

i : 2 j: 2 currGcd: 2 cnt:2

i : 6 j: 6 currGcd: 6 cnt:2
i : 6 j: 3 currGcd: 3 cnt:3 *

i : 3 j: 3 currGcd: 3 cnt:4 *
```
