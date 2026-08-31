# 💪 Ridiculously Simple solution with 2 stacks O(k)

**Author:** avakatushka
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/2130457/](https://leetcode.com/problems/design-a-text-editor/solutions/2130457/)

---

You don't need a deque! 
You don't need a linked list.
Just a stack. 
Pure and simple stack.
And the simple dynamic array, **[]**  could easily be your stack.

- The cursor is always on the top of the **forward** stack.
- We delete and add letters directly to and from the **forward** stack.
- While we move cursor left, we push last letter of the **forward** stack, to our **backward** stack, where we store all the letters in reverse.
- While we move the cursor right, we push last letter of the **backward** stack to our **forward** stack.
```javascript


var TextEditor = function() {
    this.forward = [];
    this.backward = [];
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    for (let letter of text) {
        this.forward.push(letter);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    let deleted = 0;
    while (this.forward.length && deleted < k) {
        this.forward.pop();
        deleted++;
    }
    return deleted;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
    let moved = 0;
    while (this.forward.length && moved < k) {
        this.backward.push(this.forward.pop());
        moved++;
    }
    return toTheLeft(this.forward);
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    let moved = 0;
    while (moved < k && this.backward.length) {
        this.forward.push(this.backward.pop());
        moved++;
    }
    return toTheLeft(this.forward);
};


function toTheLeft (arr) {
    let letters = [];
    for (let i = Math.max(0, arr.length - 10); i < arr.length; i++) {
        letters.push(arr[i]);
    }
    let res = letters.join("");
    return res; 
}

```

All operations are O(k) cause push and pop are O(1) for the dynamic array.