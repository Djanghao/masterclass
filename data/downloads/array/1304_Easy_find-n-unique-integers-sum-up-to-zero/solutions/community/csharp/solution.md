# C++ and C# very easy solution.100% faster.

**Author:** aloneguy
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/3424472/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/3424472/)

---

![photo_2023-04-16_23-18-03.jpg](./images/0.jpeg)

```C++ []
class Solution {
public:
    vector<int> sumZero(int n) {
      vector<int> answer(n);
      int x;
        if(n%2==0){
         x=n/2;
        answer[n-1]=0;
        }
        else
         x=(n-1)/2; 
        for(int i=1;i<=x;i++){    
              answer[i-1]=-1*i;          
              answer[i-1+x]=i;
        }
      return answer; 
    }
};
```
```C# []
public class Solution {
    public int[] SumZero(int n) {
      int[] answer=new int[n];
      int x;
        if(n%2==0){
         x=n/2;
        answer[n-1]=0;
        }
        else
         x=(n-1)/2; 
        for(int i=1;i<=x;i++){    
              answer[i-1]=-1*i;          
              answer[i-1+x]=i;
        }
      return answer;
    }
}
```
![Vote.png](./images/1.png)



