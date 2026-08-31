# Java | Heavily Commented | Simple solution

**Author:** khaufnak
**Votes:** 51
**Link:** [https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/661648/](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/661648/)

---

Idea : `Probability = valid cases/all cases`

credits to @svll for identifying issues with code.

Example: [2, 1, 1]
for first ball, we can put both ball in first bin and 0 ball in second bin OR we can put 1 ball in first bin, second ball in 2nd bin OR we can put both in second bin

for second ball, we can put ball in first bin and 0 ball in second bin, similarly, we can put 1 ball in second bin.

same thing with the third ball

Try all possible permutations recursively. And, in the end check, if there are equal number of distinct balls in both bins or not.

```
class Solution {
    public double getProbability(int[] balls) {
        int sum = 0;
        for (int i = 0; i < balls.length; ++i) sum += balls[i];
        //Get all possible cases where we select same number of balls in both bins
        double all = allCases(balls, 0, 0, 0, 0, 0, sum);
        //Get all possible cases where we select same number of balls in both bins + we select same number of distinct balls
        double valid = casesWithEqualDistinctBalls(balls, 0, 0, 0, 0, 0, sum);

        return ((1.0) * valid / all);
    }

    // disF = distinct balls in first bin
    // disS = distinct balls in second bin
    // f = number of balls in first bin
    // s = number of balls in second bin
    public double allCases(int[] b, int pos, int f, int s, int disF, int disS, int sum) {
        if (pos == b.length) {
            // for all cases, we just need to check if both bins have same number of balls or not
            if (f == s) return fact(sum / 2) * fact(sum / 2); //numerator of our permutations
            return 0;
        }
        // we put all balls in second bin
        double answer = 1.0 * allCases(b, pos + 1, f, s + b[pos], disF, disS + 1, sum) / fact(b[pos]);

        // we put all balls in first bin
        answer += 1.0 * allCases(b, pos + 1, f + b[pos], s, disF + 1, disS, sum) / fact(b[pos]);
        for (int i = 1; i < b[pos]; ++i) {
            answer += 1.0 * (allCases(b, pos + 1, f + i, s + b[pos] - i, disF + 1, disS + 1, sum) / (fact(i) * fact(b[pos] - i))); // We put i ball in bin and b[pos] - i in another, now since all of them are of same color, we need to divide permutation by  (fact(i) * fact(b[pos]-i)), this acts as a denominator of our permutations
        }
        return answer;

    }

    // disF = distinct balls in first bin
    // disS = distinct balls in second bin
    // f = number of balls in first bin
    // s = number of balls in second bin
    public double casesWithEqualDistinctBalls(int[] b, int pos, int f, int s, int disF, int disS, int sum) {
        if (pos == b.length) {
            // we  need to check if both bins have same number of balls or not + number of distinct balls in each bin should be equal
            if (f == s && disF == disS) return fact(sum / 2) * fact(sum / 2); //numerator of our permutations
            return 0;
        }

        // we put all balls in second bin
        double answer = 1.0 * casesWithEqualDistinctBalls(b, pos + 1, f, s + b[pos], disF, disS + 1, sum) / fact(b[pos]);

        // we put all balls in first bin
        answer += 1.0 * casesWithEqualDistinctBalls(b, pos + 1, f + b[pos], s, disF + 1, disS, sum) / fact(b[pos]);
        for (int i = 1; i < b[pos]; ++i) {
            answer += 1.0 * (casesWithEqualDistinctBalls(b, pos + 1, f + i, s + b[pos] - i, disF + 1, disS + 1, sum) / (fact(i) * fact(b[pos] - i))); // We put i ball in bin and b[pos] - i in another, now since all of them are of same color, we need to divide permutation by  (fact(i) * fact(b[pos]-i)), this acts as a denominator of our permutations
        }
        return answer;

    }

    double fact(double n) {
        double res = 1;
        for (int i = 2; i <= n; i++)
            res = res * i;
        return res;
    }
}
```

Complexity: There can be total of (8 * 6) balls with 8 distinct. Complexity of recursion is f * s * disF * disS = O(48 * 48 * 8 * 8)

I understand that we can optimize this to a single function. But, it would make code difficult to understand for you.