# Hashmap Counter

**Author:** H7GFRnbC72
**Votes:** 0
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/5938500/](https://leetcode.com/problems/rabbits-in-forest/solutions/5938500/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Each rabbit that was asked is already part of the solution.
The answers they give us indicate *possible* rabbits that were not asked.
If we find the same "color" then it means some rabbits were answered and therefore we don't need to count them in the counter.

# Approach
<!-- Describe your approach to solving the problem. -->
Use a hashmap (and not an array) to count via index efficiently. Existing answers (given array length) is already part of the solution.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - We simply loop over the given array while adding to a hashmap with average O(1) complexity. The second loop is bounded by n.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - We create a hasmap that contains no more than n keys and n values.

# Code
```csharp []
public class Solution {
    public int NumRabbits(int[] answers) {
        var counter = new Dictionary<int, int>();
        int rabbits = answers.Length; // Who already answered

        // Who possibly wasn't asked, but we decrement each time when we find one of the same color
        // If we reach 0 it means there's a new color we haven't counted yet
        foreach(var x in answers) {
            if (counter.ContainsKey(x) && counter[x] > 0) {
                counter[x]--;
            } else {
                counter[x] = x;
            }
        }

        foreach(var x in counter.Values) {
            rabbits += x;
        }

        return rabbits;
    }
}
```