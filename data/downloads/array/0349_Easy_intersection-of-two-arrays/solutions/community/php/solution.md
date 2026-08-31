# 🔥🔥 Beats 100% 🔥🔥 | 🧠 Easy understanding 😋 | Beginner Friendly 😎

**Author:** ARslan_
**Votes:** 1
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/6050209/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/6050209/)

---

![image.png](./images/0.png)

# Intuition
Let's shift any of list into `set()` (that removes repeative values), later we check other list that if any element is in set, and as any number matches it will removed from `my_set` and push in `res`

# Approach
- make set of `nums1`
- check `num`, if in `my_set` and then remove it from set and append `num` into `res`
- return `res`

# Complexity
- **Time complexity:** $$O(n)$$

- **Space complexity:** $$O(n)$$

# Code
```python3 []
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        my_set = set(nums1)
        res = []
        for num in nums2:
            if num in my_set:
                res.append(num)
                my_set.remove(num)
        return res
```
```ruby []
def intersection(nums1, nums2)
  my_set = nums1.to_set
  res = []
  nums2.each do |num|
    if my_set.include?(num)
      res << num
      my_set.delete(num)
    end
  end
  res
end
```
```php []
class Solution {
    function intersection($nums1, $nums2) {
        $my_set = array_flip($nums1);
        $res = [];
        foreach ($nums2 as $num) {
            if (isset($my_set[$num])) {
                $res[] = $num;
                unset($my_set[$num]);
            }
        }
        return $res;
    }
}
```
````java []
class Solution {
    public List<Integer> intersection(int[] nums1, int[] nums2) {
        Set<Integer> mySet = new HashSet<>();
        List<Integer> res = new ArrayList<>();
        for (int num : nums1) {
            mySet.add(num);
        }
        for (int num : nums2) {
            if (mySet.contains(num)) {
                res.add(num);
                mySet.remove(num);
            }
        }
        return res;
    }
}
```
```cpp []
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> my_set(nums1.begin(), nums1.end());
        vector<int> res;
        for (int num : nums2) {
            if (my_set.count(num)) {
                res.push_back(num);
                my_set.erase(num);
            }
        }
        return res;
    }
};
```
```javascript []
var intersection = function(nums1, nums2) {
    let mySet = new Set(nums1);
    let res = [];
    for (let num of nums2) {
        if (mySet.has(num)) {
            res.push(num);
            mySet.delete(num);
        }
    }
    return res;
};
```