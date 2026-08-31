# C# Priority Queue

**Author:** zloytvoy
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/3972152/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/3972152/)

---

# Intuition
Simply greedy picking a class that gives the best profit and update the numbers. 
The profit of a class (p, q) is the difference p/q - (p+1)/(q+1).  

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
    public double MaxAverageRatio(int[][] classes, int extraStudents) 
    {
        var n = classes.Length;
        var pq = new PriorityQueue<(double, double), double>();
        foreach(var candidate in classes)
        {
            pq.Enqueue( (candidate[0], candidate[1]) , GetProfit(candidate[0], candidate[1]));
        }    

        //  p + 1
        while(extraStudents-- > 0)
        {
            var (first, second) = pq.Dequeue();
            ++first;
            ++second;
            pq.Enqueue( (first, second), GetProfit( first, second) );
        }

        var result = 0D;
        while(pq.Count > 0)
        {
            var (first, second) = pq.Dequeue();

            result += first/second;

            Console.WriteLine($"{first} {second} {first/second}" );
        }
        
        return result/n;
    }

    public double GetProfit(double x, double y)
    {
        return x/y - (x+1)/(y+1);
    }
}
```