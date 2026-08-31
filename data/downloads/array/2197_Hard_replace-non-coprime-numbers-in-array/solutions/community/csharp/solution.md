# Easy C# Solution || Stack || Beats 90% Run Time

**Author:** dimplemithiya
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/5458439/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/5458439/)

---


# Code
```
public class Solution {
    public IList<int> ReplaceNonCoprimes(int[] nums) {
        Stack<int> stack = new Stack<int>();
        
       for(int i = 0; i < nums.Length; i++) {
            int num = nums[i];
            while (stack.Count > 0 && GCD(stack.Peek(), num) > 1) {
                int prev = stack.Pop();
                num = LCM(prev, num);
            }
            stack.Push(num);
        }
        
        List<int> result = new List<int>(stack);
        result.Reverse();
        return result;
    }

    public int GCD(int a, int b){
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public int LCM(int a, int b){
        return (a / GCD(a, b)) * b;
    }
}
```