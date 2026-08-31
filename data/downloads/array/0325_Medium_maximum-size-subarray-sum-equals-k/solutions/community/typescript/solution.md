# Linear Solution. Beats 90%

**Author:** MishaKonki
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/5194880/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/5194880/)

---



# Code
```
  function maxSubArrayLen(nums: number[], k: number): number {
    let prefSum = Array(nums.length).fill(0);
    prefSum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      prefSum[i] = prefSum[i - 1] + nums[i];
    }
    console.log(prefSum);
    let prefSumMap = new Map();
    prefSumMap.set(0, [-1])

    for (let i = 0; i < prefSum.length; i++) {
        let pS = prefSum[i];
        if (!prefSumMap.has(pS)) prefSumMap.set(pS, i);
    }


    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (prefSumMap.has(prefSum[i] - k)) {
            let el = prefSumMap.get(prefSum[i] - k);
            max = Math.max(max, i - el);
        }
    }
    return max;
  }

```