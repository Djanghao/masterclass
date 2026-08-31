# C# best possible solution

**Author:** saicheran
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/5194444/](https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/5194444/)

---



# Code
```
public class Solution {
        private const int Mod = 1000000007;

    public int TotalStrength(int[] arr) {
           int result = 0, cumulativeSum = 0;
        int length = arr.Length;
        Stack<int> stack = new Stack<int>();
        int[] prefixSum = new int[length + 2];

        for (int right = 0; right <= length; ++right)
        {
            int currentValue = right < length ? arr[right] : 0;
            cumulativeSum = (cumulativeSum + currentValue) % Mod;
            prefixSum[right + 1] = (cumulativeSum + prefixSum[right]) % Mod;

            while (stack.Count > 0 && arr[stack.Peek()] > currentValue)
            {
                int index = stack.Pop();
                int left = stack.Count == 0 ? -1 : stack.Peek();
                long leftAccumulated = left < 0 ? prefixSum[index] : prefixSum[index] - prefixSum[left];
                long rightAccumulated = prefixSum[right] - prefixSum[index];
                int leftCount = index - left;
                int rightCount = right - index;

                result = (int)((result + ((rightAccumulated * leftCount - leftAccumulated * rightCount) % Mod) * arr[index] % Mod) % Mod);
            }
            stack.Push(right);
        }

        return (result + Mod) % Mod;
    }
}
```