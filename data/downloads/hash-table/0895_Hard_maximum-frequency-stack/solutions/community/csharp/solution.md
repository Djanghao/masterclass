# Using Dictionary & List | Most Optimised Approach

**Author:** ayush6203
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/3767093/](https://leetcode.com/problems/maximum-frequency-stack/solutions/3767093/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(N) + O(N)

# Code
```
public class FreqStack {
    Dictionary<int, int> dictCount;
    Dictionary<int, List<int>> dictFreq;
    int maxFreq = 0;

    public FreqStack() {
        dictCount = new Dictionary<int, int>();
        dictFreq = new Dictionary<int, List<int>>();
    }
    
    public void Push(int val) {
        if(!dictCount.ContainsKey(val))
            dictCount.Add(val, 1);
        else
            dictCount[val] += 1;

        int currFreq = dictCount[val];
        if(!dictFreq.ContainsKey(currFreq))
            dictFreq.Add(currFreq, new List<int>());
        
        dictFreq[currFreq].Add(val);
        maxFreq = Math.Max(maxFreq, currFreq);
    }
    
    public int Pop() {
        List<int> maxFreqItems = dictFreq[maxFreq];
        int count = maxFreqItems.Count;
        if(count == 1)
            maxFreq -= 1;
        
        int itm = maxFreqItems[count-1];
        dictCount[itm] -= 1;
        maxFreqItems.RemoveAt(count-1);
        return itm;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.Push(val);
 * int param_2 = obj.Pop();
 */
```