# Mathematical Solution

**Author:** HIMANSHUCHHIKARA
**Votes:** 93
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/1117669/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/1117669/)

---

Lets make some observation first.
1. of length k only one consecutive sequence is possible.
eg: let say we want to make 18
  
 **3 4 5 6** sum:18
 if we go left  having length k sum will decrease(2 3 4 5)
  if we go to right sum increase (4 5 6 7)

**So only one consecutive sequence of length k with specific sum is possible.** 


So now i have to find all possible sequence that starts with x , having length k and sum equals to n.

 x+ (x+1) + (x+2) ..... (x+k-1)=n
 k*x + k*(k-1)/2 = n
 
**K:unknown and also X:unknown**
So **try hit and trail**

kx=n - k*(k-1)/2
k>0 and x>0 so LHS always Positive

n-k*(k-1)/2 > 0
n>k*(k-1)/2
n>k*(k)/2      // approximation
2n>k^2
sqrt(2n)>k 

 **now we have range for k . k>0 and k<sqrt(2n)**
 
 kx= n - k*(k-1)/2

**left side is mutliple of k.**
if right side (n-k*(k-1)/2) % k ==0 **means right side is also a multiple of k**. 
So if this condition follows increase answer count 1.
```
 public int consecutiveNumbersSum(int N) {

        int ans=0;
        
        for(int k=1;k*k<2*N;k++){
            
            if((N-k*(k-1)/2)%k==0) ans++;
        }
        return ans;
}
```
**Time : O(sqrt(n)) and Space:O(1)**

Please **Upvote** if found it helpful:)