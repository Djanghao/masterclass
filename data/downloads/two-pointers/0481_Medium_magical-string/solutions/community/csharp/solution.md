# C# Queue

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/5345616/](https://leetcode.com/problems/magical-string/solutions/5345616/)

---

# Code
```
public class Solution {
    public int MagicalString(int n) {
        var queue = new Queue<int>();
        queue.Enqueue(1);
        var res = 0;
        var cnt = 0;
        var one = true;
        for (var i = 0; i < n; ++i)
        {
            cnt++;
            if (one) res++;
            var curr = queue.Peek();
            var next = curr;
            if (cnt == curr)
            {
                queue.Dequeue();
                cnt = 0;
                one = !one;
            }
            queue.Enqueue(one ? 1 : 2);
        }
        return res;
    }
}
```