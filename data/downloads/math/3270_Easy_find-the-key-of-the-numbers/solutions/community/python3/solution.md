# Python3 (and C++) || 3 lines, rjust  || 98%, 51%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5715917/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5715917/)

---


```python3 []
class Solution:
    def generateKey(self, num1: int, num2: int, num3: int) -> int:
        
        mp = lambda x: str(x).rjust(4,"0")
        num1, num2, num3 = list(map(mp,(num1, num2, num3)))

        s = ''.join(min(num1[i], num2[i], num3[i]) for i in range(4))
            
        return int(s) 
```
```C++ []
class Solution {
public:
    int generateKey(int num1, int num2, int num3) 
    
    {auto pad = [](int num) { 
            std::string s = std::to_string(num); 
            return std::string(4 - s.size(), '0') + s; };
        
        std::string n1 = pad(num1), n2 = pad(num2), n3 = pad(num3), result;
        for (int i = 0; i < 4; ++i) 
            result += std::min({n1[i], n2[i], n3[i]});
        
        return std::stoi(result); } };
```