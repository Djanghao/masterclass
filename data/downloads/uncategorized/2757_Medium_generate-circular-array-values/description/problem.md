# [2757. Generate Circular Array Values](https://leetcode.com/problems/generate-circular-array-values/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 11 | 2 |




## Description

Given a **circular** array `arr` and an integer `startIndex`, return a generator object `gen` that yields values from `arr`.

The first time `gen.next()` is called on the generator, it should should yield `arr[startIndex]`.

Each subsequent time `gen.next()` is called, an integer `jump` will be passed into the function (Ex: `gen.next(-3)`).

	- If `jump` is positive, the index should increase by that value, however if the current index is the last index, it should instead jump to the first index.

	- If `jump` is negative, the index should decrease by the magnitude of that value, however if the current index is the first index, it should instead jump to the last index.

 

**Example 1:**

```

Input: arr = [1,2,3,4,5], steps = [1,2,6], startIndex = 0
Output: [1,2,4,5]
Explanation: &nbsp;
&nbsp;const gen = cycleGenerator(arr, startIndex);
&nbsp;gen.next().value; &nbsp;// 1, index = startIndex = 0
&nbsp;gen.next(1).value; // 2, index = 1, 0 -&gt; 1
&nbsp;gen.next(2).value; // 4, index = 3, 1 -&gt; 2 -&gt; 3
&nbsp;gen.next(6).value; // 5, index = 4, 3 -&gt; 4 -&gt; 0 -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4

```

**Example 2:**

```

Input: arr = [10,11,12,13,14,15], steps = [1,4,0,-1,-3], startIndex = 1
Output: [11,12,10,10,15,12]
Explanation: 
&nbsp;const gen = cycleGenerator(arr, startIndex);
&nbsp;gen.next().value; &nbsp; // 11, index = 1
&nbsp;gen.next(1).value;  // 12, index = 2
&nbsp;gen.next(4).value;  // 10, index = 0
&nbsp;gen.next(0).value;  // 10, index = 0
&nbsp;gen.next(-1).value; // 15, index = 5
&nbsp;gen.next(-3).value; // 12, index = 2

```

**Example 3:**

```

Input: arr = [2,4,6,7,8,10], steps = [-4,5,-3,10], startIndex = 3
Output: [7,10,8,4,10]
Explanation: &nbsp;
&nbsp;const gen = cycleGenerator(arr, startIndex);
&nbsp;gen.next().value &nbsp; // 7,  index = 3
&nbsp;gen.next(-4).value // 10, index = 5
&nbsp;gen.next(5).value  // 8,  index = 4
&nbsp;gen.next(-3).value // 4,  index = 1 &nbsp;
&nbsp;gen.next(10).value // 10, index = 5

```

 

**Constraints:**

	- `1 <= arr.length <= 10^4`

	- `1 <= steps.length <= 100`

	- `-10^4 <= steps[i], arr[i] <= 10^4`

	- `0 <= startIndex < arr.length`

---

**Links:** [Submissions](https://leetcode.com/problems/generate-circular-array-values/) | [Solutions](https://leetcode.com/problems/generate-circular-array-values/)
