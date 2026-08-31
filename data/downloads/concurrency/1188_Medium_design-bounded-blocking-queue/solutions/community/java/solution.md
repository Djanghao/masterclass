# Java Deque + Monitor Solution

**Author:** alexvlis_d
**Votes:** 9
**Link:** [https://leetcode.com/problems/design-bounded-blocking-queue/solutions/1017703/](https://leetcode.com/problems/design-bounded-blocking-queue/solutions/1017703/)

---

```
class BoundedBlockingQueue {

    private final int capacity;
    private final Deque<Integer> items = new LinkedList<>();
    
    public BoundedBlockingQueue(int capacity) {
        this.capacity = capacity;
    }
    
    public synchronized void enqueue(int element) throws InterruptedException {
        while (items.size() == capacity) {
            wait();
        }
        items.addLast(element);
        notifyAll();
    }
    
    public synchronized int dequeue() throws InterruptedException {
        while (items.isEmpty()) {
            wait();
        }
        int item = items.pollFirst();
        notifyAll();
        return item;
    }
    
    public synchronized int size() {
        return items.size();
    }
}
```