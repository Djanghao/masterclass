# Kotlin Practice Basic Solution

**Author:** Kokoro_Salmon
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5857774/](https://leetcode.com/problems/design-circular-deque/solutions/5857774/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The task is to implement a circular deque, which allows efficient insertions and deletions at both ends. A circular buffer is an optimal choice because it allows the deque to "wrap around" when the end of the buffer is reached. The main challenge is handling the `front` and `back` pointers and ensuring they wrap around correctly while performing operations in constant time.


# Approach
<!-- Describe your approach to solving the problem. -->
1. **Array-based Circular Buffer**: We use a fixed-size array (`deque`) to store the elements, along with two pointers, `front` and `back`, to track the positions where elements can be inserted or removed.
   
2. **Insertions**:
   - **insertFront**: If the deque is not full, the `front` pointer is decremented and wrapped around using modulo arithmetic, then the element is inserted at the updated `front` position.
   - **insertLast**: The `back` pointer is incremented and wrapped around in a similar way, and the value is inserted at the new `back` position.

3. **Deletions**:
   - **deleteFront**: If the deque is not empty, the `front` pointer is incremented (moving forward in the circular buffer).
   - **deleteLast**: The `back` pointer is decremented (moving backward in the circular buffer).

4. **Edge Cases**: Handle when the deque is empty or full, and use helper functions like `isEmpty` and `isFull` to manage these conditions.

5. **Circular Behavior**: The circular behavior of the deque is handled using the modulo operation `(index + size) % size` to ensure the pointers wrap around when reaching the end of the array.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
All operations (`insertFront`, `insertLast`, `deleteFront`, `deleteLast`, `getFront`, `getRear`, `isEmpty`, `isFull`) are performed in constant time $$O(1)$$ because each operation involves a fixed number of arithmetic and array indexing steps.


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 The space complexity is $$O(k)$$ where `k` is the capacity of the deque, as we are using a fixed-size array to store the elements. 

# Code
```kotlin []
class MyCircularDeque(k: Int) {
    private val size = k;
    private var front = -1;
    private var back = -1;
    private var deque = MutableList(size) { 0 };
    fun insertFront(value: Int): Boolean {
        if(isFull())return false;
        if(isEmpty())
        {
            front  = 0;
            back = 0;
        }
        else
        {
           front = (front - 1 + size) % size 
        }
        deque[front] = value;
        return true;
    }

    fun insertLast(value: Int): Boolean {
        if(isFull())return false;
        if(isEmpty())
        {
            front  = 0;
            back = 0;
        }
        else back = (back + 1) % size
        deque[back]=value;
        return true;
    }

    fun deleteFront(): Boolean {
        if (isEmpty()) return false
        if (front == back) 
        {
            front = -1
            back = -1
        } 
        else 
        {
            front = (front + 1) % size
        }
        return true
    }

    fun deleteLast(): Boolean {
        if (isEmpty()) return false
        if (front == back) 
        {
            front = -1
            back = -1
        } 
        else 
        {
            back = (back - 1 + size) % size
        }
        return true        
    }

    fun getFront(): Int {
        if(isEmpty())return -1;
        else return deque[front];
    }

    fun getRear(): Int {
        if(isEmpty())return -1;
        else return deque[back];        
    }

    fun isEmpty(): Boolean {
        return (front==-1 && back==-1);
    }

    fun isFull(): Boolean {
        return (back+1) % size == front;
    }

}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = MyCircularDeque(size)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
```