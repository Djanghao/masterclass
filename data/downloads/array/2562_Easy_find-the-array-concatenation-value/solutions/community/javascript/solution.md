# JavaScript short and sweet

**Author:** ramrad
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3176511/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3176511/)

---

```js
const findTheArrayConcVal = nums => {
  let output = 0;
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    output += Number(i === j ? nums[i] : `${nums[i]}` + `${nums[j]}`);
    i++;
    j--;
  }
  return output;
};
```