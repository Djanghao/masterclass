# [1472. Design Browser History](https://leetcode.com/problems/design-browser-history/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4093 | 266 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`linked-list`](https://leetcode.com/tag/linked-list), [`stack`](https://leetcode.com/tag/stack), [`design`](https://leetcode.com/tag/design), [`doubly-linked-list`](https://leetcode.com/tag/doubly-linked-list), [`data-stream`](https://leetcode.com/tag/data-stream)

**Companies:** `bloomberg`, `amazon`, `apple`, `microsoft`, `google`, `uber`, `splunk`, `chime`, `snapchat`

## Description

You have a **browser** of one tab where you start on the `homepage` and you can visit another `url`, get back in the history number of `steps` or move forward in the history number of `steps`.

Implement the `BrowserHistory` class:

	- `BrowserHistory(string homepage)` Initializes the object with the `homepage` of the browser.

	- `void visit(string url)` Visits `url` from the current page. It clears up all the forward history.

	- `string back(int steps)` Move `steps` back in history. If you can only return `x` steps in the history and `steps > x`, you will return only `x` steps. Return the current `url` after moving back in history **at most** `steps`.

	- `string forward(int steps)` Move `steps` forward in history. If you can only forward `x` steps in the history and `steps > x`, you will forward only `x` steps. Return the current `url` after forwarding in history **at most** `steps`.

 

**Example:**

```

Input:
[&quot;BrowserHistory&quot;,&quot;visit&quot;,&quot;visit&quot;,&quot;visit&quot;,&quot;back&quot;,&quot;back&quot;,&quot;forward&quot;,&quot;visit&quot;,&quot;forward&quot;,&quot;back&quot;,&quot;back&quot;]
[[&quot;leetcode.com&quot;],[&quot;google.com&quot;],[&quot;facebook.com&quot;],[&quot;youtube.com&quot;],[1],[1],[1],[&quot;linkedin.com&quot;],[2],[2],[7]]
Output:
[null,null,null,null,&quot;facebook.com&quot;,&quot;google.com&quot;,&quot;facebook.com&quot;,null,&quot;linkedin.com&quot;,&quot;google.com&quot;,&quot;leetcode.com&quot;]

Explanation:
BrowserHistory browserHistory = new BrowserHistory(&quot;leetcode.com&quot;);
browserHistory.visit(&quot;google.com&quot;);       // You are in &quot;leetcode.com&quot;. Visit &quot;google.com&quot;
browserHistory.visit(&quot;facebook.com&quot;);     // You are in &quot;google.com&quot;. Visit &quot;facebook.com&quot;
browserHistory.visit(&quot;youtube.com&quot;);      // You are in &quot;facebook.com&quot;. Visit &quot;youtube.com&quot;
browserHistory.back(1);                   // You are in &quot;youtube.com&quot;, move back to &quot;facebook.com&quot; return &quot;facebook.com&quot;
browserHistory.back(1);                   // You are in &quot;facebook.com&quot;, move back to &quot;google.com&quot; return &quot;google.com&quot;
browserHistory.forward(1);                // You are in &quot;google.com&quot;, move forward to &quot;facebook.com&quot; return &quot;facebook.com&quot;
browserHistory.visit(&quot;linkedin.com&quot;);     // You are in &quot;facebook.com&quot;. Visit &quot;linkedin.com&quot;
browserHistory.forward(2);                // You are in &quot;linkedin.com&quot;, you cannot move forward any steps.
browserHistory.back(2);                   // You are in &quot;linkedin.com&quot;, move back two steps to &quot;facebook.com&quot; then to &quot;google.com&quot;. return &quot;google.com&quot;
browserHistory.back(7);                   // You are in &quot;google.com&quot;, you can move back only one step to &quot;leetcode.com&quot;. return &quot;leetcode.com&quot;

```

 

**Constraints:**

	- `1 <= homepage.length <= 20`

	- `1 <= url.length <= 20`

	- `1 <= steps <= 100`

	- `homepage` and `url` consist of  '.' or lower case English letters.

	- At most `5000` calls will be made to `visit`, `back`, and `forward`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-browser-history/) | [Solutions](https://leetcode.com/problems/design-browser-history/)
