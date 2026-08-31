# ✔️Easy Solution✔️2628. JSON Deep Equal✔️Level up🚀your JavaScript skills 🚀Day 17

**Author:** Vikas-Pathak-123
**Votes:** 30
**Link:** [https://leetcode.com/problems/json-deep-equal/solutions/3547342/](https://leetcode.com/problems/json-deep-equal/solutions/3547342/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
>The problem requires checking if two objects, `o1` and `o2`, are deeply equal. Two objects are deeply equal if they have the same keys and the associated values are also deeply equal. We need to handle various cases like comparing primitive values, arrays, and objects recursively

# Approach
<!-- Describe your approach to solving the problem. -->
>The provided code already outlines the approach for solving the problem. Here's a summary of the approach:

>1. Check the types of `o1` and `o2`:
>- If they have different types, they are not deeply equal, so return `false`.
>- If they are primitive values or `null`, compare them directly and return the result.
>- If they are arrays, compare their lengths and recursively check if each element is deeply equal.
>- If they are objects, compare their keys and recursively check if the corresponding values are deeply equal.

>2. For arrays, compare their lengths and iterate through each element to recursively check if they are deeply equal.

>3. For objects, compare the lengths of their keys. Iterate through each key of `o1` and check if the corresponding key exists in `o2`. If the key is not present or the associated values are not deeply equal, return `false`.

>4. If all the comparisons pass, the objects are deeply equal, so return `true`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
>The time complexity depends on the structure and size of the objects being compared. In the worst case, when the objects have nested structures with many elements, the time complexity can be considered as O(n), where n is the total number of elements in the objects. 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
>The space complexity is also influenced by the structure and size of the objects. In the worst case, when the objects have deeply nested structures, the space complexity can be considered as O(d), where d is the depth of the nested structure.

![image.png](./images/0.png)
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
``` JS []
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
  if (typeof o1 !== typeof o2) {
    return false;
  }

  if (typeof o1 !== 'object' || o1 === null || o2 === null) {
    return o1 === o2;
  }

  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return false;
  }

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) {
      return false;
    }

    for (var i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false;
      }
    }

    return true;
  }

  var keys1 = Object.keys(o1);
  var keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var key of keys1) {
    if (!keys2.includes(key) || !areDeeplyEqual(o1[key], o2[key])) {
      return false;
    }
  }

  return true;
};

```
``` TS []
function areDeeplyEqual(o1: any, o2: any): boolean {
  if (typeof o1 !== typeof o2) {
    return false;
  }

  if (typeof o1 !== 'object' || o1 === null || o2 === null) {
    return o1 === o2;
  }

  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return false;
  }

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) {
      return false;
    }

    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false;
      }
    }

    return true;
  }

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !areDeeplyEqual(o1[key], o2[key])) {
      return false;
    }
  }

  return true;
}

```


# Important topic to Learn 

| Sr No. | Topic | Sr No. | Topic |
|-----|-----|-----|-----|
1.|Arrays , Array methods() * |2.|Function programming *|
3.|Higher-order function|4.|Memoization|
5.|Currying|6.|Promises, async/await|
7.|Compare Objects|8.|Prototypes, inheritance|

>[ Note:- * marked is related to today's problem ]

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```