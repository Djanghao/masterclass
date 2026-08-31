# C# StringBuilder

**Author:** gregsklyanny
**Votes:** 2
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/2686331/](https://leetcode.com/problems/break-a-palindrome/solutions/2686331/)

---

**Please upvote if my solution was helpful ;)**
```
public class Solution {
    public string BreakPalindrome(string palindrome) 
	{
        
        int pLength = palindrome.Length; 
        if(pLength == 1) return "";
        var sb = new StringBuilder(palindrome);
        for(int i=0; i < pLength/2; i++)
		{
            if(palindrome[i]!='a')
			{             
                sb[i] = 'a';
                return sb.ToString();
            }
        }               
		sb[pLength-1] = 'b';
		return sb.ToString();        
    }
}
```