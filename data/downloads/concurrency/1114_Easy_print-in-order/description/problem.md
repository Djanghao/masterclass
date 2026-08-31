# [1114. Print in Order](https://leetcode.com/problems/print-in-order/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Concurrency | Easy | 1574 | 219 |

**Tags:** [`concurrency`](https://leetcode.com/tag/concurrency)

**Companies:** `nvidia`, `microsoft`, `google`

## Description

Suppose we have a class:

```

public class Foo {
  public void first() { print(&quot;first&quot;); }
  public void second() { print(&quot;second&quot;); }
  public void third() { print(&quot;third&quot;); }
}

```

The same instance of `Foo` will be passed to three different threads. Thread A will call `first()`, thread B will call `second()`, and thread C will call `third()`. Design a mechanism and modify the program to ensure that `second()` is executed after `first()`, and `third()` is executed after `second()`.

**Note:**

We do not know how the threads will be scheduled in the operating system, even though the numbers in the input seem to imply the ordering. The input format you see is mainly to ensure our tests' comprehensiveness.

 

**Example 1:**

```

Input: nums = [1,2,3]
Output: &quot;firstsecondthird&quot;
Explanation: There are three threads being fired asynchronously. The input [1,2,3] means thread A calls first(), thread B calls second(), and thread C calls third(). &quot;firstsecondthird&quot; is the correct output.

```

**Example 2:**

```

Input: nums = [1,3,2]
Output: &quot;firstsecondthird&quot;
Explanation: The input [1,3,2] means thread A calls first(), thread B calls third(), and thread C calls second(). &quot;firstsecondthird&quot; is the correct output.

```

 

**Constraints:**

	- `nums` is a permutation of `[1, 2, 3]`.

---

**Links:** [Submissions](https://leetcode.com/problems/print-in-order/) | [Solutions](https://leetcode.com/problems/print-in-order/)
