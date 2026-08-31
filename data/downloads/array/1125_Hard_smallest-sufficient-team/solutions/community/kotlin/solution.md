# Bitmask BFS

**Author:** mihaillinkov
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3773294/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3773294/)

---

# Intuition
First let's look at constraints. Number of skills is limited by 16, so all possible combinations of skills for the worst case are limited by $$ 2^{16} $$ which is $$65536$$. We can consider every people's skills as bit mask, where $$1$$ at $$i^{th}$$ possition means worker has required_skill at position $$i$$. 
For example:
```
req_skills=["java", "c++", "python"], 
people_skills = ["c++", "java"]
bit_mask_binary = 110 
bit mask_decimal = 6
``` 

# Approach
Let's assume that we are initially at position $$0$$, and our goal is to achieve position target $$ 2 ^ {len(reqskills)} - 1 $$. We will consider skills bit mask $$s$$ as transition from position $$pos$$ to position $$pos \\ OR\\ s$$ where $$or$$ is bitwise operator. 
We need to iterate from position $$0$$ to $$target$$ and at each step try to apply each transition(people's skills bit mask) if it improves distance. For all distance improvemnents we have to memorize transitions.
As upgrade instead of iterating through all positions from $$0$$ to $$target$$, $$BFS$$ could be used.

Then we only have to build the final result from our memorized transitions starting at $$target$$ and until we reach $$0$$.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(2 ^{N}* M)$$ where $$N$$ - number of required skills and $$M$$ - number of people. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2 ^ N)$$ where $$N$$ - number of required skills
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
const val MAX = 1000000

class Solution {
    fun smallestSufficientTeam(req_skills: Array<String>, people: List<List<String>>): IntArray {
        val target = (1 shl (req_skills.size)) - 1
        val peopleSkills = people.map { toNumber(it, req_skills) }
        val from = Array<Pair<Int, Int>>(target + 1) { 0 to 0 }
        val dist = IntArray(target + 1) { MAX }
        dist[0] = 0
        for (pos in 0 .. target) {
            for ((i, s) in peopleSkills.withIndex()) {
                if (dist[pos] + 1 < dist[pos or s]) {
                    dist[pos or s] = dist[pos] + 1
                    from[pos or s] = pos to i
                }
            }
        }

        val res = mutableListOf<Int>()
        var v = target
        while (v != 0) {
            res.add(from[v].second)
            v = from[v].first
        }
        return res.toIntArray()
    }

    fun toNumber(skills: List<String>, reqSkills: Array<String>): Int {
        return skills.map { 1 shl (reqSkills.indexOf(it)) }.sum()
    }
}
```