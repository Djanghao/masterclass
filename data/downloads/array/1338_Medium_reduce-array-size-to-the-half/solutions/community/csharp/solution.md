# c# priority Queue  dictionary

**Author:** gunners
**Votes:** 3
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2607849/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2607849/)

---

```
  public int MinSetSize(int[] arr) {
        
        var dict = new Dictionary<int,int>();
        
        foreach(var item in arr)
        {
            dict.TryAdd(item, 0);
            dict[item]++;
        }
        
        var queue = new PriorityQueue<int,int>(Comparer<int>.Create((a,b) => b-a));
        
        foreach(var item in dict.Values)
        {
            queue.Enqueue(item,item);
        }
        
        var size = arr.Length/2; 
        
        var currentCount = 0; 
        var result = 0; 
        
        while(queue.Count != 0 && currentCount < size)
        {
            var current = queue.Dequeue(); 
            currentCount += current;
            result++;
            
        }
        
        return result;