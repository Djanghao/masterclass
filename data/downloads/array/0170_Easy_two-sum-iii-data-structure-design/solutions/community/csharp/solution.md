# Using BinarySearch to find index of the value and traversing from 0 to that index to find pair

**Author:** asifsarwer
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/5040373/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/5040373/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class TwoSum
    {
        private List<int> arr;
        public TwoSum()
        {
            arr = new List<int>();
        }

        public void Add(int number)
        {
            arr.Add(number);
            arr.Sort();
        }

        public bool Find(int value)
        {
            bool isFound = false;
            //for (int i = 0; i < arr.Count - 1; i++)
            //{
            //    for (int j = i+1; j < arr.Count; j++)
            //    {
            //        if (arr[i] + arr[j] == value)
            //        {
            //            isFound = true;
            //            break;
            //        }
            //    }                
            //}
            int [] nums = arr.ToArray();
            int index = GetIndexOfValue(nums, value, 0, nums.Length - 1);
            int g = index;
            for(int j = index; j < nums.Length - 1; j++)
            {
                if (nums[j + 1] == nums[j])
                    g++;
            }
            index = g;
            for (int i = 0; i <= index; i++)
            {
                int diff = value - nums[i];
                int theOtherIndex = GetIndexOfValue(nums, diff, 0, nums.Length - 1);
                if(nums[theOtherIndex] + nums[i] == value && theOtherIndex != i)
                {
                    isFound = true;
                    break;
                }
            }

            return isFound;
        }

        private int GetIndexOfValue(int [] arr, int value, int low, int high)
        {
            int mid = low + (high - low) / 2;
            if (low < high)
            {
                if (arr[mid] == value)
                {
                    return mid;
                }
                else if (value > arr[mid])
                {
                    return GetIndexOfValue(arr, value, mid + 1, high);
                }
                else 
                {
                    return GetIndexOfValue(arr, value, low, mid);
                }
            }
            else
            {
                if (arr.Length == 0)
                    return -1;
                else 
                    return low;
            }
        } 
    }
```