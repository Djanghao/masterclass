# [JavaScript] Easy to understand - explanation

**Author:** poppinlp
**Votes:** 43
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/1111994/](https://leetcode.com/problems/find-center-of-star-graph/solutions/1111994/)

---

This problem is tagged as a medium but actually, it's pretty easy.
Since the given data is exactly a star graph which means there must be the same node in every edge.
So we don't need to take care of every edge but only 2 edges that we could get the answer to.

When we got this, then here's the code to read easily:

```js
const findCenter = (edges) => {
  const [[a, b], [c, d]] = edges;
  return a === c || b === c ? c : d;
};
```

For sure, we could make it 1 line:

```js
const findCenter = (edges) => edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1] ? edges[1][0] : edges[1][1];
```