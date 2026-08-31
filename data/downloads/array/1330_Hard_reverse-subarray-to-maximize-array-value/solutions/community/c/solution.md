# C++ || Easy Explanation

**Author:** Rajdeep_Nagar
**Votes:** 4
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/3392864/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/3392864/)

---

```
/*

Ans= sum(|nums[i]-nums[i+1])  
         To maximize this ans we can reverse any subarray
        
         even after reversing the subarray , what changes?
        
  let [x1,x2,x3,x4,x5,x6,x7]  , ans 1= |x1-x2|+|x2-x3|+|x3-x4|+|x4-x5|+|x5-x6|+|x6-x7|         
         if we reverse [x3,x4,x5] to [x5,x4,x3]
         
         [x1,x2,(x5,x4,x3),x6,x7]  ans2= ans1+(|x5-x2|-|x3-x2|) + (|x6-x3|-|x6-x5|)
         
        so we needs to choose such two indexes so that ans2 will be max

         ans2 > ans1 by the factor
         
         |x5-x2| + |x6-x3| - |x3-x2| - |x6-x5|
         
         
           so will reverse [i,j] only if 
           
          |v[j]-v[i-1]| + |v[j+1]-v[i]| - |v[i]-v[i-1]| -|v[j+1]-v[j]| will be max to max
          
          so we needs to find indexes [i,j] such that
          
          |v[j]-v[i-1]| + |v[j+1]-v[i]| - |v[i]-v[i-1]| - |v[j+1]-v[j]|  will be maximum
              A               B                 C             D
          
          final ans= ans1+ (max value calculated)
          
          if(i==0) , A=C=0
          
          if(i==n-1) , B=D=0
          
          
          we are just focusing on minimizing C , D
   
   
   
 
 sum = abs difference of all continuous values

without any reverse, ans= sum

if reversing [i\u2026\u2026\u2026\u2026\u2026\u2026\u2026.j]


ans = sum + abs(v[i] - v[j+1]) + abs(v[i-1] - v[j]) - abs(v[i]-v[i-1]) - abs(v[j]-v[j+1])
        
1)
agar i==0 h too

ans= sum + abs(v[i]-v[j+1]) - abs(v[j]\xA0-\xA0v[j+1])

ans= sum + abs(v[0]-v[j+1]) - abs(v[j]\xA0-\xA0v[j+1])

2)
ab agar j==n-1 h too

ans= sum + abs(v[i-1] - v[j]) - abs(v[i]-v[i-1])

ans= sum + abs(v[i-1] - v[n-1]) - abs(v[i]-v[i-1])

isse bhi O(n) m calculate\xA0kar\xA0sakte\xA0h


3. 

now agar i>0 and j<n-1

=> pairs : (v[i] , v[j+1])  and (v[i-1], v[j])

3.1

if (v[i] > v[j+1]) and (v[i-1] > v[j])

ans = sum + v[i]-v[j+1] + v[i-1]-v[j] - abs(v[i]-v[i-1]) - abs(v[j]-v[j+1])

ans= sum + (-abs(v[i]-v[i-1])+v[i]+v[i-1]) + (-abs(v[j]-v[j+1])-v[j+1]-v[j])

ans = sum + X1 + Y1

for maximum ans

ans= sum + max(X1) + max(Y1)

3.2  

if(v[i] > v[j+1]) and (v[i-1] < v[j])

ans = sum + v[i]-v[j+1] + v[j] - v[i-1] - abs(v[i]-v[i-1]) - abs(v[j]-v[j+1])

ans = sum + (-abs(v[i]-v[i-1])+v[i]-v[i-1]) + (-abs(v[j]-v[j+1])-v[j+1]+v[j])

ans = sum + X2 + Y2

for maximum ans

ans= sum + max(X2) + max(Y2)

3.3 

if(v[i] < v[j+1]) and (v[i-1] > v[j])

ans = sum + v[j+1]-v[i] + v[i-1]-v[j] - abs(v[i]-v[i-1]) - abs(v[j]-v[j+1])

ans = sum + (-abs(v[i]-v[i-1])-v[i]+v[i-1])+(-abs(v[j]-v[j+1]+v[j+1]-v[j])

ans = sum + X3 + Y3

for maximum ans

ans= sum + max(X3) + max(Y3)

3.4  

if(v[i] < v[j+1]) and (v[i-1] < v[j])

ans = sum + v[i]-v[j+1] + v[j]-v[i-1] - abs(v[i]-v[i-1]) - abs(v[j]-v[j+1])

ans = sum + (-abs(v[i]-v[i-1])- v[i]-v[i-1])+(-abs(v[j]-v[j+1]+v[j+1]+v[j])

ans = sum + X4 + Y4

for maximum ans

ans= sum + max(X4) + max(Y4)

          

*/


class Solution {
public:
    int maxValueAfterReverse(vector<int>& v) {
        
        
        int n=v.size();
        
        
        int sum=0;
        
        for(int i=0;i<n-1;i++){
            sum+=abs(v[i]-v[i+1]);
        }
        
     int ans=sum;
        
        
//1.  ans= sum + abs(v[0]-v[j+1]) - abs(v[j]\xA0-\xA0v[j+1])
        
        for(int j=0;j<n-1;j++){
            ans=max(ans,sum+abs(v[0]-v[j+1])-abs(v[j]-v[j+1]));
        }
 

//2.  ans= sum + abs(v[i-1] - v[n-1]) - abs(v[i]-v[i-1])
    
    
        for(int i=1;i<n;i++){
            ans=max(ans,sum+abs(v[i-1]-v[n-1])-abs(v[i]-v[i-1]));
        }
        

// ans= sum + (-abs(v[i]-v[i-1])+v[i]+v[i-1]) + (-abs(v[j]-v[j+1])-v[j+1]-v[j])

// ans = sum + X1 + Y1

// for maximum ans

// ans = sum + max(X1) + max(Y1)
        
        int x1=-1e9;
        
        for(int i=1;i<n-1;i++){
            x1=max(x1,-abs(v[i]-v[i-1])+v[i]+v[i-1]);
        }
        
         int y1=-1e9;
        
        for(int j=1;j<n-1;j++){
            y1=max(y1,-abs(v[j]-v[j+1])-v[j+1]-v[j]);
        }
        
        ans=max(ans,sum+x1+y1);


// ans = sum + (-abs(v[i]-v[i-1])+v[i]-v[i-1]) + (-abs(v[j]-v[j+1])-v[j+1]+v[j])

// ans = sum + X2 + Y2

// for maximum ans

// ans= sum + max(X2) + max(Y2)
        
         int x2=-1e9;
        
        for(int i=1;i<n-1;i++){
            x2=max(x2,-abs(v[i]-v[i-1])+v[i]-v[i-1]);
        }
        
         int y2=-1e9;
        
        for(int j=1;j<n-1;j++){
            y2=max(y2,-abs(v[j]-v[j+1])-v[j+1]+v[j]);
        }
        
        ans=max(ans,sum+x2+y2);
     

// ans = sum + (-abs(v[i]-v[i-1])-v[i]+v[i-1])+(-abs(v[j]-v[j+1]+v[j+1]-v[j])

// ans = sum + X3 + Y3

// for maximum ans

// ans= sum + max(X3) + max(Y3)
        
         int x3=-1e9;
        
        for(int i=1;i<n-1;i++){
            x3=max(x3,-abs(v[i]-v[i-1])-v[i]+v[i-1]);
        }
        
         int y3=-1e9;
        
        for(int j=1;j<n-1;j++){
            y3=max(y3,-abs(v[j]-v[j+1])+v[j+1]-v[j]);
        }
        
        ans=max(ans,sum+x3+y3);


        
// ans = sum + (-abs(v[i]-v[i-1])- v[i]-v[i-1])+(-abs(v[j]-v[j+1]+v[j+1]+v[j])

// ans = sum + X4 + Y4

// for maximum ans

// ans= sum + max(X4) + max(Y4)
        
        
         int x4=-1e9;
        
        for(int i=1;i<n-1;i++){
            x4=max(x4,-abs(v[i]-v[i-1])-v[i]-v[i-1]);
        }
        
         int y4=-1e9;
        
        for(int j=1;j<n-1;j++){
            y4=max(y4,-abs(v[j]-v[j+1])+v[j+1]+v[j]);
        }
        
        ans=max(ans,sum+x4+y4);
        
        return ans;
        
    }
};