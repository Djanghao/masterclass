# Java Solution using Binary search

**Author:** glaurung0
**Votes:** 1
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/2754033/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/2754033/)

---

The final water level after equalizing varies between 0 and 1e5. For any given value of possible final water level-  ```level```, we can check if this level is possible by going through the bucket levels and computing how much it needs to receive/give away.

If the bucket ```i``` has lesser water level, it should receive the difference in levels. In this case, the actual amount to be poured out will be ```(level - buckets[i])/(1-lossPercentage)```. This will be added to our total ```transferred``` variable.

However, if the bucket ```i``` has excess of water, the difference will have to be poured out. This will be equal to ```(buckets[i] - level)```. This will be subtracted from the ```transferred``` variable.

On the whole we apply binary search for finding the value of ```level``` that will be ```0```.


```
class Solution {
	public static double lowerBound(double l, double r, double delta, Predicate<Double> pred) {
		while (r - l > delta) {
			var mid = l + (r - l) / 2;
			if (pred.test(mid)) r = mid;
			else l = mid;
		}
		return r;
	}

	public double equalizeWater(int[] buckets, int loss) {
		double lossFraction = (loss / 100D);
		double delta        = 1e-5;
		return lowerBound(0, 1e5 + 1, delta, level -> {
			double transferred = 0;
			for (int bucket : buckets) {
				if (bucket < level) {
					transferred += (level - bucket) / (1 - lossFraction);
				} else if (bucket > level) {
					transferred -= (bucket - level);
				}
			}
			return transferred > 0;
		});
	}
}
```



