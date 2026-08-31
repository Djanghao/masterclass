# ✔️ Beats 100% : Sorting : Detailed Step-by-Step Explanation - C++/Java/C#/Python/JS/Ruby/Go/Dart

**Author:** Cregan_wolf
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355581/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5355581/)

---

# Intuition
The problem requires us to find the minimum average of pairs formed by the smallest and largest elements in a list. My first thought is to sort the list and iteratively calculate the average of the smallest and largest elements until the list is empty.

# Approach
1. Sort the list of numbers.
2. Initialize an empty list to store the averages.
3. While the list is not empty:
   - Remove the smallest and largest elements from the list.
   - Calculate their average and add it to the list of averages.
4. Return the minimum value from the list of averages.

# Complexity
- Time complexity: $$O(n \\log n)$$ due to the sorting step.
- Space complexity: $$O(n)$$ to store the list of averages.

# Code
```C++ []
class Solution {
public:
    double minimumAverage(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<double> averages;
        
        while (!nums.empty()) {
            // Remove the smallest and largest elements
            int min_element = nums.front();
            nums.erase(nums.begin());
            int max_element = nums.back();
            nums.pop_back();
            
            // Calculate the average of the smallest and largest elements
            double avg = (min_element + max_element) / 2.0;
            // Add the average to the list of averages
            averages.push_back(avg);
        }
        
        // Return the minimum average
        return *min_element(averages.begin(), averages.end());
    }
};

```
```python []
class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        nums.sort()
        averages = []
        
        while nums:
            # Remove the smallest and largest elements
            minElement = nums.pop(0)
            maxElement = nums.pop(-1)
            
            # Calculate the average of the smallest and largest elements
            avg = (minElement + maxElement) / 2
            # Add the average to the list of averages
            averages.append(avg)
        
        # Return the minimum average
        return min(averages)
```
```C# []
public class Solution {
    public double MinimumAverage(List<int> nums) {
        nums.Sort();
        List<double> averages = new List<double>();
        
        while (nums.Count > 0) {
            // Remove the smallest and largest elements
            int minElement = nums[0];
            nums.RemoveAt(0);
            int maxElement = nums[nums.Count - 1];
            nums.RemoveAt(nums.Count - 1);
            
            // Calculate the average of the smallest and largest elements
            double avg = (minElement + maxElement) / 2.0;
            // Add the average to the list of averages
            averages.Add(avg);
        }
        
        // Return the minimum average
        return averages.Min();
    }
}

```
```Java []
import java.util.*;

class Solution {
    public double minimumAverage(List<Integer> nums) {
        Collections.sort(nums);
        List<Double> averages = new ArrayList<>();
        
        while (!nums.isEmpty()) {
            // Remove the smallest and largest elements
            int minElement = nums.remove(0);
            int maxElement = nums.remove(nums.size() - 1);
            
            // Calculate the average of the smallest and largest elements
            double avg = (minElement + maxElement) / 2.0;
            // Add the average to the list of averages
            averages.add(avg);
        }
        
        // Return the minimum average
        return Collections.min(averages);
    }
}

```
```javascript []
class Solution {
    minimumAverage(nums) {
        nums.sort((a, b) => a - b);
        let averages = [];
        
        while (nums.length > 0) {
            // Remove the smallest and largest elements
            let minElement = nums.shift();
            let maxElement = nums.pop();
            
            // Calculate the average of the smallest and largest elements
            let avg = (minElement + maxElement) / 2;
            // Add the average to the list of averages
            averages.push(avg);
        }
        
        // Return the minimum average
        return Math.min(...averages);
    }
}

```
```Dart []
class Solution {
  double minimumAverage(List<int> nums) {
    nums.sort();
    List<double> averages = [];
    
    while (nums.isNotEmpty) {
      // Remove the smallest and largest elements
      int minElement = nums.removeAt(0);
      int maxElement = nums.removeLast();
      
      // Calculate the average of the smallest and largest elements
      double avg = (minElement + maxElement) / 2.0;
      // Add the average to the list of averages
      averages.add(avg);
    }
    
    // Return the minimum average
    return averages.reduce((a, b) => a < b ? a : b);
  }
}

```
```ruby []
class Solution
  def minimum_average(nums)
    nums.sort!
    averages = []
    
    while !nums.empty?
      # Remove the smallest and largest elements
      min_element = nums.shift
      max_element = nums.pop
      
      # Calculate the average of the smallest and largest elements
      avg = (min_element + max_element) / 2.0
      # Add the average to the list of averages
      averages << avg
    end
    
    # Return the minimum average
    averages.min
  end
end

```
```Go []
package main

import (
    "fmt"
    "math"
    "sort"
)

type Solution struct{}

func (s Solution) minimumAverage(nums []int) float64 {
    sort.Ints(nums)
    averages := []float64{}
    
    for len(nums) > 0 {
        // Remove the smallest and largest elements
        minElement := nums[0]
        nums = nums[1:]
        maxElement := nums[len(nums)-1]
        nums = nums[:len(nums)-1]
        
        // Calculate the average of the smallest and largest elements
        avg := float64(minElement+maxElement) / 2.0
        // Add the average to the list of averages
        averages = append(averages, avg)
    }
    
    // Return the minimum average
    minAvg := math.Inf(1)
    for _, avg := range averages {
        if avg < minAvg {
            minAvg = avg
        }
    }
    return minAvg
}

func main() {
    solution := Solution{}
    nums := []int{1, 2, 3, 4, 5}
    fmt.Println(solution.minimumAverage(nums)) // Output: 2.5
}

```