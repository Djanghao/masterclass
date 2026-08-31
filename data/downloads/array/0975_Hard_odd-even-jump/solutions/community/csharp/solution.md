# Odd Even Jump C#

**Author:** MaddiSwetha
**Votes:** 1
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/3071851/](https://leetcode.com/problems/odd-even-jump/solutions/3071851/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int OddEvenJumps(int[] A) {
      int n =A.Length;
        int[] next_higher=new int[n];
        int[] next_lower = new int[n];
        //fill array with invalid value to identify cases where no legal jumps possible
        Array.Fill(next_higher,-1);
        Array.Fill(next_lower,-1);

        Stack<int> stack=new Stack<int>();
        //sort array items ascending and get their original index as a list
        //note that we need to order by value to handle duplicates
        //remaining logic follows the monotonous stack solution 
        var sortedIndex = A.Select((x, i) => new KeyValuePair<int, int>(x, i))
                      .OrderBy(x => x.Key)
                      .ThenBy(x=> x.Value)
                      .Select(x => x.Value).ToList();
        foreach(int i in sortedIndex)
        {
            while(stack.Count>0 && i>stack.Peek())
                next_higher[stack.Pop()]=i;
            stack.Push(i);
        }

        stack.Clear();
        //sort array items descending and get their original index as a list
        //here also we need to order by value to handle duplicates
        sortedIndex = A.Select((x, i) => new KeyValuePair<int, int>(x, i))
                      .OrderByDescending(x => x.Key)
                      .ThenBy(x=>x.Value)
                      .Select(x => x.Value).ToList();
        foreach(int i in sortedIndex)
        {
            while(stack.Count>0 && i>stack.Peek())
                next_lower[stack.Pop()]=i;
            stack.Push(i);
        }

        bool[] higher= new bool[n];
        bool[] lower = new bool[n];
        higher[n-1]=lower[n-1]=true;
        int sum=1;
        for(int i=n-2;i>=0;i--)
        {
            higher[i]=next_higher[i]==-1?false:lower[next_higher[i]];
            lower[i]=next_lower[i]==-1?false:higher[next_lower[i]];
            if(higher[i])
                sum++;
        }
        return sum;  
    }
}
```