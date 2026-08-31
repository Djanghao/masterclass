# Official Solution

**Link:** [https://leetcode.com/problems/group-by/solution/](https://leetcode.com/problems/group-by/solution/)

---

[TOC]

## Solution
---

### Overview

This question asks you to add the ***groupBy*** method to all arrays. Consider reading the [Array Last Editorial](https://leetcode.com/problems/array-prototype-last/editorial) for more information on adding methods by modifying the prototype object.

The `groupBy` operation accepts a callback function and returns a new object. The keys on this object are all the unique outputs of the callback function when it is applied to all the items in the array. Each key should have an associated array value. This array should contain all the values in the original array where the callback function returned that same key (sorted by the original order).

Note that the `groupBy` by method isn't built-in by default, so the example code will only run if the method is added to the Array prototype. Also you can see Lodash's popular implementation [here](https://lodash.com/docs/4.17.15#groupBy).

To give a concrete example of `groupBy` in action:
```js
const list = [
  { name: 'Alice', birthYear: 1990 },
  { name: 'Bob', birthYear: 1972 },
  { name: 'Jose', birthYear: 1999 },
  { name: 'Claudia', birthYear: 1974 },
  { name: 'Marcos', birthYear: 1995 }
]
const groupedByDecade = list.groupBy((person) =>  {
  const decade = Math.floor(person.birthYear / 10) * 10;
  return String(decade);
});
console.log(groupedByDecade);
/*
{
  "1990": [
    { name: 'Alice', birthYear: 1990 },
    { name: 'Jose', birthYear: 1999 },
    { name: 'Marcos', birthYear: 1995 }
  ],
  "1970": [
    { name: 'Bob', birthYear: 1972 },
    { name: 'Claudia', birthYear: 1974 }
  ]
}
*/
```

### Use-cases for the Group Operation

Grouping a list is an extremely common thing to need to do front-end development and software engineering in general. Here are are few example use-cases.

#### Build Hierarchical Trees

If you want to build a tree of data, you can use perform `groupBy` on the list, and then `groupBy` on the values of the resulting object, and so on. This will result in a tree data structure that could be further used in algorithms where you need efficient lookup based on several keys. Or the tree could be used as an input to a tree visualization like some sort of expandable list.

Some example code that builds this tree:

```
function buildTree(list, keys, index = 0) {
  if (index >= keys.length) return list;
  const group = list.groupBy((item) => item[keys[index]]);
  Object.keys(group).forEach((key) => {
    const list = group[key]
    group[key] = buildTree(list, keys, index + 1);
  });
  return group;
}

buildTree([{a: 1, b: 2}, {a: 1, b: 3}], ['a', 'b']);
/*
{
  "1": {
    "2": [{a: 1, b: 2}],
    "3": [{a: 1, b: 3}]
  }
}
*/
```

#### Join Data on Two Lists

Frequently, you have multiple lists of data, but you need to efficiently merge them into one list for use by some algorithm or user interface. In the context of database, this is considered a [join](https://en.wikipedia.org/wiki/Join_(SQL)) but you frequently need to do this in regular code as well.

The following examples shows how you could combine `decades` data with `people` data to create a `decadesWithPeople` variable.

```js
const people = [
  { name: 'Alice', birthYear: 1990 },
  { name: 'Bob', birthYear: 1972 },
  { name: 'Jose', birthYear: 1999 },
  { name: 'Claudia', birthYear: 1974 },
  { name: 'Marcos', birthYear: 1995 }
];

const decades = [
  { start: 1970, theme: 'Disco',
  { start: 1980, theme: 'Arcades' },
  { start: 1990, theme: 'Beanie Babies' }
];

const groupedByDecade = list.groupBy((person) =>  {
  const decade = Math.floor(person.birthYear / 10) * 10;
  return String(decade);
});

const decadesWithPeople = decade.map((decade) => {
  return { 
    ...decade,
    people: groupedByDecade[decade.start] || [],
  };
});
```

#### Categorical Bar Chart

The first step before you can can create a bar chart where each bar represents some category is to group the data by the category. For example, in the above example, you could calculate the average age of people by birth decade using the `groupedByDecade` variable.

---

### Approach 1: For Loop

We can loop over each item in the array. If the associated key already exists on the returned object, append the item to the associated list. Otherwise, assign the key to a new list with the item as its only element.

Note that because you are adding a method to the `Array` prototype, the `this` context is set to the array itself.

<iframe src="https://leetcode.com/playground/c2rtBL45/shared" frameBorder="0" width="100%" height="361" name="c2rtBL45"></iframe>

### Approach 2: Reduce

You can also use the [reduce method](https://leetcode.com/problems/array-reduce-transformation/) to solve the problem. 

Here, we initialize the accumulator value to an empty object `{}`. For each item in the list, we ensure the accumulator has a list associated with the resultant key. This can be achieved with the following line of code: `accum[key] ||= [];`. That code uses the ***Logical OR Assignment*** operator, and it only does the assignment if the left-hand argument is ***falsy***. As the last step, we append the item to the list and return the accumulator.

<iframe src="https://leetcode.com/playground/RNT2AS82/shared" frameBorder="0" width="100%" height="293" name="RNT2AS82"></iframe>

### Complexity Analysis:

The following analysis applies to both approaches. `N` represents the length of the array. Note that theoretically these results could depend on the provided callback, but that would be very unusual.

**Time Complexity:** 
* `O(N)`. The algorithm iterates over each element once.

**Space Complexity:** 
* `O(N)`. The algorithm creates new array(s) whose lengths add up to the length of the original array.

---

### Interview Tips

Here are some potential questions an interviewer might ask about this problem:

- **What is the concept behind the `groupBy` method?**
    - The `groupBy` method is a common utility function in many programming languages. It allows you to partition a list into groups, where the members of each group share a common key. This key is determined by applying a function, which we provide, to each element in the list. This method is handy when you want to categorize or cluster data based on certain characteristics.
- **What might be the practical applications of a `groupBy` function?**
    - `groupBy` is useful in numerous real-world scenarios, such as categorizing data for visualizations, organizing records for easier analysis, or preprocessing data before using it in machine learning algorithms. It's a versatile tool that can be used whenever we need to partition a list of items based on some shared attribute or condition.
- **What will happen if the `fn` function provided does not return a string?**
    - The `fn` function is expected to return a string, which is then used as a key in the resulting object. If `fn` returns a non-string value, JavaScript will implicitly convert this value to a string to use it as an object key. However, this might not be the intended behavior and could lead to unexpected results. So, it's important to ensure that `fn` always returns a string.
- **How would your function handle an empty array?**
    - If the input array is empty, both the `for` loop and **`reduce` implementations will return an empty object. This is because there are no elements to group, so there are no keys to add to the resulting object.
    
- **How you implement a `groupBy` function that allows for asynchronous operations in the callback function?**
    - This question requires understanding of JavaScript's asynchronous nature and the use of promises. You could prepare by studying how promises work and how to use `async/await` syntax. Consider how the structure of the `groupBy` function might change to accommodate asynchronous operations. You can also look into our promise-based questions and tutorials for more information, starting with the [Sleep Editorial](https://leetcode.com/problems/sleep/editorial/).

- **How could you use groupBy help understand errors in your application.**
    - Every error has `type` associated with it. With that you could, you could use groupBy to determine which type of error is more frequent. You could also analyze the call stack to determine the file of origin.