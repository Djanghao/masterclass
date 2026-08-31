# C++ beginner friendly solution - Explained

**Author:** rachav
**Votes:** 14
**Link:** [https://leetcode.com/problems/global-and-local-inversions/solutions/1144413/](https://leetcode.com/problems/global-and-local-inversions/solutions/1144413/)

---

This problem needed more thinking than the other one. I think solving this problem is not difficult, but within the time limit is the challenge. I got TLE so many times!
Finally, I figured :
Here, local inversion is subset of global inversion. We just need to find one element that is part of global inversion, but not part of local inversion. That is easy to do. For element located at ith position, start scanning from i+2th element and find one that is smaller than ith element. That will increase global inversion count. This approach will result in TLE.

Another very fast approach is:
For any value located at ith index, must be either i, i-1 or i+1 in order to succeed.
If the value is located anywhere else, that means there must be another number that is greater than this number.

For example, 
[0,2,3,1] - 0 is located at 0, 2 is located at 1 (==1+1), 3 is located at 2(==2+1), and 1 is located at 3(==3-2)
Last element does not satisfy the condition, so it's false;

[0,2,1,3] return true;

```
bool isIdealPermutation(vector<int>& A) {
        int i;
        for(i=0; i<A.size(); i++)
        {
            if(A[i]==i)     
                continue;
            else if(A[i] == i-1)
                    continue;
            else if(A[i] == i+1)
                    continue;
                else
                    return false;
        }
       return true;       
    }
```
Please UPVOTE if my approach helped you.