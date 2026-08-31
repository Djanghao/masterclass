# [1396. Design Underground System](https://leetcode.com/problems/design-underground-system/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3572 | 178 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design)

**Companies:** `bloomberg`, `axon`, `amazon`, `google`, `goldman-sachs`

## Description

An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.

Implement the `UndergroundSystem` class:

	- `void checkIn(int id, string stationName, int t)`

	
		A customer with a card ID equal to `id`, checks in at the station `stationName` at time `t`.

		- A customer can only be checked into one place at a time.

	
	
	- `void checkOut(int id, string stationName, int t)`
	
		A customer with a card ID equal to `id`, checks out from the station `stationName` at time `t`.

	
	
	- `double getAverageTime(string startStation, string endStation)`
	
		Returns the average time it takes to travel from `startStation` to `endStation`.

		- The average time is computed from all the previous traveling times from `startStation` to `endStation` that happened **directly**, meaning a check in at `startStation` followed by a check out from `endStation`.

		- The time it takes to travel from `startStation` to `endStation` **may be different** from the time it takes to travel from `endStation` to `startStation`.

		- There will be at least one customer that has traveled from `startStation` to `endStation` before `getAverageTime` is called.

	
	

You may assume all calls to the `checkIn` and `checkOut` methods are consistent. If a customer checks in at time `t_1` then checks out at time `t_2`, then `t_1 < t_2`. All events happen in chronological order.

 

**Example 1:**

```

Input
[&quot;UndergroundSystem&quot;,&quot;checkIn&quot;,&quot;checkIn&quot;,&quot;checkIn&quot;,&quot;checkOut&quot;,&quot;checkOut&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;,&quot;getAverageTime&quot;,&quot;checkIn&quot;,&quot;getAverageTime&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;]
[[],[45,&quot;Leyton&quot;,3],[32,&quot;Paradise&quot;,8],[27,&quot;Leyton&quot;,10],[45,&quot;Waterloo&quot;,15],[27,&quot;Waterloo&quot;,20],[32,&quot;Cambridge&quot;,22],[&quot;Paradise&quot;,&quot;Cambridge&quot;],[&quot;Leyton&quot;,&quot;Waterloo&quot;],[10,&quot;Leyton&quot;,24],[&quot;Leyton&quot;,&quot;Waterloo&quot;],[10,&quot;Waterloo&quot;,38],[&quot;Leyton&quot;,&quot;Waterloo&quot;]]

Output
[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, &quot;Leyton&quot;, 3);
undergroundSystem.checkIn(32, &quot;Paradise&quot;, 8);
undergroundSystem.checkIn(27, &quot;Leyton&quot;, 10);
undergroundSystem.checkOut(45, &quot;Waterloo&quot;, 15);  // Customer 45 &quot;Leyton&quot; -&gt; &quot;Waterloo&quot; in 15-3 = 12
undergroundSystem.checkOut(27, &quot;Waterloo&quot;, 20);  // Customer 27 &quot;Leyton&quot; -&gt; &quot;Waterloo&quot; in 20-10 = 10
undergroundSystem.checkOut(32, &quot;Cambridge&quot;, 22); // Customer 32 &quot;Paradise&quot; -&gt; &quot;Cambridge&quot; in 22-8 = 14
undergroundSystem.getAverageTime(&quot;Paradise&quot;, &quot;Cambridge&quot;); // return 14.00000. One trip &quot;Paradise&quot; -&gt; &quot;Cambridge&quot;, (14) / 1 = 14
undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Waterloo&quot;);    // return 11.00000. Two trips &quot;Leyton&quot; -&gt; &quot;Waterloo&quot;, (10 + 12) / 2 = 11
undergroundSystem.checkIn(10, &quot;Leyton&quot;, 24);
undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Waterloo&quot;);    // return 11.00000
undergroundSystem.checkOut(10, &quot;Waterloo&quot;, 38);  // Customer 10 &quot;Leyton&quot; -&gt; &quot;Waterloo&quot; in 38-24 = 14
undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Waterloo&quot;);    // return 12.00000. Three trips &quot;Leyton&quot; -&gt; &quot;Waterloo&quot;, (10 + 12 + 14) / 3 = 12

```

**Example 2:**

```

Input
[&quot;UndergroundSystem&quot;,&quot;checkIn&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;,&quot;checkIn&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;,&quot;checkIn&quot;,&quot;checkOut&quot;,&quot;getAverageTime&quot;]
[[],[10,&quot;Leyton&quot;,3],[10,&quot;Paradise&quot;,8],[&quot;Leyton&quot;,&quot;Paradise&quot;],[5,&quot;Leyton&quot;,10],[5,&quot;Paradise&quot;,16],[&quot;Leyton&quot;,&quot;Paradise&quot;],[2,&quot;Leyton&quot;,21],[2,&quot;Paradise&quot;,30],[&quot;Leyton&quot;,&quot;Paradise&quot;]]

Output
[null,null,null,5.00000,null,null,5.50000,null,null,6.66667]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(10, &quot;Leyton&quot;, 3);
undergroundSystem.checkOut(10, &quot;Paradise&quot;, 8); // Customer 10 &quot;Leyton&quot; -&gt; &quot;Paradise&quot; in 8-3 = 5
undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Paradise&quot;); // return 5.00000, (5) / 1 = 5
undergroundSystem.checkIn(5, &quot;Leyton&quot;, 10);
undergroundSystem.checkOut(5, &quot;Paradise&quot;, 16); // Customer 5 &quot;Leyton&quot; -&gt; &quot;Paradise&quot; in 16-10 = 6
undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Paradise&quot;); // return 5.50000, (5 + 6) / 2 = 5.5
undergroundSystem.checkIn(2, &quot;Leyton&quot;, 21);
undergroundSystem.checkOut(2, &quot;Paradise&quot;, 30); // Customer 2 &quot;Leyton&quot; -&gt; &quot;Paradise&quot; in 30-21 = 9
undergroundSystem.getAverageTime(&quot;Leyton&quot;, &quot;Paradise&quot;); // return 6.66667, (5 + 6 + 9) / 3 = 6.66667

```

 

**Constraints:**

	- `1 <= id, t <= 10^6`

	- `1 <= stationName.length, startStation.length, endStation.length <= 10`

	- All strings consist of uppercase and lowercase English letters and digits.

	- There will be at most `2 * 10^4` calls **in total** to `checkIn`, `checkOut`, and `getAverageTime`.

	- Answers within `10^-5` of the actual value will be accepted.

---

**Links:** [Submissions](https://leetcode.com/problems/design-underground-system/) | [Solutions](https://leetcode.com/problems/design-underground-system/)
