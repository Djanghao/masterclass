# [JavaScript] Easy to understand - slow & fast pointers - detailed explanation

**Author:** poppinlp
**Votes:** 341
**Link:** [https://leetcode.com/problems/linked-list-cycle/solutions/1829768/](https://leetcode.com/problems/linked-list-cycle/solutions/1829768/)

---

## Core Strategy

For this problem, let's see what will happen if there's a circle.
If it's a little abstract, then let's think about we are running on a circular track.

If the track is 100m long, your speed is 10m/s, your friend's speed is 5m/s. Then after 20s, you've run 200m, your friend has run 100m. But because the track is circular, so you will be at the same place with your friend since the difference between your distances is exactly 100m.

How about we change another track, change the speed of you and your friend? As long as your speeds are not the same, the faster person will always catch up with the slower person again.

That's the key point for this problem.

## Solution

We just need to follow the strategy above - make a slower pointer and a faster pointer. Then we loop and loop again:
- if the fast pointer catch up with slow pointer, then it's a circular linked list
- if the fast pointer get to the end, then it's not a circular linked list

Here's a sample code from me:

```js
const hasCycle = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};
```

---

UPDATE at Apr 04 2023

Since there's a question in comments said the running case is a continuous process while linked-list is discrete, so let me put more here to explain.

Let's suppose we have these:
- `v1` is for the speed of pointer 1
- `v2` is for the speed of pointer 2
- `s` is for the length of the linked list
- `t` is for the time spent before meet
- `n` is an integer

So, we are looking for `(|v1-v2|) * t = s * n`, and we can get `t = s * n / (|v1-v2|)`. Since they are all integers, so it's very easy to find a `n` to make it happen, at least we could let the `n` equals to `|v1-v2|`.
