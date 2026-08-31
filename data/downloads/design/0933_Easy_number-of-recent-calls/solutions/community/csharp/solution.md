# C#, simple solution using Queue

**Author:** edevyatkin
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/506905/](https://leetcode.com/problems/number-of-recent-calls/solutions/506905/)

---

```
public class RecentCounter {
    private Queue<int> _queue;
    private const int Interval = 3000;

    public RecentCounter() {
        _queue = new Queue<int>();
    }
    
    public int Ping(int t) {
        _queue.Enqueue(t);
        while (t - _queue.Peek() > Interval)
            _queue.Dequeue();
        return _queue.Count;
    }
}
```