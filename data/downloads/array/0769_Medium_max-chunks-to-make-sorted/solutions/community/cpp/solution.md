# detailed explaination c++ without extra space

**Author:** kevaljoshi2312
**Votes:** 62
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/1083242/](https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/1083242/)

---

we can make a new chunk at i if all elements 0 to i-1 are left to i and i+1....n-1 are right to i.

1 0 | 3 4 2
1 2 0 | 3 | 5 4 | 6

so , if sum(0,1,2......i) ==sum(v[0],v[1].......v[i])

it means that all elemetns who are smaller than i are left to it and bigger are right to it .

```
 int maxChunksToSorted(vector<int>& v) 
    {
        //sum1 is sum of 0.........i
        //co is sum of v[0],v[1].......v[i]
        int i,co=0,sum1=0,ans=0;
        for(i=0;i<v.size();i++)
        {
            sum1+=i;
            co+=v[i];
            if(sum1==co)
                ans++;
        }
        return ans;
    }