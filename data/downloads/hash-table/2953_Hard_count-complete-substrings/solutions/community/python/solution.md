# Python Sliding window O(N*26)

**Author:** Tannerr12
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4605421/](https://leetcode.com/problems/count-complete-substrings/solutions/4605421/)

---

The idea is that the size of the window we are looking for will be a multiple of k and we only have 26 character possiblities so where k = 1 we would check size 1,2,3,4,5,6...26 since the largest window is 1 of each character. For k = 2 we would try 2,4,6,8,10... since the largest we can have is 2 of each character so 52. To solve the no 2 characters next to eachother differ by 2 I just use a prefix array where if they differ I increase the prefix which ends up grouping the values so its easy to just check if our right and left pointer are in the same group. Finally to see if all the values are equal to k I use an array to count and an integer that when set to 0 or k subtracts and when set otherwise increments so that if that integer is k we know they are all valid.

Without using a prefix array to store the counts.

```py
class Solution:
    def countCompleteSubstrings(self, word: str, key: int) -> int:

        def charDist(a,b):
            return abs(ord(a) - ord(b)) <= 2
        
        valid = [0] * len(word)
        
        for i in range(1,len(word)):
            if not charDist(word[i-1], word[i]):
                valid[i] = valid[i-1] + 1
            else:
                valid[i] = valid[i-1]
        
        mp = defaultdict(int)
        for char in 'abcdefghijklmnopqrstuvwxyz':
            mp[char] = ord(char) - ord('a')
        
        res = 0
        for i in range(1,27):
            
            val = key * i
            if key * i > len(word):
                break
            arr = [0] * 26
            bit = 0
            for j in range(len(word)):
                
                v = mp[word[j]]
                if arr[v] == key or arr[v] == 0:
                    bit += 1
                    
                arr[v] += 1
                
                if arr[v] == key:
                    bit -=1
                    
                if j >= val:
                    v2 = mp[word[j-val]]
                    
                    if arr[v2] == key:
                        bit += 1
                    arr[v2] -=1
                    
                    if arr[v2] == key or arr[v2] == 0:
                        bit -=1
                     
                
                if j >= val-1 and valid[j-val+1] == valid[j] and bit == 0:
                    res += 1
                        
        return res
```
	
	#With the prefix to store counts
	
```py
	class Solution:
    def countCompleteSubstrings(self, word: str, key: int) -> int:

        def charDist(a,b):
            return abs(ord(a) - ord(b)) <= 2
        
        valid = [0] * len(word)
        
        mp = defaultdict(int)
        for char in 'abcdefghijklmnopqrstuvwxyz':
            mp[char] = ord(char) - ord('a')
            
        for i in range(1,len(word)):
            if not charDist(word[i-1], word[i]):
                valid[i] = valid[i-1] + 1
            else:
                valid[i] = valid[i-1]
            
        prefixMp = defaultdict(list)
        arr = [0] * 26
        
        prefixMp[0] = arr.copy()
        
        for i in range(len(word)):
            arr[mp[word[i]]] += 1
            prefixMp[i+1] = arr.copy()
        

        res = 0
        for i in range(1,27):
            
            val = key * i
            
            if key * i > len(word):
                break
                
            arr = prefixMp[val]
            bit = 0
            for v in arr:
                if v > 0 and v != key:
                    bit += 1
                    
            if valid[val-val] == valid[val-1] and bit == 0:
                res +=1
                
            for j in range(val, len(word)):
                
                v = mp[word[j]]
                if arr[v] == key or arr[v] == 0:
                    bit += 1
                    
                arr[v] += 1
                
                if arr[v] == key:
                    bit -=1
                    
                if j >= val:
                    v2 = mp[word[j-val]]
                    
                    if arr[v2] == key:
                        bit += 1
                    arr[v2] -=1
                    
                    if arr[v2] == key or arr[v2] == 0:
                        bit -=1
                     
                
                if valid[j-val+1] == valid[j] and bit == 0:
                    res += 1
                        
        return res
```

	