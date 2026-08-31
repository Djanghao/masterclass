# Simple solution using dictionary

**Author:** aman7singh
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/4651083/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/4651083/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
for total sum =7; 
[1, 1, 2, 2, 2, 3] 
1=>2,
2=>3,
3=>1

[1, 4, 5, 2, 5, 4]
7-1 = 6=>1
7-4 = 3=>2
7-5 = 2=>2
7-2 = 5=>1

only 3 and 2 is common in both map: so will multiply and add there values:
 (3*2)+(1*3)

ans  = 8;


# Approach
<!-- Describe your approach to solving the problem. -->
get freq during initialization;
update freq during add operation;

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class FindSumPairs {

    int[] num1;
    int[] num2 ;
Dictionary<int, int> dict1;
Dictionary<int, int> dict2;
    public FindSumPairs(int[] nums1, int[] nums2) {
        num1=nums1;
        num2 = nums2;
        dict1 = new Dictionary<int, int>();
        dict2 = new Dictionary<int, int>();
        for(int i =0; i<num2.Length; i++)
        {
            if(dict2.ContainsKey(num2[i]))
            {
                dict2[num2[i]]+=1;
            }
            else
                dict2[num2[i]]=1;
        }
        for(int i =0; i<num1.Length; i++)
        {
            if(dict1.ContainsKey(num1[i]))
            {
                dict1[num1[i]]+=1;
            }
            else
                dict1[num1[i]]=1;
        }
    }
    
    public void Add(int index, int val) {
        dict2[num2[index]] -=1;
        num2[index] = num2[index]+ val;
        if(dict2.ContainsKey(num2[index]))
            {
                dict2[num2[index]]+=1;
            }
            else
                dict2[num2[index]]=1;

    }
    public int Count(int tot)
    {
        int ans =0;
        foreach(var item in dict1)
        {
            var comp = tot-item.Key;

            if(dict2.ContainsKey(comp))
            {
                ans += dict2[comp]*item.Value;
            }
        }
        return ans;
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * FindSumPairs obj = new FindSumPairs(nums1, nums2);
 * obj.Add(index,val);
 * int param_2 = obj.Count(tot);
 */
```