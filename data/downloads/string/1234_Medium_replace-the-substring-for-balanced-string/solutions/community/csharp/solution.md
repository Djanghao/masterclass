# Very fast C# solution O(N) 100%

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/5616917/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/5616917/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int BalancedString(string s) {
        int countQ = 0, countW = 0, countE = 0, countR = 0;
        int target = s.Length / 4;
        int countRes = 0;
        for(int i = 0; i < s.Length; i++)
        {
            if(s[i] == 'Q')
                countQ++;
            else if(s[i] == 'W')
                countW++;
            else if(s[i] == 'E')
                countE++;
            else if(s[i] == 'R')
                countR++;
        }
        if(countQ == target && countW == target && countE == target && countR == target)
        {
            return 0;
        }
        int minLength = s.Length;
        int left = 0;
        for (int right = 0; right < s.Length; right++) 
        {
            if (s[right] == 'Q') 
                countQ--;
            else if (s[right] == 'W') 
                countW--;
            else if (s[right] == 'E') 
                countE--;
            else if (s[right] == 'R') 
                countR--;

            while (left < s.Length && countQ <= target && countW <= target && countE <= target && countR <= target) 
            {
                minLength = Math.Min(minLength, right - left + 1);
                
                if (s[left] == 'Q') 
                    countQ++;
                else if (s[left] == 'W') 
                    countW++;
                else if (s[left] == 'E') 
                    countE++;
                else if (s[left] == 'R') 
                    countR++;
                left++;
            }
        }

        return minLength;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
