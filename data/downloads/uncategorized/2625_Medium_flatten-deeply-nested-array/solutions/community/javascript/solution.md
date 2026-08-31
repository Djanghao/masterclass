# ✔️Easy Solution✔️2625. Flatten Deeply Nested Array✔️Level up🚀your JavaScript skills 🚀Day 22

**Author:** Vikas-Pathak-123
**Votes:** 147
**Link:** [https://leetcode.com/problems/flatten-deeply-nested-array/solutions/3563943/](https://leetcode.com/problems/flatten-deeply-nested-array/solutions/3563943/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
>The problem requires us to flatten a multi-dimensional array based on a given depth. We need to maintain the structure of the array up to the given depth and flatten the remaining subarrays.

# Approach
<!-- Describe your approach to solving the problem. -->
To solve this problem, we can use an iterative approach with a stack.
>1. Initialize a stack with the elements of the array along with their
corresponding depth levels. Each element is represented as a pair [item,
depth].
>2. Initialize an empty array to store the flattened result.
>3. Enter a while loop, which continues as long as there are elements in the
stack.
>4. Within each iteration of the loop, retrieve the top element [item, depth] from
the stack.
>5. If the item is an array and the current depth `depth` is greater than 0, it
means the element is a subarray that needs to be further flattened.
>6. Iterate over the subarray, and for each element, push it back to the stack
along with a reduced depth level (depth - 1).
>7. If the item is not an array or the depth is 0, it means the element is a nonarray item that should be directly added to the result array.
>8. Continue the loop until there are no more elements in the stack.
>9. Finally, return the flattened result array.


 ![image.png](./images/0.png)
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
>The time complexity of this approach is O(N), where N is the total number of elements in the input array. This is because we iterate over each element once, either to push it back to the stack or to add it to the result array.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
>The space complexity is also O(N), where N is the total number of elements in the input array. This is because in the worst case, all elements can be pushed onto the stack before being processed or added to the result array.

# Code
```JavaScript []
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function(arr, depth) {
  const stack = [...arr.map(item => [item, depth])];
  const result = [];

  while (stack.length > 0) {
    const [item, depth] = stack.pop();

    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map(subItem => [subItem, depth - 1]));
    } else {
      result.push(item);
    }
  }

  return result.reverse();
};


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