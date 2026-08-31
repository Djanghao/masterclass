# [C++] Easy explanation :) for a bad framed question :(

**Author:** rahulanandyadav2000
**Votes:** 45
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/844089/](https://leetcode.com/problems/count-unhappy-friends/solutions/844089/)

---

The question was framed a little unclear for most of us to understand but here we go.

Exaplaination of the question

	Following statement of question can be explained better.
	However, this pairing may cause some of the friends to be unhappy. 
	A friend x is unhappy if x is paired with y and there exists a friend 
	u who is paired with v but:

	x prefers u over y, and
	u prefers x over v.
	
	Take Example as :
	
	n = 4, preferences = [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], pairs = [[1, 3], [0, 2]]
	
	
	Take pair [0,2]
	x-y == 0-2
	
	0 prefers 1 and 3 over 2 (YES WE NEED TO CONSIDER 1 AND 3 BOTH :) )
	Now check for 1 as well as 3
	Now if any of 1 or 3 preferes 0 over 2 then we have a unhappy friend.
	since 3 prefers 0 over two we have a unhappy friend
	though we see 1 prefers 2 over zero
	PS: most of us thought just to check for 1st preference of 0 and there is where this'
	questions explanation was misunderstood.'
	
	
	If you still have any doubt please raise them in comment section I will do my best to make the question clear.
	
Below is the exaplantion of code:
		
	For every friend map his/her preferences
	Now calculate the distance between the pairs that are made.
	
	Now main code:
	Loop over every friend
	1. Check if matched prefrence is lower
	2. If not then loop over thier preferences and see if the any his/her higher preference is 
	also matched to some lower preference, If yes increment the count unhappy.
	
Here is the code for refrence:
Happy Coding :)

```
int unhappyFriends(int n, vector<vector<int>> &pref, vector<vector<int>> &pairs)
{
    vector<unordered_map<int, int>> mp(n);
    vector<int> distance(n);
    for (int i = 0; i < n; ++i)
    {
        int prefsize = pref[i].size();
        for (int j = 0; j < prefsize; ++j)
            mp[i][pref[i][j]] = j;
    }

    for (auto &p : pairs)
    {
        distance[p[0]] = mp[p[0]][p[1]];
        distance[p[1]] = mp[p[1]][p[0]];
    }
    int unhappy = 0;
    for (int i = 0; i < n; ++i)
    {
        for (int j = 0; j < distance[i]; ++j)
        {
            int x = pref[i][j];
            for (int k = 0; k < distance[x]; ++k)
            {
                if (i == pref[x][k])
                {
                    unhappy++;
                    j = k = n;
                }
            }
        }
    }
    return unhappy;
}
```

Complexity Analysis
		
	Time : O(n^3)
	