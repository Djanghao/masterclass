# [2296. Design a Text Editor](https://leetcode.com/problems/design-a-text-editor/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 640 | 228 |

**Tags:** [`linked-list`](https://leetcode.com/tag/linked-list), [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack), [`design`](https://leetcode.com/tag/design), [`simulation`](https://leetcode.com/tag/simulation), [`doubly-linked-list`](https://leetcode.com/tag/doubly-linked-list)

**Companies:** `google`, `microsoft`, `jane-street`, `salesforce`, `amazon`, `square`, `rubrik`, `dropbox`

## Description

Design a text editor with a cursor that can do the following:

	- **Add** text to where the cursor is.

	- **Delete** text from where the cursor is (simulating the backspace key).

	- **Move** the cursor either left or right.

When deleting text, only characters to the left of the cursor will be deleted. The cursor will also remain within the actual text and cannot be moved beyond it. More formally, we have that `0 <= cursor.position <= currentText.length` always holds.

Implement the `TextEditor` class:

	- `TextEditor()` Initializes the object with empty text.

	- `void addText(string text)` Appends `text` to where the cursor is. The cursor ends to the right of `text`.

	- `int deleteText(int k)` Deletes `k` characters to the left of the cursor. Returns the number of characters actually deleted.

	- `string cursorLeft(int k)` Moves the cursor to the left `k` times. Returns the last `min(10, len)` characters to the left of the cursor, where `len` is the number of characters to the left of the cursor.

	- `string cursorRight(int k)` Moves the cursor to the right `k` times. Returns the last `min(10, len)` characters to the left of the cursor, where `len` is the number of characters to the left of the cursor.

 

**Example 1:**

```

Input
[&quot;TextEditor&quot;, &quot;addText&quot;, &quot;deleteText&quot;, &quot;addText&quot;, &quot;cursorRight&quot;, &quot;cursorLeft&quot;, &quot;deleteText&quot;, &quot;cursorLeft&quot;, &quot;cursorRight&quot;]
[[], [&quot;leetcode&quot;], [4], [&quot;practice&quot;], [3], [8], [10], [2], [6]]
Output
[null, null, 4, null, &quot;etpractice&quot;, &quot;leet&quot;, 4, &quot;&quot;, &quot;practi&quot;]

Explanation
TextEditor textEditor = new TextEditor(); // The current text is &quot;|&quot;. (The &#39;|&#39; character represents the cursor)
textEditor.addText(&quot;leetcode&quot;); // The current text is &quot;leetcode|&quot;.
textEditor.deleteText(4); // return 4
                          // The current text is &quot;leet|&quot;. 
                          // 4 characters were deleted.
textEditor.addText(&quot;practice&quot;); // The current text is &quot;leetpractice|&quot;. 
textEditor.cursorRight(3); // return &quot;etpractice&quot;
                           // The current text is &quot;leetpractice|&quot;. 
                           // The cursor cannot be moved beyond the actual text and thus did not move.
                           // &quot;etpractice&quot; is the last 10 characters to the left of the cursor.
textEditor.cursorLeft(8); // return &quot;leet&quot;
                          // The current text is &quot;leet|practice&quot;.
                          // &quot;leet&quot; is the last min(10, 4) = 4 characters to the left of the cursor.
textEditor.deleteText(10); // return 4
                           // The current text is &quot;|practice&quot;.
                           // Only 4 characters were deleted.
textEditor.cursorLeft(2); // return &quot;&quot;
                          // The current text is &quot;|practice&quot;.
                          // The cursor cannot be moved beyond the actual text and thus did not move. 
                          // &quot;&quot; is the last min(10, 0) = 0 characters to the left of the cursor.
textEditor.cursorRight(6); // return &quot;practi&quot;
                           // The current text is &quot;practi|ce&quot;.
                           // &quot;practi&quot; is the last min(10, 6) = 6 characters to the left of the cursor.

```

 

**Constraints:**

	- `1 <= text.length, k <= 40`

	- `text` consists of lowercase English letters.

	- At most `2 * 10^4` calls **in total** will be made to `addText`, `deleteText`, `cursorLeft` and `cursorRight`.

 

**Follow-up:** Could you find a solution with time complexity of `O(k)` per call?

---

**Links:** [Submissions](https://leetcode.com/problems/design-a-text-editor/) | [Solutions](https://leetcode.com/problems/design-a-text-editor/)
