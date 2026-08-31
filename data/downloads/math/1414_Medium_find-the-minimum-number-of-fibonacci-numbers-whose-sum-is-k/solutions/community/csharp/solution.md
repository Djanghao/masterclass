# Solution with Fibbonacci number generation in C#

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5895008/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5895008/)

---


# Complexity
- Time complexity: O(log K)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(K)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int FindMinFibonacciNumbers(int k) {
        List<int> fib = new List<int>();
        int f = 1;
        int s = 1;
        int count = 0;
        fib.Add(f);
        fib.Add(s);
        while(true)
        {
            int temp = f + s;
            if(temp > k)
            {
                break;
            }
            fib.Add(temp);
            f = s;
            s = temp;
        }
        int i = fib.Count - 1;
        while(k > 0)
        {
            if(fib[i] <= k)
            {
                k -= fib[i];
                count++;
            }
            i--;
        }
        return count;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
