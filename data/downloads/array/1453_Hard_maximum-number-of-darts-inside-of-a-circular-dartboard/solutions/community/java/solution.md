# [Java] Angular Sweep with Comments

**Author:** caohuicn
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/636659/](https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/636659/)

---

Never heard of Angular Sweep before. Got the idea from geeks :)  Converted it into Java. 
Please search *** for the graph and explanation. The only tricky part is in compareTo where we have to make sure we first count points that enters the circle before we remove points that exits the circle when both points have the same angle.
Hope it helps.

```
class Solution {
    static class Angle implements Comparable<Angle> {
        double a;
        boolean enter;

        Angle(double a, boolean enter) {
            this.a = a;
            this.enter = enter;
        }

        @Override
        public int compareTo(Angle o) {
            //make sure enter is ahead of exit
            return (a > o.a) ? 1 : (a < o.a) ? -1 : enter == o.enter ? 0 : enter ? -1 : 1;
        }
    }

    int getPointsInside(int i, double r, int n, int[][] points, double[][] dis) {
        List<Angle> angles = new ArrayList<>(2 * n);

        for (int j = 0; j < n; j++) {
            if (i != j && dis[i][j] <= 2 * r) {
                // angle between line [i, j] and line [i, center]
                double B = Math.acos(dis[i][j] / (2 * r));
                // angle between line [i, j] and x axis
                double A = Math.atan2(points[j][1] - points[i][1], points[j][0] - points[i][0]);
                double alpha = A - B;
                double beta = A + B;
                angles.add(new Angle(alpha, true));
                angles.add(new Angle(beta, false));
            }
        }

        Collections.sort(angles);

        int count = 1, res = 1;
        for (Angle a : angles) {
            if (a.enter) {
                count++;
            } else {
                count--;
            }

            if (count > res) {
                res = count;
            }
        }

        return res;
    }

    public int numPoints(int[][] points, int r) {
        {
            int n = points.length;
            double[][] dis = new double[n][n];
            for (int i = 0; i < n - 1; i++) {
                for (int j = i + 1; j < n; j++) {
                    dis[i][j] = dis[j][i] = Math.sqrt(Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2));
                }
            }

            int ans = 0;
            for (int i = 0; i < n; i++) {
                ans = Math.max(ans, getPointsInside(i, r, n, points, dis));
            }

            return ans;
        }
    }
}
```