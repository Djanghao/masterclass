# 🍀🍀🍀[Java] Intuition described in crazy details!

**Author:** kesshb
**Votes:** 24
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5284305/](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5284305/)

---

# Intuition
This problem is a tricky one, and unfortunately there is no simple way to solve it without several intuition findings.
If you don't find this intuition, **it's absolutely fine and normal**. To see this, you need to have an experience of many-many similar problems, after which some common pattern will come to your mind when seeing another problem of this sort. And even then, it is not guaranteed. That's why the Intuition part is normally the hardest one - as there is no proper way to organize it.

Back to the problem. Let's try to find the intuition under this:
1) First, it seems our x will grow as we go, and we will need to make our decisions based on the current x and the element we are currently at (from the rewardValues array). In such cases it's much more comfortable to have a **sorted** array, so that we know each next element is more than previous. Sorting doesn't impact our runtime strongly - as it will be O (n logn) operation. Often it makes sense to sort "just in case", even before realizing whether it's needed for the given problem or not :)
2) It seems we don't really need duplicated values. If we take, let's say, value **a**, we will have a sum **x+a** , that is more or equal than **a**. In this case there is no chance we can take another **a** to the sum. So we can remove the duplicates from the original array in order to:
- reduce array size;
- be sure we have only unique elements;
3) It seems we **always** have to pick the last element. Why?
Okay, let's say we have an array: [a1, a2, a3, a4, a5], that is already sorted and de-duplicated by us.
We take e.g. a1, a2 and a3 to form the reward sum, i.e. final x = a1 + a2 + a3.
As we managed to take a3 element, previous x=a1+a2 was less than a3 (otherwise we wouldn't be allowed to take a3 as per the description).
But why wouldn't we then just skip a3 and take a5? So new x=a1+a2+a5 > a1+a2+a3.
As we're always picking at least 1 element, there will be always **the latest** $$a_i$$ we're picking, and it always can be replaced with $$a_n$$ as per above.
4) Now, as we know we must pick the latest element $$a_n$$, we also must organize conditions for this. That is, x must be less than $$a_n$$, to allow picking the last element. In other words, $$0 <= x <= a_n - 1$$. If $$x$$ is going to exceed this value, it means we can't pick the last element, and the rule #3 is violated - but as proven, we always have to pick the last element.
5) Now, based on #4, if we we have an element $$a_i = a_n - 1$$ - we're picking it straight away **and finishing** - because we won't be able to pick more elements. In other words, if from #4 $$0 <= x <= a_n - 1$$ is satisfided for the upper border, we can't do better than this - otherwise, again, we won't be able to pick the latest element.
6) If, however, we don't have $$a_n - 1$$ in the array (i.e. ideal case), we have to try non-ideal ones. We will try to pick the lower elements 1 by 1 and check the sum. If picking $$a_i$$, the following conditions must satisfy:
- conditions for picking the $$a_i$$ must be organized, i.e. previous $$x < a_i$$;
- total $$x$$ must be less than $$a_n$$;
In other words, if we are picking $$a_i$$, for previous elements the following must satisfy:
- $$sum < a_i$$;
- $$sum + a_i < a_n$$
7) Basically we're calculating values based on the $$limit$$ value. For each $$limit = a_i - 1$$ for some i, we don't even need to bother about the indexes in the array - the search will be done only for $$j < i$$ - as only for such j the individual elements less than limit. So we can cache the pre-calculated values based solely on the $$limit$$ value (i.e. 1D DP).

Now we are ready to go with the approach.

# Approach
1) Remove the duplicates from the original array;
2) Sort the array ascending;
3) Take the highest element automatically, run the calculation (i.e. attempt to pick previous elements) for the $$limit = a_n - 1$$;
4) Do the recursion call:
4.1) If limit = 0 - we can't take any elements, return 0;
4.2) If we already pre-calculated the result for the provided $$limit$$ - return it straight away;
4.3) Look for the $$limit$$ in the array:
4.3.1) If found - take it and finish the flow, we can't do better;
4.3.2) If not found - try all the smaller elements:
4.3.2.1) Take the element;
4.3.2.2) Set $$limit = element - 1$$ and try to take previous elements (run recursion call for the new limit);
4.3.2.3) Check whether we found the bigger result and update if needed;
4.4) Cache the calculated value;

# Complexity
- Time complexity:
n - size of the array;
m - max element value;

Average - $$O(n logn + m logm)$$
Worst case - $$O(mn)$$
- Remove duplicates O(n);
- Sorting takes O(n logn);
- DP will run max m times. It includes binary search O (m logm) and up to n indexes scan (in worst case), so O(mn). But in reality n decreases strongly because of the reducing x (as we go towards the beginning of the array)

- Space complexity:
$$O(m + n)$$

# Code
```
class Solution {
    
    Map<Integer, Integer> dp = new HashMap<>();
    
    public int maxTotalReward(int[] arr) {        
        arr = removeDups(arr);
        return arr[arr.length-1] + rec(arr, arr[arr.length-1] - 1);
    }
    
    private int rec(int[] arr, int lim) {
        if (lim == 0) {
            return 0;
        }
        if (dp.get(lim) != null) {
            return dp.get(lim);
        }
        int ind = find(arr, lim);
        if (ind == -1) {
            return lim;
        }
        int res = 0;
        for (int i = 0; i < ind; i++) {
            if (arr[i] * 2 - 1 <= res) {
                break;
            }
            res = Math.max(res, arr[i] + rec(arr, Math.min(lim - arr[i], arr[i] - 1)));
        }
        dp.put(lim, res);
        return res;
    }
    
    private int find(int[] arr, int x) {
        int lo = 0;
        int hi = arr.length - 1;
        int res = -1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] == x) {
                return -1;
            } else if (arr[mid] < x) {
                lo = mid + 1;
            } else {
                res = mid;
                hi = mid - 1;
            }
        }
        return res;
    }
    
    private int[] removeDups(int[] arr) {
        Set<Integer> set = new HashSet<>();
        for (int num: arr) {
            set.add(num);
        }
        int[] res = new int[set.size()];
        int i =0;
        for (int num: set) {
            res[i++] = num;
        }
        Arrays.sort(res);
        return res;
    }
}
```