# Beautiful Array: Efficient Divide and Conquer Algo

**Author:** madhusudanrathi99
**Votes:** 3
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/4673410/](https://leetcode.com/problems/beautiful-array/solutions/4673410/)

---

# Intuition
The intuition is to use the properties of beautiful arrays to construct the array incrementally.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialize Variables**: 
Create a list `ans` to store the beautiful array. Start with `1` as it is always part of a beautiful array.
2. **Iterate Until Size is Reached**: 
While the size of `ans` is less than `n`, create a new list `temp` and fill it with elements from `ans` multiplied by `2 - 1` (for odd numbers) and `2` (for even numbers), if they are within the range `1` to `n`.
3. **Update `ans`**: 
After filling `temp`, update `ans` with `temp`.
4. **Return Result**: 
After the size of `ans` reaches `n`, return `ans` as an array.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N \\log N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int[] BeautifulArray(int n) {
        List<int> ans = new List<int>();
        ans.Add(1);
        while(ans.Count < n) {
            List<int> temp = new List<int>();
            foreach(int ele in ans) {
                if(ele * 2 - 1 <= n)
                    temp.Add(ele * 2 - 1);
            }
            foreach(int ele in ans) {
                if(ele * 2 <= n)
                    temp.Add(ele * 2);
            }
            ans = temp;
        }
        return ans.ToArray();
    }
}
```