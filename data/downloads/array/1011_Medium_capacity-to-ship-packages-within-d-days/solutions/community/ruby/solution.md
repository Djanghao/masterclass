# ✅Detailed Explanation || Intuition || Java, Python, Ruby, Javascript Solution || Binary search

**Author:** chintamanipala
**Votes:** 3
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/4515866/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/4515866/)

---

# Intuition
 - Exploring Weight Capacities:
    - To ship packages within a certain number of days, we're looking for the minimum weight capacity needed to achieve this.
The minimum possible weight capacity should be the maximum weight of any single package because we need to ensure at least one package can be shipped per day.
    - The maximum possible weight capacity should be the sum of all package weights because if the ship's capacity exceeds this, we can ship all packages in one day.
    
- Simulating Shipping with Binary Search:

    - We use binary search on the range of possible weight capacities.
For each capacity guess, we simulate the shipping process:
        - We iterate through the packages, keeping track of the current day's load and incrementing the day when the load exceeds the capacity.
        - If the number of days required with this capacity is within the given days, we move to lower capacities to find the minimum.
If the number of days exceeds the given days, we need to increase the capacity to ship the packages within the specified days.

- Optimal Capacity:
    - The binary search continues to narrow down the range until it converges on the minimum weight capacity that fulfills the shipping requirements within the given days.

# Approach
- Define Search Space:
    - Determine the range of weight capacities within which the optimal solution might lie.
        - The minimum capacity required to ship any package individually is the maximum weight in the list.
        - The maximum capacity would be the sum of all weights, as shipping all packages in a single day would require a capacity equal to or greater than this sum.

- Binary Search:
    - Use binary search to find the minimum capacity that satisfies the shipping requirements.
    - In each iteration of binary search:
        - Calculate the mid of the current range of capacities.
        - Simulate the shipping process using this mid capacity:
        - Iterate through the packages and maintain a load variable representing the weight loaded on the current day.
        - Increment the day count whenever the load exceeds the current capacity.
        - Check if the total number of days required (day) with this capacity is within the given days.
            - Based on the comparison:
                -  If the number of days required is within the given days, update the upper bound of the search range.
                - If the number of days required exceeds the given days, update the lower bound of the search range.
                
- Result:

    - Once the binary search converges (lower bound surpasses the upper bound), return the lower bound as it holds the minimum capacity that satisfies the shipping constraints within the given number of days.
# Complexity
- Time complexity:
    - Binary Search Iterations: The binary search is performed on the range from the maximum weight in the list to the total sum of weights. It takes log(S) iterations to converge to a single value.

    - Feasibility Check: For each iteration of the binary search, there's a calculation to determine if it's feasible to ship all packages within the given days using a certain capacity. This operation traverses through the weights array, taking O(N) time in each iteration.
    - Therefore, the overall time complexity is O(N * log(S)), where N is the number of elements in the array and S is the sum of all elements in the array
- Space complexity:
    - The space complexity of the algorithm is O(1), indicating that the amount of additional space used remains constant regardless of the input size.

# Java Code
```
class Solution {
    public static int countday(int arr[],int capacity){
        int day=1;
        int load=0;
        int n=arr.length;
        for(int i=0;i<n;i++){
            if(load+arr[i]>capacity){
                day++;
                load=arr[i];
            }else{
                load+=arr[i];
            }
        }
        return day;
    }
    public int shipWithinDays(int[] weights, int days) {
        int low=0;
        int high=0;
        for(int ele:weights){
            low=Math.max(low,ele);
            high+=ele;
        }
        while(low<=high){
            int mid=(low+high)/2;
            if(countday(weights,mid)<=days){
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        return low;
    }
}
```


```javascript []
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    const feasible = (capacity) => {
        let count = 1;
        let total = 0;

        for (const weight of weights) {
            if (total + weight > capacity) {
                count++;
                total = weight;
            } else {
                total += weight;
            }
        }

        return count <= days;
    };

    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (feasible(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

```
```python []
class Solution(object):
    def shipWithinDays(self, weights, days):
        def feasible(capacity):
            count = 1
            total = 0
            for weight in weights:
                if total + weight > capacity:
                    count += 1
                    total = weight
                else:
                    total += weight
            return count <= days

        left, right = max(weights), sum(weights)

        while left < right:
            mid = (left + right) // 2
            if feasible(mid):
                right = mid
            else:
                left = mid + 1

        return left

```
```ruby []
# @param {Integer[]} weights
# @param {Integer} days
# @return {Integer}
def ship_within_days(weights, days)
    feasible = lambda do |capacity|
        count = 1
        total = 0
        weights.each do |weight|
            if total + weight > capacity
                count += 1
                total = weight
            else
                total += weight
            end
        end
        count <= days
    end

    left = weights.max
    right = weights.sum

    while left < right
        mid = (left + right) / 2
        if feasible.call(mid)
            right = mid
        else
            left = mid + 1
        end
    end

    left
end

```

# Credit
- Auther: **Chintamani Pala**
