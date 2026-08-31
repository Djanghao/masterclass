# Longest WPI: Efficient Prefix Sum + Hash Table Algo

**Author:** madhusudanrathi99
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/4836067/](https://leetcode.com/problems/longest-well-performing-interval/solutions/4836067/)

---

# Intuition
The intuition is to calculate the longest well-performing interval (WPI) in the hours array using a prefix sum and a dictionary.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialize Variables**: 
The code initializes a dictionary `map` to store the smallest index for each prefix sum and an integer `ans` to store the maximum length of WPI.
2. **Calculate Prefix Sum**: 
The code calculates the prefix sum of the `hours` array. If the hour is greater than 8, it is counted as 1, otherwise, it is counted as -1. The prefix sum is stored back in the `hours` array.
3. **Find Longest WPI**: 
The code then iterates over the `hours` array. If the prefix sum at index `i` is positive, it means we have a WPI ending at index `i`. So, we update `ans` with the maximum of `ans` and `i+1`. If the prefix sum is not positive and the `map` contains the prefix sum minus 1, it means there is a previous index where the prefix sum is smaller by 1. So, we have a WPI from that index to `i`. We update `ans` with the maximum of `ans` and the difference between `i` and the previous index. If the `map` does not contain the prefix sum, we add it to the `map` with the value as `i`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int LongestWPI(int[] hours) {
        int n = hours.Length;
        Dictionary<int, int> map = new Dictionary<int, int>();
        hours[0] = hours[0] > 8 ? 1 : -1;
        map[hours[0]] = 0;
        int ans = 0;
        for(int i = 1; i < n; i++)
            hours[i] = hours[i - 1] + (hours[i] > 8 ? 1 : -1);

        for(int i = 0; i < n; i++) {
            if(hours[i] > 0)
                ans = i + 1;
            else {
                if(map.ContainsKey(hours[i] - 1)) {
                    int left = map[hours[i] - 1];
                    ans = Math.Max(ans, i - left);
                }
                if(!map.ContainsKey(hours[i]))
                    map[hours[i]] = i;
            }
        }
        return ans;
    }
}
```