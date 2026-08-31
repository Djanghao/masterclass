# Solution Approach | C++

**Author:** Umang537
**Votes:** 17
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/1145139/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/1145139/)

---

**Description:**
We use three bit-representations to represent three characters : 0, 10, 11 (the corresponding characters don't matter)
So bits representation 1, 01 are not valid.
Given an array of bits ending with 0, find out if it's only valid to translate the last 0 into the 0 bit representation (means it's not valid when the last 0 is translated into the 10 bits representation)

**Solution Approach:**
* Traverse the array from 0 to n-2 (leaving the last character).
* Now if current char is 0, increment i by 1.
* Else increment by 2 as 1 is always followed by either 1 or 0.

After the loop ends check if i is pointing to last char (i.e. n-1) or before that return true, else false.

```
class Solution {
public:
    bool isOneBitCharacter(vector<int>& bits) 
    {
        int n = bits.size();
        if(n == 1)
            return true;
       
        int i = 0;
        while(i <= n - 2)
        {
            if(bits[i] == 0)
                i++;
            else 
                i = i + 2;
        }
        if(i <= n-1)
            return true;
        else 
            return false;
        
    }
};
```

***If you like it please upvote to help others.
Happy Coding! :)***