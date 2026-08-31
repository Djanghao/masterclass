# Simple Java Solution

**Author:** sakshikishore
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/5855775/](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/5855775/)

---

# Code
```java []
import java.math.BigInteger;
class Solution {
    public int maxFrequencyScore(int[] nums, int k) {
        BigInteger max;
        HashMap<Integer,Integer> h=new HashMap<Integer,Integer>();
        for(int i=0;i<k;i++)
        {
            if(!h.containsKey(nums[i]))
            {
                h.put(nums[i],1);
            }
            else
            {
                h.put(nums[i],h.get(nums[i])+1);
            }
        }
        BigInteger sum=BigInteger.valueOf(0);
       for(Map.Entry<Integer,Integer> entry:h.entrySet())
       {
         sum=sum.add(BigInteger.valueOf(entry.getKey()).modPow(BigInteger.valueOf(entry.getValue()),BigInteger.valueOf(1000000007)));
         sum=sum.mod(BigInteger.valueOf(1000000007));
       }
       max=sum;
       int start=0;
       for(int i=k;i<nums.length;i++)
       {
          if(nums[start]!=nums[i])
          { 
             BigInteger p= BigInteger.valueOf(nums[start]).modPow(BigInteger.valueOf(h.get(nums[start])),BigInteger.valueOf(1000000007));
           
              sum=sum.subtract(p);   
            
                if(h.get(nums[start])==1)
                {
                     h.remove(nums[start]);
                }
                else
                {
                   h.put(nums[start],h.get(nums[start])-1);
                    p=BigInteger.valueOf(nums[start]).modPow(BigInteger.valueOf(h.get(nums[start])),BigInteger.valueOf(1000000007));
                    
                    sum=sum.add(p);
                    sum.mod(BigInteger.valueOf(1000000007));
                     
                }
              if(h.containsKey(nums[i]))
              {
                 p= BigInteger.valueOf(nums[i]).modPow(BigInteger.valueOf(h.get(nums[i])),BigInteger.valueOf(1000000007));
                 sum=sum.subtract(p);
                  h.put(nums[i],h.get(nums[i])+1);
                 p=BigInteger.valueOf(nums[i]).modPow(BigInteger.valueOf(h.get(nums[i])),BigInteger.valueOf(1000000007));
                sum=sum.add(p);
                sum.mod(BigInteger.valueOf(1000000007));
                
                
              }
              else
              {
                h.put(nums[i],1);
                 sum=sum.add(BigInteger.valueOf(nums[i]));
                 sum.mod(BigInteger.valueOf(1000000007));
              
              }
                
               
          }

         
          BigInteger p=sum.mod(BigInteger.valueOf(1000000007));
          if(p.compareTo(max)==1)
          {
            max=p;
          }
         

          start++;
         
       }

       return max.intValue();
    }
}
```