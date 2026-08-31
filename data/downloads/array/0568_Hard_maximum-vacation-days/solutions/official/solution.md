# Official Solution

**Link:** [https://leetcode.com/problems/maximum-vacation-days/solution/](https://leetcode.com/problems/maximum-vacation-days/solution/)

---

[TOC]

## Solution

---
### Approach #1 Using Depth First Search [Time Limit Exceeded]

**Algorithm**

In the brute force approach, we make use of a recursive function $$dfs$$, which returns the number of vacations which can be taken startring from $$cur\_city$$ as the current city and $$weekno$$ as the starting week.

In every function call, we traverse over all the cities(represented by $$i$$) and find out all the cities which are connected to the current city, $$cur\_city$$. Such a city is represented by a 1 at the corresponding $$flights[cur\_city][i]$$ position. Now, for the current city, we can either travel to the city which is connected to it or we can stay in the same city. Let's say the city to which we change our location from the current city be represented by $$j$$. Thus, after changing the city, we need to find the number of vacations which we can take from the new city as the current city and the incremented week as the new starting week. This count of vacations can be represented as: $$days[j][weekno] + dfs(flights, days, j, weekno + 1)$$.

Thus, for the current city, we obtain a number of vacations by choosing different cities as the next cities. Out of all of these vacations coming from different cities, we can find out the maximum number of vacations that need to be returned for every $$dfs$$ function call.

<iframe src="https://leetcode.com/playground/8ouYLNFV/shared" frameBorder="0" width="100%" height="344" name="8ouYLNFV"></iframe>


**Complexity Analysis**

* Time complexity : $$O(n^k)$$. Depth of Recursion tree will be $$k$$ and each node contains $$n$$ branches in the worst case. Here $$n$$ represents the number of cities and $$k$$ is the total number of weeks.

* Space complexity : $$O(k)$$. The depth of the recursion tree is $$k$$.

---

### Approach #2 Using DFS with memoization [Accepted]:

**Algorithm**

In the last approach, we make a number of redundant function calls, since the same function call of the form `dfs(flights, days, cur_city, weekno)` can be made multiple number of times with the same $$cur\_city$$ and $$weekno$$. These redundant calls can be pruned off if we make use of memoization.

In order to remove these redundant function calls, we make use of a 2-D memoization array $$memo$$. In this array, $$memo[i][j]$$ is used to store the number of vacactions that can be taken using the $$i^{th}$$ city as the current city and the $$j^{th}$$ week as the starting week. This result is equivalent to that obtained using the function call: `dfs(flights, days, i, j)`. Thus, if the $$memo$$ entry corresponding to the current function call already contains a valid value, we can directly obtain the result from this array instead of going deeper into recursion.

<iframe src="https://leetcode.com/playground/aoygCX5A/shared" frameBorder="0" width="100%" height="446" name="aoygCX5A"></iframe>


**Complexity Analysis**

* Time complexity : $$O(n^2k)$$. $$memo$$ array of size $$n*k$$ is filled and each cell filling takes O(n) time .

* Space complexity : $$O(n*k)$$. $$memo$$ array of size $$n*k$$ is used. Here $$n$$ represents the number of cities and $$k$$ is the total number of weeks.

---

### Approach #3 Using 2-D Dynamic Programming [Accepted]:

**Algorithm**

The idea behind this approach is as follows. The maximum number of vacations that can be taken given we start from the $$i^{th}$$ city in the $$j^{th}$$ week is not dependent on the the vacations that can be taken in the earlier weeks. It only depends on the number of vacations that can be taken in the upcoming weeks and also on the connections between the various cities($$flights$$).

Therefore, we can make use of a 2-D $$dp$$, in which $$dp[i][k]$$ represents the maximum number of vacations which can be taken starting from the $$i^{th}$$ city in the $$k^{th}$$ week. This $$dp$$ is filled in the backward manner(in terms of the week number).

While filling up the entry for $$dp[i][k]$$, we need to consider the following cases:

1. We start from the $$i^{th}$$ city in the $$k^{th}$$ week and stay in the same city for the $$(k+1)^{th}$$ week. Thus, the factor to be considered for updating the $$dp[i][k]$$ entry will be given by: $$days[i][k] + dp[i, k+1]$$.

2. We start from the $$i^{th}$$ city in the $$k^{th}$$ week and move to the $$j^{th}$$ city in the $$(k+1)^{th}$$ week. But, for changing the city in this manner, we need to be able to move from the $$i^{th}$$ city to the $$j^{th}$$ city i.e. $$flights[i][j]$$ should be 1 for such $$i$$ and $$j$$.

But, while changing the city from $$i^{th}$$ city in the $$k^{th}$$ week, we can move to any $$j^{th}$$ city such that a connection exists between the $$i^{th}$$ city and the $$j^{th}$$ city i.e. $$flights[i][j]=1$$. But, in order to maximize the number of vacations that can be taken starting from the $$i^{th}$$ city in the $$k^{th}$$ week, we need to choose the destination city that leads to maximum no. of vacations. Thus, the factor to be considered here, is given by: $$\text{max}days[j][k] + days[j, k+1]$$, for all $$i$$, $$j$$, $$k$$ satisfying $$flights[i][j] = 1$$, $$0 &leq; i,j &leq; n$$, where $$n$$ refers to the number of cities.

At the end, we need to find the maximum out of these two factors to update the $$dp[i][k]$$ value.

In order to fill the $$dp$$ values, we start by filling the entries for the last week and proceed backwards. At last, the value of $$dp[0][0]$$ gives the required result.

The following animation illustrates the process of filling the $$dp$$ array.

!?!../Documents/568_Maximum_Vacation_Days.json:1000,563!?!

Below code is inspired by [@hackerhuang](http://leetcode.com/hackerhuang)

<iframe src="https://leetcode.com/playground/ecd9NkNY/shared" frameBorder="0" width="100%" height="344" name="ecd9NkNY"></iframe>


**Complexity Analysis**

* Time complexity : $$O(n^2k)$$. $$dp$$ array of size $$n*k$$ is filled and each cell filling takes O(n) time. Here $$n$$ represents the number of cities and $$k$$ is the total number of weeks.

* Space complexity : $$O(n*k)$$. $$dp$$ array of size $$n*k$$ is used.

---

### Approach #4 Using 1-D Dynamic Programming [Accepted]:

**Algorithm**

As can be observed in the previous approach, in order to update the $$dp$$ entries for $$i^{th}$$ week, we only need the values corresponding to $$(i+1)^{th}$$ week along with the $$days$$ and $$flights$$ array. Thus, instead of using a 2-D $$dp$$ array, we can omit the dimension corresponding to the weeks and make use of a 1-D $$dp$$ array.

Now, $$dp[i]$$ is used to store the number of vacations that provided that we start from the $$i^{th}$$ city in the current week. The procedure remains the same as that of the previous approach, except that we make the updations in the same $$dp$$ row again and again. In order to store the $$dp$$ values corresponding to the current week temporarily, we make use of a $$temp$$ array so that the original $$dp$$ entries corresponding to $$week+1$$ aren't altered.

<iframe src="https://leetcode.com/playground/WBzLLgF3/shared" frameBorder="0" width="100%" height="395" name="WBzLLgF3"></iframe>


**Complexity Analysis**

* Time complexity : $$O(n^2k)$$. $$dp$$ array of size $$n*k$$ is filled and each cell filling takes O(n) time. Here $$n$$ represents the number of cities and $$k$$ is the total number of weeks.

* Space complexity : $$O(k)$$. $$dp$$ array of size $$nk$$ is used.