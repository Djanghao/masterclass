# C# Easy to understand solution | Beats Runtime 96% Memory 53%

**Author:** Timaku
**Votes:** 7
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/3731112/](https://leetcode.com/problems/contains-duplicate-ii/solutions/3731112/)

---

![image.png](./images/0.png)


# Approach
We store the index of each number in the dictionary.
If the number already exists in the dictionary, it means that it is the same number.
Therefore, we retrieve the index of the number from the dictionary and subtract it from the current index.
We then check if the absolute value of this difference is smaller than or equal to k.
If it is not, we update the value of the current number in the dictionary with its new index.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public bool ContainsNearbyDuplicate(int[] nums, int k) {
        Dictionary<int, int> dictionary = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++)
        {
            if (!dictionary.ContainsKey(nums[i]))
            {
                dictionary.Add(nums[i], i);
            }
            else
            {
                if (Math.Abs(dictionary[nums[i]] - i) <=k)
                {
                    return true;
                }

                dictionary[nums[i]] = i;
            }
        }

        return false;
    }
}
```