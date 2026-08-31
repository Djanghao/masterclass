# Typescript/Javascript solution

**Author:** georgiiperepechko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1747159/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1747159/)

---

Simple, but tons of corner cases. :/
I send wrong solutions 3 times during contest... All in all -- love this problem :)

```
function minCostSetTime(
    startAt: number,
    moveCost: number,
    pushCost: number,
    targetSeconds: number,
): number {
    const mins = Math.floor(targetSeconds / 60);
    const seconds = targetSeconds % 60;
    const options = [
        `${
            mins > 0 ? mins : '' // avoid '0'
         }${
            `${seconds}`.padStart(mins > 0 ? 2 : 0, '0') // avoid "12" for 1 minutes 2 seconds AND '01' for 0 minutes 1 seconds
         }`
    ];
    
    if (targetSeconds > 59 && (seconds + 60 <= 99)) { // remember: we can dial 1 minute 30 seconds as "160" OR "90" as long as seconds are below 99
        options.push(`${
            (mins - 1) > 0 ? mins - 1 : '' // once again avoid "0"
        }${
            seconds + 60 // no need to check here, since we know that number is double digits
        }`);
    }
    
    let minSum = Infinity;

    for (const option of options) {
        if (option.length > 4) continue; // will ensure that we only accept 100 minutes 00 seconds as 9960 :/
        let optionSum = 0;
        let current = `${startAt}`;
        for (let i = 0; i < option.length; i++) {
            const n = option[i];
            if (n !== current) {
                optionSum += moveCost;
                current = n;
            }
            optionSum += pushCost;
        }
        if (optionSum < minSum) {
            minSum = optionSum;
        }
    }
    return minSum;
};
```