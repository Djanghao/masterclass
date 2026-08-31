# java solution with explanation

**Author:** maahi_10001
**Votes:** 10
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/2706391/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/2706391/)

---

```
class Solution {
    public int[] productQueries(int n, int[][] queries) {
        int mod=1000000007;
        //generating the array based on the given n value  n%2 and n/2 evry time genrating an array of 0 and 1 indcating whether to consdier the index or not and generate the powers array according to the array generated indexes
        List<Integer> arr=new ArrayList<Integer>();
        List<Integer> powers=new ArrayList<Integer>();
        while(n>0){  
            arr.add((int)n%2);
            n/=2;
        }
         //System.out.print(arr);
        for(int i=0;i<arr.size();i++){
            if(arr.get(i)==1){  //considering only the arrays of value equals 1 indicating the maximum powers sum to n
                int t=(int)Math.pow(2,i);
                powers.add(t);
            }
        }
        int result[]=new int[queries.length];
        int j=0;
        for(int []a:queries){
            long res=1;
            for(int i=a[0];i<=a[1];i++){
                res=(res*powers.get(i)%mod);
            }
            result[j++]=(int)res%mod;
        }
        return result;
    }
}
```