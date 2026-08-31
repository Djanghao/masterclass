# Map + Max and Min Heaps

**Author:** panevskii
**Votes:** 0
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/3135877/](https://leetcode.com/problems/stock-price-fluctuation/solutions/3135877/)

---

# Code
```
type PriorityQueueComparator<T> = (a: T, b: T) => boolean;

interface IPriorityQueueOptions<T> {
  comparator: PriorityQueueComparator<T>;
  initialElements?: T[];
}

interface IPriorityQueue<T> {
  size(): number;
  isEmpty(): boolean;
  peek(): T;
  push(value: T): void;
  pushMany(values: T[]): void;
  pop(): T;
  clear(): void;
  has(value: T): boolean;
  values(): T[];
}


class PriorityQueueCustom<T> implements IPriorityQueue<T> {
  private heap: T[];
  private comparator: PriorityQueueComparator<T>;

  /**
   *
   * @param options
   * options.comparator: function used to compare elements;
   * options.initialElements: elements to be put in priority queue initially in O(n) time
   */
  constructor(options: IPriorityQueueOptions<T>) {
    this.heap = [];
    this.comparator = options.comparator;
    if (options.initialElements) this.buildHeap(options.initialElements);
  }

  /**
   *
   * @returns size of priority queue in O(1)
   */
  size() {
    return this.heap.length;
  }

  /**
   *
   * @returns is priority queue empty in O(1)
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   *
   * @returns top of priority queue in O(1), if priority queue is empty returns undefined
   */
  peek(): T {
    return this.heap[0] ? JSON.parse(JSON.stringify(this.heap[0])) : undefined;
  }

  /**
   * clears priority queue in O(1)
   */
  clear(): void {
    this.heap = [];
  }

  /**
   * checks if value exists in priority queue in O(n)
   */
  has(value: T) {
    return !!this.heap.find((ele) => ele === value);
  }

  /**
   *
   * @returns all values of priority queue in O(n)
   */
  values() {
    return JSON.parse(JSON.stringify(this.heap)) as T[];
  }

  private buildHeap(array: T[]) {
    this.heap = JSON.parse(JSON.stringify(array)) as T[];
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  /**
   *
   * @param value element to be added to heap, adds it in O(log n) operations, n is size of heap
   * @returns size of heap
   */
  push(value: T) {
    this.heap.push(value);
    this.siftUp();
    return this.size();
  }

  /**
   *
   * @param values elements to be added to heap, adds it in O(k * log n) operations, n is size of heap, k is number of elements added
   * @returns size of heap
   */
  pushMany(values: T[]) {
    values.forEach((value) => {
      this.push(value);
    });
    return this.size();
  }

  /**
   *
   * @returns top of priority queue and removes it from priority queue in O(log n), if priority queue is empty returns undefined
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const returnValue = this.peek();
    const lastIndexOfHeapArray = this.size() - 1;
    if (lastIndexOfHeapArray > 0) {
      this.swap(0, lastIndexOfHeapArray);
    }
    this.heap.pop();
    this.siftDown();
    return returnValue;
  }

  private getParent(index: number) {
    return ((index + 1) >>> 1) - 1;
  }

  private getLeftChild(index: number) {
    return (index << 1) + 1;
  }

  private getRightChild(index: number) {
    return (index + 1) << 1;
  }

  private compareByIndex(i: number, j: number) {
    return this.comparator(this.heap[i], this.heap[j]);
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private siftUp() {
    let node = this.size() - 1;
    while (node > 0 && this.compareByIndex(node, this.getParent(node))) {
      const parentNode = this.getParent(node);
      this.swap(node, parentNode);
      node = parentNode;
    }
  }

  private siftDown(node = 0) {
    let leftChild = this.getLeftChild(node);
    let rightChild = this.getRightChild(node);
    while (
      (leftChild < this.size() && this.compareByIndex(leftChild, node)) ||
      (rightChild < this.size() && this.compareByIndex(rightChild, node))
    ) {
      const maxChild =
        rightChild < this.size() && this.compareByIndex(rightChild, leftChild)
          ? rightChild
          : leftChild;

      this.swap(node, maxChild);

      node = maxChild;
      leftChild = this.getLeftChild(node);
      rightChild = this.getRightChild(node);
    }
  }
}

type Tuple = [number, number];
    
class StockPrice {
    private minHeap: PriorityQueueCustom<Tuple>;
    private maxHeap: PriorityQueueCustom<Tuple>;
    private map: Map<number, number>;
    private lattest: number = -1;

    constructor() {
        this.minHeap = new PriorityQueueCustom<Tuple>({
            comparator: (a, b) => a[1] < b[1]
        });

        this.maxHeap = new PriorityQueueCustom<Tuple>({
            comparator: (a, b) => a[1] > b[1]
        });

        this.map = new Map<number, number>();
    }

    update(timestamp: number, price: number): void {
        this.minHeap.push([timestamp, price]);
        this.maxHeap.push([timestamp, price]);
        this.map.set(timestamp, price);
        this.lattest = Math.max(this.lattest, timestamp); 
    }

    current(): number {
        return this.map.get(this.lattest);
    }

    maximum(): number {
        let currMax = this.maxHeap.peek();
        while (currMax[1] !== this.map.get(currMax[0])) {
            this.maxHeap.pop();
            currMax = this.maxHeap.peek();
        }

        return currMax[1];
    }

    minimum(): number {
        let currMin = this.minHeap.peek();
        while (currMin[1] !== this.map.get(currMin[0])) {
            this.minHeap.pop();
            currMin = this.minHeap.peek();
        }

        return currMin[1];
    }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
```