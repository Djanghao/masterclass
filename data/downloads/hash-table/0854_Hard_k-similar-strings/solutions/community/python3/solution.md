# Python BFS Solution (fully explained & commented)

**Author:** ahil_io
**Votes:** 40
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/2385252/](https://leetcode.com/problems/k-similar-strings/solutions/2385252/)

---

# **Intuition**

First, let's understand how the BFS works with some examples.

	s1: "aaabcbea"
	s2: "aaaebcba"

A **swap** is when we switch two letters, s1[i] and s1[j]. Not all **swaps** are useful to us. In the above example, we don't want to swap s1[0] with any s1[j].

**Swaps** are only useful if they satisfy these conditions:
1. s1[i] != s2[i] *(the letter isn't already in the correct position)*
2. s1[i] = s2[j]   *(we are moving s1[i] to a location where it matches)*
3. s1[j]! = s2[j]   *(the SECOND letter isn't already in the correct position*)

**Our approach is to find the first non-matching letter in s1. Then, we try all possible "useful" swaps.**

So, in the above example, the first non-matching letter is s1[3], or "b". Performing a **swap** with s1[4] and s1[6] are both "useful", because the "b" is moved to the right position.

We do both of these swaps. This gives us two strings:

	original s1: "aaabcbea"
	s2: "aaaebcba"
	
	new string 1: "aaacbbea"
	new string 2: "aaaecbba"
	
We keep track that we made **1** change so far. Then, we repeat the same process on BOTH "new string 1" and "new string 2".

For new string 1, there is only one possible swap.

	new string 1: "aaacbbea"
	s2: "aaaebcba"
	
	new new string 1: "aaaebbca"
	
For new string 2, there is also only one possible swap.

	new string 2: "aaaecbba"
	s2: "aaaebcba"
	
	new new string 2: "aaaebcba"
	
At this point, new new string 2 matches s2, so we are done. We return the number of swaps made so far, which is 2.


# **Code**
```
class Solution:
    def kSimilarity(self, s1: str, s2: str) -> int:
        #the deque keeps track of the set of strings that we want to perform swaps on
        #at the start, the deque contains only s1
        deque = collections.deque([s1])
        
        #this set wasn't mentioned in the "intuition" part. it helps us avoid doing repeated work by adding the same strings to our deque
        seen = set() 
        
        answ=0 #counter for the number of "swaps" done so far
        
        
        while deque:
            for _ in range(len(deque)): #loops through each string in the deque
                
                string = deque.popleft() #gets the first string in the deque
                if string ==s2: return answ
                
                #finds the first non-matching letter in s1
                #this satisfies condition 1 of a "useful" swap
                #ex: this would be s1[3] in the above example
                i=0
                while string[i]==s2[i]:
                    i+=1
                
                #checks all the other letters for potential swaps
                for j in range(i+1, len(string)):
                    if string[i]==s2[j]!=s1[j]: #checks conditions 2 and 3 of a useful swap
                        
                        #swaps the letters at positions i and j
                        new = string[:i] + string[j] + string[i+1:j] + string[i] + string[j+1:]
                        
                        #adds the "new string" if it was not previously added
                        if new not in seen:
                            seen.add(new)
                            deque.append(new)
            
            #record that one more swap was done for each string in the deque
            answ+=1

```

**Still Confused?**
If you thoroughly read through this explanation and don't get it, I'd recommend checking out this explanation on 2x speed:
https://www.youtube.com/watch?v=GacKZ1-p3-0&t=1292s&ab_channel=HappyCoding