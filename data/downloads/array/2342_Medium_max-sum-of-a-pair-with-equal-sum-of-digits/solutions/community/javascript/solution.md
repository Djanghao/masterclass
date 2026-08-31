# ✅ [TS] 100% Faster 118ms | HashMap | Easy to understand

**Author:** viniciusteixeiradias
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2822445/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2822445/)

---

```
const maximumSum = (nums: number[]): number => {
    const getDigitSum = (num: number): number => {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    const map = new Map<number, number>();
    let ans: number = -1;

    for (let i = 0; i < nums.length; i++) {
        const sum = getDigitSum(nums[i]);

        if (map.has(sum)) {
            const curr = map.get(sum)!
            const max = Math.max(nums[i], curr);

            ans = Math.max(ans, curr + nums[i]);

            map.set(sum, max);
        } else {
            map.set(sum, nums[i])
        }

    }

    return ans;
}
```
Let me know in comments if you have any doubts. I will be happy to answer.
Please upvote if you found the solution useful.