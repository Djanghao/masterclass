# BinarySearch + Sort

**Author:** mcmouse88
**Votes:** 0
**Link:** [https://leetcode.com/problems/heaters/solutions/6080160/](https://leetcode.com/problems/heaters/solutions/6080160/)

---

# Complexity
- Time complexity:
O(m * logn + n * logn)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {
    fun findRadius(houses: IntArray, heaters: IntArray): Int {
        heaters.sort()
        return houses.maxOf { house ->
            val nearest = heaters.binarySearch(house)
            if(nearest >= 0) 0
            else {
                val index = -nearest - 1
                min(
                    if (index > 0) house - heaters[index - 1] else Int.MAX_VALUE,
                    if (index < heaters.size) heaters[index] - house else Int.MAX_VALUE
                )
            }
        }
    }
}
```
```Python3 []
class Solution:
    def findRadius(self, houses: List[int], heaters: List[int]) -> int:
        heaters.sort()
        def binarySearch(target):
            l, r = 0, len(heaters)-1
            while l <= r:
                mid = (l+r)//2
                if heaters[mid] == target:
                    return mid
                if heaters[mid] > target:
                    r = mid-1
                else:
                    l = mid+1
            return -l-1
        
        maximum = 0
        for house in houses:
            nearest = binarySearch(house)
            if nearest < 0:
                index = -nearest-1
                distanceLeft = house - heaters[index-1] if index > 0 else inf
                distanceRight = heaters[index] - house if index < len(heaters) else inf 
                minimum = min(distanceLeft, distanceRight)
                maximum = max(maximum, minimum)
        return maximum
```
```Java []
class Solution {
    public int findRadius(int[] houses, int[] heaters) {
        Arrays.sort(heaters);
        int max = 0;
        for (int house : houses) {
            int nearest = Arrays.binarySearch(heaters, house);
            if (nearest < 0) {
                int index = -nearest-1;
                int currDiff = Math.min(
                    index > 0 ? house - heaters[index - 1] : Integer.MAX_VALUE,
                    index < heaters.length ? heaters[index] - house : Integer.MAX_VALUE 
                );
                max = Math.max(max, currDiff);
            } 
        }
        return max;
    }
}
```
```C++ []
class Solution {
private:
    int binary_search(std::vector<int> &arr, int target) {
        int l = 0, r = arr.size() - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] > target) r = mid - 1;
            else l = mid + 1; 
        }
        return -l-1;
    }
public:
    int findRadius(vector<int>& houses, vector<int>& heaters) {
        sort(heaters.begin(), heaters.end());
        int res = 0;
        for (int house : houses) {
            int nearest = binary_search(heaters, house);
            if (nearest < 0) {
                int i = -nearest-1;
                int left = i > 0 ? house - heaters[i - 1] : INT_MAX;
                int right = i < heaters.size() ? heaters[i] - house : INT_MAX;
                int curr_diff = min(left, right);
                res = max(res, curr_diff);
            }
        }
        return res;
    }
};
```