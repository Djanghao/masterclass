# ✅✅Multiple Approaches || Slice || From || Chunked Array || Full Explanation

**Author:** 2uringTested
**Votes:** 96
**Link:** [https://leetcode.com/problems/chunk-array/solutions/3519210/](https://leetcode.com/problems/chunk-array/solutions/3519210/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a very simple question but it wants us to learn some things from the problem such as:

JavaScript array methods: The solution utilizes various array methods such as slice, push, and Array.from(). Understanding and leveraging these built-in array methods can greatly simplify array manipulation tasks.


# Approach
<!-- Describe your approach to solving the problem. -->
There are multiple approaches we can take for solving this problem, starting with the most basic one using just a for loop to using different array methods like slice push and from.

Here are some of the approaches below:

# Code 0

```
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => {
  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
};


```

# Code 1
```
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
let chunk= (arr, size) =>{
  const chunkedArray = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}

```

# Code 2
```
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
  );


```
# Code 3
```
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => {
  return arr.reduce((chunkedArray, element) => {
    const lastChunk = chunkedArray[chunkedArray.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      chunkedArray.push([element]);
    } else {
      lastChunk.push(element);
    }
    return chunkedArray;
  }, []);
};


```
## Please upvote if you found it useful!!!
![image.png](./images/0.png)



