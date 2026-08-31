# Priority Queue

**Author:** PrashantUnity
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169845/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169845/)

---


# Code
```csharp []
public class Solution 
{
    public string ShortestBeautifulSubstring(string s, int k) 
    {
        var j = 0;
        int count = 0;
        var ls = new PriorityQueue<string,int>();
        
        for(var i=0; i<s.Length;i++)
        {
            if (s[i]=='1') count++;
            while(count>=k && j<s.Length)
            {
                var sub = s.Substring(j, i-j +1);
                if (count == k) ls.Enqueue(sub, sub.Length); 
                if (s[j]=='1') count--; 
                j++; 
            }  
        }
        if(ls.Count==0) return ""; 
        
        var ans = new PriorityQueue<string,string>(); 
        count = ls.Peek().Length; 
        
        while(ls.Count> 0 && ls.Peek().Length==count) 
        { 
            ans.Enqueue(ls.Peek(), ls.Dequeue()); 
        }
        return ans.Peek();
    }
}
```