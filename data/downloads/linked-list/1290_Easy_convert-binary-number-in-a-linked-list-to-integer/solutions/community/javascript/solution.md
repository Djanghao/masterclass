# [JavaScript] Easy to understand - bit operator

**Author:** poppinlp
**Votes:** 34
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/461356/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/461356/)

---

Since the value in the linked list is binary, we can get the final value easily via bit operator.
And the only thing we need to do right now is traversal the linked list.

Here's the code:

```js
const getDecimalValue = head => {
  let val = 0;
  while (head) {
    val = (val << 1) | head.val;
    head = head.next;
  }
  return val;
};
```

----

UPDATE: add some explaination for the bit manipulation.

First, the `<<` operation means to move to left by n bit in the binary representation.
So if the binary representation is `100`, we could make it by `1 << 3` or 3 times to move to left by 1 bit.

Then, the `|` operation has almost the same logic as `||` but it's for bit manipulation.
But here in my code, I use it in a tricky way -- to add the `head.val` into `val`. You may take a look at this:

```js
0 | 0 === 0
0 | 1 === 1
```
Since we move the `val` to left by 1 bit, the last bit is always `0`.
We could imagine that the two numbers are the factor for the add operation. And we could find out that the results just match the results for addition.

So that's all for `val = (val << 1) | head.val`. And here's a sample:

```shell
linked list: 1 -> 0 -> 1
val: 0

head: 1
val = (val << 1) | head.val // val = (0 << 1) | 1 => val = 1

head: 0
val = (val << 1) | head.val // val = (1 << 1) | 0  => val = 10

head: 1
val = (val << 1) | head.val // val = (10 << 1) | 1  => val = 101

head: null
done
```