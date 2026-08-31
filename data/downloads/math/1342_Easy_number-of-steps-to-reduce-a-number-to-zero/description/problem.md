# [1342. Number of Steps to Reduce a Number to Zero](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 4212 | 178 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `google`, `bloomberg`, `microsoft`, `hrt`

## Description

Given an integer `num`, return *the number of steps to reduce it to zero*.

In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.

 

**Example 1:**

```

Input: num = 14
Output: 6
Explanation:&nbsp;
Step 1) 14 is even; divide by 2 and obtain 7.&nbsp;
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.&nbsp;
Step 4) 3 is odd; subtract 1 and obtain 2.&nbsp;
Step 5) 2 is even; divide by 2 and obtain 1.&nbsp;
Step 6) 1 is odd; subtract 1 and obtain 0.

```

**Example 2:**

```

Input: num = 8
Output: 4
Explanation:&nbsp;
Step 1) 8 is even; divide by 2 and obtain 4.&nbsp;
Step 2) 4 is even; divide by 2 and obtain 2.&nbsp;
Step 3) 2 is even; divide by 2 and obtain 1.&nbsp;
Step 4) 1 is odd; subtract 1 and obtain 0.

```

**Example 3:**

```

Input: num = 123
Output: 12

```

 

**Constraints:**

	- `0 <= num <= 10^6`

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/) | [Solutions](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)
