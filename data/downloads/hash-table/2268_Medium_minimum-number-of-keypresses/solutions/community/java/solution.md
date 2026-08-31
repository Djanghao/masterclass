# Easy to undertsand | Intuitive |Optimized Java Code

**Author:** Sban01
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2803956/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2803956/)

---

**Time complexity :O(s)**
**Space:O(26) or O(1)**

```
class Solution {
    public int minimumKeypresses(String s) {
        
        
        Integer count[]=new Integer[26];
        Arrays.fill(count,0);
        int ans=0;
        for(int i=0;i<s.length();i++)
            count[s.charAt(i)-'a']++; //freq of character in the given string
        
        Arrays.sort(count,(a,b)->b-a); //sorting freq in descending order
        
        for(int i=0;i<26;i++)
        {
            if(i<9) //character with max frequencies ar accomodated first character of each number
                ans+=count[i];
            else if(i<18) //charatcer with intermediate freq are accomodates second position (that is 2 presses are required)
                ans+=2*count[i];
            else
                ans+=3*count[i]; //similarly least frequent characters will need 3 presses
            
        }
        return ans;
    }
}
```