# [Java/C++/Python] Sorting nlog(n) Solution with Proof

**Author:** yhkuo41
**Votes:** 67
**Link:** [https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5715993/](https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5715993/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The damage Bob takes is related to the time it takes him to kill each enemy. Let the damage per second dealt by each enemy be represented as $[..., d_i, ..., d_j, ...]$, and the time required to kill each enemy as $[..., t_i, ..., t_j, ...]$. 

Consider two scenarios:
* Bob kills the i-th enemy first and the j-th enemy second. The total damage Bob takes in this case is:
$$t_id_i + (t_i + t_j)d_j + others = t_id_i + t_jd_j + others + t_id_j$$
* Bob kills the j-th enemy first and the i-th enemy second. The total damage Bob takes here is:
$$t_jd_j + (t_i + t_j)d_i + others = t_id_i + t_jd_j + others + t_jd_i$$

The only difference between the two scenarios is the last term. If $t_i d_j < t_jd_i$, then Bob should kill the i-th enemy first to minimize the total damege he will take, and vice versa.


# Approach
<!-- Describe your approach to solving the problem. -->
Convert enemies' `health` into the time it takes Bob to kill them, and sort the indexes by $t_id_j$.

# Complexity
- Time complexity: $$O(nlog(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public long minDamage(int power, int[] damage, int[] health) {
        int n = damage.length;
        for (int i = 0; i < n; ++i) {
            health[i] = (health[i] + power - 1) / power;
        }
        List<Integer> indexes = new ArrayList<>();
        for (int i = 0; i < n; ++i) {
            indexes.add(i);
        }
        indexes.sort((i, j) -> {
            return Integer.compare(health[i] * damage[j], health[j] * damage[i]);
        });
        long res = 0;
        int curTime = 0;
        for (int i : indexes) {
            curTime += health[i];
            res += curTime * damage[i];
        }
        return res;
    }
}
```
```cpp []
class Solution {
public:
    long long minDamage(int power, vector<int>& damage, vector<int>& health) {
        int n = damage.size();
        for (auto& h : health) {
            h = (h + power - 1) / power;
        }
        vector<int> indexes(n);
        for (int i = 0; i < n; ++i) {
            indexes[i] = i;
        }
        sort(indexes.begin(), indexes.end(), [&](int i, int j) {
            return health[i] * damage[j] < health[j] * damage[i];
        });
        long long res = 0;
        long long curTime = 0;
        for (const auto& i : indexes) {
            curTime += health[i];
            res += curTime * damage[i];
        }
        return res;
    }
};
```
```python []
class Solution:
    def minDamage(self, power: int, damage: list[int], health: list[int]) -> int:
        n = len(damage)
        for i in range(n):
            health[i] = (health[i] + power - 1) // power
        indexes = sorted(
            range(n),
            key=cmp_to_key(lambda i, j: health[i] * damage[j] - health[j] * damage[i]),
        )
        res = 0
        curTime = 0
        for i in indexes:
            curTime += health[i]
            res += curTime * damage[i]
        return res
```

# Another Approach
If you move terms of the equation $t_i d_j < t_jd_i$, you will get $\\Large\\frac {d_j}{t_j} < \\frac{d_i}{t_i}$. That's why sorting $\\Large\\frac {d_i} {t_i}$ in descending order also works.

**Please upvote if you like it :)**