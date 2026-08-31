# Reduce Array Size to The Half - Javascript Clean Solution Beats 100%

**Author:** eslamelkholy1
**Votes:** 11
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/1319970/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/1319970/)

---

in this Problem we are going to Implement Simple Solution to make it happen

1- Use Map Data structure to Count Integers Frequents to get Some thing like this
```javascript
{ '2': 2, '3': 4, '5': 3, '7': 1 }
```
So here number 2 occured two times and number three appeared 4 times and so on 

2- Then Sort the Numbers of time that integer appeared in the array so we are going to sort this Object Keys to get this
```javascript
[ 4, 3, 2, 1 ]
```

3- So then now we can easily get the minimum size of elements we want to remove  by loop at the sorted keys and check if greated than or equal the half of array length

<h3>Code Snippet</h3>

```javascript
var minSetSize = function (arr) {
  const numFreq = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) numFreq[arr[i]] ? numFreq[arr[i]]++ : (numFreq[arr[i]] = 1);

  const sortedIntegerFeq = Object.values(numFreq).sort((a, b) => b - a);

  for (let i = 0; i < sortedIntegerFeq.length; i++) {
    count += sortedIntegerFeq[i];
    if (count >= arr.length / 2) return i + 1;
  }
};
```