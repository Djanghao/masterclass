# C# Dynamic Programming

**Author:** CavoX5
**Votes:** 5
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3965124/](https://leetcode.com/problems/frog-jump/solutions/3965124/)

---


# Code
```
public class Solution 
{
    bool[,] mem;
    public bool CanCross(int[] stones) 
    {
        mem = new bool[stones.Length, stones.Length];
        return Cross(stones,0,0);
    }
    public bool Cross(int[] stones,int k,int index)
    {
        if(mem[index,k]) return false;
        if(index == stones.Length - 1) return true;
        
        int a = index;
        while(++a < stones.Length && (stones[a] - stones[index]) - k < 2)
        {
            if((stones[a] - stones[index]) - k > -2)
                if(Cross(stones,(stones[a] - stones[index]),a)) return true;
        }
        mem[index,k] = true;
        return false;
    }
}
```