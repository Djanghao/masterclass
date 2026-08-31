# lazy, short and fast solution | TS/JS

**Author:** KivalEvan
**Votes:** 3
**Link:** [https://leetcode.com/problems/flatten-nested-list-iterator/solutions/4189153/](https://leetcode.com/problems/flatten-nested-list-iterator/solutions/4189153/)

---

impractical, but i dont care, i want speed/efficiency

just flatten the array, except we don't know the depth so let's do recursion and put each iteration onto stack

non-recursive can be done but im lazy

# Code
```TypeScript []
class NestedIterator {
    stack: number[] = [];
    constructor(nestedList: NestedInteger[]) {
		this.beepboop(nestedList);
    }

    beepboop(nestedList: NestedInteger[]) {
		let n: NestedInteger;
        while (n = nestedList.pop()) {
            if (n.isInteger()) this.stack.push(n.getInteger());
            else this.beepboop(n.getList());
        }
    }

    hasNext(): boolean {
        return !!this.stack.length;
    }

	next(): number {
		return this.stack.pop();
    }
}
```
```JavaScript []
var NestedIterator = function(nestedList) {
    this.stack = [];
    this.beepboop(nestedList);
};

NestedIterator.prototype.beepboop = function(nestedList) {
    let n;
    while (n = nestedList.pop()) {
        if (n.isInteger()) this.stack.push(n.getInteger());
        else this.beepboop(n.getList());
    }
};

NestedIterator.prototype.hasNext = function() {
    return !!this.stack.length;
};

NestedIterator.prototype.next = function() {
	return this.stack.pop();
};
```