# C++ || Intuitions Commented || Next Permuatation || Explained Clearly

**Author:** KR_SK_01_In
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1910886/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1910886/)

---

```
  int getMinSwaps(string num, int k) {

       int n=num.size();
        string x = num;
        
        while(k--)
        {
            next_permutation(x.begin(),x.end());
        }
        
        int ans=0;
          for(int i=0;i<n;i++)
          {
              if(num[i]!=x[i])
              {
                  // as we know we have to check the swappings , its original position 
                  // will be somewhere to the right in original string num as compared 
                  // to permutated string x, so find it out and swap one by one 
                  // makes it to its newly permutataed position in  original string 
                  // swap one by one just makes it to position as it in permuated string
                  
                  int j=i+1 ;// j will be moving in original string
                      
                      while(num[j]!=x[i])
                      {
                          j++;
                      }
                  
                     // now we find it out at some jth index where the (value x[i]  )exists in original string  at index j in string num
                  // its time to swap now 
                  
                  while(j>i)
                  {
                      swap(num[j] , num[j-1]);
                      j--;
                      ans++;
                  }
                  
                  
              }
          }
        
        
        return ans;
        
```