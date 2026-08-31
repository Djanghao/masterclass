# Using a MinHeap

**Author:** SheepNDW
**Votes:** 3
**Link:** [https://leetcode.com/problems/seat-reservation-manager/solutions/4254859/](https://leetcode.com/problems/seat-reservation-manager/solutions/4254859/)

---

# Approach

I've implemented a seat manager using a MinHeap data structure to efficiently manage the reservation and unreservation of seats. The `reserve` method retrieves and removes the minimum element (the lowest-numbered available seat), while the `unreserve` method inserts a seat number back into the heap, preserving the heap invariant.

# Code
```
class SeatManager {
  private seat: MinHeap<number>;

  constructor(n: number) {
    this.seat = new MinHeap();
    for (let i = 1; i <= n; i++) {
      this.seat.push(i);
    }
  }

  reserve(): number {
    return this.seat.pop() as number;
  }

  unreserve(seatNumber: number): void {
    this.seat.push(seatNumber);
  }
}

class MinHeap<T> {
  private heap: T[] = [];

  push(el: T): void {
    const array = this.heap;
    array.push(el);
    let child = array.length - 1;
    let parent = (child - 1) >> 1;

    while (array[child] < array[parent]) {
      this.swap(array, child, parent);
      child = parent;
      parent = (child - 1) >> 1;
    }
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const array = this.heap;
    const target = array[0];
    this.swap(array, 0, array.length - 1);
    array.pop();

    let parent = 0;

    while (true) {
      let child = parent * 2 + 1;
      if (child >= array.length) break;

      let rightChild = child + 1;
      if (rightChild < array.length && array[rightChild] < array[child]) {
        child = rightChild;
      }

      if (array[parent] <= array[child]) break;

      this.swap(array, parent, child);
      parent = child;
    }

    return target;
  }

  swap(arr: T[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
```