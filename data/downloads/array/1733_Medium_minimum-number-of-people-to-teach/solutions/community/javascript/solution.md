# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/4793426/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/4793426/)

---

# Code
```
var minimumTeachings = function (n, languages, friendships) {
    let mostSpokenLanguages = new Array(n + 1).fill(0);
    let map = new Map();

    friendships.forEach((element) => {
        let LANG = new Set(languages[element[0] - 1]);

        let shareLang = false;
        for (const l of languages[element[1] - 1]) {
            if (LANG.has(l)) {
                shareLang = true;
                break;
            }
        }

        if (!shareLang) {
            map.set(element[0], languages[element[0] - 1]);
            map.set(element[1], languages[element[1] - 1]);
        }
    });

    map.forEach((value, key) => {
        for (let l of value) ++mostSpokenLanguages[l]
    });

    return map.size - Math.max(...mostSpokenLanguages);
};
```