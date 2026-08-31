# ✅ C++ || Explained || Easy || Simple & Short || Algorithm

**Author:** knockcat
**Votes:** 257
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/1881010/](https://leetcode.com/problems/two-city-scheduling/solutions/1881010/)

---

# 1029. Two City Scheduling
**KNOCKCAT**

```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. Inituton is to find differences b/w the cost of two cities and then the minimum diff is to added to mincost.
5. Please Upvote if it helps\u2B06\uFE0F
6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09
```
[LeetCode](http://github.com/knockcat/Leetcode) **LINK TO LEETCODE REPOSITORY**

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

**ALGORITHM**
* Input: costs = [[10,20],[30,200],[400,50],[30,20]]
* Output: **110**
* **Compute** the **cost of sending every person to City A**.
	* The **cost will be 10 + 30 + 400 + 30 = 470**
* **Compute the difference** if a **Person is sent to City B**
	* D1 -> 20 - 10 = 10
	* D2 -> 200 - 30 = 170
	* D3 -> 50 - 400 = -350
	* D4 -> 20 - 30 = -10
	* If the **last two persons are sent to City B instead of City A**, you **can save maximum**, as those **are the persons costing more to City A**.
* **Sort the diff**.
	* D3, D4, D1, D2
* Now **pick N persons which has least diff and send them to City B.**
* Add the diff cost to the total
	* 470 + (-350) + -(10) = **110**
* **return cost**.
``` ```

**CODE WITH EXPLANATION**
```
				// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int twoCitySchedCost(vector<vector<int>>& costs) {
        vector<int> diff;
        int mincost = 0;
        
        for(int i = 0; i<costs.size(); ++i)
        {
			// cost to send every person to city A
            mincost += costs[i][0];
			// computing difference if person sent to city B
            diff.push_back(costs[i][1] - costs[i][0]);
        }
		
		// sort the diff vector
        sort(diff.begin(),diff.end());
        
		// picking n persons having least diff
		// sending them to city B
        for(int i=0; i<costs.size()/2; ++i)
        {
            mincost += diff[i];
        }
        
        return  mincost;
        
    }
	// for github repository link go to my profile.
};
```