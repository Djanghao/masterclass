# [PROBLEM] There's a BigInt problem with JavaScript - [UPDATED] JS can pass now

**Author:** poppinlp
**Votes:** 23
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1823867/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1823867/)

---

For the test case `[1000000000] 1000000000`, the output should be `500000000500000001`. But in JS, we can't have such a big number during general calculation.

I know we could use `BigInt`, and I did it also. But, no matter I return the final BigInt `500000000500000001n` or I convert it into string `500000000500000001`, the judge will always show my answer is `500000000500000000` and tell me it's wrong. __Seems like the judge always try to convert the result into a general number in JS.__

After several times, I finally have to implement this in another language... T_T

To fix this, the solution is easy, for this problem in JS judge, it could try to __accept the `BigInt` result__.

The core strategy is simple, but maybe next time judge could try to think about such big number testcase in JS more.
I guess the purpose for this problem is not to ask us to implement our own bigint calculation in JS, haha

- - -

UPDATE:

I've submitted this problem to [official github repo here](https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/6632).

- - -

UPDATE:

The test cases have been updated - added a limitation. So right now, we could use JS to make this problem AC.

The core strategy is:
- assume all the numbers from 1 to `k` is unused, so we could get the init `sum`
- count the numbers smaller than `k` in `nums` and minus them from `sum`
- add new numbers from `k + 1` to meets the count `k` (take care of the new number is in `nums`)

Here's a sample code from me:

```js
const minimalKSum = (nums, k) => {
  const set = new Set(nums);
  let sum = (1 + k) * k / 2;
  let more = 0;
  nums = Array.from(set)
  for (const n of nums) {
    n <= k && (++more, sum -= n);
  }
  while (more > 0) {
    !set.has(++k) && (sum += k, --more);
  }
  return sum;
};
```