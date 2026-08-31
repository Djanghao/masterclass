# 2 Different Approaches - Simple and Easy

**Author:** EdwinJagger
**Votes:** 7
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/1972902/](https://leetcode.com/problems/encode-and-decode-strings/solutions/1972902/)

---

**Approach 1:**
```py
class Codec:
    def encode(self, strs: List[str]) -> str:
        result = []
        
        for string in strs:
            for c in string:
                result.append(str(ord(c)))
                result.append(';')
            result.append(' ')
                
        return ''.join(result)
        

    def decode(self, s: str) -> List[str]:
        result = []
        strings = s.split(' ')
		
        for string in strings:
            temp = []
            for c in string.split(';'):
                if c:
                    temp.append(chr(int(c)))
            result.append(''.join(temp))
			
        result.pop()
        return result
```

**Approach 2:**
```py
class Codec:
    def encode(self, strs: List[str]) -> str:
        encoded_string = []
        
        for string in strs:
            encoded_string.append(str(len(string)) + '#' + string)
            
        return ''.join(encoded_string)
        
    def decode(self, s: str) -> List[str]:
        decoded_strings = []
        i = 0
        
        while i < len(s):
            j = i
            
            while s[j] != '#':
                j += 1
            
            n = int(s[i : j])
            j += 1
            
            decoded_strings.append(s[j : j + n])
            i = j + n
            
        return decoded_strings
```