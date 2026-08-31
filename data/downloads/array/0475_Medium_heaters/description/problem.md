# [475. Heaters](https://leetcode.com/problems/heaters/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2311 | 1191 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`, `anduril`, `google`, `bloomberg`, `zeta`, `ibm`, `tiktok`, `de-shaw`, `phonepe`

## Description

Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.

Every house can be warmed, as long as the house is within the heater's warm radius range. 

Given the positions of `houses` and `heaters` on a horizontal line, return *the minimum radius standard of heaters so that those heaters could cover all houses.*

**Notice** that all the `heaters` follow your radius standard, and the warm radius will be the same.

 

**Example 1:**

```

Input: houses = [1,2,3], heaters = [2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.

```

**Example 2:**

```

Input: houses = [1,2,3,4], heaters = [1,4]
Output: 1
Explanation: The two heaters were placed at positions 1 and 4. We need to use a radius 1 standard, then all the houses can be warmed.

```

**Example 3:**

```

Input: houses = [1,5], heaters = [2]
Output: 3

```

 

**Constraints:**

	- `1 <= houses.length, heaters.length <= 3 * 10^4`

	- `1 <= houses[i], heaters[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/heaters/) | [Solutions](https://leetcode.com/problems/heaters/)
