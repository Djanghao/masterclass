# ✅ C++ || Easy To Understand || Sorting || Short & Simple

**Author:** knockcat
**Votes:** 74
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/1784527/](https://leetcode.com/problems/remove-covered-intervals/solutions/1784527/)

---

# 1288. Remove Covered Intervals
**KNOCKCAT**

```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. Approach using simple sorting & comparison with previous element
5. Please Upvote if it helps\u2B06\uFE0F
6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star the repository\uD83D\uDE09 
```

[LeetCode](https://github.com/knockcat/Leetcode)

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

**EXPLANATION**

```
1.The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.
	eg Interval [3,6] is covered by [2,8], therefore it should be removed.
	
	Let see the Number line :)
	
	                                           1  2  3  4  5  6  7  8
											   1-------4
											         3--------6
												  2-----------------8
	clearly we can see that [3 6] is covered by [2,8] and therefore it should be removed.

2. We will Sort the vector in ascending order to get this type of arrangement.
		//e.g. (1,5), (1,8), (2,9), (3,5), (4,7), (4,9)
		
3. For finding the remaining interaval, ifa[1][0] && a[1][1] both greater than a[0][0] && a[0][1],
this means the previous interval is not covered by the next one, therefore we will increase the count.
			consider the case [[1,3],[2,4],[4,8]]
								1   2  3  4  5  6  7  8
								1------3
									2-----4
									      4-----------8
											 
			No interval is completely overlaped by other therefore remainig interaval are 3.
			
			how answer is 3 , at first cnt is initialised to 1
			now a[0,0] i.e 1 and a[1,0] i.e 2   1 < 2 also,
			    a[0,1] i.e 3 and a[1,1] i.e 4   3 < 4    , therefore cnt is incremented by 2 now,
					
					also a[2,0] and a[2,1] satisy same condition with a[1,0] and a[1,1] , cnt becomes 3
```

**Time Complexity: O(n logn)
Space Complexity: O(1)**

**CODE WITH EXPLANATION**

```

						// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& intervals) {
        
        // sorting the intervals(vector)
        sort(intervals.begin(),intervals.end());        
           
        int x1 = intervals[0][0];
        int x2 = intervals[0][1];
        
		 int res = 1;  //one for x1 and x2;
		
		// ifa[i][0] && a[i][1] both greater than a[i-1][0] && a[i-1][1]
		// increase the cnt.
        for(int i= 1; i<intervals.size(); ++i)
        {
            if(intervals[i][0] > x1 && intervals[i][1] > x2)
                ++res;
            
			// updating x1 & x2 with next intervals
			as we are comparing from upcoming ones.
            if(intervals[i][1] > x2)
            {
                x1 = intervals[i][0];
                x2 = intervals [i][1];
            }
        }
        
        return res;       // return cnt
    }

}; 
   
```