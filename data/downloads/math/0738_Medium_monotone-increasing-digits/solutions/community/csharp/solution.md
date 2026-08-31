# C#, O(n) greedy solution using Stack

**Author:** edevyatkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/631968/](https://leetcode.com/problems/monotone-increasing-digits/solutions/631968/)

---

```
public class Solution {
    public int MonotoneIncreasingDigits(int N) {
        Stack<int> stack = new Stack<int>();
        while (N > 0) {
            int digit = N % 10;
            N /= 10;
            if (stack.Count == 0 || stack.Peek() >= digit) {
                stack.Push(digit);
            }
            else {
                int count = stack.Count;
                stack.Clear();   
                if (count > 0) {
                    while (count > 0) {
                        stack.Push(9);
                        count--;                    
                    }
                    stack.Push(digit-1);
                }
            }
        }
        var arr = stack.ToArray();
        Array.Reverse(arr);
        int p = 1;
        int result = 0;
        foreach (int i in arr) {
            result += i*p;
            p *= 10;
        }
        return result;
    }
}
```