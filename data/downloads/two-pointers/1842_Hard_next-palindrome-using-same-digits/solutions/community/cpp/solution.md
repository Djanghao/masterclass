# Solution

**Author:** penrosecat
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/5004196/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/5004196/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Next greatest palindrome with the same digits can be obtained by getting the next greatest permutation of the first half and using that to make the whole palindrome.

Things to watch out for:

1. Don't include the middle element of an odd palindrome while making the next permutation. The middle element cannot change because we are using the same digits and there is an odd count of the middle element, so it must stay in the middle.
2. Next permutation:

To find the next permutation, 

1. Take the first pair of consecutive elements i and i+1 from the end which are in ascending order. This implies i+1 to n-1 are in descending order. (We go from the end because we want the smallest next number, i.e. the change should be the rightmost possible to make the overall number greater. Numbers which are already in descending order can't be swapped around to make the number greater).
2. Find the smallest element in i+1 to n-1 that is greater than nums[i], swap this element with nums[i]. (Now we have the smallest larger element in the smallest place we could change). Since i+1 to n-1 is descending we can do this with binary search.
3. Sort or reverse from i+1 to n-1. (after having the smallest larger element, we want to make everything after it the smallest, i.e. sort). We can reverse because i+1 to n-1 was descending before the swap and we replaced the smallest element larger than nums[i], so everything before it was greater and everything after it is smaller than itself, so it's still sorted. To make a descending sequence ascending we can simply reverse it.

With sorting, this is O(nlogn), with binary searching and reversing this is O(n). Linear search would also keep it at O(n) but binary search is faster.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:


    void nextPermutation(vector<int>& nums, bool& isNext)
    {
        isNext = false;
        if(nums.size() == 1)
        {
            return;
        }

        for(int i = (int)nums.size()-2; i>=0; i--)
        {
            if(nums[i] < nums[i+1])
            {
                int pos = i+1;

                int lo = i+1;
                int hi = (int)nums.size() - 1;
                int ans = i+1;

                while(lo <= hi)
                {
                    int mid = lo + (hi - lo)/2;
                    if(nums[mid] > nums[i])
                    {
                        ans = mid;
                        lo = mid+1;
                    }
                    else
                    {
                        hi = mid-1;
                    }
                }

                swap(nums[i], nums[ans]);
                reverse(nums.begin() + i + 1, nums.end());
                isNext = true;
                break;
            }
        }
    }

    string nextPalindrome(string num) {
        bool isNext = false;
        vector<int> nums;

        for(int i = 0; i<(num.size())/2; i++)
        {
            nums.push_back((int)(num[i] - '0'));
        }

        nextPermutation(nums, isNext);

        if(!isNext)
        {
            return "";
        }
        else
        {
            if(num.size() % 2)
            {
                string ans = "";
                string half = "";

                for(int i = 0; i<((int)nums.size()); i++)
                {
                    half += to_string(nums[i]);
                }

                ans = half + to_string(num[num.size()/2] - '0');
                reverse(half.begin(), half.end());
                ans += half;

                return ans;
            }
            else
            {
                string ans = "";
                string half = "";

                for(int i = 0; i<((int)nums.size()); i++)
                {
                    half += to_string(nums[i]);
                }

                ans = half;
                reverse(half.begin(), half.end());
                ans += half;

                return ans;
            }
        }
    }
};
```