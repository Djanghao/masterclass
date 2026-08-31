# sieve's algoritm code with @the_great_harsh and @the_noob_boob_yash and @aryan_nimavat with me

**Author:** devitaliya22
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-primes/solutions/4474144/](https://leetcode.com/problems/count-primes/solutions/4474144/)

---



# Code
```
class Solution {
    public int countPrimes(int n) 
    {
        int ans=0;
        boolean arr[]=new boolean[n];
        Arrays.fill(arr,true);
        for(int i=2;i<n;i++)
        {
            if(arr[i])
            {
                ans++;
                for(int j=2*i;j<n;j+=i)
                {
                    arr[j]=false;
                }
            }
        }
        return ans;
    }
}
```