# C++ Easy To Understand Solution,0 ms 100% faster 100% memory, O(1) time complexity

**Author:** sethlakshya98
**Votes:** 13
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/611893/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/611893/)

---

I will make A as smallest possible integer, and B as largest possible integer by swapping a digit in number.
Then simply return  b-a. Try running some test cases , you will understand my code is managing all different cases.
Its O(1) as size of string originalNum is at most 9. Code is easy to understand. 
```

class Solution {
public:
    int maxDiff(int num) {
        string orginalNum=to_string(num);
        int n=orginalNum.size();
        string A=orginalNum,B=orginalNum;
        int x=0,y=0;  //x ->search for first digit from start in original number that is not equal to 1 or 0
                      //y ->search for first digit from start in original number that is not equal to 9
        while(x<n&&orginalNum[x]=='1'||orginalNum[x]=='0')x++;
        while(y<n&&orginalNum[y]=='9')y++;
        for(int i=0;i<n;i++){
            if(A[i]==orginalNum[x]){
                if(x==0)A[i]='1';
                else A[i]='0';
            }
            if(B[i]==orginalNum[y]){
                B[i]='9';
            }
        }
        int a=stoi(A),b=stoi(B);
        return b-a;
    }
};


```