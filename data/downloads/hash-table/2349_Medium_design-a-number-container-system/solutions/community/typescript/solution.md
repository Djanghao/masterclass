# Typescript Solution | HasMap with PriorityQueue

**Author:** loayh98
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/2322617/](https://leetcode.com/problems/design-a-number-container-system/solutions/2322617/)

---

```
class NumberContainers {
  containerMap;
  valuesPQMap;
  constructor() {
    this.containerMap = new Map<number, number>();
    this.valuesPQMap = new Map<number, typeof MinPriorityQueue>();
  }

  change(index: number, num: number): void {
    const prevValue = this.containerMap.get(index);
    if (prevValue) {
      const pq = this.valuesPQMap.get(prevValue);
      if (pq.front().priority - 1 == index) {
        pq.dequeue();
      }
    }
    if (this.valuesPQMap.has(num)) {
      const newPQ = this.valuesPQMap.get(num);
      newPQ.enqueue(index, index + 1);
    } else {
      const newPQ = new MinPriorityQueue();
      newPQ.enqueue(index, index + 1);
      this.valuesPQMap.set(num, newPQ);
    }

    this.containerMap.set(index, num);
  }

  find(num: number): number {
    const newPQ = this.valuesPQMap.get(num);
    if (!newPQ) {
      return -1;
    }
    while (!newPQ.isEmpty()) {
      if (this.containerMap.get(newPQ.front().element) == num) {
        return newPQ.front().priority - 1;
      } else {
        newPQ.dequeue();
      }
    }
    return -1;
  }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

```