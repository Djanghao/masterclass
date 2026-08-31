# Easy way explanation every step

**Author:** paul_dream
**Votes:** 12
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/893045/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/893045/)

---

```
if s == s[::-1]:
            return 0
 ```
 # if given string already Palindrom so no need any partition
 ```
        for i in range(len(s)):
            if s[:i] == s[:i][::-1] and s[i:] == s[i:][::-1]:
                return 1
        

```
# this parts gives sequence of string is Palindrom if i cut one
# like abad----->.   aba | d
# if more than 1 then below logic required
```
# d=[[0 for i  in range(l)] for j in range(l)]  (this line only for understanding)
        x=[[0 for i  in range(l)] for j in range(l)]
        for i in range(l):
          for j in range(i,l):
            st=s[i:j+1]
            # d[i][j]=st  (this line same)
            x[i][j]= (st==st[::-1])    

```

```

"abcgcbafj"
stdout

['a', 'ab', 'abc', 'abcg', 'abcgc', 'abcgcb', 'abcgcba', 'abcgcbaf', 'abcgcbafj']
[0, 'b', 'bc', 'bcg', 'bcgc', 'bcgcb', 'bcgcba', 'bcgcbaf', 'bcgcbafj']
[0, 0, 'c', 'cg', 'cgc', 'cgcb', 'cgcba', 'cgcbaf', 'cgcbafj']
[0, 0, 0, 'g', 'gc', 'gcb', 'gcba', 'gcbaf', 'gcbafj']
[0, 0, 0, 0, 'c', 'cb', 'cba', 'cbaf', 'cbafj']
[0, 0, 0, 0, 0, 'b', 'ba', 'baf', 'bafj']
[0, 0, 0, 0, 0, 0, 'a', 'af', 'afj']
[0, 0, 0, 0, 0, 0, 0, 'f', 'fj']
[0, 0, 0, 0, 0, 0, 0, 0, 'j']





```
# from above table we gets Palindrom sequence


# and below tables gives sequence of string  Palindrom or not according to above table
```
[True, False, False, False, False, False, True, False, False]
[0, True, False, False, False, True, False, False, False]
[0, 0, True, False, True, False, False, False, False]
[0, 0, 0, True, False, False, False, False, False]
[0, 0, 0, 0, True, False, False, False, False]
[0, 0, 0, 0, 0, True, False, False, False]
[0, 0, 0, 0, 0, 0, True, False, False]
[0, 0, 0, 0, 0, 0, 0, True, False]
[0, 0, 0, 0, 0, 0, 0, 0, True]

Output

```

```
p=[0 for c in range(l)]
```
# here we store minimum number of partition required .at beginning 0 position 0 reason one characters always Palindrom do start from 1
```


        for i in range(1,l):
          if x[0][i]:
            p[i]=0
```
# if 0 to i already Palindrom no need partition else need to finding min partition


```
          else: 
            m=float("inf")
            for j in range(i,0,-1):
              if x[j][i]: 
                m=min(m,p[j-1])
				
            p[i]=m+1
        return p[-1]
```
# here partition from right to left
# like abbc----> find min partition required for this (abb) and for this required 1(c )
# at last store minimum+1

```  
# python code

class Solution(object):
    def minCut(self, s):
        """
        s="abcgcbafj"
        :type s: str
        :rtype: int
        """
      
        if s == s[::-1]:
            return 0
        
        for i in range(len(s)):
            if s[:i] == s[:i][::-1] and s[i:] == s[i:][::-1]:
                return 1
        
        l=len(s)
      
        #d=[[0 for i  in range(l)] for j in range(l)]
        x=[[0 for i  in range(l)] for j in range(l)]
        for i in range(l):
          for j in range(i,l):
            st=s[i:j+1]
            #d[i][j]=st
            x[i][j]= (st==st[::-1])
                      
            
        p=[0 for c in range(l)]
        for i in range(1,l):
          if x[0][i]:
            p[i]=0
          else:
            m=float("inf")
            for j in range(i,0,-1):
              if x[j][i]: 
                m=min(m,p[j-1])
            p[i]=m+1
        return p[-1]
  
       

```