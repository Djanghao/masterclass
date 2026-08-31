# JavaScript | native math solution | no "toString().split()"

**Author:** Zhe1ka
**Votes:** 2
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/2949037/](https://leetcode.com/problems/self-dividing-numbers/solutions/2949037/)

---

```
function selfDividingNumbers(left: number, right: number): number[] {
    const result = [];
    const parseNum = (num: number) => {
        let copyNum = num;

        while (num > 0) {
            if (copyNum % (num % 10) !== 0) {
                return false;
            }

            num = Math.floor(num / 10);
        }

        return true;
    }

    while (left <= right) {
        const isFit = parseNum(left);

        if (isFit) {
            result.push(left);
        }

        left++;
    }

    return result;
};
```