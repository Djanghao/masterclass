# Poor Pigs | One Line Solution - PHP | 100% fastest + 100% space

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/935664/](https://leetcode.com/problems/poor-pigs/solutions/935664/)

---

Runtime: 4 ms, faster than 100.00% of PHP online submissions for Poor Pigs.
Memory Usage: 15.7 MB, less than 100.00% of PHP online submissions for Poor Pigs.

    function poorPigs($buckets, $minutesToDie, $minutesToTest) {
        return ceil(log($buckets,intdiv($minutesToTest,$minutesToDie)+1));
    }