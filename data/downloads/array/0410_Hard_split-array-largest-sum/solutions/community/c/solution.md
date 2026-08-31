# ✔️[C++] ||Simple Code ||Easy to understand ||TC: O( n*log( sum(nums) ), SC: O( 1 )

**Author:** anant_0059
**Votes:** 110
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/1899947/](https://leetcode.com/problems/split-array-largest-sum/solutions/1899947/)

---

#### *Upvote if it helps\u2B06\uFE0F*

Follow me on Github for Daily Leetcode Solution: [https://github.com/anant0059]()

```
	int splitArray(vector<int>& nums, int m) {
        int l=0,r=0,n=nums.size();
        for(int i=0;i<n;++i) l=max(l,nums[i]), r+=nums[i];
        
        int mid=0,ans=0;
        while(l<=r){
            mid=(l+r)/2;
            int count=0,tempsum=0;
            for(int i=0;i<n;++i){
                if(tempsum+nums[i]<=mid) tempsum+=nums[i];
                else count++,tempsum=nums[i];
            }
            count++; 
            
            if(count<=m) r=mid-1, ans=mid;
            else l=mid+1;
        }  
        return ans;
    }
```
The [**1011. Capacity To Ship Packages Within D Days**](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) is also the same question just it is a task to figureout this is the same question. And this question can be used as sample question, this concept are used in different questions.

The below two question is also similar:
[**2064. Minimized Maximum of Products Distributed to Any Store**](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/) - [Solution](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/discuss/1900037/C%2B%2B-oror-Easy-to-Understand-ororTC%3A-O(-m*log(-max(quantities)-)-SC%3A-O(-1-))
[**875. Koko Eating Bananas**](https://leetcode.com/problems/koko-eating-bananas/) - [Solution](https://leetcode.com/problems/koko-eating-bananas/discuss/1900110/C%2B%2B-oror-Easy-to-Understand-ororTC%3A-O(-m*log(-max(piles)-)-SC%3A-O(-1-))
