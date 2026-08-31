# c#, BFS

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/3794454/](https://leetcode.com/problems/stepping-numbers/solutions/3794454/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The list to choose from is quite short, we can precompute it once (with a help of BFS) and then query it with a help of Linq.

# Approach
<!-- Describe your approach to solving the problem. -->
- BFS to build known numbers
- Linq to query known numbers

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log(high))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(log(high))$$

# Code
```
public class Solution {
    private static readonly List<int> s_Known = Build();

    private static List<int> Build() {
        HashSet<long> result = new HashSet<long>() { 0 };

        Queue<long> agenda = new Queue<long>();

        for (int i = 1; i <= 9; ++i)
            agenda.Enqueue(i);

        while (agenda.Count > 0) {
            var item = agenda.Dequeue();

            if (item > 2_000_000_000) 
                continue;

            result.Add(item);

            long digit = item % 10;
            
            if (digit > 0)
                agenda.Enqueue(item * 10 + digit - 1);

            if (digit < 9)
                agenda.Enqueue(item * 10 + digit + 1); 
        }

        return result
            .OrderBy(item => item)
            .Select(item => (int) item)
            .ToList();
    }
    
    public IList<int> CountSteppingNumbers(int low, int high) => s_Known
            .SkipWhile(item => item < low)
            .TakeWhile(item => item <= high)
            .ToList();    
}
```