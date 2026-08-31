# 100% || 0ms|| concise || simple || easy

**Author:** ManojKumarPatnaik
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-circular-queue/solutions/1990490/](https://leetcode.com/problems/design-circular-queue/solutions/1990490/)

---

```
class MyCircularQueue {
        final int[] a;
        int front = 0, rear = -1, len = 0;

        public MyCircularQueue(int k) { a = new int[k];}

        public boolean enQueue(int val) {
            if (!isFull()) {
                rear = (rear + 1) % a.length;
                a[rear] = val;
                len++;
                return true;
            } else return false;
        }

        public boolean deQueue() {
            if (!isEmpty()) {
                front = (front + 1) % a.length;
                len--;
                return true;
            } else return false;
        }

        public int Front() { return isEmpty() ? -1 : a[front];}

        public int Rear() {return isEmpty() ? -1 : a[rear];}

        public boolean isEmpty() { return len == 0;}

        public boolean isFull() { return len == a.length;}
    }
```