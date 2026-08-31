# "Building a Circular Deque: 🚀 Implementing MyCircularDeque in Multiple Languages 🌐 || 100%

**Author:** MaheshSavant
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5842343/](https://leetcode.com/problems/design-circular-deque/solutions/5842343/)

---

# \uD83D\uDE80 Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

When designing a **circular deque** (double-ended queue), the key idea is to manage the **front** and **back** pointers effectively so that they wrap around the ends of the array. This allows for efficient insertions and deletions from both ends.

---

# \uD83D\uDCA1 Approach
<!-- Describe your approach to solving the problem. -->

1. **Array Representation**: The deque is represented as a fixed-size array. 
2. **Front and Back Pointers**: 
    - The `front` pointer points to the current front of the deque.
    - The `back` pointer points to the current back of the deque.
3. **Circular Behavior**: 
    - Use the modulo operator `(index + capacity) % capacity` to ensure that the indices wrap around when they exceed the array bounds.
4. **Operations**: 
    - **Insertion** at the front/back moves the pointers and updates the array.
    - **Deletion** from the front/back also moves the pointers accordingly.

---

# \uD83E\uDDE0 Complexity
- **Time Complexity**: 
    - Insertion and deletion at both ends take constant time: $$O(1)$$ since only pointer manipulation and array updates are required.
  
- **Space Complexity**: 
    - The space complexity is $$O(k)$$ where `k` is the size of the deque.

---

# \uD83D\uDCBB Code

```java []
import java.util.Arrays;

class MyCircularDeque {
    private int[] v;
    private int front, back, size, capacity;

    public MyCircularDeque(int k) {
        v = new int[k];
        front = 0;
        back = k - 1;  // Initially, back points to the last index of the array
        size = 0;
        capacity = k;
    }

    public boolean insertFront(int value) {
        if (isFull()) {
            return false;
        }
        front = (front - 1 + capacity) % capacity;  // Move front pointer to the left
        v[front] = value;
        size++;
        return true;
    }

    public boolean insertLast(int value) {
        if (isFull()) {
            return false;
        }
        back = (back + 1) % capacity;  // Move back pointer to the right
        v[back] = value;
        size++;
        return true;
    }

    public boolean deleteFront() {
        if (isEmpty()) {
            return false;
        }
        front = (front + 1) % capacity;  // Move front pointer to the right
        size--;
        return true;
    }

    public boolean deleteLast() {
        if (isEmpty()) {
            return false;
        }
        back = (back - 1 + capacity) % capacity;  // Move back pointer to the left
        size--;
        return true;
    }

    public int getFront() {
        if (isEmpty()) {
            return -1;
        }
        return v[front];
    }

    public int getRear() {
        if (isEmpty()) {
            return -1;
        }
        return v[back];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == capacity;
    }
}
```
```C []
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct {
    int* v;
    int front, back, size, capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = (MyCircularDeque*)malloc(sizeof(MyCircularDeque));
    obj->v = (int*)malloc(sizeof(int) * k);
    obj->front = 0;
    obj->back = k - 1;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}

bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) {
        return false;
    }
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->v[obj->front] = value;
    obj->size++;
    return true;
}

bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) {
        return false;
    }
    obj->back = (obj->back + 1) % obj->capacity;
    obj->v[obj->back] = value;
    obj->size++;
    return true;
}

bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) {
        return false;
    }
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}

bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) {
        return false;
    }
    obj->back = (obj->back - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}

int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) {
        return -1;
    }
    return obj->v[obj->front];
}

int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) {
        return -1;
    }
    return obj->v[obj->back];
}

bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}

bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}

void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->v);
    free(obj);
}

```
```C++ []
#include <vector>

class MyCircularDeque {
private:
    std::vector<int> v;
    int front, back, size, capacity;
    
public:
    MyCircularDeque(int k) {
        v.resize(k);
        front = 0;
        back = k - 1;
        size = 0;
        capacity = k;
    }

    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        v[front] = value;
        size++;
        return true;
    }

    bool insertLast(int value) {
        if (isFull()) return false;
        back = (back + 1) % capacity;
        v[back] = value;
        size++;
        return true;
    }

    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }

    bool deleteLast() {
        if (isEmpty()) return false;
        back = (back - 1 + capacity) % capacity;
        size--;
        return true;
    }

    int getFront() {
        return isEmpty() ? -1 : v[front];
    }

    int getRear() {
        return isEmpty() ? -1 : v[back];
    }

    bool isEmpty() {
        return size == 0;
    }

    bool isFull() {
        return size == capacity;
    }
};

```
```C# []
public class MyCircularDeque {
    private int[] v;
    private int front, back, size, capacity;

    public MyCircularDeque(int k) {
        v = new int[k];
        front = 0;
        back = k - 1;
        size = 0;
        capacity = k;
    }

    public bool InsertFront(int value) {
        if (IsFull()) return false;
        front = (front - 1 + capacity) % capacity;
        v[front] = value;
        size++;
        return true;
    }

    public bool InsertLast(int value) {
        if (IsFull()) return false;
        back = (back + 1) % capacity;
        v[back] = value;
        size++;
        return true;
    }

    public bool DeleteFront() {
        if (IsEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }

    public bool DeleteLast() {
        if (IsEmpty()) return false;
        back = (back - 1 + capacity) % capacity;
        size--;
        return true;
    }

    public int GetFront() {
        return IsEmpty() ? -1 : v[front];
    }

    public int GetRear() {
        return IsEmpty() ? -1 : v[back];
    }

    public bool IsEmpty() {
        return size == 0;
    }

    public bool IsFull() {
        return size == capacity;
    }
}

```
```Python []
class MyCircularDeque:
    def __init__(self, k: int):
        self.v = [-1] * k
        self.front = 0
        self.back = k - 1
        self.size = 0
        self.capacity = k

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.v[self.front] = value
        self.size += 1
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False
        self.back = (self.back + 1) % self.capacity
        self.v[self.back] = value
        self.size += 1
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False
        self.back = (self.back - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True

    def getFront(self) -> int:
        return -1 if self.isEmpty() else self.v[self.front]

    def getRear(self) -> int:
        return -1 if self.isEmpty() else self.v[self.back]

    def isEmpty(self) -> bool:
        return self.size == 0

    def isFull(self) -> bool:
        return self.size == self.capacity

```
```JavaScript []
class MyCircularDeque {
    constructor(k) {
        this.v = new Array(k);
        this.front = 0;
        this.back = k - 1;
        this.size = 0;
        this.capacity = k;
    }

    insertFront(value) {
        if (this.isFull()) return false;
        this.front = (this.front - 1 + this.capacity) % this.capacity;
        this.v[this.front] = value;
        this.size++;
        return true;
    }

    insertLast(value) {
        if (this.isFull()) return false;
        this.back = (this.back + 1) % this.capacity;
        this.v[this.back] = value;
        this.size++;
        return true;
    }

    deleteFront() {
        if (this.isEmpty()) return false;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return true;
    }

    deleteLast() {
        if (this.isEmpty()) return false;
        this.back = (this.back - 1 + this.capacity) % this.capacity;
        this.size--;
        return true;
    }

    getFront() {
        return this.isEmpty() ? -1 : this.v[this.front];
    }

    getRear() {
        return this.isEmpty() ? -1 : this.v[this.back];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}

```
```Rust []
struct MyCircularDeque {
    v: Vec<i32>,
    front: usize,
    back: usize,
    size: usize,
    capacity: usize,
}

impl MyCircularDeque {
    fn new(k: usize) -> Self {
        Self {
            v: vec![-1; k],
            front: 0,
            back: k - 1,
            size: 0,
            capacity: k,
        }
    }

    fn insert_front(&mut self, value: i32) -> bool {
        if self.is_full() {
            return false;
        }
        self.front = (self.front + self.capacity - 1) % self.capacity;
        self.v[self.front] = value;
        self.size += 1;
        true
    }

    fn insert_last(&mut self, value: i32) -> bool {
        if self.is_full() {
            return false;
        }
        self.back = (self.back + 1) % self.capacity;
        self.v[self.back] = value;
        self.size += 1;
        true
    }

    fn delete_front(&mut self) -> bool {
        if self.is_empty() {
            return false;
        }
        self.front = (self.front + 1) % self.capacity;
        self.size -= 1;
        true
    }

    fn delete_last(&mut self) -> bool {
        if self.is_empty() {
            return false;
        }
        self.back = (self.back + self.capacity - 1) % self.capacity;
        self.size -= 1;
        true
    }

    fn get_front(&self) -> i32 {
        if self.is_empty() {
            return -1;
        }
        self.v[self.front]
    }

    fn get_rear(&self) -> i32 {
        if self.is_empty() {
            return -1;
        }
        self.v[self.back]
    }

    fn is_empty(&self) -> bool {
        self.size == 0
    }

    fn is_full(&self) -> bool {
        self.size == self.capacity
    }
}

fn main() {
    let mut deque = MyCircularDeque::new(3);
    println!("{}", deque.insert_front(1));  // true
    println!("{}", deque.insert_last(2));   // true
    println!("{}", deque.get_front());      // 1
    println!("{}", deque.get_rear());       // 2
    println!("{}", deque.delete_front());   // true
    println!("{}", deque.is_empty());       // false
    println!("{}", deque.is_full());        // false
}


```
```Ruby []
class MyCircularDeque
  def initialize(k)
    @v = Array.new(k, -1)
    @front = 0
    @back = k - 1
    @size = 0
    @capacity = k
  end

  def insert_front(value)
    return false if is_full?

    @front = (@front - 1 + @capacity) % @capacity
    @v[@front] = value
    @size += 1
    true
  end

  def insert_last(value)
    return false if is_full?

    @back = (@back + 1) % @capacity
    @v[@back] = value
    @size += 1
    true
  end

  def delete_front
    return false if is_empty?

    @front = (@front + 1) % @capacity
    @size -= 1
    true
  end

  def delete_last
    return false if is_empty?

    @back = (@back - 1 + @capacity) % @capacity
    @size -= 1
    true
  end

  def get_front
    return -1 if is_empty?

    @v[@front]
  end

  def get_rear
    return -1 if is_empty?

    @v[@back]
  end

  def is_empty?
    @size == 0
  end

  def is_full?
    @size == @capacity
  end
end

```
```Go []
package main

import "fmt"

type MyCircularDeque struct {
    v        []int
    front    int
    back     int
    size     int
    capacity int
}

func Constructor(k int) MyCircularDeque {
    return MyCircularDeque{
        v:        make([]int, k),
        front:    0,
        back:     k - 1,
        size:     0,
        capacity: k,
    }
}

func (this *MyCircularDeque) InsertFront(value int) bool {
    if this.IsFull() {
        return false
    }
    this.front = (this.front - 1 + this.capacity) % this.capacity
    this.v[this.front] = value
    this.size++
    return true
}

func (this *MyCircularDeque) InsertLast(value int) bool {
    if this.IsFull() {
        return false
    }
    this.back = (this.back + 1) % this.capacity
    this.v[this.back] = value
    this.size++
    return true
}

func (this *MyCircularDeque) DeleteFront() bool {
    if this.IsEmpty() {
        return false
    }
    this.front = (this.front + 1) % this.capacity
    this.size--
    return true
}

func (this *MyCircularDeque) DeleteLast() bool {
    if this.IsEmpty() {
        return false
    }
    this.back = (this.back - 1 + this.capacity) % this.capacity
    this.size--
    return true
}

func (this *MyCircularDeque) GetFront() int {
    if this.IsEmpty() {
        return -1
    }
    return this.v[this.front]
}

func (this *MyCircularDeque) GetRear() int {
    if this.IsEmpty() {
        return -1
    }
    return this.v[this.back]
}

func (this *MyCircularDeque) IsEmpty() bool {
    return this.size == 0
}

func (this *MyCircularDeque) IsFull() bool {
    return this.size == this.capacity
}

func main() {
    obj := Constructor(3)
    fmt.Println(obj.InsertFront(1))  // true
    fmt.Println(obj.InsertLast(2))   // true
    fmt.Println(obj.GetFront())      // 1
    fmt.Println(obj.GetRear())       // 2
    fmt.Println(obj.DeleteFront())   // true
    fmt.Println(obj.IsEmpty())       // false
    fmt.Println(obj.IsFull())        // false
}

```
