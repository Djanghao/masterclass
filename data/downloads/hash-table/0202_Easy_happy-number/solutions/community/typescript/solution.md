# Initially I thought that the number itself appears in loop, but then I was wrong

**Author:** vmss
**Votes:** 2
**Link:** [https://leetcode.com/problems/happy-number/solutions/5348240/](https://leetcode.com/problems/happy-number/solutions/5348240/)

---


# Code
```
function isHappy(n: number): boolean {
    let copies = [n];
    n = get_sum(n);
    if(n === 1) return true;

    while(!copies.includes(n)) {

        if(n === 1) {
            return true;
        }
        copies.push(n);

        n = get_sum(n);
    }

    return false;
};
// if at least one digit in n2 is less than one of the digits in n1, we should continue the loop

const get_sum = (num : number) => {
    let sum = 0;
    for(let n of num.toString()) {
        sum += Number(n) ** 2;
    }
    return sum;
}
```