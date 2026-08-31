# [1115. Print FooBar Alternately](https://leetcode.com/problems/print-foobar-alternately/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Concurrency | Medium | 745 | 59 |

**Tags:** [`concurrency`](https://leetcode.com/tag/concurrency)


## Description

Suppose you are given the following code:

```

class FooBar {
  public void foo() {
    for (int i = 0; i &lt; n; i++) {
      print(&quot;foo&quot;);
    }
  }

  public void bar() {
    for (int i = 0; i &lt; n; i++) {
      print(&quot;bar&quot;);
    }
  }
}

```

The same instance of `FooBar` will be passed to two different threads:

	- thread `A` will call `foo()`, while

	- thread `B` will call `bar()`.

Modify the given program to output `"foobar"` `n` times.

 

**Example 1:**

```

Input: n = 1
Output: &quot;foobar&quot;
Explanation: There are two threads being fired asynchronously. One of them calls foo(), while the other calls bar().
&quot;foobar&quot; is being output 1 time.

```

**Example 2:**

```

Input: n = 2
Output: &quot;foobarfoobar&quot;
Explanation: &quot;foobar&quot; is being output 2 times.

```

 

**Constraints:**

	- `1 <= n <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/print-foobar-alternately/) | [Solutions](https://leetcode.com/problems/print-foobar-alternately/)
