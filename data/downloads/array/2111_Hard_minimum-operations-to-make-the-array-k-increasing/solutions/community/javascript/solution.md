# Find by longest Non Decreasing Sub sequence solution clean

**Author:** articFz
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1635722/](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1635722/)

---


```javascript
var kIncreasing = function (arr, k) {
  let res = 0,
    n = arr.length;
  for (let i = 0; i < k; i++) {
    const newArr = [];
    for (let j = i; j < n; j += k) {
      newArr.push(arr[j]);
    }
    res += newArr.length - longestNonDecreasingSub(newArr);
  }
  return res;
};

function longestNonDecreasingSub(arr) {
  const sub = [];

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (sub[sub.length - 1] <= curr) {
      sub.push(curr);
    } else {
      let j = 0;
      while (curr >= sub[j]) {
        j++;
      }
      sub[j] = curr;
    }
  }
  return sub.length;
}
```