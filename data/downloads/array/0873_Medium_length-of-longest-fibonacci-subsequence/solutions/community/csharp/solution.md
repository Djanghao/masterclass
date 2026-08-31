# Easy and straightforward C# solution

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/5548310/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/5548310/)

---


# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int LenLongestFibSubseq(int[] arr) {
        int res = 0;
        for (int i = 0; i < arr.Length - 2; i++)
        {
            for (int j = i + 1; j < arr.Length - 1; j++)
            {
                if (arr.Length - j + 1 < res)
                {
                    break;
                } 
                int count = 2; 
                int first = arr[i], second = arr[j], third = first + second;
                while (arr.Contains(third))
                {
                    first = second; second = third;
                    count++;
                    third = first + second;
                }
                if (count > res)
                {
                    res = count;
                } 
            }
        }
        return res == 2 ? 0 : res;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
