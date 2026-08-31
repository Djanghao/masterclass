# [JavaScript] Easy to understand - 3 solutions

**Author:** poppinlp
**Votes:** 53
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/389304/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/389304/)

---

## Solution 1

Since we need to check and remove the previous char by the current char, so it let us think about the stack:
1. traverse the string `s`
2. for every char, we compare it with the top value in stack
	- if they are same, pop the top value
	- otherwise, push the current char into stack
3. finally, return the stack as a string

Here's a sample code from me:

```js
const removeDuplicates = s => {
  const stack = [];
  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }
  return stack.join('');
};
```

## Solution 2

For this solution, we use 2 pointers. One for traversal and one for store result:
1. the traversal pointer just traverse the string `s`
2. the store pointer try to save char into the arr itself just as the `stack` in solution 1
3. we compare every new char with the store pointer value and maintain the value of store pointer

In fact, this is just a variant of solution 1.
Here's a sample code from me:

```js
const removeDuplicates = s => {
  const arr = s.split('');
  let ans = 0;
  for (let i = 0; i < arr.length; ++i) {
    ans === 0 || arr[i] !== arr[ans - 1] ? (arr[ans++] = arr[i]) : --ans;
  }
  return arr.slice(0, ans).join('');
};
```

## Solution 3

For this solution, we try to deal with all the adjacent duplicates right now, and loop again until there are no more adjacent duplicates.
We also use the RegExp to make the code easy.

Here's a sample code from me:

```js
const removeDuplicates = s => {
  const s2 = s.replace(/(.)\\1/g, '');
  return s2.length === s.length ? s : removeDuplicates(s2);
};
```