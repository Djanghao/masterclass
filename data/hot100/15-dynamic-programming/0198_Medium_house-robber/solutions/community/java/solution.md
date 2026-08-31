# JAVA DP Solution, O(n) runtime and O(1) space, with inline comment

**Author:** wenwen
**Votes:** 199
**Link:** [https://leetcode.com/problems/house-robber/solutions/55695/](https://leetcode.com/problems/house-robber/solutions/55695/)

---

    public int rob(int[] num) {
        int rob = 0; //max monney can get if rob current house
        int notrob = 0; //max money can get if not rob current house
        for(int i=0; i<num.length; i++) {
            int currob = notrob + num[i]; //if rob current value, previous house must not be robbed
            notrob = Math.max(notrob, rob); //if not rob ith house, take the max value of robbed (i-1)th house and not rob (i-1)th house
            rob = currob;
        }
        return Math.max(rob, notrob);
    }