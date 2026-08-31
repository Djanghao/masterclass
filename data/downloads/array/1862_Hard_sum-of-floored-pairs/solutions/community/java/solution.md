# JAVA Readable Code

**Author:** HIMANSHUCHHIKARA
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/1214527/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/1214527/)

---

**IDEA:**
 Basic idea is for every number let say x . I am not going to check for [1,2,...x) . I know the answer of this range that is 0. Similarly for range [x,x+1...2x) If we take floor of x with any value in this answer will be this. keeping this in mind have a eye on code and things will get clear to you .
 
**CODE:**
```
 public int sumOfFlooredPairs(int[] nums) {
        int N=(int)1e5;
        int mod=(int)1e9 + 7;
        
		
        int[] frequencyMap=new int[N+1];
        for(int num:nums) frequencyMap[num]++;
        
        int[] prefixFreq=new int[N+1];
        for(int i=1;i<=N;i++) prefixFreq[i]=prefixFreq[i-1] + frequencyMap[i];
        
        long total=0;
        
        for(int i=1;i<=N;i++){
            if(frequencyMap[i]==0) continue;
            
            // [i * j, i * (j + 1)) 
                 long sum=0;
                for(int j=1; i*j<=N;j++){
                   int lower=i*j-1;
                   int upper=i*(j+1)-1;
                   
                   int count= prefixFreq[Math.min(N,upper)] - prefixFreq[lower]; 
                   
                    sum+=count*j;;
                }
                total=(total + (sum%mod)*frequencyMap[i])%mod;
        }
        return (int)total;
    }
```

**TimeComplexity:**
```

For each divisor i we are considering N/i intervals. where 1<=i<=N
     T(n) <= N/1 + N/2 + N/3 + .... N/N
          <=N(1/1 + 1/2 + ...  1/N)
		  <=N*(logN)
		  
Its a worse case because if freq is 0 we are just continuing.. 		
```  

Please upvote if found it helpful :)
