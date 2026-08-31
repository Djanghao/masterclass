# c# solution using hashmap with explanation

**Author:** ozonerm
**Votes:** 7
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/1448897/](https://leetcode.com/problems/continuous-subarray-sum/solutions/1448897/)

---

```
public class Solution {
    public bool CheckSubarraySum(int[] nums, int k) {
       
        /*
            accumulative sums can calculated in a single loop, i.e. list below can be done in O(n)
            \u03A3nums[0], \u03A3nums[0..1], \u03A3nums[0..2],..\u03A3nums[0..i]..\u03A3nums[0..j]..\u03A3nums[0..n]
            
            also prefix sum (this is the basic premise)
            \u03A3nums[i..j]  = \u03A3nums[0..j]-\u03A3nums[0..i-1] ; where j>i.
            
            Question can be rephrased as find \u03A3nums[i..j] such that
            \u03A3nums[i..j]%k==0 and j-i>=2
            
            from line #9 
            \u03A3nums[i..j]%k = 0 can be written as
            
            \u03A3nums[0..j]%k - \u03A3nums[0..i-1]%k = 0
            
            reducing above 
            \u03A3nums[0..j]%k - \u03A3nums[0..i-1]%k = 0
            we get
            
            \u03A3nums[0..j]%k = \u03A3nums[0..i-1]%k  (this is the other premise on which solution is based)
            
            Now this problem can be rephrased as
            
            while on jth element and having accumulated values till j
            find if we have \u03A3nums[0..j]%k from accumulation before 
            and ensure current index j - index (where we have found this remainder before) is >= 2.
        */
        
        
        var hash = new Dictionary<int,int>();
        hash.Add(0,-1); //this is \u03A3nums[0..0] = \u03A3nums[0..0] - \u03A3nums[0..0-1]  
        int sumi = 0;
        for(int j=0; j<nums.Length; j++ ) {
        
            var sumj = sumi+nums[j];
            
            int remainderToFind = sumj % k;
            
            if(hash.TryGetValue(remainderToFind,out int foundIndex) && Math.Abs(foundIndex-j)>=2) {
                return true;
            }
            sumi = sumj;
            if(!hash.TryGetValue(remainderToFind,out int _))
                hash.Add(remainderToFind, j);
        }
        
        return false;
    }
}
```