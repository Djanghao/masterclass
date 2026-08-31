# C#, sliding window, brute force, binary search

**Author:** user9385
**Votes:** 3
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4600157/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4600157/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I first used priority queue and encountered TLE, so I improved the performance but the logic was the same.
It started from the second value, when it reached the second + dist, then got the minimum k-2 values.
Then started from the third value...
# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a data structure to create, delete value in O(logn)(or the insertion will be n, so it might be n), get sum value in O(1)
2. Insert value till first dist
3. Insert the last value and remove the first value
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n(logn)^2)$$ 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ 
# Code
```
public class Solution {
    public long MinimumCost(int[] nums, int k, int dist) {
        long minSum = long.MaxValue;
        Window window = new Window(k-2);
        for(int l=1+1; l<Math.Min(1+dist, nums.Length-1); l++){
            window.Insert(nums[l]);
        }
        for(int i=1; i<nums.Length - (k-2); ++i){
            if(i+dist < nums.Length){
                window.Insert(nums[i+dist]);
            }
            long temp = nums[0]+nums[i]+window.MinSum();
            minSum = Math.Min(minSum, temp);
            window.Remove(nums[i+1]);
        }
        return minSum;
    }
    private class Window{
        List<long> list = new();
        public long sum = 0;
        private int minWinSize = 0;
        public Window(int minWinSize){
            this.minWinSize = minWinSize;
        }
        public void Insert(int val){
            int index = BinarySearch(val);
            if(index >= 0){
                list.Insert(index, val);
            }
            else{
                list.Add(val);
                index = list.Count-1;
            }
            if(index < minWinSize){
                sum+=list[index];
                if(minWinSize<list.Count){
                    sum -= list[minWinSize];
                }
            }
        }
        public void Remove(int val){
            int index = BinarySearch(val);
            if(index >= 0){
                if(index < minWinSize){
                    sum-=list[index];
                    if(minWinSize<list.Count){
                        sum += list[minWinSize];
                    }
                }
                list.RemoveAt(index);
            }
        }
        public long MinSum(){
            return this.sum;
        }
        public int BinarySearch(int val){
            if(list.Count == 0){
                return -1;
            }
            int l =0, r = list.Count-1;
            int mid = (l+r)/2;
            if(val > list[r]){
                return -1;
            }
            while(l < r){
                if(list[mid] < val){
                    l = mid+1;
                }else{
                    r = mid;
                }
                mid = (l+r)/2;
            }
            return r;
        }
    }
}
```