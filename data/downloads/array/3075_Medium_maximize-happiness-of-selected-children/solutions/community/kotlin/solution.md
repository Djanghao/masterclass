# Beats 100% | Java,  C++, Python, Javascript| Less Code ✅✅

**Author:** Ikapoor123
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/4851380/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/4851380/)

---

# Please Upvote \u2705\u2705
ans: A long variable initialized to 0 to store the maximum happiness sum.
min: An integer variable initialized to 0 to keep track of the minimum happiness given so far.

- The happiness array is sorted in descending order using Arrays.sort(happiness). This ensures that people with higher happiness levels get prioritized.

- The code iterates through the happiness array in reverse order (from highest happiness to lowest) using a for loop starting from i = happiness.length - 1.
- The loop continues as long as i is greater than or equal to 0 and k (remaining people to be happy) is greater than 0.
- Inside the loop, for each person (happiness[i]), the difference between their happiness and the min happiness given so far is calculated. This represents the additional happiness gained by giving happiness to this person.
- If the happiness gain (happiness[i] - min) is positive (meaning the person gets happier), it's added to the ans (total happiness sum).
The min happiness is then incremented by 1 to account for the happiness given to the current person.
- After iterating through all relevant elements, the function returns the ans (maximum happiness sum achievable).

# Please Upvote\u2705\u2705
# Code
``` java []
class Solution {
    public long maximumHappinessSum(int[] happiness, int k) {
        long ans = 0;
        int min = 0;
        
        Arrays.sort(happiness);
        
        for(int i=happiness.length-1;i>=0 && k>0;i--){
           
            k--;
            if(min<happiness[i])
            ans+=happiness[i]-min;
            min++;
        }
        return ans;
    }
}
```
```javascript []

var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => b - a);

  let ans = 0;
  let minHappiness = 0;

  for (let i = 0; i < happiness.length && k > 0; i++) {
    if (minHappiness < happiness[i]) {
      ans += happiness[i] - minHappiness;
    }
    minHappiness++;
    k--;
  }

  return ans;
};
```
```python []
class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        ans = 0
        min_happiness = 0

       
        happiness.sort(reverse=True)

        for i in range(len(happiness)):
            if i >= k:
                break

          
            happiness_gain = happiness[i] - min_happiness

            
            ans += happiness_gain

            min_happiness += 1

        return ans
```
```C++ []
class Solution {
public:
    long long maximumHappinessSum(vector<int>& happiness, int k) {
        long long ans = 0;
  int minHappiness = 0;

  
  sort(happiness.begin(), happiness.end(), std::greater<int>());

  for (int i = 0; i < k; i++) {
    if (minHappiness < happiness[i]) {
      ans += happiness[i] - minHappiness;
    }
    minHappiness++;
  }

  return ans;
    }
};
```
# Just
![smile.png](./images/0.png)

