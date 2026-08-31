# Typescript, Recursion

**Author:** amal-ps
**Votes:** 0
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/3207625/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/3207625/)

---

# Code
```
function splitString(s) {
    return recSplitStr('', s) ? true : false;
};

function recSplitStr(p, up) {
    debugger;
    if (up == '') {
        return true;
    }
    if (p != "" && +p == 0 && +up == 0) {
        return true;
    }
    let flag = false;
    for (let i = 0; i < ((p == "") ? up.length - 1 : up.length); i++) {
        let pNew = up.substring(0, i + 1)
        let upNew = up.substring(i + 1, up.length)

        if (+pNew != 0 && p == "") {
            flag = flag || recSplitStr(pNew, upNew) ? true : false;
        }
        if (+p == 1 && +pNew == 0) {
            flag = flag || recSplitStr(pNew, upNew) ? true : false;
        } 
        else if (+pNew != 0 && (+p - +pNew == 1)) {
            flag = flag || recSplitStr(pNew, upNew) ? true : false;
        }
    }
    return flag;
};
```