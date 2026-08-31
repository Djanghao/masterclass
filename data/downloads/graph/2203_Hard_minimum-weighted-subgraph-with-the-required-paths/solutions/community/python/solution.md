# Three min costs to every node, 97% speed

**Author:** EvgenySH
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/1867689/](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/1867689/)

---

![image](./images/0.png)
```
class Solution:
    def minimumWeight(self, n: int, edges: List[List[int]], src1: int, src2: int, dest: int) -> int:
        forward, backward = dict(), dict()
        for start, end, weight in edges:
            if start in forward:
                if end in forward[start]:
                    forward[start][end] = min(weight, forward[start][end])
                else:
                    forward[start][end] = weight
            else:
                forward[start] = {end: weight}
            if end in backward:
                if start in backward[end]:
                    backward[end][start] = min(weight, backward[end][start])
                else:
                    backward[end][start] = weight
            else:
                backward[end] = {start: weight}

        def travel(origin: int, relations: dict, costs: list) -> None:
            level = {origin}
            costs[origin] = 0
            while level:
                new_level = set()
                for node in level:
                    if node in relations:
                        for next_node, w in relations[node].items():
                            if w + costs[node] < costs[next_node]:
                                new_level.add(next_node)
                                costs[next_node] = w + costs[node]
                level = new_level

        from_src1 = [inf] * n
        from_src2 = [inf] * n
        from_dest = [inf] * n

        travel(src1, forward, from_src1)
        travel(src2, forward, from_src2)
        travel(dest, backward, from_dest)

        combined_cost = min(sum(tpl)
                            for tpl in zip(from_src1, from_src2, from_dest))

        return combined_cost if combined_cost < inf else -1
```