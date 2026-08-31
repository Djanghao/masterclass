# C# - Map | Beats 100% | Clean Example

**Author:** ansche
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/3900236/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/3900236/)

---

# Intuition
At each step in our problem, we only consider substrings that would end at index ```i```.

Lets work through a single example: 
```ABACDCAEFG``` 

First we simplify the problem and only look at Letter ```A```. 
```A.A...A...```

Lets consider ourselves at the final step, only considering substrings ending at the last index. How many substrings are there that end at the last index, and have only 1 occurence of the letter ```A```.

We get the folowing formula:
```ans = most_recent_index(A) - 2nd_most_recent_index(A)```

# Approach
We loop through our string and apply the above formula on all characters. We can simplify further by keep a single value to represent the sum of all ```most_recent_index(c) - 2nd_most_recent_index(c)```

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(26)$$ -> $$O(1)$$

# Code
```
public class Solution {
    public int UniqueLetterString(string s) {

        // char => [2nd most rec, most recent]
        int[,] map = new int[26,2];
        int result = 0, sum = 0;

        for (int i = 0; i < s.Length; ++i) {
            
            int ci = s[i] - 'A';
            sum -= map[ci, 1] - map[ci, 0];
            map[ci, 0] = map[ci, 1];
            map[ci, 1] = i + 1;
            sum += map[ci, 1] - map[ci, 0];

            result += sum;
        }
        
        return result;
    }
}
```