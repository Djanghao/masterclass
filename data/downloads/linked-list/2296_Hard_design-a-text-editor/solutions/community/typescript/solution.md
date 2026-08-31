# Doubly Linked List | Typescript

**Author:** ggnohope
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/5991498/](https://leetcode.com/problems/design-a-text-editor/solutions/5991498/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class DoubleListNode {
    val: string;
    next: DoubleListNode | null;
    prev: DoubleListNode | null;

    constructor(val?: string, next?: DoubleListNode | null, prev?: DoubleListNode | null) {
        this.val = val === undefined ? '' : val;
        this.next = next === undefined ? null : next;
        this.prev = prev === undefined ? null : prev;
    }
}

class TextEditor {
    private current: DoubleListNode;

    constructor() {
        this.current = new DoubleListNode();
    }

    addText(text: string): void {
        if (!text.length) return;

        let i = 0;
        while (i < text.length) {
            const newNode = new DoubleListNode(text[i], this.current.next, this.current);
            if (this.current.next) {
                this.current.next.prev = newNode;
            }
            this.current.next = newNode;
            this.current = newNode;
            i++;
        }
    }

    deleteText(k: number): number {
        let deletedCount = 0;

        while (deletedCount < k && this.current.prev) {
            const temp = this.current;
            this.current = this.current.prev;
            this.current.next = temp.next;
            if (temp.next) temp.next.prev = this.current;
            deletedCount++;
        }

        return deletedCount;
    }

    cursorLeft(k: number): string {
        let moveCount = 0;
        while (moveCount < k && this.current.prev) {
            this.current = this.current.prev;
            moveCount++;
        }

        return this.getLast10Chars();
    }

    cursorRight(k: number): string {
        let moveCount = 0;
        while (moveCount < k && this.current.next) {
            this.current = this.current.next;
            moveCount++;
        }

        return this.getLast10Chars();
    }

    private getLast10Chars(): string {
        let result = "";
        let temp = this.current;
        let count = 0;

        while (count < 10 && temp) {
            result = temp.val + result;
            temp = temp.prev;
            count++;
        }

        return result;
    }
}


/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */
```