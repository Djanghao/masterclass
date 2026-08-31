# Python O(1) doubly-linked list and dictionary

**Author:** yorkshire
**Votes:** 95
**Link:** [https://leetcode.com/problems/all-oone-data-structure/solutions/91401/](https://leetcode.com/problems/all-oone-data-structure/solutions/91401/)

---

Define a Block class which contains the set of all keys of a given value. Blocks form a doubly linked list, in order of value.
Then to find the block of a given key, use a dictionary.
```
class Block(object):
    def __init__(self, val=0):
        self.val = val
        self.keys = set()
        self.before = None
        self.after = None

    def remove(self):
        self.before.after = self.after
        self.after.before = self.before
        self.before, self.after = None, None

    def insert_after(self, new_block):
        old_after = self.after
        self.after = new_block
        new_block.before = self
        new_block.after = old_after
        old_after.before = new_block


class AllOne(object):
    def __init__(self):
        self.begin = Block()  # sentinel
        self.end = Block()  # sentinel
        self.begin.after = self.end
        self.end.before = self.begin
        self.mapping = {}  # key to block

    def inc(self, key):
        if not key in self.mapping:  # find current block and remove key
            current_block = self.begin
        else:
            current_block = self.mapping[key]
            current_block.keys.remove(key)

        if current_block.val + 1 != current_block.after.val:  # insert new block
            new_block = Block(current_block.val + 1)
            current_block.insert_after(new_block)
        else:
            new_block = current_block.after

        new_block.keys.add(key)  # update new_block
        self.mapping[key] = new_block  # ... and mapping of key to new_block

        if not current_block.keys and current_block.val != 0:  # delete current block if not seninel
            current_block.remove()

    def dec(self, key):
        if not key in self.mapping:
            return

        current_block = self.mapping[key]
        del self.mapping[key]  # could use self.mapping.pop(key)
        current_block.keys.remove(key)

        if current_block.val != 1:
            if current_block.val - 1 != current_block.before.val:  # insert new block
                new_block = Block(current_block.val - 1)
                current_block.before.insert_after(new_block)
            else:
                new_block = current_block.before
            new_block.keys.add(key)
            self.mapping[key] = new_block

        if not current_block.keys:  # delete current block
            current_block.remove()

    def getMaxKey(self):
        if self.end.before.val == 0:
            return ""
        key = self.end.before.keys.pop()  # pop and add back to get arbitrary (but not random) element
        self.end.before.keys.add(key)
        return key

    def getMinKey(self):
        if self.begin.after.val == 0:
            return ""
        key = self.begin.after.keys.pop()
        self.begin.after.keys.add(key)
        return key