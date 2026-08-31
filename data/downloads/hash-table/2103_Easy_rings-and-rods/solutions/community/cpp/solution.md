# C++||Easy||Bitwise

**Author:** brad_pitt
**Votes:** 8
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/1684100/](https://leetcode.com/problems/rings-and-rods/solutions/1684100/)

---

The whole idea is to assign 'R'=1 and 'G'=2 and 'B'=4 and using bitwise OR to add them to get maximum value of 7
```
R=001
G=010
B=100
```
whose sum up is `111=>7` and on using biwise or value `never exceed 7 so in last we check weather 7 present or not to count the value.`

```
class Solution {
public:
    int countPoints(string rings) {
        
        int n=rings.length();
		//It is given that number of rod is 10 0 to 9 so we have to place ring any of these
        vector<int>vp(10,0);//store the no of rings
        for(int i=0;i<n;i+=2)
        {
            char col=rings[i];
            vp[rings[i+1]-'0']|=(col=='R'? 1: col =='G' ? 2 : 4);//checking for rings
            
        }
        int count=0;
        for(int i=0;i<10;i++)
        {
            if(vp[i]==7)
            {
                count++;
            }
        }
        return count;
        
    }
};
```