# C++ | 0 ms | faster than 100% | With Intuition | Using two stacks | Easy to understand

**Author:** SainathTallam
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/1609304/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/1609304/)

---

## Intuition:
We need A and  B subsequences and they need to be valid paranthesis strings.

Lets traverse the array and assign each character of given string to A or B.
 if current character is '('
* we can assign it to A or B, but we have to decrease the max(depth(A),depth(B))
* if we have more '(' already in A than B that didn't get corresponding ')' yet. Then we should add it to B. because B is having less '(' waiting for ')'.
* else if B has more '(' than 'A' or both have equal '(' , we assign the cuurent '(' to A


If current character is ')'
* If A has more '(' waiting for corresponding ')' than B. We assign the current ')' to A
* else we assign to B


```

class Solution {
public:
    vector<int> maxDepthAfterSplit(string seq)
    {
        int n = seq.size() ;
        vector<int> ans(n) ;
        
        stack<int> st1 , st2 ; 
		// st1 holds indices all '(' in A waiting for corresponding ')'
		// st2 holds indices all '(' in A waiting for corresponding ')'
        
        for(int i=0;i<n;i++)
        {
            if(seq[i]=='(')
            {
			    // assign current '(' to the one with less number of '(' waiting
				// so we push into respective stacks and mark ans[i] accordingly
                if(st1.size()>st2.size())
                {
                    st2.push(i) ; ans[i] = 1 ;
                }
                else
                {
                    st1.push(i) ; ans[i] = 0 ;
                }
            }
            else
            {
			   
			    // assign current ')' to the one with more number of '(' waiting
				//and pop one '(' from the group(A or B) to which the current ')' has been assigned to
				//mark ans[i] accordingly
                if(st1.size()<st2.size())
                {
                    st2.pop() ; ans[i] = 1 ;
                }
                else
                {
                    st1.pop() ; ans[i] = 0 ;
                }
            }
        }
        
        return ans ;
        
    }
};

```

**Time** : O(n)
**Space** O(n)

## Approach - 2 : (Optimised version of 1)
If you can observe, we need not store the indices of '('. We just need the count of '(' waiting in each stack.

So instead of using 2 stacks. We can just keep track of count
```
class Solution {
public:
    vector<int> maxDepthAfterSplit(string seq)
    {
        int n = seq.size() ;
        vector<int> ans(n) ;
        
        int c1 = 0 , c2 = 0 ;
        
        for(int i=0;i<n;i++)
        {
            if(seq[i]=='(')
            {
                if(c1>c2)
                {
                    c2++ ; ans[i] = 1 ;
                }
                else
                {
                    c1++ ; ans[i] = 0 ;
                }
            }
            else
            {
                if(c1<c2)
                {
                    c2-- ; ans[i] = 1 ;
                }
                else
                {
                    c1-- ; ans[i] = 0 ;
                }
            }
        }
        
        return ans ;
        
    }
};
```

**Time** : O(n)
**Space**: O(1) not considering the vector to be returned