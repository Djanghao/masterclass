# ✅ [Python/C++/Java] LIS || 100% Faster || Detailed Explanation || Clean and Easy to Understand

**Author:** linfq
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1636127/](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1636127/)

---

* First divide arr into k groups and consider each group individually.
* In each group, we need to find out the length of the longest increasing sequence, because the longest increasing sequence does not need to be operated, and the remaining positions can be set to the value of the previous or next in the longest increasing sequence.
* For example, `arr = [2, 3, 4, 2, 3 , 3]`
	* the longest increasing sequence is [2, 2, 3, 3], that is [**2**, 3, 4, **2**, **3** , **3**]
	* we can modify arr[1] from 3 to 2 and arr[2] from 4 to 2, and then the arr is increasing, that is [2, 2, 2, 2, 3, 3]
	* after all we need to make 2 operations to make `arr = [2, 3, 4, 2, 3 , 3]` increasing, that is `len(arr) - len(lis(arr))`

[Prob 300 Longest-Increasing-Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/discuss/74824/JavaPython-Binary-search-O(nlogn)-time-with-explanation), **@dietpepsi explained very well, I just copied his explanation below.**

`tails` **is an array storing the smallest tail of all increasing subsequences with length** `i+1` in `tails[i]`.
For example, say we have `nums = [4,5,6,3]`, then all the available increasing subsequences are:

```
len = 1   :      [4], [5], [6], [3]   => tails[0] = 3
len = 2   :      [4, 5], [5, 6]       => tails[1] = 5
len = 3   :      [4, 5, 6]            => tails[2] = 6
```
We can easily prove that tails is a increasing array. Therefore it is possible to do a binary search in tails array to find the one needs update.



```
(1) if x is larger than all tails, append it, increase the size by 1
(2) if tails[i-1] < x <= tails[i], update tails[i]
```


**If you have any question, feel free to ask. If you like the solution or the explanation, Please UPVOTE!**

**Python 100% Faster**
```
class Solution(object):
    def kIncreasing(self, arr, k):
        ans = len(arr)
        for i in range(k):
            tails = []
            for j in range(i, len(arr), k):
                if tails and tails[-1] > arr[j]:
                    tails[bisect.bisect(tails, arr[j])] = arr[j]
                else:
                    tails.append(arr[j])
            ans -= len(tails)
        return ans
```

**C++ 63.64% Faster**
```
class Solution {
public:
    int kIncreasing(vector<int>& arr, int k) {
        int ans = arr.size();
        for(int i = 0; i < k; i ++) {
            vector<int> tails;
            for(int j = i; j < arr.size(); j += k) {
                if(tails.size() == 0 or arr[j] >= tails[tails.size() - 1]) {
                    tails.push_back(arr[j]);
                } else {
                    tails[upper_bound(tails.begin(), tails.end(), arr[j]) - tails.begin()] = arr[j];
                }
            }
            ans -= tails.size();
        }
        return ans;
    }
};
```
**Java 100% Faster**
* I'm not very good at Java, and I did not find a function like bisect in Python, so I implement one below, that's why the java code is longer than C++ or Python above.
* I hope friends who are good at java can help me simplify the Java code below.
```
class Solution {
    public int kIncreasing(int[] arr, int k) {
        int ans = arr.length;
        int[] tails = new int[arr.length];
        for (int i = 0; i < k; i ++) {
            int size = 0;
            for (int j = i; j < arr.length; j += k) {
                if (size == 0 || arr[j] >= tails[size - 1]) {
                    tails[size ++] = arr[j];
                } else {
                    int low = 0, high = size - 1;
                    while (low <= high) {
                        int mid = (low + high) / 2;
                        if (tails[mid] <= arr[j] && tails[mid + 1] > arr[j]) {
                            tails[mid + 1] = arr[j];
                            break;
                        } else if (tails[mid + 1] <= arr[j]) {
                            low = mid + 1;
                        } else {
                            high = mid - 1;
                        }
                    }
                    if (low > high) {
                        tails[0] = arr[j];
                    }
                }
            }
            ans -= size;
        }
        return ans;
    }
}
```

**If you have any question, feel free to ask. If you like the solution or the explanation, Please UPVOTE!**