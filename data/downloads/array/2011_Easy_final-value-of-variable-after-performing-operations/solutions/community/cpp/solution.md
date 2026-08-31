# beginner friendly c++ solution

**Author:** scarletknight
**Votes:** 28
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1471934/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1471934/)

---

```
class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) 
    {
        int X = 0;
        for(int i=0;i<operations.size();i++)
        {
            if(operations[i]=="X++")
            {
                X++;
            }
            else if(operations[i] == "++X")
            {
                ++X;
            }
            else if(operations[i] == "X--")
            {
                X--;
            }
            else if(operations[i] == "--X")
            {
                --X;
            }
        }
        return X;
    }
};