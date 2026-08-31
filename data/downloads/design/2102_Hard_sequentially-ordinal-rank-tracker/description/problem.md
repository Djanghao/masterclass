# [2102. Sequentially Ordinal Rank Tracker](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 405 | 47 |

**Tags:** [`design`](https://leetcode.com/tag/design), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`data-stream`](https://leetcode.com/tag/data-stream), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `amazon`

## Description

A scenic location is represented by its `name` and attractiveness `score`, where `name` is a **unique** string among all locations and `score` is an integer. Locations can be ranked from the best to the worst. The **higher** the score, the better the location. If the scores of two locations are equal, then the location with the **lexicographically smaller** name is better.

You are building a system that tracks the ranking of locations with the system initially starting with no locations. It supports:

	- **Adding** scenic locations, **one at a time**.

	- **Querying** the `i^th` **best** location of **all locations already added**, where `i` is the number of times the system has been queried (including the current query).
	
		For example, when the system is queried for the `4^th` time, it returns the `4^th` best location of all locations already added.

	
	

Note that the test data are generated so that **at any time**, the number of queries **does not exceed** the number of locations added to the system.

Implement the `SORTracker` class:

	- `SORTracker()` Initializes the tracker system.

	- `void add(string name, int score)` Adds a scenic location with `name` and `score` to the system.

	- `string get()` Queries and returns the `i^th` best location, where `i` is the number of times this method has been invoked (including this invocation).

 

**Example 1:**

```

Input
[&quot;SORTracker&quot;, &quot;add&quot;, &quot;add&quot;, &quot;get&quot;, &quot;add&quot;, &quot;get&quot;, &quot;add&quot;, &quot;get&quot;, &quot;add&quot;, &quot;get&quot;, &quot;add&quot;, &quot;get&quot;, &quot;get&quot;]
[[], [&quot;bradford&quot;, 2], [&quot;branford&quot;, 3], [], [&quot;alps&quot;, 2], [], [&quot;orland&quot;, 2], [], [&quot;orlando&quot;, 3], [], [&quot;alpine&quot;, 2], [], []]
Output
[null, null, null, &quot;branford&quot;, null, &quot;alps&quot;, null, &quot;bradford&quot;, null, &quot;bradford&quot;, null, &quot;bradford&quot;, &quot;orland&quot;]

Explanation
SORTracker tracker = new SORTracker(); // Initialize the tracker system.
tracker.add(&quot;bradford&quot;, 2); // Add location with name=&quot;bradford&quot; and score=2 to the system.
tracker.add(&quot;branford&quot;, 3); // Add location with name=&quot;branford&quot; and score=3 to the system.
tracker.get();              // The sorted locations, from best to worst, are: branford, bradford.
                            // Note that branford precedes bradford due to its higher score (3 &gt; 2).
                            // This is the 1st time get() is called, so return the best location: &quot;branford&quot;.
tracker.add(&quot;alps&quot;, 2);     // Add location with name=&quot;alps&quot; and score=2 to the system.
tracker.get();              // Sorted locations: branford, alps, bradford.
                            // Note that alps precedes bradford even though they have the same score (2).
                            // This is because &quot;alps&quot; is lexicographically smaller than &quot;bradford&quot;.
                            // Return the 2nd best location &quot;alps&quot;, as it is the 2nd time get() is called.
tracker.add(&quot;orland&quot;, 2);   // Add location with name=&quot;orland&quot; and score=2 to the system.
tracker.get();              // Sorted locations: branford, alps, bradford, orland.
                            // Return &quot;bradford&quot;, as it is the 3rd time get() is called.
tracker.add(&quot;orlando&quot;, 3);  // Add location with name=&quot;orlando&quot; and score=3 to the system.
tracker.get();              // Sorted locations: branford, orlando, alps, bradford, orland.
                            // Return &quot;bradford&quot;.
tracker.add(&quot;alpine&quot;, 2);   // Add location with name=&quot;alpine&quot; and score=2 to the system.
tracker.get();              // Sorted locations: branford, orlando, alpine, alps, bradford, orland.
                            // Return &quot;bradford&quot;.
tracker.get();              // Sorted locations: branford, orlando, alpine, alps, bradford, orland.
                            // Return &quot;orland&quot;.

```

 

**Constraints:**

	- `name` consists of lowercase English letters, and is unique among all locations.

	- `1 <= name.length <= 10`

	- `1 <= score <= 10^5`

	- At any time, the number of calls to `get` does not exceed the number of calls to `add`.

	- At most `4 * 10^4` calls **in total** will be made to `add` and `get`.

---

**Links:** [Submissions](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/) | [Solutions](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/)
