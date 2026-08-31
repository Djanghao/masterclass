# [Typescript] Generalized Heap yields O(NlogK)

**Author:** minusung
**Votes:** 4
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/2661379/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/2661379/)

---

# Goal
The goal is to get the K closest points to origin. This means that we need to know two things: the distance of each point from origin, and how the distance of a point compares to distances of other points in the list.

# Problem
What are our potential options?
1. Perhaps calculate the distance of each point, and sort the points by the distance? -> We'd end up doing unnecessary work when we only care about the first k elements. we don't care about the order of the elements other than the first k elemtns.
2. Perhaps calculate the distance of each point, and use a map to associate the distance to each point? -> This won't work because there could be multiple points with the same distance.
3. Perhaps calculate the distance of each point, and use a HashMap to keep track of all points and their distance? -> This has the same problem as the sorting case. The entries will need to be sorted by the distance.

What is the problem? The problem is that we do not want to do unnecessary work when the amount of work is known (K).

# Solution
We only want to know the first K ones with the least distance. Given the Min/Max Heap excels at keeping elements in order as data is entered/removed, with some logic a heap can serve the first k mim/max values.

This solution uses a generalized heap. The benefit of a generalized solution is that it is trivial to change the comparison logic (i.e. K farthest points from origin). The comparison logic is injected into the class via the constructor.
```typescript
interface IHeap<T> {
  get size(): number;
  offer(e: T): void;
  poll(): T;
}
class Heap<T> implements IHeap<T> {
  private _items: T[];
  private _compare: (t1: T, t2: T) => boolean;
  
  constructor(compare: (t1: T, t2: T) => boolean) {
    this._items = [];
    this._compare = compare;
  }

  public get size() {
    return this._items.length;
  }

  private leftChildIndexOf(parentIndex: number): number { return 2 * parentIndex + 1; }
  private rightChildIndexOf(parentIndex: number): number { return 2 * parentIndex + 2; }
  private parentIndexOf(childIndex: number): number { return Math.floor((childIndex - 1) / 2); }

  private hasLeftChild(index: number): boolean { return this.leftChildIndexOf(index) < this.size; }
  private hasRightChild(index: number): boolean { return this.rightChildIndexOf(index) < this.size; }
  private hasParent(index: number): boolean { return this.parentIndexOf(index) >= 0; }

  private leftChildOf(index: number): T { return this._items[this.leftChildIndexOf(index)]; }
  private rightChildOf(index: number): T { return this._items[this.rightChildIndexOf(index)]; }
  private parentOf(index: number): T { return this._items[this.parentIndexOf(index)]; }

  private swap(indexOne: number, indexTwo: number): void {
    const temp = this._items[indexOne];
    this._items[indexOne] = this._items[indexTwo];
    this._items[indexTwo] = temp;
  }

  private heapifyDown(): void {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChildIndexOf(index);
      if (this.hasRightChild(index) && this._compare(this.leftChildOf(index), this.rightChildOf(index))) {
        smallerChildIndex = this.rightChildIndexOf(index);
      }
      if (this._compare(this._items[smallerChildIndex], this._items[index])) {
        break;
      }
      else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
  public poll(): T {
    if (this.size === 0) throw new Error("Empty heap.");
    if (this.size === 1) {
      return this._items.pop()!; 
    }
    const item = this._items[0];
    this._items[0] = this._items.pop()!;
    this.heapifyDown();
    return item;
  }

  private heapifyUp(): void {
    let index = this.size - 1;
    while (this.hasParent(index) && this._compare(this.parentOf(index), this._items[index])) {
      this.swap(this.parentIndexOf(index), index);
      index = this.parentIndexOf(index);
    }
  }
  public offer(t: T) {
    this._items.push(t);
    this.heapifyUp();
  }
};
```

Now the algorithm can use the above heap to return the K closest points from origin.
```typescript
const distance = (p: number[]) => {
  return p[0] * p[0] + p[1] * p[1];
}
const compare = (p1: number[], p2: number[]) => {
  return distance(p2) > distance(p1); // max heap
};

function kClosest(points: number[][], k: number): number[][] {
    const result = [];
    const minHeap = new Heap(compare);
    for (const p of points) {
        minHeap.offer(p);
        if (minHeap.size > k) {
            minHeap.poll();
        }
    }
    while (k > 0) {
        result.push(minHeap.poll());
        k--;
    }
    return result;
};
```

The reason for the max heap and the polling is that the heap's size should never exceed K. As each point is offered to the heap, polling the max distance item if the heap size is greater than K guarantees that the heap will maintain the K least distanced points (closest from origin).