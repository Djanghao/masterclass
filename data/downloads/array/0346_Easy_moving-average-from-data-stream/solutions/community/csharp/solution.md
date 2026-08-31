# Using Queue

**Author:** mxvlshn
**Votes:** 1
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/5508920/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/5508920/)

---

# Complexity
- Time complexity: O(1)

- Space complexity: O(n)

# Code
```
public class MovingAverage {
    private readonly Queue<int> _nums = new Queue<int>();
    private readonly int _maxSize;
    
    private int _numsSum = 0;
    
    public MovingAverage(int size) 
    {
        _maxSize = size;
    }
    
    public double Next(int val) 
    {
        // add new val to the queue and update total sum
        _numsSum += val;
        _nums.Enqueue(val);
        
        // if the size of the queue greq more than max size remove the first element from the queue and update the totalsum
        if (_nums.Count > _maxSize)
        {
            var num = _nums.Dequeue();
            _numsSum -= num;
        }
        
        // calculate and return the average
        return (double)_numsSum/(double)_nums.Count;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.Next(val);
 */
```