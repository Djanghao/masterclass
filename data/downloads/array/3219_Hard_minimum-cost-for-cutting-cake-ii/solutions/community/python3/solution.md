# Buckets, NO Heap , Fastest O(m+n) [c++]

**Author:** SubBuffer
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473102/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473102/)

---

## Intro
This problem was a part of weekly contest #406 (hard, problem 4). The exam results [were revoked](https://leetcode.com/discuss/general-discussion/5473054/weekly-contest-406) due to rampant __GPT cheating__. The top 20 ranks of the exam all cheated (see [this](https://leetcode.com/discuss/feedback/5473107/Weekly-406-Some-interesting-facts%3A)).
I think it is safe to say, leetcode contests will never be the same anymore. I am glad I was part of a generation and took about 110 contests when there was no GPT. I miss those days ...

---
## Approach 
This problem is well in the medium range of difficulty than the hard, anyways ... let's cut ourselves some slack.
So same approach as the [medium counterpart question](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473081/priority-queue-o-n-logn-c/). However, to compensate for the time and the inputs, we __don't sort or use__ priority queues anymore. 
We __count the costs and put the results__ into buckets. The first bucket is the number of horizontal cuts with cost of that index value. The second bucket is similarly but for the vertical cuts. 

Please check below to understand how it works in the code.

## Complexity
```
Time: O(m+n) // indeed it is O(m+n+1000) but can ignore 1000 compared to m and n range of values
Space: O(1000) // constant
```
## Code
<iframe src="https://leetcode.com/playground/L7jYEeUm/shared" frameBorder="0" width="500" height="550"></iframe>

___Note:___ there is a different version for the _last_ __for__ loop in the above code, i.e. this for loop:
```
    for (int i = 1000;i>0;i--){
        sum += (long long) i * vParts * hCuts[i];
        hParts += hCuts[i];
        
        sum += (long long) i * hParts * vCuts[i];
        vParts += vCuts[i];
    }
```
That optimization __is given in the comments__ suggested by [@zsq007](/u/zsq007). I recommend folks to understand that one as a brain teaser and probe why that is true and leave in the comments your preference of which _for loop_ do you like better.