# Easy || Beginner friendly || Detailed with Intuition|| cpp solution

**Author:** abhik2003
**Votes:** 97
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5506777/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5506777/)

---

# Intuition
- what can be possible values of X
- it's 0 to k
- Now we will check for all possible values what is the minimum.
- For each pair for a X number of changes required may be
  - 0 : If difference is equal to X
  - 1 : If changing one we can achieve the target
  - 2 : If we need to change both.
- Now let's focus on case 1 and case 2
    - suppose the pair is a,b and `a < b`
    - So in one change what can be max X???
    - What can we do in one move.
      - convert a->0 : in this case max X can be b
      - convert b->k : in this case max X can be k-a
      - so in one change we can have maximum X `threshold = max(max(a, b), k - min(a, b))`
    - If X> threshold we need 2 changes.

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- We have stored all this boundary value for which we need 2 changes for a particular pair.
- Later using binary search we can found easily how many 2 changes operation required for a particular X value in a faster way.
- We have also stored the initial difference in a freq vector.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n + n*logn(n) + k*log(n))$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k+n/2)$$ //Freq vector [size : k]
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Can we do something better ?
- Probably we can. How?
- Instead of binary search we can convert this with an array of prefix sum. Where i th element will store the count less than or equal i.
- In this way we can avoid the binary search and can get our query at O(1) time for each in the last step.
- And also no need to sort the array v.
- Just make it an array of size k and store the frequency of threshold variable.
# \uD83D\uDE4F \uD83D\uDE4F PLEASE UPVOTE IF U FIND IT USEFUL \uD83D\uDE4F\uD83D\uDE4F
# Code
```


class Solution
{
public:
    int minChanges(vector<int> &nums, int k)
    {
        vector<int> freq(k+1);
        vector<int> v;
        int n = nums.size();
        for (int i = 0; i < n / 2; i++){
            int dif = abs(nums[i] - nums[n - i - 1]);
            freq[dif]++;

            int a = nums[i], b = nums[n - i - 1];
            int threshold = max(max(a, b), k - min(a, b));
            v.push_back(threshold);
        }

        sort(v.begin(), v.end());

        int ans = n / 2;
        n /= 2;
        for (int i = 0; i < freq.size(); i++)
        {
            int rest = n - freq[i];
            int greater = lower_bound(v.begin(), v.end(), i) - v.begin();
            ans = min(ans, rest + greater);
        }
        return ans;
    }
};
```