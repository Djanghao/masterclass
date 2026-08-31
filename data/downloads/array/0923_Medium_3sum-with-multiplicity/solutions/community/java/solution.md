# Simple HashMap Solution | Faster than 80%

**Author:** CreatorLeo
**Votes:** 45
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1918415/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1918415/)

---

**Please upvote if you like the solution**
```
class Solution {
    public int threeSumMulti(int[] arr, int target) {
        long result = 0;
        long count[] = new long[101];
        long mod = 1000000007;
		
		//Couting the occurrence of each number
        for(int i: arr) count[i]++;
        
        for(int i=0;i<101;i++){
            for(int j=i;j<101;j++){
                int k = target - i -j;
                if(k<0 || k>100)
                    continue;
				// if all number are same than use nC3
                if(i==j && j==k){
                    result += (count[i]*(count[i]-1)*(count[i]-2))/6;
                }
				
				//if first two are same than use nC2 * occurence of k
                else if(i==j && j!=k){
                    result += ((count[i]*(count[i]-1))/2)*count[k];
                }
				//Last condition if all number ar different
				else if(i<j && j<k){
                    result += (count[i]*count[j]*count[k]);
                }
                result %= mod;
            }
        }
        return (int)result;
    }
}
```