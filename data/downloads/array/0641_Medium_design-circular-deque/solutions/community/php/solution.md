# Easy peasy typescript/php/java/c++/go

**Author:** salisbury-espinosa
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5841660/](https://leetcode.com/problems/design-circular-deque/solutions/5841660/)

---

# Code
```typescript []
class NodeOfDeque {
    value: number;
    prev: NodeOfDeque | undefined;
    next: NodeOfDeque | undefined;
    constructor(value: number, prev?: NodeOfDeque | undefined, next?: NodeOfDeque | undefined) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class MyCircularDeque {
    private
        size: number = 0;
        maxSize: number;
        front: NodeOfDeque | undefined;
        rear: NodeOfDeque | undefined;
    public
        constructor(k: number) {
            this.maxSize = k;
        }

        insertFront(value: number): boolean {
            if (this.isFull())
                return false;
            if (!this.front) 
                this.front = this.rear = new NodeOfDeque(value);
            else 
                this.front = this.front.next = new NodeOfDeque(value, this.front);
            this.size += 1;
            return true;
        }

        insertLast(value: number): boolean {
            if (this.isFull())
                return false;
            if (!this.front) 
                this.front = this.rear = new NodeOfDeque(value);
            else 
                this.rear = this.rear.prev = new NodeOfDeque(value, undefined, this.rear);
            this.size += 1;
            return true;
        }

        deleteFront(): boolean {
            if (this.isEmpty())
                return false;
            if (this.front === this.rear) 
                this.front = this.rear = undefined;
            else 
                (this.front = this.front.prev).next = undefined;
            this.size -= 1;
            return true;
        }

        deleteLast(): boolean {
            if (this.isEmpty())
                return false;
            if (this.front === this.rear) 
                this.front = this.rear = undefined;
            else 
                (this.rear = this.rear.next).prev = undefined;
            this.size -= 1;
            return true;
        }

        getFront(): number {
            return this.front ? this.front.value : -1;
        }

        getRear(): number {
            return this.rear ? this.rear.value : -1;
        }

        isEmpty(): boolean {
            return this.size === 0;
        }

        isFull(): boolean {
            return this.size === this.maxSize;
        }
}
```
```php []
class NodeOfDeque {
    public $value;
    public $prev;
    public $next;

    public function __construct($value, $prev = null, $next = null) {
        $this->value = $value;
        $this->prev = $prev;
        $this->next = $next;
    }
}

class MyCircularDeque {
    private $size = 0;
    private $maxSize;
    private $front;
    private $rear;

    public function __construct($k) {
        $this->maxSize = $k;
    }

    public function insertFront($value) {
        if ($this->isFull()) {
            return false;
        }
        if ($this->front === null) {
            $this->front = $this->rear = new NodeOfDeque($value);
        } else {
            $this->front = $this->front->next = new NodeOfDeque($value, $this->front);
        }
        $this->size += 1;
        return true;
    }

    public function insertLast($value) {
        if ($this->isFull()) {
            return false;
        }
        if ($this->front === null) {
            $this->front = $this->rear = new NodeOfDeque($value);
        } else {
            $this->rear = $this->rear->prev = new NodeOfDeque($value, null, $this->rear);
        }
        $this->size += 1;
        return true;
    }

    public function deleteFront() {
        if ($this->isEmpty()) {
            return false;
        }
        if ($this->front === $this->rear) {
            $this->front = $this->rear = null;
        } else {
            $this->front = $this->front->prev;
            $this->front->next = null;
        }
        $this->size -= 1;
        return true;
    }

    public function deleteLast() {
        if ($this->isEmpty()) {
            return false;
        }
        if ($this->front === $this->rear) {
            $this->front = $this->rear = null;
        } else {
            $this->rear = $this->rear->next;
            $this->rear->prev = null;
        }
        $this->size -= 1;
        return true;
    }

    public function getFront() {
        return $this->front ? $this->front->value : -1;
    }

    public function getRear() {
        return $this->rear ? $this->rear->value : -1;
    }

    public function isEmpty() {
        return $this->size === 0;
    }

    public function isFull() {
        return $this->size === $this->maxSize;
    }
}
```
```JAVA []
class NodeOfDeque {
    int value;
    NodeOfDeque prev;
    NodeOfDeque next;

    public NodeOfDeque(int value, NodeOfDeque prev, NodeOfDeque next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

    public NodeOfDeque(int value) {
        this(value, null, null);
    }
}

class MyCircularDeque {
    private int size = 0;
    private int maxSize;
    private NodeOfDeque front;
    private NodeOfDeque rear;

    public MyCircularDeque(int k) {
        this.maxSize = k;
    }

    public boolean insertFront(int value) {
        if (isFull())
            return false;
        if (front == null) 
            front = rear = new NodeOfDeque(value);
        else 
            front = front.next = new NodeOfDeque(value, front, null);
        size += 1;
        return true;
    }

    public boolean insertLast(int value) {
        if (isFull())
            return false;
        if (front == null) 
            front = rear = new NodeOfDeque(value);
        else 
            rear = rear.prev = new NodeOfDeque(value, null, rear);
        size += 1;
        return true;
    }

    public boolean deleteFront() {
        if (isEmpty())
            return false;
        if (front == rear) 
            front = rear = null;
        else 
            (front = front.prev).next = null;
        size -= 1;
        return true;
    }

    public boolean deleteLast() {
        if (isEmpty())
            return false;
        if (front == rear) 
            front = rear = null;
        else 
            (rear = rear.next).prev = null;
        size -= 1;
        return true;
    }

    public int getFront() {
        return front != null ? front.value : -1;
    }

    public int getRear() {
        return rear != null ? rear.value : -1;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == maxSize;
    }
}
```
```C++ []
class NodeOfDeque {
public:
    int value;
    NodeOfDeque* prev;
    NodeOfDeque* next;

    NodeOfDeque(int value, NodeOfDeque* prev = nullptr, NodeOfDeque* next = nullptr) 
        : value(value), prev(prev), next(next) {}
};

class MyCircularDeque {
private:
    int size;
    int maxSize;
    NodeOfDeque* front;
    NodeOfDeque* rear;

public:
    MyCircularDeque(int k) : size(0), maxSize(k), front(nullptr), rear(nullptr) {}

    bool insertFront(int value) {
        if (isFull())
            return false;
        if (!front) 
            front = rear = new NodeOfDeque(value);
        else 
            front = front->prev = new NodeOfDeque(value, nullptr, front);
        size += 1;
        return true;
    }

    bool insertLast(int value) {
        if (isFull())
            return false;
        if (!front) 
            front = rear = new NodeOfDeque(value);
        else 
            rear = rear->next = new NodeOfDeque(value, rear, nullptr);
        size += 1;
        return true;
    }

    bool deleteFront() {
        if (isEmpty())
            return false;
        if (front == rear) 
            front = rear = nullptr;
        else 
            (front = front->next)->prev = nullptr;
        size -= 1;
        return true;
    }

    bool deleteLast() {
        if (isEmpty())
            return false;
        if (front == rear) 
            front = rear = nullptr;
        else 
            (rear = rear->prev)->next = nullptr;
        size -= 1;
        return true;
    }

    int getFront() {
        return front ? front->value : -1;
    }

    int getRear() {
        return rear ? rear->value : -1;
    }

    bool isEmpty() {
        return size == 0;
    }

    bool isFull() {
        return size == maxSize;
    }
};
```
```GO []
type NodeOfDeque struct {
	value int
	prev  *NodeOfDeque
	next  *NodeOfDeque
}

type MyCircularDeque struct {
	size     int
	maxSize  int
	front    *NodeOfDeque
	rear     *NodeOfDeque
}

func Constructor(k int) MyCircularDeque {
	return MyCircularDeque{maxSize: k}
}

func (d *MyCircularDeque) InsertFront(value int) bool {
	if d.IsFull() {
		return false
	}
	if d.front == nil {
		d.front = &NodeOfDeque{value: value}
		d.rear = d.front
	} else {
		newNode := &NodeOfDeque{value: value, next: d.front}
		d.front.prev = newNode
		d.front = newNode
	}
	d.size++
	return true
}

func (d *MyCircularDeque) InsertLast(value int) bool {
	if d.IsFull() {
		return false
	}
	if d.front == nil {
		d.front = &NodeOfDeque{value: value}
		d.rear = d.front
	} else {
		newNode := &NodeOfDeque{value: value, prev: d.rear}
		d.rear.next = newNode
		d.rear = newNode
	}
	d.size++
	return true
}

func (d *MyCircularDeque) DeleteFront() bool {
	if d.IsEmpty() {
		return false
	}
	if d.front == d.rear {
		d.front = nil
		d.rear = nil
	} else {
		d.front = d.front.next
		d.front.prev = nil
	}
	d.size--
	return true
}

func (d *MyCircularDeque) DeleteLast() bool {
	if d.IsEmpty() {
		return false
	}
	if d.front == d.rear {
		d.front = nil
		d.rear = nil
	} else {
		d.rear = d.rear.prev
		d.rear.next = nil
	}
	d.size--
	return true
}

func (d *MyCircularDeque) GetFront() int {
	if d.front != nil {
		return d.front.value
	}
	return -1
}

func (d *MyCircularDeque) GetRear() int {
	if d.rear != nil {
		return d.rear.value
	}
	return -1
}

func (d *MyCircularDeque) IsEmpty() bool {
	return d.size == 0
}

func (d *MyCircularDeque) IsFull() bool {
	return d.size == d.maxSize
}
```