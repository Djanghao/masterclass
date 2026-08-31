# C++ || Simple Code || Full Explanation

**Author:** TlTAN
**Votes:** 102
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2224937/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2224937/)

---

***Upvote if Found Helpful***

**Intuition :**

If a cake is only cut horizontally and vertically, then the longest height of the pieces will be the longest gap in the horizontal cuts and the longest width of the pieces will be the longest gap in the vertical cuts.
Now just observe, `for each possible height of pieces (gap between the horizontal cuts) there is all possible width of the pieces (gap between the vertical cuts)`. This is bacause when a cake is cut horizontally it is divided into number of pieces of different lenghts. After cutting the cake vertically each of those sections are divided into pieces of different breadths. `So the maximum area is the product of the maximum height and maximum length.`

**Implementation :**

* So we need to find tha maximum height and maximum width of the cake pieces to find the largest piece. That is the longest gaps between the horizontal and vertical cuts.

* So sort the verticalCuts and horizontalCuts lists and find the maximum difference between the cuts.

* We run a loop from the 2nd to the last cut for both types of cuts. In each iteration and find the difference of each cut with its previous one. The maximum difference is stored in `maxh` for height (horizontal) and `maxv` for width (vertical).

* In this previous process we are excluding the first piece and last piece as they are not in between cuts. So just `add cut h in horizontalCuts and w in verticalCuts before sorting`. In this way we include the last pieces in between cuts. For the first pieces we are initialising them in maxh and maxv (They are simple the first element in the array after sorting).  the `maxh` and `maxv` will be determined correctly.

* In the last return the product of maxh and maxv. Here the product may exceed the integer limit so `before maxh*maxv multiply 1LL` so that the product converts into long long and mod it by 1e9+7 as stated in the problem.

**NOTE :** 1LL can not be multiplied at the end like `maxh*maxv*1LL`. In that case if the `maxh*maxv` overflows it will show errror as `int*int = int`. To avoid this use 1LL in the beginning or you can take maxh, maxv as long long. In that case you have to typecast it to int like `(int)maxh` and `(int)maxv` inside the max functions in loop as max takes integer as input. Or manually check like `if(maxh < hC[i] - hC[i-1]) maxh = hC[i] - hC[i-1];`.

**NOTE 2 :** You cannot use 1e9+7 directly at the end as it is of double type and you can not use modulus with double. So either write it in decimal as given or declare `int mod = 1e9+7` and use mod or use typecast `(int)(1e9+7)`. 

**Code :**
```
class Solution {
public:
    int maxArea(int h, int w, vector<int>& hC, vector<int>& vC) {\xA0 \xA0
 \xA0 \xA0 \xA0 \xA0hC.push_back(h);
        sort(hC.begin(), hC.end());
		int maxh = hC[0];
        for(int i=1; i<hC.size(); i++){
            maxh = max(maxh, hC[i] - hC[i-1]);
        }
        
 \xA0 \xA0 \xA0 \xA0vC.push_back(w);
        sort(vC.begin(), vC.end());
		int maxv = vC[0];
        for(int i=1; i<vC.size(); i++){
            maxv = max(maxv, vC[i] - vC[i-1]);
        }
		
        return (1LL*maxh*maxv) % 1000000007; //1LL used to make the product long long or integer sign overflow will occur.
    }
};
```