# Can anyone help to solve my confusion? Thank you very much

**Author:** adamchen564
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/5111662/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/5111662/)

---

The question states that "For adjacent indices in the subsequence, their corresponding groups are unequal, i.e., groups[ij] != groups[ij+1], for each j where 0 < j + 1 < k.", my understanding is that the solution subsequences' groups can be '1,2,3,1,2,3', but many of the solutions that I have seen (that pass all testcases) seem to assume that the solution subsequences' groups are in increasing order (e.g. 1,2,3). I do not agree with these solutions as I think that the solution subsequences' groups do not have to be in strict increasing order.

I found a solution that passed all testcases and feed it into ChatGPT,ChatGPT says that "the solution looks forward and doesn't consider revisiting previously used groups after covering a sequence of other groups."

I am a beginner and I may have misunderstood the question itself. Can anyone help to solve my confusion? Thank you very much