# Javascript: O(sqrt(N)) bucketing linked lists

**Author:** GeorgeTaveras1231
**Votes:** 7
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/3572817/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/3572817/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Solving this problem with linear (`O(N)`) time complexity is straightforward with a linked list or array.

However, its useful to consider the two operations needed to implement fetch.

First step is to `get` the `i`th element.
The second step is to `shift` all elements on the right of the `i`th element to the left, and place the `i`th element at the end.

Using a simple array implementation leads to a `O(1)` get and `O(N)` shift. While a simple linked list implementation leads to `O(n)` get and `O(1)` shift. And because both of these operations are used in fetch, either solution will bring the runtime to `O(n)`.

In this scenario, we can consider using a sqrt linked list buckets data structure. One key factor is that this data structure can be used to improve the `get(ith)` operation in any linked list from `O(N)` to `O(sqrt(N))` by also worsening the performance of `shift` from `O(1)` to `O(sqrt(N))`

## Bucketing intuition

Why can bucketing help?

In a linked list, getting the `i`th element is an `O(N)` operation. But what if the linked list was split into 2 buckets? Then getting `i`th element will be an `O(N/2)` [Specifically `O(b)` where `b` is the size of each bucket] -- if `i` is in the lower half, traverse the first list, otherwise traverse the second list. However, using this same bucketing scheme, if we wanted to move an element from the first half of the list to the end of the second half of the list, we have to do 2 operations (once we have gotten the node): 

1. remove it from the current list, append it to the last list.
> But in order to keep the sizes of the buckets in sync, we have to do the following

 2. shift the first item from the last list, and append it to the first list

Example, lets say we are moving 3 to the end in the following example:
 ```
List: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
As Buckets: 
   Bucket 1: 1 -> 2 -> 4 -> 3
   Bucket 2: 5 -> 6 -> 7 -> 8
```

```
Step 1: remove 3 -- append to second list (Notice the sizes of the lists don't match)
  Bucket 1: 1 -> 2 -> 4
  Bucket 2: 5 -> 6 -> 7 -> 8 -> 3

Step 2: shift 5 from second list to first list
  Bucket 1: 1 -> 2 -> 4 -> 5
  Bucket 2: 6 -> 7 -> 8 -> 3
```

This suggests that bucketing changes the runtime characteristics of the shift operation of typical linked list from `O(1)` to `O(B)` where B is the number of buckets. In other words, for each bucket, we have to perform a shift.

So if we apply a bucketing data structure on the linked list, we have the following two runtimes for fetch: `get(ith)` => `O(b)` where `b` is the size of the bucket; and `shift()` => `O(B)` where `B` is the number of buckets. Additionally we should be aware of how `B` and `b` affect each other; as `b` grows, `B` shrinks. The next step is finding the optimal bucket size -- where `b` and `B` are (or are close to) the same value.

### Choosing a constant bucket size -- why not?

Some may have the instinct to choose a constant bucket size. i.e. `10` or `5` or `23`. This will not improve the runtime charactersitics of the bucketed linked list. This is because `b` (Remember `get(ith)` has a runtime of `O(b)`) is equal to `N/B` or `Total elements / Bucket size`. Any constant bucket size will make the runtime of `get(ith)`, boil down to `O(N)`. Though technically, it will still be `O(N/B)`, but if `B` is a constant, and we remove constant factors from runtime analysis, then its just `O(N)`. In other words, as `N` grows, `N/B` will also grow in a linear fashion, hence the ultimate `O(N)`.

### Choosing the sqrt bucket size. Why it works

As I mentioned above, our task is to find the optimal bucket size. And as a reminder, We need to find a bucket size where `B` is as large as possible, while `b` is as small as possible. Also remembering that `b x B = N`.

So what 2 numbers can we multiple that equal to `N` where the 2 numbers are as close as possible to eachother. Well, we have

```
sqrt(N) * sqrt(N) = N
```

In other words, we can choose the `sqrt` as the bucket size, which will force us to use the `sqrt` for the number of buckets. This finds us a nice middle ground for the both operations: `get(ith) => O(sqrt(N))` and `shift => O(sqrt(N))`

As you can see in the following graph, this is much better than any constant bucket size that leads to a `O(N)`.

> Image credit to the [Time Complexity wikipedia](https://en.wikipedia.org/wiki/Time_complexity) article
![440px-Comparison_computational_complexity.svg.png](./images/0.png)


# Complexity
- Time complexity:
fetch: `O(sqrt(N)) + O(sqrt(N)` (simplified as `O(sqrt(N)`))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
fetch: `O(1)`

# Code
```js
 class Node {
   constructor(val) {
       this.val = val;
       this.next = null;
       this.prev = null;
   } 

   remove() {
       const prev = this.prev;
       const next = this.next;

       if (prev) {
           prev.next = next;
       }
       if (next) {
           next.prev = prev;
       }
       this.next = null;
       this.prev = null;
       return [prev, next];
   }
 }

 class DoublyLinkedList {
    head;
    tail;
    length = 0;

    push(val) {
        this.pushNode(new Node(val));
    }

    pushNode(newNode) {
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    unshiftNode(newNode) {
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    popNode() {
        if (!this.tail) { return null; }
        const node = this.tail;
        const prev = this.tail.prev;
        if (prev)
            prev.next = null;
        node.prev = null;

        this.tail = prev;
        if (this.tail === null) {
            this.head = null;
        }
        this.length--;
        return node;
    }

    shiftNode() {
        if (!this.head) return null

        const node = this.head;
        const next = node.next;
        node.next = null;
        if (next)
            next.prev = null;
        this.head = next;
        if (this.head === null) {
            this.tail = null;
        }
        this.length--;
        return node;
    }

    removeNthNode(n) {
        if (this.length === 0) return null;
        if (n > this.length - 1) return null;
        let nodeToRemove = this.head;
        
        for (let i = 0; i < n; i++) {
            nodeToRemove = nodeToRemove.next;
        }

        const [prev, next] = nodeToRemove.remove();

        if (nodeToRemove === this.head) {
            this.head = next;
        }
        if (nodeToRemove === this.tail) {
            this.tail = prev;
        }
        this.length--;
        return nodeToRemove;
    }

 }
var MRUQueue = function(n) {
    this.bucketSize = Math.ceil(Math.sqrt(n));
    
    this.buckets = [new DoublyLinkedList()];
    let i = 0;
    while (i < n) {
        if (this.buckets.at(-1).length >= this.bucketSize) {
            this.buckets.push(new DoublyLinkedList())
        }

        this.buckets.at(-1).push(++i);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    const bucketIndex = Math.floor((k - 1)/this.bucketSize);
    const localIndex = (k - 1)%this.bucketSize;

    const bucket = this.buckets[bucketIndex];
    
    const node = bucket.removeNthNode(localIndex);
    for (let i = bucketIndex + 1; i < this.buckets.length; i++) {
        const prevBucket = this.buckets[i - 1];
        const thisBucket = this.buckets[i];
        prevBucket.pushNode(thisBucket.shiftNode());
    }
    this.buckets.at(-1).pushNode(node);
    return node.val;
};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */
```