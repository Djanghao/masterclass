# ✅Video | Short & Simple | Beats 100% | O(1)

**Author:** Piotr_Maminski
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/6060135/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/6060135/)

---

https://youtu.be/cIeQcg0IDIY?si=d4hGLcAY1YnLqzTv
# Deque
```python3 []
class MovingAverage:
    def __init__(self, size: int):
        self.size = size
        self.queue = collections.deque()
        self.sum = 0
    def next(self, val: int) -> float:
        self.queue.append(val)
        self.sum += val
        if len(self.queue) >  self.size:
            self.sum  -= self.queue.popleft()
        return self.sum/len(self.queue)
```
```cpp []
class MovingAverage {
private:
    int size;
    deque<int> queue;
    double sum;
    
public:
    MovingAverage(int size) {
        this->size = size;
        this->sum = 0;
    }
    
    double next(int val) {
        queue.push_back(val);
        sum += val;
        
        if (queue.size() > size) {
            sum -= queue.front();
            queue.pop_front();
        }
        
        return sum / queue.size();
    }
};

```
```java []
class MovingAverage {
    private int size;
    private Deque<Integer> queue;
    private double sum;
    
    public MovingAverage(int size) {
        this.size = size;
        this.queue = new LinkedList<>();
        this.sum = 0;
    }
    
    public double next(int val) {
        queue.addLast(val);
        sum += val;
        
        if (queue.size() > size) {
            sum -= queue.removeFirst();
        }
        
        return sum / queue.size();
    }
}

```
```csharp []
public class MovingAverage {
    private int size;
    private Queue<int> queue;
    private double sum;
    
    public MovingAverage(int size) {
        this.size = size;
        this.queue = new Queue<int>();
        this.sum = 0;
    }
    
    public double Next(int val) {
        queue.Enqueue(val);
        sum += val;
        
        if (queue.Count > size) {
            sum -= queue.Dequeue();
        }
        
        return sum / queue.Count;
    }
}

```
```golang []
type MovingAverage struct {
    size  int
    queue []int
    sum   float64
}

func Constructor(size int) MovingAverage {
    return MovingAverage{
        size:  size,
        queue: make([]int, 0),
        sum:   0,
    }
}

func (ma *MovingAverage) Next(val int) float64 {
    ma.queue = append(ma.queue, val)
    ma.sum += float64(val)
    
    if len(ma.queue) > ma.size {
        ma.sum -= float64(ma.queue[0])
        ma.queue = ma.queue[1:]
    }
    
    return ma.sum / float64(len(ma.queue))
}

```
```swift []
class MovingAverage {
    private let size: Int
    private var queue: [Int]
    private var sum: Double
    
    init(_ size: Int) {
        self.size = size
        self.queue = []
        self.sum = 0
    }
    
    func next(_ val: Int) -> Double {
        queue.append(val)
        sum += Double(val)
        
        if queue.count > size {
            sum -= Double(queue.removeFirst())
        }
        
        return sum / Double(queue.count)
    }
}

```
```javascript [JS]
// JavaScript

class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }
    
    next(val) {
        this.queue.push(val);
        this.sum += val;
        
        if (this.queue.length > this.size) {
            this.sum -= this.queue.shift();
        }
        
        return this.sum / this.queue.length;
    }
}
```
```typescript [TS]
// TypeScript

class MovingAverage {
    private size: number;
    private queue: number[];
    private sum: number;
    
    constructor(size: number) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }
    
    next(val: number): number {
        this.queue.push(val);
        this.sum += val;
        
        if (this.queue.length > this.size) {
            this.sum -= this.queue.shift()!;
        }
        
        return this.sum / this.queue.length;
    }
}

```
```rust []
struct MovingAverage {
    size: i32,
    queue: std::collections::VecDeque<i32>,
    sum: f64,
}

impl MovingAverage {
    fn new(size: i32) -> Self {
        MovingAverage {
            size,
            queue: std::collections::VecDeque::new(),
            sum: 0.0,
        }
    }
    
    fn next(&mut self, val: i32) -> f64 {
        self.queue.push_back(val);
        self.sum += val as f64;
        
        if self.queue.len() > self.size as usize {
            if let Some(front) = self.queue.pop_front() {
                self.sum -= front as f64;
            }
        }
        
        self.sum / self.queue.len() as f64
    }
}
```
```ruby []
class MovingAverage
  def initialize(size)
    @size = size
    @queue = []
    @sum = 0
  end

  def next(val)
    @queue.push(val)
    @sum += val
    
    if @queue.length > @size
      @sum -= @queue.shift
    end
    
    @sum.to_f / @queue.length
  end
end
```
- Complexity: Time O(1) & Space O(n)

![image.png](./images/0.png)
