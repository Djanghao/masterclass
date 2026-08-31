# Javascript: 88ms 87.65%, 37.1MB 77.05%

**Author:** FatalisticRobot
**Votes:** 15
**Link:** [https://leetcode.com/problems/di-string-match/solutions/277207/](https://leetcode.com/problems/di-string-match/solutions/277207/)

---

```
const diStringMatch = (S) => {
    let num = [];
    let inc = 0;
    let dec = S.length;
    let i = 0;
    while(num.length !== S.length+1){
        num[i] = S[i] === 'D'? dec--: inc++;
        i++;
    }
    return num;
};
```