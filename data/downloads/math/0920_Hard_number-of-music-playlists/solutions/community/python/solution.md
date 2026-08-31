# PYTHON SOLUTION || RECURSION + MEMO || WELL EXPLAINED || HOW TO REACH EXPLAINED ||

**Author:** reaper_27
**Votes:** 21
**Link:** [https://leetcode.com/problems/number-of-music-playlists/solutions/1879256/](https://leetcode.com/problems/number-of-music-playlists/solutions/1879256/)

---

**Runtime: 56 ms, faster than 75.37% of Python3 online submissions for Number of Music Playlists.
Memory Usage: 15.5 MB, less than 24.63% of Python3 online submissions for Number of Music Playlists.**


# EXPLANATION
```
Understand some basics of the question
    1. We have to use all of the n songs in our playlist
    2. We can repeat a song only after k other songs
    
	Now for first point : We have to make sure that we will use all the n  songs
	To make this happend I have made a check whenever we are going to repeat a song
	
	reapeat only if the no. of songs left to complete playlist > no. unique of songs left to add to playlist
	
	For the seecond point : We have this above condition + we can only repeat if our  current size of playlist is greater than or equals to k + 1
	
	You can use recursion and keep tracking of actual playlist bit it will give TLE
	
	To remove this TLE we need to understand combinations
	
	For adding a new element: 
	        lets n = 5 goal  = 7 k = 2
			our playlist = [ 1 , 2 ]
			In how many ways can we add new item ?? ans is the no. of unique item left
			Exactly !! So we do not need to check for all of them one by one but we do check for one and multilply by the no. of unique items left
			
			
	For repeating a element
	    lets  n = 5 goal = 7 k = 2
		our playlist = [1 , 2 ,  3  , 4 , __ ]
		now we can repeat 1 or 2 at the blank position 
		So is there any mathematical way to find the no. of ways of repeatition too ??
		Yes , there is (I got this from my observation )
		
		See there are exactly 4 unique items in our playlist
		We know that k = 2 means we need atleast a gap of 2
		So we leave 2 unique items from the k=last( they can never be same and will always be unique as we have a gap of k for repeating )
		So yes we can repeat 2 items i.e. unique - k precisely
		
		if you say for n = 5 goal = 10 k  = 4
		our playlist = [ 1 , 2 ,3 , 4 , 5 , 1 , 2 , 3 , __ ]
		See the last 4 (k) items are unique and if we remove 4 from no. of unique (5)
		i.e 5-4 = 1 we know that we can repeat exactly 1 item i,.e 4
		
		So for any point find no. of ways we insert by repeating and by non repeating
		Find ans for both of them and boom question solved !!!!!
		
		In dp we store our key as ( unique , size ) and value as ans for the key
		
		
```


# This approach is totally reached by myself so give a hands up if helpful!!

```
class Solution:
    def numMusicPlaylists(self, n: int, goal: int, k: int) -> int:
        # size means current size without item we are going to add
        # unique is the count of unique items
        def solve(size , unique):
            if size == goal : return 1
            if (size,unique) in dp:return dp[(size,unique)]
            ans = 0
            repeat = 0
            # check if we can repeat
            if goal - size > n - unique and size >= k+1:repeat = unique - k
            non_repeat = n - unique
            if repeat > 0 :ans += solve(size+1,unique) * repeat
            ans += solve(size+1,unique+1) * non_repeat
            dp[(size,unique)] = ans
            return ans
        dp = {}
        return solve(0,0)%1000000007
    
            
```