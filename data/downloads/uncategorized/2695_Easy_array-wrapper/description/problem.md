# [2695. Array Wrapper](https://leetcode.com/problems/array-wrapper/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Easy | 276 | 61 |




## Description

Create a class `ArrayWrapper` that accepts an array of integers in its constructor. This class should have two features:

	- When two instances of this class are added together with the `+` operator, the resulting value is the sum of all the elements in both arrays.

	- When the `String()` function is called on the instance, it will return a comma separated string surrounded by brackets. For example, `[1,2,3]`.

 

**Example 1:**

```

Input: nums = [[1,2],[3,4]], operation = &quot;Add&quot;
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10

```

**Example 2:**

```

Input: nums = [[23,98,42,70]], operation = &quot;String&quot;
Output: &quot;[23,98,42,70]&quot;
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // &quot;[23,98,42,70]&quot;

```

**Example 3:**

```

Input: nums = [[],[]], operation = &quot;Add&quot;
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0

```

 

**Constraints:**

	- `0 <= nums.length <= 1000`

	- `0 <= nums[i] <= 1000`

	- `Note: nums is the array passed to the constructor`

---

**Links:** [Submissions](https://leetcode.com/problems/array-wrapper/) | [Solutions](https://leetcode.com/problems/array-wrapper/)
