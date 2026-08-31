# Javascript solution

**Author:** zengxinhai
**Votes:** 13
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/257104/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/257104/)

---

```js
const numPairsDivisibleBy60 = (time) => {
    const appearDic = {};
    let ans = 0;
    time.forEach(el => {
        const mod = el % 60;
        const left = (60 - mod) % 60;
        ans += appearDic[left] ? appearDic[left] : 0;
        appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
    });
    return ans;
};
```