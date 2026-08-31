# [332. Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 6266 | 1920 |

**Tags:** [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`graph`](https://leetcode.com/tag/graph), [`eulerian-circuit`](https://leetcode.com/tag/eulerian-circuit)

**Companies:** `pinterest`, `amazon`, `uber`, `microsoft`, `citadel`, `salesforce`, `yandex`, `bloomberg`, `google`, `facebook`, `palo-alto-networks`, `bookingcom`, `flipkart`, `ebay`, `twilio`, `capital-one`

## Description

You are given a list of airline `tickets` where `tickets[i] = [from_i, to_i]` represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from `"JFK"`, thus, the itinerary must begin with `"JFK"`. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

	- For example, the itinerary `["JFK", "LGA"]` has a smaller lexical order than `["JFK", "LGB"]`.

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

 

**Example 1:**

![image](./images/0.jpg)
```

Input: tickets = [[&quot;MUC&quot;,&quot;LHR&quot;],[&quot;JFK&quot;,&quot;MUC&quot;],[&quot;SFO&quot;,&quot;SJC&quot;],[&quot;LHR&quot;,&quot;SFO&quot;]]
Output: [&quot;JFK&quot;,&quot;MUC&quot;,&quot;LHR&quot;,&quot;SFO&quot;,&quot;SJC&quot;]

```

**Example 2:**

![image](./images/1.jpg)
```

Input: tickets = [[&quot;JFK&quot;,&quot;SFO&quot;],[&quot;JFK&quot;,&quot;ATL&quot;],[&quot;SFO&quot;,&quot;ATL&quot;],[&quot;ATL&quot;,&quot;JFK&quot;],[&quot;ATL&quot;,&quot;SFO&quot;]]
Output: [&quot;JFK&quot;,&quot;ATL&quot;,&quot;JFK&quot;,&quot;SFO&quot;,&quot;ATL&quot;,&quot;SFO&quot;]
Explanation: Another possible reconstruction is [&quot;JFK&quot;,&quot;SFO&quot;,&quot;ATL&quot;,&quot;JFK&quot;,&quot;ATL&quot;,&quot;SFO&quot;] but it is larger in lexical order.

```

 

**Constraints:**

	- `1 <= tickets.length <= 300`

	- `tickets[i].length == 2`

	- `from_i.length == 3`

	- `to_i.length == 3`

	- `from_i` and `to_i` consist of uppercase English letters.

	- `from_i != to_i`

---

**Links:** [Submissions](https://leetcode.com/problems/reconstruct-itinerary/) | [Solutions](https://leetcode.com/problems/reconstruct-itinerary/)
