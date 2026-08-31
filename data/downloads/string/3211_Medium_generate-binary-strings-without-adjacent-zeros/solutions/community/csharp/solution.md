# c# easy solution with details

**Author:** venendroid
**Votes:** 1
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5437398/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5437398/)

---

# Intuition
Makesure char '1' present in every substring of length 2.

# Approach
Start the backtracking processing loop with "0" and "1", so that, we have two strings running the loop in parallel, 1 starts with "0" and other "1".

If previous binary bit character is '0' then makesure add char '1' as '1' has to present in every substring of length 2 in the processing final string str. For example: If str = "10" then "10" + 1 = "101"

If not, we can add '1' OR '0'. 
For example: If str = "01" then we can get  
"01" + "0" = "010"
OR 
"01" + "1" = "011"
both are valid as we are allowed to have mutiple '1''s.

# Complexity
- Time complexity:
The time complexity of the ValidStrings method in the BackTrackingBoss class is O(2^n), where n is the input parameter. 
This is because the method uses backtracking to generate all possible binary strings of length n. For each position in the string, there are two choices (0 or 1), resulting in a branching factor of 2. 
Since the method explores all possible combinations, the time complexity is exponential.

- Space complexity:
The space complexity of the method is O(2^n) as well. 
This is because the method uses a list res to store the valid strings, which can have a maximum of 2^n elements. 
Additionally, the method uses a list bList to store the binary digits "0" and "1", which has a constant size of 2. The recursive backtracking process also uses a string str to build the binary strings, which can have a maximum length of n. However, since the space used by the recursive calls is not cumulative, the dominant factor is the space used by the res list, resulting in a space complexity of O(2^n). 

# Code
```
public class Solution {
    public IList<string> ValidStrings(int n) 
    {
       var res = new List<string>();
        
       ProcessBackTrackingOnBList(res, n, "0", 0);
       ProcessBackTrackingOnBList(res, n, "1", 1);
       return res;    
    }

    private void ProcessBackTrackingOnBList(List<string> res, int n, string str, int bi)
    {
        if(str.Length == n)
        {          
            res.Add(str);                
            return;
        }

        if(bi == 0)
        {
            ProcessBackTrackingOnBList(res, n, str + 1, 1);
        }
        else
        { 
            ProcessBackTrackingOnBList(res, n, str + 0, 0);

            ProcessBackTrackingOnBList(res, n, str + 1, 1);
        }
    }
}
```