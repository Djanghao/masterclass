# ✅ JAVA || ArrayList || Loop || Iterative 💯🔥

**Author:** AshLuvCode
**Votes:** 39
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3141678/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3141678/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:  O(n*m) where n is the length of array and m is the max bit of the elements
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int[] separateDigits(int[] nums) {
       List<Integer> ans = new ArrayList<>();
        for (int num : nums) {
            List<Integer> temp = new ArrayList<>();
            while (num > 0) {
                temp.add(num % 10);
                num /= 10;
            }
            for (int j = temp.size() - 1; j >= 0; j--) {
                ans.add(temp.get(j));
            }
        }
        int[] result = new int[ans.size()];
        for (int i = 0; i < ans.size(); i++) {
            result[i] = ans.get(i);
        }
        return result;
    }
}
```


![image](./images/0.jpeg)
