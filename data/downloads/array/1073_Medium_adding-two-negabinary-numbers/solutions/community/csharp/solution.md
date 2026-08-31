# Not a clear solution C#

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/5421264/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/5421264/)

---


# Complexity
- Time complexity: O(max(n, m))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(max(n, m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int[] AddNegabinary(int[] arr1, int[] arr2) {
        List<int> result = new List<int>();
        int carry = 0;
        int i = arr1.Length - 1, j = arr2.Length - 1;

        while (i >= 0 || j >= 0 || carry != 0) 
        {
            int x = (i >= 0) ? arr1[i] : 0;
            int y = (j >= 0) ? arr2[j] : 0;

            int sum = x + y + carry;
            result.Add(sum & 1); 
            carry = -(sum >> 1); 

            i--;
            j--;
        }

        while (result.Count > 1 && result[result.Count - 1] == 0) 
        {
            result.RemoveAt(result.Count - 1);
        }

        result.Reverse();
        return result.ToArray();
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
