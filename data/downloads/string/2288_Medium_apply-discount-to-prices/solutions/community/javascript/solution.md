# JavaScript Solution || Easy solution

**Author:** Ashvin0740
**Votes:** 3
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/3093817/](https://leetcode.com/problems/apply-discount-to-prices/solutions/3093817/)

---


# Code
```
/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
const discountPrices = function(sentence, discount) {
    const arr = sentence.split(' ');
    let ans = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 1 && arr[i][0] === '$' && !arr[i].substring(1, arr[i].length).includes('$') &&  !/[a-zA-Z]/g.test(arr[i].substring(1, arr[i].length))) {
            const dis = arr[i].split('$');
            dis[1] = (dis[1] - (dis[1] * discount) / 100).toFixed(2);
            ans += `$${dis[1]} `;
        } else {
            ans += `${arr[i]} `;
        }
    }
    return ans.trim();
};
```