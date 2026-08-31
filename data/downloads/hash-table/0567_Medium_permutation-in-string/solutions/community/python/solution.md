# [Python] [3 easy approaches] sorting, hashing, and rolling hash

**Author:** Hieroglyphs
**Votes:** 121
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/498216/](https://leetcode.com/problems/permutation-in-string/solutions/498216/)

---

**1 - Sorting:**
*[Accepted]
[Runtime: 9408 ms, faster than 5.07%]*

- One string is a permutation of another if they are the same string when sorted. 
- Hence, sort s1 and then sort the substrings of s2 that are of the same size
- and compare
- **Time:** O(n)*O(k^2)*O(klogk) = O(n*k^3*logk)

```
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if s2 and not s1:
            return True
        '''
        --1--
        [Accepted]
        [Runtime: 9408 ms, faster than 5.07%]
        
        One string is a permutation of another if 
        they are the same string when sorted. 
        
        Hence, sort s1 and then sort the substrings of s2 that are of the same size
        and compare
        Time: O(n)*O(k^2)*O(klogk) = O(n*k^3*logk)
        '''
        
        # sort s1
         s1 = "".join(sorted(list(s1)))
         k = len(s1)
        
         # sort the substrings of s2 that are of the same size
         for i in range(len(s2)): # -- O(n)
             sub = s2[i:i+k] # -- O(k)
             sub_str = "".join(sorted(list(sub)))  # ---- [1] 
            
             if s1 == sub_str:
                 return True
         return False
    
        # COMMENT [1]:
        # ------------
        # Runtime of that line = O(klogk) * O(k) * O(K)
        # Sorting and converting from string to list and back into a string
 ```
 
**2- Hashtable:**
*[Accepted]
[Runtime: 3556 ms, faster than 5.07% ]*

- One string is a permutation of another if the two strings have the same character frequencies
- Hence:
	- find freq dict for s1
	- find freq dict for substrings of s2 (that are the same size as s1)

**runtime:** O(n*k)
 
 ```     
        '''
        --2--
        [Accepted]
        [Runtime: 3556 ms, faster than 5.07% ]
        
        One string is a permutation of another if the two strings
        have the same character frequencies
        
        Hence:
            - find freq dict for s1
            - find freq dict for substrings of s2 (that are the same size as s1)
            
        runtime: O(n*k^2)
        '''
        
         from collections import Counter
         d1 = Counter(s1)
         k = len(s1)
         for i in range(len(s2)):  # ---- O(n)
             sub = s2[i:i+k]  # ------ O(k)
             d2 = Counter(sub) # --- O(k)
             if d1 == d2:
                 return True
         return False
```


**3- Rolling Hash**
*[Accepted]
[Runtime: 72 ms, faster than 57.45%]*

- Enhanced freq dict - (Rolling hashmap)
- simiar problem: **438. Find All Anagrams in a String**

- instead of generating a fresh freq hashmap for every new substring
- build the freq dict for the initial window and then slide the window_dict
  (add/remove chars) by adjusting their frequinces. 
- removing one preceding character and adding a new succeeding character to the new window

```
        '''
        --3--
        [Accepted]
        [Runtime: 72 ms, faster than 57.45%]
        
        Enhanced freq dict - (Rolling hashmap)
        simiar problem: 438. Find All Anagrams in a String
        
            - instead of generating a fresh freq hashmap for every new substring
            - build the freq dict for the initial window and then slide the window_dict
              (add/remove chars) by adjusting their frequinces. 
              
              removing one preceding character and adding a new succeeding character to the new window
        '''
        
        k = len(s1)
        from collections import Counter
        d1 = Counter(s1)
        
        # initial window
        window = s2[:k]
        d2 = Counter(window)
        
        # check the intial window 
        if d1 == d2:
            return True
  
        for i in range(len(s2)-k):
        
            # SLIDE THE WINDOW
            # 1 - remove s2[i]
            if d2[s2[i]] == 1:
                del d2[s2[i]]
            elif d2[s2[i]] > 1:
                d2[s2[i]] -= 1
            
            # 2- add s2[i+k]
            if s2[i+k] in d2:
                d2[s2[i+k]] += 1
            else:
                d2[s2[i+k]] = 1
                
            # check after sliding
            if d1 == d2:
                return True
                
        return False
    
    # now go review ---> 438. Find All Anagrams in a String
```