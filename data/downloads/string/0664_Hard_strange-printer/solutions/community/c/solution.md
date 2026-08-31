# A recursive C++ top down DP solution O(n^3) | Fast

**Author:** vjvishjn
**Votes:** 14
**Link:** [https://leetcode.com/problems/strange-printer/solutions/788261/](https://leetcode.com/problems/strange-printer/solutions/788261/)

---

Let's try to think about this problem with an example. Say our input string is [si, si+1, si+2, si+3, .........., sj]

Think of the last character **sj**. This character either would have been printed fresh in a new turn of printer starting at index **j**, 
OR it might have been printed as a part of some previous turn of printer starting at index **< j** and **>= i**.

If we consider the first option then one of the possible solutions would be - 
**PossibleSolution[i][j] = Solution[i][j-1] + 1**

A clear optimization here would be that if **sj-1 == s**j or **si == sj**, then **Solution[i][j] = Solution[i][j-1]**. 

Another optimization here would be that if **si+1 == si**, then **Solution[i][j] = Solution[i+1][j]**.

For the second option, suppose there are some characters which are equal to **sj** with index **k < j**. Therefore, our character **sj** could have been printed as a part of printing any of these characters. So for all such index k

**PossibleSolution[i][j] = Solution[i][k-1]** (solution to print the string starting at index i and ending at k-1) **+ Solution[k, j-1]** (solution to print the string starting at index k and ending at j-1)

Note - We don't consider index **j** on the right side since we are already assuming that it is getting printed as part of printing the character **sk**. Therefore it is already covered in **Solution[k][j-1]**

Our final **Solution[i][j]** would be the minimum of all **PossibleSolution[i][j]** above.


```
class Solution {
    
private:
    string s;
    int answer[100][100];
    
	/* Find minimum number of turns the printer will need in order to print the string from index i to index j */
    int find(int i, int j)
    {
		/* I don't need to explain this */
        if(answer[i][j] != -1)
            return answer[i][j];
        
        if(s[j-1] == s[j] || s[i] == s[j])
        {
            /* A clear optimization here would be that if sj-1 == sj or si == sj, then Solution[i][j] = Solution[i][j-1] */
            answer[i][j] = find(i, j-1);
        }
        else if(s[i] == s[i+1])
        {
            /* Another optimization here would be that if si+1 == si, then Solution[i][j] = Solution[i+1][j] */
            answer[i][j] = find(i+1, j);
        }
        else
        {
			/* PossibleSolution[i][j] = Solution[i][j-1] + 1 */
            answer[i][j] = find(i, j-1) + 1;
            
            for(int k = i+1; k < j; ++k)
            {
                if(s[k] == s[j])
                {
					/* PossibleSolution[i][j] = Solution[i][k-1] (solution to print the string starting at index i and ending at k-1) + Solution[k, j-1] (solution to print the string starting at index k and ending at j-1) */
                    answer[i][j] = min(answer[i][j], find(i, k-1) + find(k, j-1));
                }
            }
        }
        
        return answer[i][j];
    }
    
public:
    int strangePrinter(string s) 
    {
        if(s.length() == 0)
            return 0;
        
        this->s = std::move(s);
        
        for(int i = 0 ; i < this->s.length(); ++i)
        {
            for(int j = 0 ; j < this->s.length(); ++j)
            {
                if(i==j)
                    answer[i][j] = 1;
                else
                    answer[i][j] = -1;
            }
        }
        
        return find(0, this->s.length()-1);
    }
};
```

*Runtime: 20 ms, faster than 100.00% of C++ online submissions for Strange Printer*