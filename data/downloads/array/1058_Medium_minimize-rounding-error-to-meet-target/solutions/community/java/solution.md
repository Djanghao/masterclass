# Java O(NlogN) greedy solution, sorting

**Author:** canadianczar
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/733321/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/733321/)

---

Intuition is to get the min/max from floor()/ceil() of all prices. Then the difference between min and target is the number of prices that need to be rounded up; the rest are rounded down. So for each price save price - floor(price); then sort the errors. The greatest errors would be rounded up to 1, while the least errors would be rounded down to 0.
```
class Solution {
    public String minimizeError(String[] prices, int target) {
        List<Double> l = new ArrayList();
        int minsum = 0, maxsum = 0;
        for (String price : prices) {
            double p = Double.parseDouble(price);
            int min = (int)Math.floor(p), max = (int)Math.ceil(p);
            minsum += min;
            maxsum += max;
            l.add(p - min);
        }
        if (target < minsum || target > maxsum) return "-1";
        Collections.sort(l);
        int lo = 0, hi = l.size()-1;
        double error = 0;
        while (minsum < target) {
            minsum++;
            error += 1 - l.get(hi--);
        }
        while (lo <= hi) {
            error += l.get(lo++);
        }
        return String.format("%.3f", error);
    }
}