# C++, Java, Python3, C, Kotlin, Rust || Fast, Short, Bottom up DP

**Author:** dudeandcat
**Votes:** 0
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/5555801/](https://leetcode.com/problems/toss-strange-coins/solutions/5555801/)

---

A bottom-up iterative DP solution.

**--- C++ code ---**
```
class Solution {
public:
    double probabilityOfHeads(vector<double>& prob, int target) {
        vector<double> dp(target + 2, 0.0);
        dp[1] = 1;
        for (double prb : prob) 
            for (int i = target + 1; i > 0; i--)
                dp[i] = dp[i - 1] * prb + dp[i] * (1 - prb);
        return dp[target + 1];
    }
};
```
**--- Java code ---**
```
class Solution {
    public double probabilityOfHeads(double[] prob, int target) {
        double[] dp = new double[target + 2];
        dp[1] = 1;
        for (double prb : prob) 
            for (int i = target + 1; i > 0; i--)
                dp[i] = dp[i - 1] * prb + dp[i] * (1 - prb);
        return dp[target + 1];
    }
}
```
**--- Python3 code ---**
```
class Solution(object):
    def probabilityOfHeads(self, prob: List[float], target: int) -> float:
        dp = [0, 1] + [0]*target
        for prb in prob:
            for i in range(target + 1, 0, -1):
                dp[i] = dp[i - 1] * prb + dp[i] * (1 - prb)
        return dp[target + 1]
```
**--- C code ---**
```
double probabilityOfHeads(double* prob, int probSize, int target){
    double dp[target + 2];
    memset(dp, 0, (target + 2) * sizeof(double));
    dp[1] = 1.0;
    for (int j = probSize - 1; j >= 0; j--)
        for (int i = target + 1; i > 0; i--)
            dp[i] = dp[i - 1] * prob[j] + dp[i] * (1 - prob[j]);
    return dp[target + 1];
}
```
**--- Kotlin code ---**
```
class Solution {
    fun probabilityOfHeads(prob: DoubleArray, target: Int): Double {
        var dp = DoubleArray(target + 2){0.0}
        dp[1] = 1.0
        for (prb in prob) 
            for (i in target + 1 downTo 1)
                dp[i] = dp[i - 1] * prb + dp[i] * (1 - prb)
        return dp[target + 1]
    }
}
```
**--- Rust code ---**
```
impl Solution {
    pub fn probability_of_heads(prob: Vec<f64>, target: i32) -> f64 {
        let targ = target as usize;
        let mut dp = vec![0.0; targ + 2];
        dp[1] = 1.0;
        for prb in prob {
            for i in (1..=(targ + 1)).rev() {
                dp[i] = dp[i - 1] * prb + dp[i] * (1.0 - prb);
            }
        }
        return dp[targ + 1];
    }
}
```