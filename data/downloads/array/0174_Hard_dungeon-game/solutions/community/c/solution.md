# 🔮 [Diego's Understandable Explanations] C++

**Author:** diealecel
**Votes:** 81
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/464716/](https://leetcode.com/problems/dungeon-game/solutions/464716/)

---

Hi, I'm trying to make easily understandable explanations for everyone. Hopefully I did a good job here.
*Please upvote if this post helped you, so that others can find it.*

**Why this problem is tricky**
If you've done a lot of dynamic programming problems, looking at this problem probably immediately set off a few bulbs in your head for how to go about solving it. This is a really good thing, because that means that your instincts are working properly! However, it's possible that they led you nowhere useful, because this problem pushes a little on the formulaic form of dynamic programming problems. Let's see why.

**The bigger picture insight**
The problem has start and end locations, and you have to find some start property to meet an end criterion. By far the largest insight of this problem is recognizing that it is better to tackle the problem by starting from what you know, which is the end criterion you must meet, and working towards what you don't know, the start property.

This is important because, usually, simpler dynamic problems are best solved by starting from the start and ending at the end, but that is not the case here. The larger idea is that you should start from what you know and work towards what you don't know, and that it just so happens that in simpler dynamic programming problems those tend to coincide with the start and end, respectively.

With that out of the way, let's talk more about the problem.

**The insight**
The problem insight comes from recognizing that it is useful to remember the minimum health you need to exist at a particular location.

When you're in some room in the dungeon, you need enough health to do two things...
* survive the health cost of the room, and
* have enough health left over to move to a different room, either right or down.

If we add these two together, the sum represents the amount of health we need to *exist* at a particular location. Luckily, we already know one of these: the amount of health we need to survive the health cost of the room. What about the second one? Let's think about it some more...

The amount of health we need to move to a different room is simply the amount of health we need to *exist* in another room, which is the exact kind of thing we're calculating! This means that we can work backwards from the end, where the princess is, up to the start to get our answers.

Remember that since we want to minimize the health we need at the start, of the two actions we can take, going right or down, we will take the one that requires the less amount of health.

**But what about the end? You can't move to a different room once you hit the end!**
Yes, this is correct! That's why we'll have to do something special for the end, and pretend that the cost we need to "move to a different room" is 1. This works perfectly because it is the exact same thing as saying that, once we hit the end and paid the associated health cost, we must have at least 1 health left over to be alive! This is the end criterion we need to meet, which we know from the get-go.

**Wrapping up**
Now that you know to start from the end and to work backwards, you have everything you need to know to arrive at the answer. One more important detail is that if you're at a location where the room itself has a *health benefit* that is high enough that it **pays** for your cost of existence in the less health-demanding, different room, then you know that you only need at least 1 health to exist in that room!

**A solution**
This solution can be optimized in some ways for improved performance, but I leave that exercise to the reader.
```
int calculateMinimumHP(vector<vector<int>>& dungeon) {
    int m = dungeon.size(), n = dungeon.front().size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, INT_MAX)); // Maximum penalty so you don't go out of bounds!
	
	// The requirement to "move to a different room" at the end: you must be alive!
    dp[m][n - 1] = 1; dp[m - 1][n] = 1;
    for (int i = m - 1; i >= 0; i--) {
        for (int j = n - 1; j >= 0; j--) {
			// Give me the less costly room and add the cost of the current room,
			// or 1 if the cost for this room (which is actually a benefit) covers the next room!
            dp[i][j] = max(1, min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]);
        }
    }

    return dp.front().front();
}
```