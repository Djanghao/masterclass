# C#. Euler path. Faster than 100%

**Author:** IvanAntipov
**Votes:** 1
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/1729857/](https://leetcode.com/problems/cracking-the-safe/solutions/1729857/)

---

# Alogrithm
Just a standard Euler path algorithm. Surprise, but it seems to be faster than 100% C# submissions. I thought that De Bruijn approach (Lyndon words) should be faster.


Each state is represented as the sum for i from 0 to n-2 of i_nth_symbols*k^1. 

<img src="https://render.githubusercontent.com/render/math?math=\\sum_{i=0}^{n-2} s_i*k^i">

**where** $`s_i`$ is the i-th symbol of possible password


The implementation search for Euler path throughout the states

# Code
```

public class Solution {
    public string CrackSafe(int n, int k) {
        
        var numberOfStates = (int) Math.Pow(k, n-1);
       
        var result = new LinkedList<int>();
        var states = new Dictionary<int, int>();
        for(var i =0; i<numberOfStates; i++)
        {
            states[i] = 0;
        }

        void Dfs(int state, int symbol)
        {
            var nextStateBase = state*k % numberOfStates;
            
            while(states[state] < k)
            {
                var currentValue = states[state];
                var nextState = (nextStateBase + currentValue)%numberOfStates;
                var nextStateCurrentValue = states[nextState];
                states[state] = currentValue + 1;

                Dfs(nextState, currentValue); 
            }
            result.AddFirst(symbol);

        }
        
        Dfs(0,0);
        result.RemoveFirst();
        foreach(var i in Enumerable.Range(0, n-1))
        { 
            result.AddFirst(0);
        }
        var resultString = String.Join("", result.AsEnumerable());
        return resultString;
    }
}
```
