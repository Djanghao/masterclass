# Using List C#

**Author:** ramidahadov
**Votes:** 1
**Link:** [https://leetcode.com/problems/baseball-game/solutions/5599345/](https://leetcode.com/problems/baseball-game/solutions/5599345/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int CalPoints(string[] operations) {
        var total = new List<int>();
        var list = operations.ToList();
        total.Add(int.Parse(list[0]));
        for(int i = 1; i < list.Count; i++){
            if(list[i] == "C"){
                total.RemoveAt(total.Count - 1);
                continue;
            }
            else if(list[i] == "D"){
                total.Add(total[^1] * 2);
                continue;
            }
            else if(list[i] == "+"){
                total.Add(total[total.Count - 1] + total[total.Count - 2]);
                continue;
            }
            else{
                total.Add(int.Parse(list[i]));
            }
        }

        return total.Sum();
    }
}
```