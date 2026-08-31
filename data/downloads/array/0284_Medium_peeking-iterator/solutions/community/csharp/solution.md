# C# simple solution

**Author:** nzspider
**Votes:** 0
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/5857730/](https://leetcode.com/problems/peeking-iterator/solutions/5857730/)

---

# Code
```csharp []
// C# IEnumerator interface reference:
// https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerator?view=netframework-4.8

class PeekingIterator {
    int cur, next;
    IEnumerator<int> _iterator;
    List<int> list = new List<int>();
    // iterators refers to the first element of the array.
    public PeekingIterator(IEnumerator<int> iterator) {
        // initialize any member here.
        _iterator = iterator;
        cur = 0;    
         
        do{
            next = _iterator.Current;
            list.Add(next);            
        }
        while(_iterator.MoveNext());   
    }
    
    // Returns the next element in the iteration without advancing the iterator.
    public int Peek() {
        if(cur<list.Count)
            return list.ElementAt(cur);        
        return -1;
    }
    
    // Returns the next element in the iteration and advances the iterator.
    public int Next() {
        var res = -1;
        if(cur<list.Count)
        {
            res = list.ElementAt(cur);        
            cur++;
        }            
        return res;
    }
    
    // Returns false if the iterator is refering to the end of the array of true otherwise.
    public bool HasNext() {
		return cur<list.Count;
    }
}
```