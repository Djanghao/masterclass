# Easiest Solution || Very short code || CPP

**Author:** saketthenuan
**Votes:** 17
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1825862/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1825862/)

---

1.  We only need to get the minimum sum of k values need to be inserted.
2.  We will use n*(n+1)/2 to calculate the sum upto k values.
3.  We will delete the value that is present in the array and add the next k+1 value to the sum.
4.  We have to handle the duplicate value case So we will use Set.
5.  Set will sort the array and give the unique elements in it. 

``` 
long long minimalKSum(vector<int>& nums, int k) {     
        set<int>s(nums.begin(),nums.end());
        long long ans = (long(k)*(long(k+1)))/2; 
        for(auto i:s){
            if(i<=k){ 
            ans+=k+1;
            ans-=i;
            k++;
          }
            else  
                break;
        }
        return ans;
    }
```

**PLEASE UPVOTE IF YOU LIKE AND USE CODE.  ; )**