# Readable C++ Binary Search Solution

**Author:** austinpatton
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/4475905/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/4475905/)

---

# Complexity
- Time complexity: O(n * log(m)), where n is the length of the parameter buckets and m is the maximum value within the parameter buckets

- Space complexity: O(1)

# Code
```
class Solution {
public:
    double equalizeBuckets(const std::vector<int>& buckets, const double mid, const double retentionPercentage)
    {
        double netDifference = 0; 
        for(const int& bucket : buckets)
        {
            if(bucket > mid)
            {
                double diff = bucket - mid;
                netDifference += (retentionPercentage * diff);
            }
            else if(bucket < mid)
            {
                double diff = mid - bucket;
                netDifference -= diff;
            }
        }

        return netDifference;

    }

    double equalizeWater(vector<int>& buckets, int loss) {

        double leftPtr = 10001;
        double rightPtr = 0;
        
        for(const int& bucket : buckets)
        {
            rightPtr = std::max(rightPtr, static_cast<double>(bucket));
            leftPtr = std::min(leftPtr, static_cast<double>(bucket));
        }

        const double retentionPercentage = 1 - (loss * .01);

        // while leftPtr < rightPtr within the acceptable level
        // of error precision that the problem statement specifies
        while(rightPtr - leftPtr > 0.00001)
        {
            double mid = leftPtr + (rightPtr - leftPtr) / 2.0;

            double netDiff = equalizeBuckets(buckets, mid, retentionPercentage);

            if(netDiff >= 0.0)
            {
                leftPtr = mid;
            }
            else if(netDiff < 0.0)
            {
                rightPtr = mid;
            }
        }

        return leftPtr;
    }
};
```