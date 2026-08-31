# Mark if it matches

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/5934157/](https://leetcode.com/problems/stamping-the-sequence/solutions/5934157/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int[] MovesToStamp(string stamp, string target) {
        int lenS = stamp.Length, lenT = target.Length;
        char[] targetArr = target.ToCharArray();
        bool shouldLoop = true, solved = true;
        List<int> idxes = new();

        while(shouldLoop)
        {
            shouldLoop = false;
            for(int i = 0; i <= lenT-lenS; i++)
            {
                bool allSame = true;
                int marked = 0;
                for(int j = 0; j < lenS; j++)
                {
                    if(targetArr[i+j] == '?') // count already marked
                        marked++;
                    else if(stamp[j] != target[i+j]) // if any un-matched
                    {
                        allSame = false;
                        break;
                    }
                }

                if(allSame && marked < lenS) // valid for replace: either already marked or same chars
                {
                    idxes.Add(i);
                    for(int j = 0; j < lenS;j++)
                    {
                        targetArr[i+j] = '?'; 
                    }

                    shouldLoop = true;
                    break;
                }

            }

            solved = true;
            foreach(char c in targetArr)
            {
                if(c != '?') // still contains some unmarked char?
                {
                    solved = false;
                    break;
                }
            }

            if(solved)
                break;
        }

        if(!solved)
            return new int[0];

        idxes.Reverse(); // stampe should in the reverse order
        return idxes.ToArray();
    }
}
```