# ✅Best Method 🔥 || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** Ayu7054
**Votes:** 7
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5301076/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5301076/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There are a ton of edge cases unless we get exactly the right thought process on this one. It's a very challenging problem.

We know to lexicographically maximize something, we maximize the next digit at all costs.

So if the next characters are at index i in word1 and j in word2, compare them.

# Approach
<!-- Describe your approach to solving the problem. -->
terate through both strings and pick whichever character is lexographically larger. If the characters are the same, then take from the lexographically larger string.

# Complexity
- Time complexity: O((M+N)*min(M,N))

M and N are the length of the two strings
for each i, j, in the worst case, we have to iterate deep into the strings through a ton of repeated characters to find which suffix is lexicographically larger
for fixed i, j, in the worst case, we'll run out of characters in one of the strings. This happens in at most O(min(M, N)) iterations when we run out of characters in the shorter string
after each of these iterations, we make one "unit" of progress, incrementing i or j
so the max iterations is the max times we can increment i and j before gettng i == M or j == N: that's O(M+N) iterations
and so finally we get O((M+N)*min(M,N))
Space complexity:y
- Space complexity: O(M+N)

the obvious reason: merge has O(M+N) characters
less obvious: I use if word1[i+1:] >= word2[j+1:]
this creates two temporary strings, O(M+N) memor
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```python []
class Solution:
    def largestMerge(self, word1: str, word2: str) -> str:
        i,j=0,0
        res=""
        while i<len(word1) and j<len(word2):
            if word1[i]>word2[j]:
                res+=word1[i]
                i+=1
            elif word1[i]<word2[j]:
                res+=word2[j]
                j+=1 
            else:
                if word1[i:]>word2[j:]:
                    res+=word1[i]
                    i+=1
                else:
                    res+=word2[j]
                    j+=1            
        return res+word1[i:]+word2[j:]         
        
```
```java []
class Solution {
    public String largestMerge(String word1, String word2) {
        StringBuilder sb = new StringBuilder();
        int i=0;
        int j=0;
        char[] w1 = word1.toCharArray();
        char[] w2 = word2.toCharArray();
        
        int n1=w1.length;
        int n2=w2.length;
        
        while(i<n1 && j<n2){
            
            if(w1[i]==w2[j]){
                if(check(w1,i,w2,j)){
                    sb.append(w1[i++]);
                }else{
                    sb.append(w2[j++]);
                }
            }
            
            else if(w1[i]>w2[j]){
                sb.append(w1[i++]);
            }else{
                sb.append(w2[j++]);
            }
        }
        
        sb.append(word1.substring(i));
        sb.append(word2.substring(j));
		
        return sb.toString();
    }
    
    private boolean check(char[] w1, int i, char[] w2, int j){
        
        while(i<w1.length && j<w2.length){
            if(w1[i]==w2[j]){
                i++;
                j++;
            }
            else if(w1[i]>w2[j]){
                return true;
            }else{
                return false;
            }
        }
        
        if(i<w1.length){
            return true;
        }
        return false;
    }
}
```

